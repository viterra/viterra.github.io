// document.querySelector(`.hamburger`).addEventListener(`click`, function(e){
//     e.preventDefault();
//     // this.classList.toggle(`is__active`);
//     if (this.classList.contains(`is__active`)) {
//         this.classList.remove(`is__active`);
//         document.querySelector(`#menu`).classList.remove(`nav__active`);
//         document.body.classList.remove(`body__active`);
//     } else {
//         this.classList.add(`is__active`);
//         document.querySelector(`#menu`).classList.add(`nav__active`);
//         document.body.classList.add(`body__active`);
//     }
// });


const btnMenu = document.querySelector(`.hamburger`);

btnMenu.addEventListener(`click`, function (e) {
    e.preventDefault();
    this.classList.toggle(`isActive`);
});