const slider = document.getElementById("slider");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

// Tentukan seberapa jauh sekali geser (lebar satu kartu + gap)
const scrollAmount = 375;

btnNext.addEventListener("click", () => {
  slider.scrollLeft += scrollAmount;
});

btnPrev.addEventListener("click", () => {
  slider.scrollLeft -= scrollAmount;
});
