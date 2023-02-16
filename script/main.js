//logique

class UpgradeItem{
    constructor (imagePath, nameItem, price, countItem, imageAlternativeText){
        this.imagePath = imagePath;
        this.nameItem = nameItem;
        this.price = price;
        this.countItem = countItem;
        this.imageAlternativeText = imageAlternativeText;
    }
    getImagePath(){
        return this.imagePath;
    }
    setImagePath(newImagePath){
        this.imagePath = newImagePath;
    }

    getNameItem(){
        return this.nameItem;
    }
    setNameItem(newnameItem){
        this.nameItem = newnameItem;
    }

    getPrice(){
        return this.price;
    }
    setPrice(newprice){
        this.price = newprice;
    }

    getCountItem(){
        return this.countItem;
    }
    setCountItem(newcountItem){
        this.countItem = newcountItem;
    }

    getImageAlternativeText(){
        return this.imageAlternativeText;
    }
    setImageAlternativeText(newimageAlternativeText){
        this.imageAlternativeText = newimageAlternativeText;
    }

    addToPage(){
        const item = cloneTemplate("upgrade-item-template");
        const itemList = document.querySelector("#container");
        const imageItem = item.querySelector("img");
        imageItem.setAttribute("src",this.imagePath);
        imageItem.setAttribute("alt",this.imageAlternativeText);
        const title = item.querySelector(".tag");
        title.innerHTML = this.nameItem;
        const itemPrice = item.querySelector(".price");
        itemPrice.innerHTML = this.price+" chocolatines";
        const countItem = item.querySelector(".upgrade-item-count");
        countItem.innerHTML = this.countItem;
        itemList.appendChild(item);
    }
}

/**
 * 
 * @param {string} id 
 * @returns {DocumentFragment}
 */

function cloneTemplate(id){
    return document.querySelector("#"+id).content.cloneNode(true);
}

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

let itemContainer = [curseur,mamie,rouleau,four,boulangerie,boulanger,mine,usine,banque,superMamie,fusee,science,angryGrany,bakerKing];
itemContainer.forEach(item => item.addToPage());

let chocolatines = parseInt(localStorage.getItem("score"));

const score = document.querySelector("#score");
score.innerHTML = (localStorage.getItem("score")) + " chocolatines";

function isAffordable(chocolatines,UpgradeItem){
    if (chocolatines < UpgradeItem.getPrice()){
        console.log("c'est plus cher");
    }
    else{
        console.log("C'est moins cher");
    }
}

isAffordable(chocolatines,four);

// if (reserveCookies < this.price){
//     item.classList.add("unaffordable");
// }
// if (reserveCookies * 1000 < (this.price)){
//     item.style.display = "none";
// }

let clickPlayer = 1;

document.querySelector("#chocolatine").onclick = function(){
    chocolatines+=clickPlayer;
    localStorage.setItem("score", chocolatines);
    score.innerHTML = (localStorage.getItem("score")) + " chocolatines";
}
