let title_2 = document.querySelector('.title_2')
let title_3 = document.querySelector('.title_3')

window.addEventListener('scroll', () => {
    console.log(scrollY);

    if (scrollY > 1200) {
        title_2.style.transform = "translateX(0%)"
    }

    if (scrollY > 1800) {
        title_3.style.transform = "translateX(0%)"
    }

})