import './styling-folder/about.css';
import aboutData from './database/about_database';

function createDiv(txt, className) {
    const info = document.createElement('div');
    info.classList.add(className, 'info');
    info.textContent = txt;
    return info; 
}

function aboutFunc(params) {
    const about = document.createElement('div');
    about.classList.add('about');
    aboutData.map((data, index) => {
        about.append(
            createDiv('About', 'abt-head'),
            createDiv(data.about, 'abt'),
            createDiv('Location', 'location-head'),
            createDiv(data.location, 'location'),
        );
    });
    about.appendChild(createDiv('Open By:', 'time-head'))
    const time = document.querySelector('.time');
    for (let index = 0; index < aboutData[0].timeOpen.length; index++) {
        about.appendChild(
            createDiv(aboutData[0].timeOpen[index], 'time')
        )
    }
    return about;
}
export default function() {
    const box = document.createElement('div')
    const header = document.createElement('div')
    box.classList.add('box');
    header.classList.add('header');
    header.textContent = 'About Us';
    box.appendChild(header);
    box.appendChild(aboutFunc());
    return box;
}