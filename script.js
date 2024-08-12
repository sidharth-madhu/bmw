const timeline = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

// Loader animation for the text spans
timeline.from(".loading-text span", {
    duration: 0.8,
    delay: 0.2,
    skewX: -10,
    skewY: 10,
    stagger: {
        amount: 0.2
    },
    y: 50,
    x: -20,
    opacity: 0
})
.to(".loading-text span", {
    duration: 0.8,
    delay: 0.5,
    skewX: 10,
    skewY: -10,
    stagger: {
        amount: 0.2
    },
    y: -50,
    x: 20,
    opacity: 0
})
.to(".loading-screen", {
    duration: 0.5,
    opacity: 0
}, "-=0.4")
.to(".loading-screen", {
    zIndex: -1,
    duration: 0.1
});

// Header logo animation
timeline.from(".header-logo", {
    duration: 1,
    opacity: 0,
    y: -100
}, "-=0.8");

// Main text animation
timeline.from(".main-text", {
    duration: 1.2,
    opacity: 0,
    skewY: 10,
    y: 100,
    stagger: {
        amount: 0.4
    }
});

// First image reel animation
timeline.from(".image-reel", {
    opacity: 0,
    duration: 1.5
});

// About section animations
gsap.from(".about-heading", {
    scrollTrigger: {
        trigger: ".about-heading",
        toggleActions: "restart pause none pause"
    },
    y: 100,
    opacity: 0,
    duration: 0.8
});

gsap.from(".about-description p, .contact-button", {
    scrollTrigger: {
        trigger: ".about-description p, .contact-button",
        toggleActions: "restart pause none pause"
    },
    y: 100,
    skewY: 10,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    stagger: {
        amount: 0.5
    }
});

gsap.from(".about-image", {
    scrollTrigger: {
        trigger: ".about-image",
        toggleActions: "restart none none none"
    },
    height: 0,
    opacity: 0,
    delay: 0.8,
    duration: 1.5
});

// Second image reel animation
gsap.from(".image-reel-second", {
    scrollTrigger: {
        trigger: ".image-reel-second",
        toggleActions: "restart pause reverse pause"
    },
    y: -200,
    opacity: 0,
    duration: 1.5
});

// Second main text animation
gsap.from(".main-text-second", {
    scrollTrigger: {
        trigger: ".main-text-second",
        toggleActions: "restart pause reverse pause"
    },
    y: 100,
    skewY: 10,
    opacity: 0,
    duration: 1.2,
    stagger: {
        amount: 0.4
    }
});

gsap.from(".video-container", {
    scrollTrigger: {
        trigger: ".video-container",
        start: "top 80%", // Trigger animation when the top of the container is 80% from the top of the viewport
        end: "bottom top",
        scrub: true, // Optional: smooth scroll animation
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "power2.out"
});

