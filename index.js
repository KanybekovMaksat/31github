anime({
    targets: '.function-based-values-demo .el',
    left: function (el) {
        return 350;
    },
    top: function (el) {
        return 250;
    },
    scale: function (el, i, l) {
        return anime.random(1, 1.1);
    },
    rotate: function () {
        return anime.random(-360, 360);
    },
    borderRadius: function () {
        return ['50%', anime.random(30, 50) + '%'];
    },
    duration: function () {
        return anime.random(1200, 1800);
    },
    delay: function () {
        return anime.random(0, 400);
    },
    direction: 'alternate',
    loop: false,
});

anime({
    targets: '.second-circle',
    left: function (el) {
        return 350;
    },
    top: function (el) {
        return 450;
    },
    scale: function (el, i, l) {
        return anime.random(1, 1.1);
    },
    rotate: function () {
        return anime.random(-360, 360);
    },
    borderRadius: function () {
        return ['50%', anime.random(30, 50) + '%'];
    },
    duration: function () {
        return anime.random(1200, 1800);
    },
    delay: function () {
        return anime.random(0, 400);
    },
    direction: 'alternate',
    loop: false,
});

anime({
    targets: '.third-circle',
    left: function (el) {
        return 50;
    },
    top: function (el) {
        return 450;
    },
    scale: function (el, i, l) {
        return anime.random(1, 1.1);
    },
    rotate: function () {
        return anime.random(-360, 360);
    },
    borderRadius: function () {
        return ['50%'];
    },
    duration: function () {
        return anime.random(1200, 1800);
    },
    delay: function () {
        return anime.random(0, 400);
    },
    direction: 'alternate',
    loop: false,
});
