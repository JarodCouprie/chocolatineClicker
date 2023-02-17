//Imports
import { numberDisplay } from "../components/numberDisplay.js";
import { UpgradeItem } from "../components/UpgradeItem.js";

//App

let curseur = new UpgradeItem("./asset/img/finger.png","Curseur",10,0,"image d'un doigt");
let mamie = new UpgradeItem("./asset/img/grandma.png","Mamie",100,0,"image d'une grand mère");
let rouleau = new UpgradeItem("./asset/img/roller.png","Rouleau",1000,0,"image d'un rouleau à patisserie");
let four = new UpgradeItem("./asset/img/furnace.png","Four",10000,0,"image d'un rouleau à patisserie");
let boulangerie = new UpgradeItem("./asset/img/bakerie.png","Boulangerie",100000,0,"image d'une boulangerie");
let boulanger = new UpgradeItem("./asset/img/baker.png","Boulanger",1000000,0,"image d'un boulanger");
let mine = new UpgradeItem("./asset/img/mine.png","Mine",10000000,0,"image d'une mine de charbon");
let usine = new UpgradeItem("./asset/img/usine.png","Usine",100000000,0,"image d'une usine");
let banque = new UpgradeItem("./asset/img/bank.png","Banque",1000000000,0,"image d'une banque");
let superMamie = new UpgradeItem("./asset/img/supergrandma.png","Super Mamie",10000000000,0,"image d'une mamie un peu déjantée");
let tour = new UpgradeItem("./asset/img/tower.png","Tour",100000000000,0,"image d'une tour");
let fusee = new UpgradeItem("./asset/img/ship.png","Fusée",1000000000000,0,"image d'une fusée");
let science = new UpgradeItem("./asset/img/science.png","E=mChocolatine²",10000000000000,0,"image d'une formule physique");
let angryGrany = new UpgradeItem("./asset/img/angrygrandma.png","Super Mamie en colère",100000000000000,0,"image d'une fusée");
let bakerKing = new UpgradeItem("./asset/img/bakerking.png","Roi des boulangers",1000000000000000,0,"image d'une fusée");

//localStorage.setItem("score", 0);

let chocolatines = parseInt(localStorage.getItem("score"));

let itemContainer = [curseur,mamie,rouleau,four,boulangerie,boulanger,mine,usine,banque,superMamie,tour,fusee,science,angryGrany,bakerKing];
itemContainer.forEach(item => item.addToPage());

const score = document.querySelector("#score");
score.innerHTML = numberDisplay((localStorage.getItem("score"))) + " chocolatines";

/**
 * 
 * @param {Number} chocolatines
 * @param {Object} UpgradeItem
 */

// function isAffordable(chocolatines,UpgradeItem){
//     if (chocolatines < UpgradeItem.getPrice()){
//         item.classList.add("unaffordable");
//     }
//     if (chocolatines * 1000 < (UpgradeItem.getPrice())){
//         item.style.display = "none";
//     }
// }

let clickPlayer = 1;

document.querySelector("#chocolatine").onclick = function(){
    chocolatines+=clickPlayer;
    localStorage.setItem("score", chocolatines);
    score.innerHTML = numberDisplay((localStorage.getItem("score"))) + " chocolatines";
}
