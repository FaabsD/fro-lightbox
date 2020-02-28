const alleInformatie = document.querySelectorAll('.info');
const alleThumbnails = document.querySelectorAll('thumbnail');

let inhoud = [];
for(let i=0; i<alleInformatie.length; i++){
    inhoud.push(alleInformatie[i]);
    alleInformatie[i].remove();
}