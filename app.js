let sliderItems = document.querySelectorAll(".slider-base");
const rightArrow = document.querySelector(".next");
const leftArrow = document.querySelector(".prev");
let indicators = document.querySelector(".slider-indicators");

let count = 0;
sliderItems = Array.from(sliderItems);
sliderItems.forEach(item => {
  if (item.classList.contains("active")) {
    item.style.display = "block";
  }
  else{
    item.style.display = "none";
  }
});

rightArrow.addEventListener("click", () => {
  if (count !== sliderItems.length - 1) {
    sliderItems[count].style.display = "none";
    sliderItems[count].classList.remove("active");
    count++;
    sliderItems[count].style.display = "block";
    sliderItems[count].classList.add("active");
  } else{
    sliderItems[count].style.display = "none";
    sliderItems[count].classList.remove("active");
    count = 0;
    sliderItems[count].style.display = "block";
    sliderItems[count].classList.add("active");
  }
});
leftArrow.addEventListener("click", () => {
  if (count !== 0) {
    sliderItems[count].style.display = "none";
    sliderItems[count].classList.remove("active");
    count--;
    sliderItems[count].style.display = "block";
    sliderItems[count].classList.add("active");
  } else{
    sliderItems[count].style.display = "none";
    sliderItems[count].classList.remove("active");
    count = sliderItems.length - 1;
    sliderItems[count].style.display = "block";
    sliderItems[count].classList.add("active");
  }
});

indicators.addEventListener("click", e => {
  if (e.target.classList.contains("indicator")) {
    e.target.classList.remove("indicator");
    sliderItems[count].style.display = "none";
    sliderItems[count].classList.remove("active");
    count = e.target.classList - 1;
    sliderItems[count].style.display = "block";
    sliderItems[count].classList.add("active");
    e.target.classList.add("indicator");
  }
});
