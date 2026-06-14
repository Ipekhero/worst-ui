   
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

    const disco = document.getElementById('disco');

    if (disco) {
      let isBlack = 1;
      let discoTimer = null;
      const discoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !discoTimer) {
            // start strobing only once the disco section is on screen
            discoTimer = setInterval(() => {
              disco.style.backgroundColor = isBlack ? 'hsl(0, 0%, 92%)' : 'black';
              isBlack = isBlack ? 0 : 1;
            }, 100);
          } else if (!entry.isIntersecting && discoTimer) {
            clearInterval(discoTimer);
            discoTimer = null;
          }
        });
      }, { threshold: 0.3 });
      discoObserver.observe(disco.closest('section') || disco);
    }

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
      const popupSection = popupNote.closest('section') || popupNote;
      const popupObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => popupNote.classList.add('show'), 2000);
            popupObserver.unobserve(entry.target); // only once
          }
        });
      }, { threshold: 0.3 });
      popupObserver.observe(popupSection);
    }

    // auto-checking checkboxes: run when their section scrolls into view
    const autoCheckSection = document.querySelector('[id="The auto chceck"]');

    if (autoCheckSection) {
      const boxes = autoCheckSection.querySelectorAll('input[type="checkbox"]');
      boxes.forEach((checkbox) => { checkbox.checked = false; });

      if (boxes.length >= 2) {
        const boxObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => { boxes[0].checked = true; }, 800);
              setTimeout(() => { boxes[1].checked = true; }, 1100);
              boxObserver.unobserve(entry.target); // only once
            }
          });
        }, { threshold: 0.3 });
        boxObserver.observe(autoCheckSection);
      }
    }

    // section 33: disable the input as soon as it's clicked
    const section33Input = document.getElementById('section-33-input');

    if (section33Input) {
      section33Input.addEventListener('click', () => {
        section33Input.disabled = true;
      });
    }

    // section 35: the form runs away to a random spot when clicked
    const movingForm = document.getElementById('section-35-form');

    function moveForm() {
      const section = movingForm.closest('section');
      if (!section) return;

      const maxX = Math.max(0, section.clientWidth - movingForm.offsetWidth);
      const maxY = Math.max(0, section.clientHeight - movingForm.offsetHeight);

      const randomX = Math.floor(Math.random() * (maxX + 1));
      const randomY = Math.floor(Math.random() * (maxY + 1));

      movingForm.style.left = `${randomX}px`;
      movingForm.style.top = `${randomY}px`;
    }

    if (movingForm) {
      movingForm.addEventListener('click', moveForm);
    }

    // section 39: click the trigger to toggle the menu open/closed
    const section39Dropdown = document.getElementById('section-39-dropdown');

    if (section39Dropdown) {
      const trigger = section39Dropdown.querySelector('.dropdown-trigger');

      trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        section39Dropdown.classList.toggle('open');
      });

      // clicking anywhere else closes it
      document.addEventListener('click', () => {
        section39Dropdown.classList.remove('open');
      });
    }

    // section 40: the menu opens and closes by itself on a timer
    const section40Dropdown = document.getElementById('section-40-dropdown');

    if (section40Dropdown) {
      setInterval(() => {
        section40Dropdown.classList.toggle('open');
      }, 200);
    }

    // section 42: cards disappear when clicked, then come back after 1 second
    const cards = document.querySelectorAll('.card-grid .card');

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        // if the card has a color, paint its section with it
        const color = card.dataset.color;
        if (color) {
          card.closest('section').style.backgroundColor = color;
        }
        card.classList.add('hidden');
        setTimeout(() => {
          card.classList.remove('hidden');
        }, 2000);
      });
    });

    // section 44: radio-style checkboxes — checking one unchecks the others
    const giantCheckboxes = document.querySelectorAll('.card3 input[type="checkbox"]');

    giantCheckboxes.forEach((box) => {
      box.addEventListener('change', () => {
        if (box.checked) {
          giantCheckboxes.forEach((other) => {
            if (other !== box) other.checked = false;
          });
        }
      });
    });

    // hover-dropdowns: clicking an item makes it the label + a purple selected state
    document.querySelectorAll('.hover-dropdown').forEach((dropdown) => {
      const trigger = dropdown.querySelector('.hover-dropdown-trigger');
      dropdown.querySelectorAll('.hover-dropdown-menu li').forEach((item) => {
        item.addEventListener('click', () => {
          trigger.textContent = item.textContent;
          trigger.classList.add('selected');

          // ...but the selection vanishes after 2 seconds
          setTimeout(() => {
            trigger.textContent = 'Choose...';
            trigger.classList.remove('selected');
          }, 2000);
        });
      });
    });

    // section 46: a giant black cursor that follows the mouse and hides the target
    const giantCursor = document.getElementById('giant-cursor');
    const section46 = document.getElementById('section-46')?.closest('section');

    if (giantCursor && section46) {
      section46.addEventListener('mouseenter', () => {
        section46.classList.add('giant-cursor-active');
        giantCursor.style.display = 'block';
      });

      section46.addEventListener('mouseleave', () => {
        section46.classList.remove('giant-cursor-active');
        giantCursor.style.display = 'none';
      });

      section46.addEventListener('mousemove', (event) => {
        giantCursor.style.left = event.clientX + 'px';
        giantCursor.style.top = event.clientY + 'px';
      });
    }

    // section 47: flip the input colors with every letter typed
    const section47Input = document.getElementById('section-47-input');

    if (section47Input) {
      section47Input.addEventListener('input', () => {
        // odd number of characters -> inverted (black bg / white text)
        const inverted = section47Input.value.length % 2 === 1;
        section47Input.classList.toggle('inverted', inverted);
      });
    }

    // section 48: light / dark mode toggle
    const modeToggle = document.getElementById('mode-toggle-checkbox');
    const section48 = document.getElementById('section-48-area');

    if (modeToggle && section48) {
      const modeLabel = section48.querySelector('.mode-toggle-label');
      modeToggle.addEventListener('change', () => {
        section48.classList.toggle('dark', modeToggle.checked);
        if (modeLabel) modeLabel.textContent = modeToggle.checked ? 'Light' : 'Dark';
      });
    }

    // section 49: the selected segment jumps to the first position (order keeps changing)
    const segmented = document.querySelector('.segmented-toggle');

    if (segmented) {
      segmented.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.addEventListener('change', () => {
          const label = segmented.querySelector('label[for="' + radio.id + '"]');
          // move the radio + its label to the front (radio must stay right before its label)
          segmented.prepend(label);
          segmented.prepend(radio);
        });
      });
    }

    // section 50: clicking the finish button bursts confetti
    const finishButton = document.querySelector('.finishButton');

    function launchConfetti(originX, originY) {
      const colors = ['#9e9e9e', '#ffffff', 'rgb(208, 255, 0)', 'rgb(124, 124, 255)'];
      const pieces = 140;

      for (let i = 0; i < pieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.background = colors[i % colors.length];
        piece.style.left = originX + 'px';
        piece.style.top = originY + 'px';
        document.body.appendChild(piece);

        // random direction + downward gravity bias
        const angle = Math.random() * Math.PI * 2;
        const distance = 200 + Math.random() * 350;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance + 350;
        const rotation = Math.random() * 720;
        const duration = 2000 + Math.random() * 1500;

        const animation = piece.animate(
          [
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: 'translate(' + dx + 'px, ' + dy + 'px) rotate(' + rotation + 'deg)', opacity: 0 }
          ],
          { duration: duration, easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)' }
        );
        animation.onfinish = () => piece.remove();
      }
    }

    if (finishButton) {
      finishButton.addEventListener('click', (event) => {
        event.preventDefault(); // don't follow the empty href
        const rect = finishButton.getBoundingClientRect();
        launchConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
      });
    }

    // hamburger menu: label each item with its section's h2 text only
    document.querySelectorAll('.full-screen-nav a').forEach((link) => {
      const targetId = link.getAttribute('href').slice(1); // drop the leading #
      // grab the h2 specifically (the id may also be on the <section>)
      const heading = document.querySelector('h2#' + CSS.escape(targetId));
      if (heading) {
        link.textContent = heading.textContent.trim();
      }
    });

    // prev / next arrows: jump between sections
    const allSections = Array.from(document.querySelectorAll('main section'));
    const prevBtn = document.getElementById('prev-section');
    const nextBtn = document.getElementById('next-section');

    function currentSectionIndex() {
      const y = window.scrollY + 5; // small fudge so we count the section we're in
      let idx = 0;
      allSections.forEach((sec, i) => {
        if (sec.offsetTop <= y) idx = i;
      });
      return idx;
    }

    function goToSection(i) {
      const clamped = Math.max(0, Math.min(i, allSections.length - 1));
      allSections[clamped].scrollIntoView({ behavior: 'smooth' });
    }

    if (prevBtn && nextBtn && allSections.length) {
      nextBtn.addEventListener('click', () => goToSection(currentSectionIndex() + 1));
      prevBtn.addEventListener('click', () => goToSection(currentSectionIndex() - 1));
    }

    // highlight the menu item for the section currently in view
    const navLinks = Array.from(document.querySelectorAll('.full-screen-nav a'));
    const linksBySection = new Map();

    navLinks.forEach((link) => {
      const id = decodeURIComponent(link.getAttribute('href').slice(1));
      const target = document.getElementById(id);
      const sec = target && target.closest('section');
      if (sec) {
        if (!linksBySection.has(sec)) linksBySection.set(sec, []);
        linksBySection.get(sec).push(link);
      }
    });

    function highlightCurrentSection() {
      const y = window.scrollY + 5;
      let current = allSections[0];
      allSections.forEach((sec) => {
        if (sec.offsetTop <= y) current = sec;
      });
      navLinks.forEach((l) => l.classList.remove('active'));
      (linksBySection.get(current) || []).forEach((l) => l.classList.add('active'));
    }

    if (allSections.length) {
      window.addEventListener('scroll', highlightCurrentSection);
      highlightCurrentSection();
    }