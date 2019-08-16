TweenMax.from(".navigation", 1, {
    y: "-100%",
    clearProps: 'all'
});

TweenMax.from(".header-info h1", 1, {
    x: -100,
    opacity: 0,
    delay: 1.2
});

TweenMax.from(".header-info p", 1, {
    x:100,
    opacity: 0,
    delay: 1.5
});

TweenMax.from(".header-info a", 1, {
    y:100,
    opacity: 0,
    delay: 1.7
});



