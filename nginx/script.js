async function fetchData() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = "데이터를 불러오는 중...";
    try {
        // 지정된 주소로 DB 테스트 요청 전송
        const response = await fetch('https://fast1.wipsy.cloud/api/db-test/');
        const data = await response.json();
        resultDiv.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        resultDiv.innerText = "에러 발생: " + error;
        console.error("Fetch Error:", error);
    }
}

