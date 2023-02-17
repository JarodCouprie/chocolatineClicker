import { cloneTemplate } from "./cloneTemplate.js";
import { numberDisplay } from "./numberDisplay.js"; 

export class UpgradeItem{
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
        itemPrice.innerHTML = (numberDisplay(this.price))+" chocolatines";
        const countItem = item.querySelector(".upgrade-item-count");
        countItem.innerHTML = this.countItem;
        itemList.appendChild(item);
    }
}