import './style.css';
import home from './home';
import about from './about';
import contact from './contact';

const state = [
    {name: 'Home', func: home()}, 
    {name: 'About', func: about()}, 
    {name: 'Contact', func: contact()}
];
class Page {
    constructor (pages) {
        this.pages = pages;
    }
    navFunc(text, id) {
        const topbar = document.createElement('div');
        topbar.classList.add('topbar');
        topbar.id = id;
        topbar.textContent = text;
        return topbar;
    } 
    contentFunc() {
        const topBar = document.querySelectorAll('.topbar');
        const content = document.querySelector('.content');
        content.appendChild(this.pages[0].func);
        topBar.forEach(arr => {
            arr.addEventListener('click', () => {
                const box = document.querySelector('.box');
                content.removeChild(box);
                content.appendChild(this.pages[arr.id].func);
            })
        });
    } 
    doFunc() {
        const nav = document.createElement('div');
        nav.classList.add('nav');

        for (let index = 0; index < 3; index++) {
            nav.appendChild(this.navFunc(this.pages[index].name, index))
        }
        return nav;
    }
}
const page = new Page(state);
const content = document.querySelector('.content');
document.body.insertBefore(page.doFunc(), content);
page.contentFunc();

