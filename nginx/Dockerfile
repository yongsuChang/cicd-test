# 1. 가벼운 Nginx 알파인 이미지를 베이스로 사용
FROM nginx:1.29.4-alpine

# 2. 기존 파일 삭제 및 정적 파일 복사
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html/

# 3. Nginx 설정 복사
COPY default.conf /etc/nginx/conf.d/default.conf

# 4. 80번 포트 개방
EXPOSE 80

# 5. 실행 시 BACKEND_ADDR 환경변수로 proxy_pass 치환
CMD ["/bin/sh", "-c", "sed -i \"s|__BACKEND_ADDR__|${BACKEND_ADDR:-http://localhost:8000}|g\" /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
