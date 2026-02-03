async function fetchData() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = "데이터를 불러오는 중...";
    try {
        // FastAPI EC2 또는 ELB의 endpoint 주소
        const response = await fetch('__BACKEND_URL__/api3/db-test');
        const data = await response.json();
        resultDiv.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        resultDiv.innerText = "에러 발생: " + error;
        console.error("Fetch Error:", error);
    }
}

