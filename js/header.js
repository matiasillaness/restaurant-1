const btns = document.querySelector("#btn-mbl-nav")

btns.addEventListener("click",(e) => {

    let stylenav = document.querySelector("#header-main-list")

    if (  stylenav.style.display === 'none'){
        stylenav.style.display = 'block'
    } else {
        stylenav.style.display = 'none'
    }
})