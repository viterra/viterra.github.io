const btnMenu = document.querySelector(`.hamburger`);
const ddMenu = document.querySelector(`.headerVSRegForm__nav`);
const zIndezRegForm = document.querySelector(`.headerVSRegForm__registrationMenu`);

btnMenu.addEventListener(`click`, function (e) {
    e.preventDefault();
    this.classList.toggle(`isActive`);
    ddMenu.classList.toggle(`headerVSRegForm__navActive`);
    zIndezRegForm.classList.toggle(`headerVSRegForm__zIndexRegForm`);
});

