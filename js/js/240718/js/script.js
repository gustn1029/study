const selectBtn = document.querySelector(".btn-select");
const memberList = document.querySelector(".list-member");
const selectMember = document.querySelector(".select-member");

selectBtn.addEventListener('click', () => {
    selectBtn.classList.toggle("on");
    memberList.classList.toggle("on");
});

memberList.addEventListener("click", (e)=> {
    if(e.target.nodeName === "BUTTON") {
        selectMember.textContent = e.target.textContent;
        memberList.classList.remove("on");
    }
})