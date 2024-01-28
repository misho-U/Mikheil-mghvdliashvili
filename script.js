document.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    if (window.scrollY > 0){
        header.classList.add('scrolled');
    }else {
        header.classList.remove('scrolled');
    }
});

function toggleAnsw(answ) {
    const asked = document.querySelectorAll('.hide');
    asked.forEach(element => {
        if (element.id === answ) {
            if (element.style.display === 'block') {
                element.style.display = 'none'
            }else {
                element.style.display = 'block'
            }
        } else{
            element.style.display = 'none'
        }
    });
}

let currentIndex = 0;
let intervalId;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const slider = document.querySelector('.slider');
  const translateValue = -currentIndex * 33.33 + '%';
  slides.style.transform = `translateX(${translateValue})`;
}


function prevSlide() {
  clearInterval(intervalId);
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
  startInterval();
}

function nextSlide() {
  clearInterval(intervalId);
  currentIndex = (currentIndex +1) % 3;
  showSlide(currentIndex);
  startInterval();
}
function startInterval() {
    intervalId = setInterval(nextSlide, 5000)
}
startInterval();

