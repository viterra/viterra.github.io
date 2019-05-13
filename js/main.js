




// (function () {
        
//     const newNotif = document.querySelector(`.notifications-menu__addNotif`);
//     const actievSearch = document.querySelector(`.notifications-menu__inputSearch-wrap`);

//     newNotif.addEventListener(`click`, function(w) {
//         w.preventDefault();
//             if (actievSearch.classList.contains(`notifications-menu__inputSearch-wrapActive`)) {
//                 actievSearch.classList.remove(`notifications-menu__inputSearch-wrapActive`);
//             } else {
//                 actievSearch.classList.add(`notifications-menu__inputSearch-wrapActive`);
//             }

//     });
// })();





// const first = function () {
        

//     const newNotif = document.querySelector(`.notifications-menu__addNotif`);
//     const actievSearch = document.querySelector(`.notifications-menu__inputSearch-wrap`);

//     newNotif.addEventListener(`click`, function(w) {
//         w.preventDefault();
//             if (actievSearch.classList.contains(`notifications-menu__inputSearch-wrapActive`)) {
//                 actievSearch.classList.remove(`notifications-menu__inputSearch-wrapActive`);
//             } else {
//                 actievSearch.classList.add(`notifications-menu__inputSearch-wrapActive`);
//             }

//     });
// }();

// const activeButton = document.querySelector(`.headerVSRegForm__registrationMenu`);
// const activeUserSvg = document.querySelector(`.headerVSRegForm__svgUser`);
// const activeArrowSvg = document.querySelector(`.headerVSRegForm__svgRegArrow`);
// const activeForm = document.querySelector(`.headerVSRegForm__form-wrap`);

// // activeButton.addEventListener(`click`, function(e){
// //     e.preventDefault();
// //     // this.classList.toggle(`is__active`);
// //     if (this.classList.contains(`headerVSRegForm__registrationMenuActive`)) {
// //         this.classList.remove(`headerVSRegForm__registrationMenuActive`);
// //         activeUserSvg.classList.remove(`headerVSRegForm__svgUserActive`);
// //         activeArrowSvg.classList.remove(`headerVSRegForm__svgRegArrowActive`);
// //         activeForm.classList.remove(`headerVSRegForm__form-wrapActive`);
// //     } else {
// //         this.classList.add(`headerVSRegForm__registrationMenuActive`);
// //         activeUserSvg.classList.add(`headerVSRegForm__svgUserActive`);
// //         activeArrowSvg.classList.add(`headerVSRegForm__svgRegArrowActive`);
// //         activeForm.classList.add(`headerVSRegForm__form-wrapActive`);
// //     }
// // });


// activeButton.addEventListener(`click`, function(){
//     // e.preventDefault();
//     // this.classList.toggle(`is__active`);
//     if (this.classList.contains(`headerVSRegForm__registrationMenuActive`)) {
//         this.classList.remove(`headerVSRegForm__registrationMenuActive`);
//         activeUserSvg.classList.remove(`headerVSRegForm__svgUserActive`);
//         activeArrowSvg.classList.remove(`headerVSRegForm__svgRegArrowActive`);
//         activeForm.classList.remove(`headerVSRegForm__form-wrapActive`);
//     } else {
//         this.classList.add(`headerVSRegForm__registrationMenuActive`);
//         activeUserSvg.classList.add(`headerVSRegForm__svgUserActive`);
//         activeArrowSvg.classList.add(`headerVSRegForm__svgRegArrowActive`);
//         activeForm.classList.add(`headerVSRegForm__form-wrapActive`);
//     }
// });



const second = function () {

    const activeButton = document.querySelector(`.headerVSRegForm__registrationMenu`);
    const activeUserSvg = document.querySelector(`.headerVSRegForm__svgUser`);
    const activeArrowSvg = document.querySelector(`.headerVSRegForm__svgRegArrow`);
    const activeForm = document.querySelector(`.headerVSRegForm__form-wrap`);
    
    activeButton.addEventListener(`click`, function(e){
        e.preventDefault();
        // this.classList.toggle(`is__active`);
        if (this.classList.contains(`headerVSRegForm__registrationMenuActive`)) {
            this.classList.remove(`headerVSRegForm__registrationMenuActive`);
            activeUserSvg.classList.remove(`headerVSRegForm__svgUserActive`);
            activeArrowSvg.classList.remove(`headerVSRegForm__svgRegArrowActive`);
            activeForm.classList.remove(`headerVSRegForm__form-wrapActive`);
        } else {
            this.classList.add(`headerVSRegForm__registrationMenuActive`);
            activeUserSvg.classList.add(`headerVSRegForm__svgUserActive`);
            activeArrowSvg.classList.add(`headerVSRegForm__svgRegArrowActive`);
            activeForm.classList.add(`headerVSRegForm__form-wrapActive`);
        }
    });

}();