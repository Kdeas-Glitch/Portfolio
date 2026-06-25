const nextB = document.querySelector('.next');
const backB = document.querySelector('.back');
const masAch = document.querySelector('.masAchiv');
const ach1 = document.querySelector('.achievement_1');
const ach2 = document.querySelector('.achievement_2');
const ach3 = document.querySelector('.achievement_3');


const newArray = [];

Array.from(masAch.children).forEach(element => {
  newArray.push(element); 
});

const count = newArray.length;

var a1=0;
var a2=1;
var a3=2;

nextB.addEventListener('click', () => {

    changeTo(ach1, 1,a1);
    changeTo(ach2, 1,a2);
    changeTo(ach3, 1,a3);
    a1++;
    if(a1>=count)
        a1=0
    a2++;
    if(a2>=count)
        a2=0
    a3++;
    if(a3>=count)
        a3=0
});

backB.addEventListener('click', () => {
    changeTo(ach1, -1,a1);
    changeTo(ach2, -1,a2);
    changeTo(ach3, -1,a3);
    a1--;
    if(a1<0)
        a1=count-1
    a2--;
    if(a2<0)
        a2=count-1
    a3--;
    if(a3<0)
        a3=count-1
});




function changeTo(element, index,cur) {
    const display = window.getComputedStyle(element).display;
    if(display === "none") {
        return 0;
    }
    if(index+cur>=count)
        index=0
    else
    if(index+cur<0)
        index=count-1
    else
        index=index+cur
    element.querySelector('#title').textContent = newArray[index].querySelector('#title').textContent;
    element.querySelector('#image_ach').src = newArray[index].querySelector('#image_ach').src;
    element.querySelector('#desc').textContent = newArray[index].querySelector('#desc').textContent;
}