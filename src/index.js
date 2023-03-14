const accueil = document.querySelector('.accueil')
const lancer = document.querySelector('.lancer');
const page = document.querySelector('.page');
const coherence = document.querySelector('.coherence');
const close = document.querySelector('.close');
const cercle  = document.getElementById('rond')


// affichage cohérence

lancer.addEventListener('click', () => {
    accueil.style.display = 'none';
    page.style.display = 'grid';
});



close.addEventListener('click', () => {
    accueil.style.display = '';
    page.style.display = 'none';
})

cercle.addEventListener('click' , () => {
    cercle.classList.toggle('rythme37')
})
// cercle.addEventListener('click' , () => {
//     cercle.classList.remove('rythme37')
// })

// Tempo 


