# 1. 가벼운 Nginx 알파인 이미지를 베이스로 사용
FROM nginx:1.29.4-alpine

# 2. 기존 파일 삭제 및 정적 파일 복사
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html/

# 3. Nginx 템플릿 설정 (envsubst를 위해 templates 디렉토리에 복사)
# Nginx 공식 이미지는 /etc/nginx/templates/*.template 파일을 읽어 
# 환경변수를 치환한 뒤 /etc/nginx/conf.d/에 넣어줍니다.
COPY templates/default.conf.template /etc/nginx/templates/default.conf.template

# 4. 80번 포트 개방
EXPOSE 80

# 기본 실행 명령은 상속받은 이미지의 설정을 그대로 사용 (nginx -g 'daemon off;')