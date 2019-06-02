const activeButton = document.getElementById(`regMenu`);
const activeUserSvg = document.querySelector(`.headerVSRegForm__svgUser`);
const activeArrowSvg = document.querySelector(`.headerVSRegForm__svgRegArrow`);
const activeForm = document.querySelector(`.headerVSRegForm__form-wrap`);
const zIndexDdm = document.querySelector(`.header__btnForDdm`);

activeButton.onclick = function () {
    this.classList.toggle(`headerVSRegForm__registrationMenuActive`);
    activeUserSvg.classList.toggle(`headerVSRegForm__svgUserActive`);
    activeArrowSvg.classList.toggle(`headerVSRegForm__svgRegArrowActive`);
    activeForm.classList.toggle(`headerVSRegForm__form-wrapActive`);
    zIndexDdm.classList.toggle(`header__zIndexDdm`);
};

