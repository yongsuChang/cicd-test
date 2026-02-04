async function fetchData() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = "데이터를 불러오는 중...";
    try {
        // Nginx 리버스 프록시를 통해 /api/ 경로로 요청
        const response = await fetch('/api/');
        const data = await response.json();
        resultDiv.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        resultDiv.innerText = "에러 발생: " + error;
        console.error("Fetch Error:", error);
    }
}

