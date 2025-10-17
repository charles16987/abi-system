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
      duration: 0.2,
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


	// about us section 

 gsap.from(".about-us .col-md-6:first-child img", {
    scrollTrigger: {
      trigger: ".about-us",
      start: "top 60%", // Trigger when section center hits viewport center
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.85,
    duration: 1.2,
    ease: "power4.out"
  });

  // Animate heading
  gsap.from(".about-us h2", {
    scrollTrigger: {
      trigger: ".about-us",
      start: "top 60%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: -60,
    duration: 1,
    ease: "bounce.out",
    delay: 0.2
  });

  // Animate paragraph texts with stagger
  gsap.from(".about-us p", {
    scrollTrigger: {
      trigger: ".about-us",
      start: "top 60%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.5
  });

//   products

   // Animate product cards
  gsap.from(".sec-1 .product-card", {
    scrollTrigger: {
      trigger: ".sec-1",
      start: "top 60%", // When section top hits top of screen
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: {
      amount: 1,
      from: "start"
    }
  });

  // Optional: Animate section heading
  gsap.from(".sec-1 h2", {
    scrollTrigger: {
      trigger: ".sec-1",
      start: "top 60%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: "power1.out",
    delay: 0.2
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-1", {
  scrollTrigger: {
    trigger: ".hero-1",
    start: "top 60%",
    toggleActions: "play none none none"
  },
  backgroundColor: "#ffffff", // from white
  duration: 1.2,
  ease: "power2.out"
});
   gsap.from(".hero-1 h2", {
    scrollTrigger: {
      trigger: ".hero-1",
      start: "top 60%", // when top of section hits top of viewport
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });

  // Animate marquee logo slider
  gsap.from(".hero-1 .wrapper", {
    scrollTrigger: {
      trigger: ".hero-1",
      start: "top 60%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.3
  });

  gsap.registerPlugin(ScrollTrigger);

  // Animate heading
  gsap.from(".customer-review-sec h2", {
    scrollTrigger: {
      trigger: ".customer-review-sec",
      start: "top 60%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out"
  });

  // Animate Swiper review cards container
  gsap.from(".customer-review-sec .swiper", {
    scrollTrigger: {
      trigger: ".customer-review-sec",
      start: "top 60%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.3
  });
  
   gsap.registerPlugin(ScrollTrigger);

  gsap.from(".swiper-slide", {
    scrollTrigger: {
      trigger: ".customer-review-sec",
      start: "top 60%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
  });

  // Animate "contact" section
  gsap.from("#contact h2", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 60%",
    },
    x: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });

  gsap.from("#contact .from-group", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 85%",
    },
    x: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".get-touch-details > div", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 85%",
    },
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".social-media-imgs a", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 85%",
    },
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(1.7)"
  });


   gsap.from(".serving-sec .serving-card", {
    scrollTrigger: {
      trigger: ".serving-sec",
      start: "top 75%", // starts when section enters viewport
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from(".serving-sec h2", {
    scrollTrigger: {
      trigger: ".serving-sec",
      start: "top 75%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  });

    gsap.from(".contact-us h2, .contact-us p, .contact-us .custom-btn", {
    scrollTrigger: {
      trigger: ".contact-us",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Animate the image (right column)
  gsap.from(".contact-us-container img", {
    scrollTrigger: {
      trigger: ".contact-us",
      start: "top 80%"
    },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out"
  });
