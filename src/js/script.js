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

