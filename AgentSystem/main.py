import subprocess  
import os 
import json
import tempfile
import time

logs_dir = "./logs/"
os.makedirs(logs_dir, exist_ok=True)
# change path to this directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open("../tasks.json", 'r') as f:
    datas = json.load(f)
    
# data = {
#     "task_id": "12345",
#     "task": "Hello, I have a doubt in the concept of boosting in ML. Can you explain it to me?",
# }

# for data in datas:
# task = data["task"]
data = datas[-1]  
with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as temp_json:
    json.dump(data, temp_json)
    temp_json_path = temp_json.name  

log_file = f"{logs_dir}/{data['taskID']}.txt"
        
with open(log_file, "w") as log:
    process = subprocess.Popen(
        ["python3", "agentsys.py", "--json_data", temp_json_path],
                stdout=log,
                stderr=subprocess.STDOUT,
                text=True
    )
    process.communicate()       
    os.remove(temp_json_path)

from gemini_for_refining import extract_useful_content

def read_log_file(log_file):
    with open(log_file, "r") as file:
            lines = file.readlines()
    return lines

lines = read_log_file(log_file)
log_content = "".join(lines)
    # llama_task = "You will be provided with a log, extract the most useful information from the log to return to the user to fulfil their demand. Skip the errors and warnings. Just extract information content from the log as the the user query given, do not output anything else. The log is as follows: "+log_content+"The user query was: "+data["task"]
response = extract_useful_content(log_content,data["task"])
print("Response from Gemini: ", response)
    
# time.sleep(30)