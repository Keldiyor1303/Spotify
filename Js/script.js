const aside = document.querySelector(".navbar")

for (let key of navbar) {
    const nav = document.createElement("nav")

    for (let link of key) {
        const a = document.createElement("a")
        a.href = "#"
        a.innerText = link
        nav.appendChild(a)
    }

    if (key.length == 6) {
        const span = document.createElement("span")
        nav.appendChild(span)
    }

    aside.appendChild(nav)
}

const avatar = document.querySelector(".avatar")

avatars.forEach(odam => {
    const img = document.createElement("img")
    img.src = odam
    avatar.appendChild(img)

    img.addEventListener("click", function () {
        const avatar1 = document.querySelector("#avatar1")
        img.src = avatar1.src
        avatar1.src = odam
    })
})

const swip = document.querySelector(".swiper-wrapper")

for (let malumot of mainObj) {
    const div = document.createElement("div")
    div.classList.add("swiper-slide")

    const img = document.createElement("img")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")

    img.src = malumot.img
    h3.innerText = malumot.h3Text
    p.innerText = malumot.pText

    console.log(img, h3, p)

    div.append(img, h3, p)
    swip.appendChild(div)
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});