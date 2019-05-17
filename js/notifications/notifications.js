    // SEARCH__USERS //
const searchBtn = document.getElementById(`searchBtn`);
const searchBtnActive = document.querySelector(`.notifications-menu__inputSearch-wrap`);
const closeBTN = document.querySelector(`.notifications-menu__closeButton`);

searchBtn.onclick = function () {
    searchBtnActive.classList.add(`notifications-menu__inputSearch-wrapActive`);
};

closeBTN.onclick = function () {
    searchBtnActive.classList.remove(`notifications-menu__inputSearch-wrapActive`);
};





    // NOTIFICATIONS //
const alertBtn = document.getElementById(`alertBtn`);
const alertBtnActive = document.querySelector(`.notifications-menu__alertMore`);


alertBtn.addEventListener(`click`, function(e){
    e.preventDefault();
    if (alertBtnActive.classList.contains(`notifications-menu__alertMoreActive`)) {
        alertBtnActive.classList.remove(`notifications-menu__alertMoreActive`);
    } else {
        alertBtnActive.classList.add(`notifications-menu__alertMoreActive`);
    }
});




const viewAllMessage = document.getElementById(`viewAllMessage`);
const noNew = document.querySelector(`.notifications-menu__alertMore-center`);
const nowNew = document.querySelector(`.notifications-menu__alertMore-centerNewNotif`);
// const nowNew = document.querySelectorAll(`.notifications-menu__alertMore-centerNewNotif`);

// viewAllMessage.onclick = function () {
//     noNew.classList.toggle(`notifications-menu__alertMore-centerActive`);
//     nowNew.classList.toggle(`notifications-menu__alertMore-centerNewNotifActive`);
//     console.log(`click++`);
//     console.log(`click+`);
// };




viewAllMessage.addEventListener(`click`, function(e) {
    e.preventDefault();
    if (noNew.classList.contains(`notifications-menu__alertMore-centerActive`)) {
        noNew.classList.remove(`notifications-menu__alertMore-centerActive`);
        nowNew.classList.remove(`notifications-menu__alertMore-centerNewNotifActive`);
    } else {
        noNew.classList.add(`notifications-menu__alertMore-centerActive`);
        nowNew.classList.add(`notifications-menu__alertMore-centerNewNotifActive`);
    }
});



const soundless = document.querySelector(`.notifications-menu__speakerAlertMore-Wrap`);
const soundlessLine = document.querySelector(`.notifications-menu__speakerAlertMore-quiet`);
const speaker = document.querySelector(`.speakerAlertMore`);

soundless.onclick = function () {
    soundlessLine.classList.toggle(`notifications-menu__speakerAlertMore-quietActive`);
    speaker.classList.toggle(`speakerAlertMoreActive`);
};
