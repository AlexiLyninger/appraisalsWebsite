'use strict';


const button = document.getElementById('menu');

button.addEventListener('click', function() {
    const links = document.getElementById('links');
    if (links.classList.contains('header-display')) {
        links.classList.remove('header-display');
      
        console.log("hello");
    } else {
       
        links.classList.add('header-display');
    }
});