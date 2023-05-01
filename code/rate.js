const rate = document.querySelector(".rate");
const button = document.querySelector("#btn");
const resultNum = document.querySelector("#result-num")
const feedBack = document.querySelector(".feed-back")

rate.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target.name === "rate") {
        const rating = event.target.value;
        resultNum.textContent = rating;
    }
});

button.addEventListener("click", () => {
    feedBack.classList.add("top");
})