// children 
const list = document.querySelector('.list');
            const listItems = list.children;
            console.log('/*====Children====*/')
            console.log(listItems);
let parent = document.querySelector('.parChil');
console.log('==== Parent ===');
console.log(parent);
let tageName = parent.getElementsByTagName('h1');
console.log('===Tag name == h1')
console.log(tageName);
let childrenDiv = parent.querySelectorAll('div');
console.log('====Children div =====');
console.log(childrenDiv);
let firstChild = parent.querySelector('div');
console.log('===First child===');
console.log(firstChild);
let sublingDiv = document.querySelector('.this');
console.log(sublingDiv);
let childSub = sublingDiv.children;
console.log(firstChild.nextSibling.nextSibling);





