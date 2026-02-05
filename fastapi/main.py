from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
import pymysql

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db_config = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "charset": "utf8mb4"
}

@app.get("/")
def read_root():
    return {"Hello": "World", "Status": "Success"}

@app.get("/db-test")
def test_db_connection():
    try:
        connection = pymysql.connect(**db_config)
        with connection.cursor() as cursor:
            # DB 연결 확인용 쿼리
            cursor.execute("SELECT VERSION();")
            version = cursor.fetchone()
        connection.close()
        return {"status": "success", "db_version": version[0]}
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
