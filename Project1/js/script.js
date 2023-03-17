// Catalog
var catItem = document.getElementsByClassName('catalog');
catItem[0].onclick = function() {
    if (catItem[0].className == 'catalog close') {
        catItem[0].className = 'catalog open';
    }
    else {
        catItem[0].className = 'catalog close';
    }
}

// ACCORDION
var accItem = document.getElementsByClassName('accordion_Item');
var accHD = document.getElementsByClassName('accordion_Item_Heading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion_Item close';
    }
    if (itemClass == 'accordion_Item close') {
        this.parentNode.className = 'accordion_Item open';
    }
}