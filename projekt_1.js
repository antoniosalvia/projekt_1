'use strict';

let einkaufsListe = [];

const input = document.getElementById('user_input');
const button = document.getElementById('user_button');
const liste = document.getElementById('liste');

button.addEventListener('click', myFunction);

function myFunction() {

    const li = document.createElement("li"); // <li></li>

    li.innerHTML = `${input.value}`;   // <li>test</li>

    liste.appendChild(li);  // <ul> <li> test </li> </ul>

    einkaufsListe.push(input.value);

    for(let i = 0; i < einkaufsListe.length; i++){
        console.log(einkaufsListe);
    };
};



// Hausaufgabe
// populate array onclick
// itterate over array log to console

// for loop
// while loop
// do while loop




