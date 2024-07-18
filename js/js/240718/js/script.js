const selectBtn = document.querySelector(".btn-select");
const memberList = document.querySelector(".list-member");
const selectMember = document.querySelector(".select-member");

selectBtn.addEventListener('click', () => {
    selectBtn.classList.toggle("on");
    memberList.classList.toggle("on");
});

memberList.addEventListener("click", (e)=> {
    if(e.target.nodeName === "BUTTON") {
        selectMember.textContent = `나의 최애 프로그래밍 언어는 ${e.target.textContent} 입니다.`;
        selectBtn.classList.remove("on");
        memberList.classList.remove("on");
    }
})