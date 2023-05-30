console.log('estou');
gsap.registerPlugin(ScrollTrigger);
gsap.to('.menu', {
    opacity: 1,
    scrollTrigger: {
        trigger: ".opening",
        markers: true,
        onEnter: () => {console.log('entrou')}
    },
    onStart: () => {console.log('opa')}
})