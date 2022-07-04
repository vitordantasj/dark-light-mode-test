'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() { 
    document.body.classList.toggle('dark_theme')

    var className = document.body.className;
    if(className == light_theme) {
        this.textContent = 'Dark';
    }
    else {
        this.textContent = 'Light';
    }
    console.log('current classs name: ' + className);
});