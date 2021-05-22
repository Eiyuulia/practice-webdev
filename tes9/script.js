// DOM manipulation

// CARA 1
// membuat element/tag baru
const pBaru = document.createElement('p');

// membuat text/content untuk tag/node baru
const textPBaru = document.createTextNode('Paragrag baru');

//  simpan tulisan/node kedalam paragraf/element
pBaru.appendChild(textPBaru);

// simpan tag kedalam halaman dengan appendchild
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);




// CARA 2   

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);