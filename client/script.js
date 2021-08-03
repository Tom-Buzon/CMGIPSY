/* var Card = document.getElementsByClassName("main__card");

fonction growCard( element,Event){

}

 */
/* let projet1 = document.getElementById("pr1");
let projet2 = document.getElementById("pr2");
let projet3 = document.getElementById("pr3");


displayArticle(projet1, 00);
displayArticle(projet2, 00);
displayArticle(projet3, 00);


function displayArticle(div, delay) {
    setTimeout(function() {
        div.setAttribute('data-display', 1);
    }, delay);
}

function growArticle(div, delay) {
    setTimeout(function() {
        div.setAttribute('data-display', 2);
    }, delay);
} */
/* 
document.getElementById("pr1head").onclick = function() {
    if (document.getElementById("pr1").getAttribute('data-display') == "1") {
        growArticle(projet1, 100);

    } else {
        displayArticle(projet1, 100);

    }
};
document.getElementById("pr2").onclick = function() {
    if (document.getElementById("pr2").getAttribute('data-display') == "1") {
        growArticle(projet2, 100);

    } else {
        displayArticle(projet2, 100);


    }
};
document.getElementById("pr3").onclick = function() {
    if (document.getElementById("pr3").getAttribute('data-display') == "1") {
        growArticle(projet3, 100);

    } else {
        displayArticle(projet3, 100);

    }
};


//agrandir les changement a lintérieur des projets

let change1 = document.getElementById("pr1ch1");
let change2 = document.getElementById("pr1ch2");
let change3 = document.getElementById("pr1ch3");

displayArticle(change1, 00);
displayArticle(change2, 00);
displayArticle(change3, 00);

document.getElementById("pr1ch1").onclick = function() {
    if (document.getElementById("pr1ch1").getAttribute('data-display') == "1") {
        growArticle(change1, 100);


    } else {
        displayArticle(change1, 100);

    }

};


 */

//faire grandir les elements





function displayArticle(div, delay) {
    setTimeout(function() {
        if (div) {
            div.setAttribute('data-display', 1);
        }

    }, delay);
}

function growArticle(div, delay) {
    setTimeout(function() {
        div.setAttribute('data-display', 2);
    }, delay);
}

function growArticleOnly(div) {
    growArticle(document.getElementById(div), 100);
}


let projet1 = document.getElementById("pr1");
let projet2 = document.getElementById("pr2");
let projet3 = document.getElementById("pr3");
let change1 = document.getElementById("pr1ch1");
let change2 = document.getElementById("pr1ch2");
let change3 = document.getElementById("pr1ch3");
let button = document.getElementById("container__grid");
let tache1 = document.getElementById("pr1ch1tc1");
let tache2 = document.getElementById("pr1ch1tc2");
let tache3 = document.getElementById("pr1ch1tc3");
let tache4 = document.getElementById("pr1ch1tc4");
let tache5 = document.getElementById("pr1ch1tc5");
let tache6 = document.getElementById("pr1ch1tc6");
let tache7 = document.getElementById("pr1ch1tc7");
let tache8 = document.getElementById("pr1ch1tc8");

let tache2_1 = document.getElementById("pr1ch2tc1");
let tache2_2 = document.getElementById("pr1ch2tc2");
let tache2_3 = document.getElementById("pr1ch2tc3");
let tache2_4 = document.getElementById("pr1ch2tc4");
let tache2_5 = document.getElementById("pr1ch2tc5");
let tache2_6 = document.getElementById("pr1ch2tc6");
let tache2_7 = document.getElementById("pr1ch2tc7");
let tache2_8 = document.getElementById("pr1ch2tc8");
let tache2_9 = document.getElementById("pr1ch2tc8");
let tache2_10 = document.getElementById("pr1ch2tc8");



displayArticle(projet1, 100);
displayArticle(projet2, 100);
displayArticle(projet3, 100);
displayArticle(change1, 100);
displayArticle(change2, 100);
displayArticle(change3, 100);
displayArticle(button, 100);
displayArticle(tache1, 100);
displayArticle(tache2, 100);
displayArticle(tache3, 100);
displayArticle(tache4, 100);
displayArticle(tache5, 100);
displayArticle(tache6, 100);
displayArticle(tache7, 100);
displayArticle(tache8, 100);
displayArticle(tache2_1, 100);
displayArticle(tache2_2, 100);
displayArticle(tache2_3, 100);
displayArticle(tache2_4, 100);
displayArticle(tache2_5, 100);
displayArticle(tache2_6, 100);
displayArticle(tache2_7, 100);
displayArticle(tache2_8, 100);
displayArticle(tache2_9, 100);
displayArticle(tache2_10, 100);



function growOrDisplay(div) {
    if (document.getElementById(div).getAttribute('data-display') == "1") {
        growArticle(document.getElementById(div), 100);


    } else {
        displayArticle(document.getElementById(div), 100);

    }
}