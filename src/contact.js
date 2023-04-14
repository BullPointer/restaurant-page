import './styling-folder/contact.css';
import contactData from './database/contact_database';

function imageFunc(img) {
    const imageDiv = document.createElement('div');
    const image = new Image();
    image.src = img;
    imageDiv.appendChild(image);
    return imageDiv;
}
function detailFunc(txt, className) {
    const info = document.createElement('div');
    info.classList.add(className)
    info.textContent = txt;
    return info;
}
const contactFunc = (index) => {
    const contact = document.createElement('div');
    contact.classList.add('contact-us');
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('details');
    detailDiv.append(
        detailFunc(contactData[index].name), 
        detailFunc(contactData[index].title), 
        detailFunc(contactData[index].phoneNo), 
        detailFunc(contactData[index].email)
    )
    contact.append(detailDiv, imageFunc(contactData[index].pics));
    return contact;
}
export default function() {
    const box = document.createElement('div');
    box.classList.add('box');
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'The Contact Restaurant';
    box.appendChild(header);

    for (let index = 0; index < contactData.length; index++) {
        box.appendChild(contactFunc(index))
    }
    return box;
}
