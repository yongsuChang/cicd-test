# 1. 가벼운 Nginx 알파인 이미지를 베이스로 사용
FROM nginx:1.29.4-alpine

# 2. 설정 파일 복사
COPY default.conf /etc/nginx/conf.d/default.conf

# 정적 파일은 S3에서 마운트하므로 COPY 제거

# 3. 80번 포트 개방
EXPOSE 80

# 4. 표준 실행 명령
CMD ["nginx", "-g", "daemon off;"]
