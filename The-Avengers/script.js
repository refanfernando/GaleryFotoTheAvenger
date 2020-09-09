const a = document.getElementsByTagName('a');
const modal = document.querySelector('.modal');
const image = document.querySelectorAll('.gallery ul li a img');
const nextImg = document.querySelectorAll('#overlay p')[0];
const prevImg = document.querySelectorAll('#overlay p')[1];

let indexImg = null;

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        const value = image[i].getAttribute('src');
        let img = document.createElement('img', 'src');
        img.setAttribute('src', value)
        modal.appendChild(img);
        indexImg = i;
        getBtnNext();
        getBtnPrev();
    })
}

function getBtnNext() {
    if (indexImg < image.length - 1) {
        nextImg.innerHTML = '>';
        return;
    } else {
        nextImg.innerHTML = ' ';
    }
}

function getBtnPrev() {
    if (indexImg > 0) {
        prevImg.innerHTML = '<';
        return;
    } else {
        prevImg.innerHTML = ' ';
    }
}


function next() {
    const countIndexImg = indexImg + 1;
    modal.innerHTML = '';
    const value = image[countIndexImg].getAttribute('src');
    let img = document.createElement('img', 'src');
    img.setAttribute('src', value)
    modal.appendChild(img);
    indexImg = countIndexImg;
    getBtnNext();
    getBtnPrev();
}

function prev() {
    const countIndexImg = indexImg - 1;
    modal.innerHTML = '';
    const value = image[countIndexImg].getAttribute('src');
    let img = document.createElement('img', 'src');
    img.setAttribute('src', value)
    modal.appendChild(img);
    indexImg = countIndexImg;
    getBtnNext();
    getBtnPrev();
}

function close_modal() {
    modal.innerHTML = '';
    const index = window.location.href.indexOf('#overlay');
    let location = window.location.href.substr(0, index);
    window.location.href = location;
}
