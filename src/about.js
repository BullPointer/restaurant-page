export default function() {
    const box = document.createElement('div')
    const header = document.createElement('div')
    box.classList.add('box');
    header.classList.add('header');
    header.textContent = 'The About Restaurant';
    box.appendChild(header);
    return box;
}