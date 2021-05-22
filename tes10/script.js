const p2 = document.querySelector('.p2');

function ubahWarna(){
    p2.style.backgroundColor = 'lime';
}

p2.onclick = ubahWarna;


const p4 = document.querySelector('#b p');

p4.addEventListener('click', function(){
    alert('kamu mencet paragraph 4')
});