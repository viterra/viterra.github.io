const btnMenu = document.querySelector(`.hamburger`);
const ddMenu = document.querySelector(`.headerVSRegFormLogPage__nav`);
// const zIndezRegForm = document.querySelector(`.headerVSRegFormLogPage__registrationMenu`);

btnMenu.addEventListener(`click`, function (e) {
    e.preventDefault();
    this.classList.toggle(`isActive`);
    ddMenu.classList.toggle(`headerVSRegFormLogPage__navActive`);
    // zIndezRegForm.classList.toggle(`headerVSRegForm__zIndexRegForm`);
});
