import asyncio
import os
import json
import argparse
from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.base import TaskResult
from autogen_agentchat.conditions import ExternalTermination, TextMentionTermination, MaxMessageTermination
from autogen_agentchat.teams import RoundRobinGroupChat, MagenticOneGroupChat
from autogen_agentchat.ui import Console
from autogen_core import CancellationToken
from autogen_ext.models.openai import OpenAIChatCompletionClient
from autogen_core.models import ModelInfo
from autogen_ext.agents.web_surfer import MultimodalWebSurfer
from autogen_ext.agents.file_surfer import FileSurfer
from autogen_ext.agents.magentic_one import MagenticOneCoderAgent
from autogen_agentchat.agents import CodeExecutorAgent
from autogen_ext.code_executors.local import LocalCommandLineCodeExecutor
# from LearningBuddy.AgentSystem.gemini_for_refining import generate_response

## get key from .env
from dotenv import load_dotenv
load_dotenv()
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")

chat_completion_kwargs = {
    "model": "gemini-2.0-flash-001",
    "model_info": ModelInfo(vision=True, function_calling=True, json_output=True, family="unknown", structured_output=True),
    "api_key": os.getenv("GOOGLE_API_KEY"),
}

model_client = OpenAIChatCompletionClient(
    **chat_completion_kwargs
)

parser = argparse.ArgumentParser(description="Input user query")
parser.add_argument("--json_data", type=str, required=True, help="Path to JSON input file")
args = parser.parse_args()

async def main():
    
    with open(args.json_data,  "r") as f:
            data = json.load(f)
    
    adaptive_learning_agent = AssistantAgent(
        name="adaptive_learning_agent",
        model_client=model_client,
        system_message="You are part of a agentic system that aims to be a learning assistant for students. Your specific task is to adjust lesson difficulty and content based on student performance and learning pace. You will be provided information about the student's performance or learning pace. Find the best lessons or resources for the student as asked.",
    )

    progress_tracking_agent = AssistantAgent(
        name="progress_tracking_agent",
        model_client=model_client,
        system_message="You are part of a agentic system that aims to be a learning assistant for students. Your specific task is to monitor student progress and generate reports on strengths and weaknesses. You will be provided information about the student's performance. You may store and retrieve progress information in a database as you wish.",
    )

    concept_clarification_agent = AssistantAgent(
        name="concept_clarification_agent",
        model_client=model_client,
        system_message="You are part of a agentic system that aims to be a learning assistant for students. Your specific task is to provide explanations, examples, and additional resources to clarify complex topics. You will be provided information about the student's doubts and understanding for the same.",
    )

    assessment_agent = AssistantAgent(
        name="assessment_agent",
        model_client=model_client,
        system_message="You are part of a agentic system that aims to be a learning assistant for students. Your specific task is to generate quizzes and tests, evaluate responses, and provide feedback. You will be provided information on the difficulty level and topic of the quiz or test. For evaluation, you will be provided with questions and student responses.",
    )

    reminder_notification_agent = AssistantAgent(
        name="reminder_and_notification_manager_agent",
        model_client=model_client,
        system_message="You are part of a agentic system that aims to be a learning assistant for students. Your specific task is to schedule lessons, send you calendar invitations to the students as per their requests. You will be provided information on when to do that either by peer agents or by the student itself.",
    )

    surfer = MultimodalWebSurfer(
        "WebSurfer",
        model_client=model_client,
    )

    file_surfer = FileSurfer( "FileSurfer",model_client=model_client)
    coder = MagenticOneCoderAgent("Coder",model_client=model_client)
    terminal = CodeExecutorAgent("ComputerTerminal",code_executor=LocalCommandLineCodeExecutor())
    print("surfer initialized")

    text_termination = MaxMessageTermination(15) | TextMentionTermination("TERMINATE")

    team = MagenticOneGroupChat([adaptive_learning_agent,progress_tracking_agent,assessment_agent,concept_clarification_agent,reminder_notification_agent,surfer,coder], model_client=model_client,termination_condition=text_termination)

    await Console(team.run_stream(task="Execute the following task using the tools available to agents. If no relevant tool is available, simulate the functionality of the tool or you can access the internet or use your own knowledge for the task. Do not ask the user for clarification or further inputs. For every task, make sure to contact and take advice from the relevant agents from the learning assistant system.Task: "+data["task"]+"Avoid using beautifulsoup for fetching urls. They do not usually work. Make sure the links provided are working by asking the websurfer to read the page that gets displayed.If the links don't work, ask the websurfer to simply get any links that you can find.")) 


## Hello, I am a beginner in trigonometry, suggest me some youtube video lectures to understand the same. Provide links to the videos as well

asyncio.run(main())