console.log('estou');
gsap.registerPlugin(ScrollTrigger);
gsap.to('.content', {
    color: 'yellow',
    scrollTrigger: {
        trigger: "ul",
        start: "top 80%",
        end: "top bottom",
        markers: true,
        onEnter: () => {console.log('entrou')}
    },
    onStart: () => {console.log('opa')}
})