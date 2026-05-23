   
    const myRange1 = document.querySelector('#my-range1')
    const myRange2 = document.querySelector('#my-range2')
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
      targetWord2.style.letterSpacing = 1/myRange2.value * 300 + "px"
      targetWord2.style.fontSize = 1/myRange2.value * 500 + "pt"
    });

    // bla bla bla
    // add other comment
    