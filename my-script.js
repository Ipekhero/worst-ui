   
    const myRange1 = document.querySelector('#my-range1')
    const myRange2 = document.querySelector('#my-range2')
    const myRange3 = document.querySelector('#my-range3')
    const myRange4 = document.querySelector('#my-range4')
    const myRange5 = document.querySelector('#my-range5')
    const myRange6 = document.querySelector('#my-range6')
    const myRange7 = document.querySelector('#my-range7')
    const myRange7Value = document.querySelector('#my-range7-value')

    const targetWord = document.querySelector('#target-word')
    const targetWord2 = document.querySelector('#target-word2')
    

    myRange1.addEventListener('input', (event) => {
      console.log (myRange1.value)
      const section = myRange1.closest('section')
      section.style.backgroundColor = 'hsl(' + myRange1.value + ' 100% 75%)'
      targetWord.style.color = 'hsl(' + myRange1.value + ' 100% 50%)'
    });

    myRange2.addEventListener('input', (event) => {
      console.log (myRange2.value)
      const section = myRange2.closest('section')
      targetWord2.style.letterSpacing = 1/myRange2.value * 500 + "px"
      targetWord2.style.fontSize = 1/myRange2.value * 1000 + "pt"
    });

    const slideLeft = document.querySelector('#slide-left')
    const slideRight = document.querySelector('#slide-right')

    myRange3.addEventListener('input', (event) => {
      console.log (myRange3.value)
      const container = slideLeft.parentElement
      // how far each image can travel before they meet in the middle
      const maxTravel = container.clientWidth / 2 - slideLeft.clientWidth
      // normalise the slider (min..max) to 0..1
      const progress = (myRange3.value - myRange3.min) / (myRange3.max - myRange3.min)
      const distance = progress * maxTravel
      // left image grows from 1x up to 2x as the slider moves right
      const scale = 1 + progress*2
      slideLeft.style.transform = 'translateX(' + distance + 'px) scale(' + scale + ')'
      slideRight.style.transform = 'translateX(' + (-distance) + 'px)'

      // at the highest value: balloon pops -> hide balloon, show boom
      if (Number(myRange3.value) === Number(myRange3.max)) {
        slideLeft.style.display = 'none'   // balloon
        slideRight.style.display = 'block' // boom
        // put the boom where the grown balloon ended up (not off-screen)
        slideRight.style.transform = 'translateX(' + distance + 'px) scale(' + scale + ')'
      } else {
        slideLeft.style.display = 'block'
        slideRight.style.display = 'none'
      }
    });

     const minWidth = 100 
     const maxWidth = 800  

     myRange4.addEventListener('input', (event) => {
      console.log (myRange4.value)
      const section = myRange4.closest('section')
      const percent = (myRange4.value - myRange4.min) / (myRange4.max - myRange4.min);
      myRange4.style.width = minWidth + percent * (maxWidth - minWidth) * 2 + "px";
    });

    myRange5.addEventListener('input', (event) => {
      console.log (myRange5.value)
      const section = myRange5.closest('section')
      myRange5.style.transform = "translateX(" + (myRange5.value) + "px)";
      myRange5.style.transform = "rotate(" + (myRange5.value/10) + "deg)";
    });

    myRange6.addEventListener('input', (event) => {
      console.log (myRange6.value)
      const section = myRange6.closest('section')
      myRange6.style.transform = "translateX(" + (myRange6.value)*2 + "px)";
    })

    myRange7.addEventListener('input', (event) => {
      console.log (myRange7.value)
      const section = myRange7.closest('section')
      myRange7Value.textContent = myRange7.value
    })

    let isBlack = 1;

    setInterval(() => {
      if (isBlack) {
        document.getElementById('disco').style.backgroundColor = 'hsl(0, 0%, 92%)';
        isBlack = 0;
      } else {
        document.getElementById('disco').style.backgroundColor = 'black';
        isBlack = 1;
      }
    }, 100);

    const discoButton = document.querySelector('.my-new-button-9');
    let discoHoverTimer = null;
    let discoHoverState = true;

    function startDiscoHover(element) {
      clearInterval(discoHoverTimer);
      discoHoverTimer = setInterval(() => {
        element.style.backgroundColor = discoHoverState ? 'hsl(0, 0%, 92%)' : 'black';
        discoHoverState = !discoHoverState;
      }, 200);
    }

    if (discoButton) {
      discoButton.addEventListener('mouseenter', () => {
        discoHoverState = true;
        startDiscoHover(discoButton);
      });

      discoButton.addEventListener('mouseleave', () => {
        clearInterval(discoHoverTimer);
        discoButton.style.backgroundColor = 'black';
      });
    }

    const randomCircle = document.getElementById('random-circle');

    function moveRandomCircle() {
      if (!randomCircle) return;

      const section = randomCircle.closest('section');
      if (!section) return;

      const circleSize = randomCircle.offsetWidth;
      const maxX = Math.max(0, section.clientWidth - circleSize);
      const maxY = Math.max(0, section.clientHeight - circleSize);

      const randomX = Math.floor(Math.random() * (maxX + 1));
      const randomY = Math.floor(Math.random() * (maxY + 1));

      randomCircle.style.left = `${randomX}px`;
      randomCircle.style.top = `${randomY}px`;
      randomCircle.style.transform = 'none';
    }

    if (randomCircle) {
      randomCircle.addEventListener('click', moveRandomCircle);
      moveRandomCircle();
    }

    const popupNote = document.getElementById('section27-popup');

    if (popupNote) {
      popupNote.classList.remove('show');
      setTimeout(() => {
        popupNote.classList.add('show');
      }, 2000);
    }

    const section28Checkboxes = document.querySelectorAll('#section-28 input[type="checkbox"]');

    if (section28Checkboxes.length) {
      section28Checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });

      setTimeout(() => {
        section28Checkboxes[0].checked = true;
      }, 2000);

      setTimeout(() => {
        section28Checkboxes[1].checked = true;
      }, 2200);
    }