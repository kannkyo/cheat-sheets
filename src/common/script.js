'use strict';

class SideNav {
    constructor() {
        this.sideNavMenuButton = document.querySelector('.burger-menu .material-icons');
        this.sideNav = document.querySelector('.burger-menu');

        this.toggleSideNavHandler = this.toggleSideNavHandler.bind(this);

        this.addEventListeners();
    }

    addEventListeners () {
        this.sideNavMenuButton.addEventListener('click', this.toggleSideNavHandler);
    }

    toggleSideNavHandler() {
        this.sideNav.classList.toggle('hidden');
        this.sideNavMenuButton.classList.toggle('hidden');
    }
}

new SideNav();