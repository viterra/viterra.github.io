// var btn1 = document.getElementById(`addNotif`);

// var btnActive = btn1.querySelector(`.notifications-menu__inputSearch-wrap`);

// btn1.onclick = function () {
//     btn1.classList.toggle(`notifications-menu__inputSearch-wrapActive`);
// };





let activeButton = document.getElementById(`regMenu`);
let activeUserSvg = document.querySelector(`.headerVSRegForm__svgUser`);
let activeArrowSvg = document.querySelector(`.headerVSRegForm__svgRegArrow`);
let activeForm = document.querySelector(`.headerVSRegForm__form-wrap`);

activeButton.onclick = function () {
    this.classList.toggle(`headerVSRegForm__registrationMenuActive`);
    activeUserSvg.classList.toggle(`headerVSRegForm__svgUserActive`);
    activeArrowSvg.classList.toggle(`headerVSRegForm__svgRegArrowActive`);
    activeForm.classList.toggle(`headerVSRegForm__form-wrapActive`);
};











// var btn1 = document.getElementById(`addNotif`);

// var btnActive = btn1.querySelector(`.notifications-menu__inputSearch-wrap`);

// btn1.onclick = function () {
//     btn1.classList.toggle(`notifications-menu__inputSearch-wrapActive`);
// };



var btn1 = document.getElementById(`addNotif`);

var btnActive = document.querySelector(`.notifications-menu__inputSearch-wrap`);

btn1.onclick = function () {
    btnActive.classList.toggle(`notifications-menu__inputSearch-wrapActive`);
};






// let btn2 = document.getElementById(`regMenu`);
// let activeUserSvg = btn2.querySelector(`.headerVSRegForm__svgUser`);
// let activeArrowSvg = btn2.querySelector(`.headerVSRegForm__svgRegArrow`);
// let activeForm = btn2.querySelector(`.headerVSRegForm__form-wrap`);

// btn2.onclick = function () {
//     this.classList.toggle(`headerVSRegForm__registrationMenuActive`);
//     activeUserSvg.classList.toggle(`headerVSRegForm__svgUserActive`);
//     activeArrowSvg.classList.toggle(`headerVSRegForm__svgRegArrowActive`);
//     activeForm.classList.toggle(`headerVSRegForm__form-wrapActive`);
// };
