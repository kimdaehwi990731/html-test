// script.js
const modal = document.getElementById("location-info-modal");
const btn = document.getElementById("openModal");

// 버튼 클릭 시 모달 열기
btn.onclick = function() {
    modal.style.display = "block";
}

// 모달 외부를 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
