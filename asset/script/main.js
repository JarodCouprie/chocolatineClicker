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

    addToPage(reserveCookies){
        let item = document.createElement("li");
        if (reserveCookies < this.price){
            item.classList.add("unaffordable");
        }
        // if (reserveCookies * 1000 < (this.price)){
        //     item.style.display = "none";
        // }
        let itemList = document.querySelector("#container");
        item.classList.add("upgrade");
        let imageItem = document.createElement("img");
        imageItem.setAttribute("src",this.imagePath);
        imageItem.setAttribute("alt",this.imageAlternativeText);
        item.appendChild(imageItem);
        let upgradePriceAndTitleTag = document.createElement("div");
        upgradePriceAndTitleTag.classList.add("upgradePriceTag");
        let title = document.createElement("h2");
        title.innerHTML = this.nameItem;
        let priceTag = document.createElement("p");
        priceTag.innerHTML = this.price+" chocolatines";
        upgradePriceAndTitleTag.appendChild(title);
        upgradePriceAndTitleTag.appendChild(priceTag);
        let countItem = document.createElement("div");
        countItem.classList.add("upgradeCount");
        countItem.innerHTML = this.countItem;
        item.appendChild(imageItem);
        item.appendChild(upgradePriceAndTitleTag);
        item.appendChild(countItem);
        itemList.appendChild(item);
    }
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

let chocolatines = (localStorage.getItem("score"));
const score = document.querySelector("#score");
score.innerHTML = (localStorage.getItem("score")) + " chocolatines";

document.querySelector("#chocolatine").onclick = function(){
    chocolatines++;
    localStorage.setItem("score", chocolatines);
    score.innerHTML = (localStorage.getItem("score")) + " chocolatines";
}






itemContainer.forEach(item => item.addToPage(localStorage.getItem("score")));

