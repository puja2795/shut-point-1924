const productContainers = document.querySelectorAll(".product-container")
const nxtBtn = document.querySelectorAll(".nxt-btn")
const preBtn = document.querySelectorAll(".pre-btn")

productContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth;
    })
})