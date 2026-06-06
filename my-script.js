   
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