TweenMax.from(".navigation", 1.2, {
    y: "-100%",
    clearProps: 'all'
});

TweenMax.from(".header-info h1", 1, {
    opacity: 0,
    delay: 1.2
});

TweenMax.from(".header-info p", 1, {
    opacity: 0,
    delay: 1.6
});

TweenMax.from(".header-info a", 1, {
    opacity: 0,
    delay: 2
});