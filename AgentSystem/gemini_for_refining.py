import os
# import requests
from dotenv import load_dotenv
load_dotenv()
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")
# API_URL = "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText"

# API_URL = "https://your-gemini-endpoint/v1/models/your-model:generateText"

# It is recommended to set your API key as an environment variable for security
API_KEY = os.getenv("GOOGLE_API_KEY")


def extract_useful_content(
    text: str,user_query:str,
    model: str = "text-bison-001",
    temperature: float = 0.2,
    max_output_tokens: int = 512
) -> str:
    from google import genai

    client = genai.Client(api_key=API_KEY)

    response = client.models.generate_content(
        model="gemini-2.0-flash-001",
        contents="You will be provided with a log, extract the most useful information from the log to return to the user to fulfil their demand. Skip the errors and warnings. Just extract information content from the log as per the user query given,format it properly so that it is easy to read, include complete links if present, if there's some error in links, search the entire log to deliver the best possible solution as the user should not be disappointed, do not output anything else. The log is as follows: "+text+" The user query was: "+user_query,
    )

    return response.text