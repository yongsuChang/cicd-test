# 1. 가벼운 Nginx 알파인 이미지를 베이스로 사용
FROM nginx:1.29.4-alpine

# 2. 기존 Nginx 기본 페이지, 설정 삭제 (선택 사항)
RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf

# 3. 현재 폴더의 모든 파일(index.html, script.js, style.css)을 Nginx 경로로 복사
COPY . /usr/share/nginx/html/

# 4. Nginx 설정 파일 복사
COPY default.conf /etc/nginx/conf.d/default.conf

# 4. 80번 포트 개방
EXPOSE 80

# 5. Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
