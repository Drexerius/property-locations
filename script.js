const shade = document.querySelector('.shade');
const popup = document.querySelector('.popup-container');
const redact = document.querySelector('.redact');
const add = document.querySelector('.add');

shade.addEventListener('click', () => {
    shade.style.display = 'none';
    popup.style.display = 'none';
})

popup.addEventListener('click', (e) => {
    if (e.target === popup) {        
        shade.style.display = 'none';
        popup.style.display = 'none';
    }
})

redact.addEventListener('click', () => {
    shade.style.display = 'flex';
    popup.style.display = 'flex';
})

add.addEventListener('click', () => {
    shade.style.display = 'flex';
    popup.style.display = 'flex';
})

const cancels = document.querySelectorAll('.create-location .cancel');
cancels.forEach(element => {
    element.addEventListener('click', () => {
        shade.style.display = 'none';
        popup.style.display = 'none';
    })
});
