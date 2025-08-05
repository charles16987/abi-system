 // Loop scroll up
  gsap.to("#loopUp", {
    yPercent: -100,
    repeat: -1,
    ease: "none",
    duration: 50,
    modifiers: {
      yPercent: gsap.utils.wrap(-50, 0)
    }
  });

  // Loop scroll down
  gsap.to("#loopDown", {
    yPercent: 100,
    repeat: -1,
    ease: "none",
    duration: 50,
    modifiers: {
      yPercent: gsap.utils.wrap(0, -50)
    }
  });

  // Animate text
  gsap.from("#textSection", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });


  // scroll animation hero-1
  
class LogosMarquee {
	constructor({
		containerSelector = ".marquee__ctn",
		trackSelector = ".marquee__track",
		speed = 20 // pixels per second
	} = {}) {
		this.container = document.querySelector(containerSelector);
		this.track = document.querySelector(trackSelector);
		this.speed = speed;

		if (!this.container || !this.track) {
			console.warn("Marquee: éléments introuvables.");
			return;
		}

		this.trackWidth = this.track.getBoundingClientRect().width;
		this.pos = 0;
		this.start = null;
		this.rafId = null;

		this.setup();
		this.animate = this.animate.bind(this); // Bind pour requestAnimationFrame
		requestAnimationFrame(this.animate);
	}

	setup() {
		// Étendre la largeur du container
		this.container.style.width = `${this.trackWidth}px`;

		// Dupliquer le contenu pour boucler visuellement
		this.clone = this.track.cloneNode(true);
		this.container.appendChild(this.clone);

		// Optimisation mobile
		this.container.style.willChange = "transform";
	}

	animate(timestamp) {
		if (!this.start) this.start = timestamp;

		const elapsed = timestamp - this.start;
		this.pos = -(elapsed / 1500) * this.speed;

		if (Math.abs(this.pos) >= this.trackWidth) {
			this.start = timestamp;
			this.pos = 0;
		}

		this.container.style.transform = `translateX(${this.pos}px)`;

		this.rafId = requestAnimationFrame(this.animate);
	}

	destroy() {
		cancelAnimationFrame(this.rafId);
		if (this.clone) this.clone.remove();
		this.container.style.transform = "";
		this.container.style.willChange = "";
	}
}

window.addEventListener("load", () => {
	const marquee = new LogosMarquee({
		containerSelector: ".marquee__ctn",
		trackSelector: ".marquee__track",
		speed: 80
	});

	// Si besoin, tu peux le détruire plus tard :
	// marquee.destroy();
});


// gsap

gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray(".service-card");

  cards.forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        toggleActions: "play none none none",
        
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });
  });


   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3.3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });