var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = findItemsOver(itemList, 25)
//results look like this now.
var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];


function findItemsOver(itemList, quantity){
let itemsArr = [];
  for (let i=0; i<itemList.length; i++) {
   var items = itemList[i];
    if (items.qty > quantity) {
    itemsArr.push(items);
    }
  } return itemsArr;
}
console.log(findItemsOver(itemList, 20))