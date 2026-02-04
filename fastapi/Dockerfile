FROM python:3.14-alpine

WORKDIR /app

# 라이브러리만 설치 (환경 이미지)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 소스코드는 S3에서 마운트하므로 COPY 제거

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]