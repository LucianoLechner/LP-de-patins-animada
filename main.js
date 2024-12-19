const figure = document.querySelectorAll("figure")

const myObserver = new IntersectionObserver( (e) =>{

    e.forEach( (elements) =>{

        if (elements.isIntersecting === true){

            elements.target.classList.add('show-figure')
        } else {
            elements.target.classList.remove('show-figure')
        }
    })
});

figure.forEach( (elementos) => myObserver.observe(elementos));