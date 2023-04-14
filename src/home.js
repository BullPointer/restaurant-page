import './styling-folder/home.css';
import foodData from './database/home_database';

function createImgDiv(pics) {
    const newImg = new Image();
    newImg.src = pics;
    let img = document.createElement('div');
    img.appendChild(newImg);
    return img;
}

function createDiv(txt, className) {
    let meal = document.createElement('div');
    meal.classList.add(className);
    meal.textContent = txt
    return meal;
}

function foodFunc(index) {
    const food = document.createElement('div');
    food.classList.add('food');
    
    food.append(        
        createDiv(foodData[index].name, 'meal-txt'),
        createDiv(foodData[index].price, 'meal-txt'),
        createDiv(foodData[index].whatIs, 'meal-txt'),
        createImgDiv(foodData[index].pics)
        );
    return food;
}

export default function() {
    const box = document.createElement('div');
    box.classList.add('box');
    const header = document.createElement('div');
    header.classList.add('header');
    box.appendChild(header);
    header.textContent = 'The Magical Restaurant';

    for (let index = 0; index < foodData.length; index++) {
        box.appendChild(foodFunc(index))
    }
    return box;
}