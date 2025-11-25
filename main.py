from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uuid
import json
import os
import subprocess
import time

app = FastAPI()

# Allow frontend origin (adjust if needed)
origins = [
    "http://localhost:3000",  # frontend dev server
    "http://127.0.0.1:3000",
    "*"  # <- optional: allow all (not recommended in prod)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # allow specific origins
    allow_credentials=True,
    allow_methods=["*"],              # allow all HTTP methods
    allow_headers=["*"],              # allow all headers
)

DATA_FILE = "tasks.json"

# Ensure the file exists
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as f:
        json.dump([], f)

class Task(BaseModel):
    task: str

@app.post("/add-task/")
async def add_task(task: Task):
    task_entry = {
        "taskID": str(uuid.uuid4()),  # unique identifier
        "task": task.task
    }

    # Load existing tasks
    with open(DATA_FILE, "r") as f:
        data = json.load(f)

    # Add new task
    data.append(task_entry)

    # Write back to file
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)

    result = subprocess.run(
    ["python3", "./AgentSystem/main.py"],
    capture_output=True,  
    text=True             
    )
    # time.sleep(10)
    # print("Result: ", result.stdout)
    return {"message": "Task saved", "taskID": task_entry["taskID"], "response": result.stdout[22:]}

