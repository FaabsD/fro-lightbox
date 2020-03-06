const alleInformatie = document.querySelectorAll('.info');
const alleThumbnails = document.querySelectorAll('.thumbnail');

let inhoud = [];
for(let i=0; i<alleInformatie.length; i++){
    inhoud.push(alleInformatie[i]);
    alleInformatie[i].remove();
}

function deleteModal(){
    document.getElementById('modal-window').remove();
}

function makeModal(num) {
    console.log(inhoud[num]);
    // Maak een modal venster
    let modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';
    modalWindow.id = 'modal-window';
    modalWindow.addEventListener('click', deleteModal);
    // maak een sluitknop
    let closeBtn = document.createElement('span');
    closeBtn.className = 'close-button';
    closeBtn.innerHTML = '&#8855;';
    //voeg een eventlistener toe aan de sluitknop
    closeBtn.addEventListener('click', deleteModal);
    // maak een container voor de inhoud van het modal venster
    let modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = inhoud[num].innerHTML;
    modalContent.addEventListener('click', function(e){
        e.stopPropagation();
    });
    gsap.to(modalContent, {marginTop:0, duration: 1, ease: "elastic.out(1, 0.3)"});
    modalContent.prepend(closeBtn);
    // Wijs de modal container toe aan het modal venster
    modalWindow.append(modalContent);
    // wijs het modaal venster toe aan de body
    document.body.append(modalWindow);
}

for (let i=0; i<alleThumbnails.length; i++) {
    alleThumbnails[i].addEventListener('click', function() {
        makeModal(i)
    })
}