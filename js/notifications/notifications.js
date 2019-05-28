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
const notifActiveNone = document.querySelector(`.notifications`);


alertBtn.addEventListener(`click`, function(e){
    e.preventDefault();
    if (alertBtnActive.classList.contains(`notifications-menu__alertMoreActive`)) {
        this.classList.remove(`notifications-menu__alertAdaptActive`);
        alertBtnActive.classList.remove(`notifications-menu__alertMoreActive`);
        notifActiveNone.classList.remove(`notifications-ActiveNone`);
    } else {
        this.classList.add(`notifications-menu__alertAdaptActive`);
        alertBtnActive.classList.add(`notifications-menu__alertMoreActive`);
        notifActiveNone.classList.add(`notifications-ActiveNone`);
    }
});


    // NOTIFICATIONS__MOBILE



    // MESSAGE //
const viewAllMessage = document.getElementById(`viewAllMessage`);
const noNew = document.querySelector(`.notifications-menu__alertMore-center`);
const nowNew = document.querySelector(`.notifications-menu__alertMore-centerNewNotif`);


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



    // VOLUME //
const soundless = document.querySelector(`.notifications-menu__speakerAlertMore-Wrap`);
const soundlessLine = document.querySelector(`.notifications-menu__speakerAlertMore-quiet`);
const speaker = document.querySelector(`.speakerAlertMore`);

soundless.onclick = function () {
    soundlessLine.classList.toggle(`notifications-menu__speakerAlertMore-quietActive`);
    speaker.classList.toggle(`speakerAlertMoreActive`);
};


