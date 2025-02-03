let myHTML = '<ul>'
const numbersList = [1, 2, 3, 4, 5];

numbersList.forEach(number => myHTML += `<li>${number}</li>` );
myHTML += '</ul>';

console.log(myHTML)