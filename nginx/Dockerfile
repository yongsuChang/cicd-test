# 1. 가벼운 Nginx 알파인 이미지를 베이스로 사용
FROM nginx:1.29.4-alpine

# 2. 기존 파일 삭제 및 정적 파일 복사
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html/

# 3. Nginx 설정 복사
COPY default.conf /etc/nginx/conf.d/default.conf

# 4. 80번 포트 개방
EXPOSE 80

# 5. 표준 실행 명령
CMD ["nginx", "-g", "daemon off;"]