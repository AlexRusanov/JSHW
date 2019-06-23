let activeBtn;

const activateBtn = (btn) => {
    if(activeBtn) {
        activeBtn.style.backgroundColor = "#33333a";
    }
    btn.style.backgroundColor = "blue";
    activeBtn = btn;
};

document.body.onkeyup = (event) => {
    const btnList = document.querySelectorAll(".btn");
    btnList.forEach((elem) => {
        if (elem.innerText === event.code) {
            activateBtn(elem);
        }else if (elem.innerText === event.code.substring(3)) {
            activateBtn(elem);
        }
    });
};