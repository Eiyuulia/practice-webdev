const p2 = document.querySelector('.p2');

function ubahWarna(){
    p2.style.backgroundColor = 'lime';
}

p2.onclick = ubahWarna;


const p4 = document.querySelector('#b p');

p4.addEventListener('click', function(){
    const liBaru = document.createElement('li');
    const nodeLiBaru = document.createTextNode('list baru');
    const ul = document.querySelector('ul');
    liBaru.appendChild(nodeLiBaru);
    ul.appendChild(liBaru);
});

