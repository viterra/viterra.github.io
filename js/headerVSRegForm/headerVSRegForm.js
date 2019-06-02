const btnMenu = document.querySelector(`.hamburger`);
const ddMenu = document.querySelector(`.headerVSRegForm__nav`);

btnMenu.addEventListener(`click`, function (e) {
    e.preventDefault();
    this.classList.toggle(`isActive`);
    ddMenu.classList.toggle(`headerVSRegForm__navActive`);
});