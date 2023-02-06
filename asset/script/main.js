//logique

class UpgradeItem{
    constructor (imageItem, nameItem, price, countItem, idItem, imagePath, imageAlternativeText){
        this.imageItem = imageItem;
        this.nameItem = nameItem;
        this.price = price;
        this.countItem = countItem;
        this.idItem = idItem;
        this.imagePath = imagePath;
        this.imageAlternativeText = imageAlternativeText;
    }
    addToPage(){
        let item = document.createElement("li");
        let itemList = document.querySelector("#container");
        item.classList.add("upgrade");
        item.setAttribute("id",this.idItem);
        let imageItem = document.createElement("img");
        imageItem.setAttribute("src",this.imagePath);
        imageItem.setAttribute("alt",this.imageAlternativeText);
        item.appendChild(imageItem);
        let upgradePriceTag = document.createElement
    }
}