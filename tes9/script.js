// DOM manipulation

// membuat element/tag baru
const pBaru = document.createElement('p');

// membuat text/content untuk tag/node baru
const textPBaru = document.createTextNode('Paragrag baru');

//  simpan tulisan/node kedalam paragraf/element
pBaru.appendChild(textPBaru);

// simpan tag kedalam halaman dengan appendchild
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);






const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');
liBaru.appendChild(textLiBaru);