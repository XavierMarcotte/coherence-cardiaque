const accueil = document.querySelector('.accueil')
const lancer = document.querySelector('.lancer');
const page = document.querySelector('.page');
const coherence = document.querySelector('.coherence');
const close = document.querySelector('.close');


// affichage cohérence

lancer.addEventListener('click', () => {
    accueil.style.display = 'none';
    page.style.display = 'flex';
});

close.addEventListener('click', () => {
    accueil.style.display = '';
    page.style.display = 'none';
})


//T empo 


