const alleInformatie = document.querySelectorAll('.info');
const alleThumbnails = document.querySelectorAll('.thumbnail');

let inhoud = [];
for(let i=0; i<alleInformatie.length; i++){
    inhoud.push(alleInformatie[i]);
    alleInformatie[i].remove();
}

function makeModal(num) {
    console.log(inhoud[num]);
}

for (let i=0; i<alleThumbnails.length; i++) {
    alleThumbnails[i].addEventListener('click', function() {
        makeModal(i)
    })
}