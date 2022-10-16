
function loadCoupon(){
    document.getElementById(`coupon`).style.visibility =`visible`
    document.getElementById(`main`).style.opacity = `.5`
}

function closeCoupon(){
    document.getElementById(`coupon`).style.visibility =`hidden`
    document.getElementById(`main`).style.opacity = `1`
}


function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle(`mydark`)
}