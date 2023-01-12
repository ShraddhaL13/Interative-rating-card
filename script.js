const mCont = document.querySelector(".container")
const thanksC = document.querySelector(".thank-you")
const submitB = document.getElementById("submit-rating")
const rateA = document.getElementById("rate-again")
const rating = document.querySelectorAll(".btn")
const actualR = document.getElementById("rating")

submitB.addEventListener("click", () => {
  mCont.style.display = "none"
  thanksC.classList.remove("hidden")

  rating.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualR.innerHTML = rating.innerHTML
    })
  })
})

rateA.addEventListener("click", () => {
  mCont.style.display = "block"
  thanksC.classList.add("hidden")
})