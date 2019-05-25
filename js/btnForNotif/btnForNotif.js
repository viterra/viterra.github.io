const mobileNotif = document.querySelector(`.header__btnForNotif`);
const mobileUserActive = document.querySelector(`.header__btnForNotif-svgMan`);
const mobileNotifActive = document.querySelector(`.notifications`);
const zIndexDdm = document.querySelector(`.header__btnForDdm`);

mobileNotif.addEventListener(`click`, function (e) {
    e.preventDefault();
    this.classList.toggle(`header__btnForNotifActive`);
    mobileUserActive.classList.toggle(`header__btnForNotif-svgManActive`);
    mobileNotifActive.classList.toggle(`notifications-Active`);
    zIndexDdm.classList.toggle(`header__zIndexDdm`);
});