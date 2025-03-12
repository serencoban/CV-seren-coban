const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
        
    })
})

const scrollElt = document.querySelectorAll('.scroll')
scrollElt.forEach((el)=> observer.observe(el));





document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".sort");
    const menu = document.querySelector(".dropdown_menu");

    // Options du menu à injecter
    const options = [
        { text: "Les plus connues", value: "popular" },
        { text: "De A à Z", value: "alphabetical" }
    ];

    // Injection des options
    menu.innerHTML = options.map(option => `<li data-value="${option.value}">${option.text}</li>`).join('');

    // Afficher/Masquer le menu
    button.addEventListener("click", () => {
        menu.setAttribute("aria-hidden", menu.getAttribute("aria-hidden") === "true" ? "false" : "true");
    });

    // Sélectionner une option
    menu.addEventListener("click", (event) => {
        if (event.target.tagName === 'LI') {
            button.textContent = event.target.textContent; // Met à jour le bouton
            menu.setAttribute("aria-hidden", "true"); // Ferme le menu
        }
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            menu.setAttribute("aria-hidden", "true");
        }
    });
});
