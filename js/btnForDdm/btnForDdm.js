const btnMenu = document.querySelector(`.hamburger`);
const ddMenu = document.querySelector(`.header__nav`);
const zIndexNotif = document.querySelector(`.header__btnForNotif`);
// const zIndezRegForm = document.querySelector(`.headerVSRegForm__registrationMenu`);

btnMenu.addEventListener(`click`, function (e) {
    e.preventDefault();
    this.classList.toggle(`isActive`);
    ddMenu.classList.toggle(`header__navActive`);
    zIndexNotif.classList.toggle(`header__zIndexNotif`);
    // zIndezRegForm.classList.toggle(`headerVSRegForm__zIndexRegForm`);
});