const projectCard = document.querySelector(".project-card");

projectCard.addEventListener("mousemove", (e) => {
    const { x, y } = projectCard.getBoundingClientRect();
    projectCard.style.setProperty("--x", e.clientX - x);
    projectCard.style.setProperty("--y", e.clientY - y);
});


var container = document.querySelector(".container");
var inner = document.querySelector(".inner");

var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
};

mouse.setOrigin(container);

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function () {
    return counter++ % updateRate === 0;
};

var onMouseEnterHandler = function (event) {
    update(event);
};
var onMouseLeaveHandler = function () {
    inner.style = "";
};
var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
        update(event);
    }
};

var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
};

var updateTransformStyle = function (x, y) {
    x = -x/2;
    y = -2*y;
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
};

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;