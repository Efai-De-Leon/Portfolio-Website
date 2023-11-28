const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((projectCard) => {
    projectCard.addEventListener("mousemove", (e) => {
        const { x, y } = projectCard.getBoundingClientRect();
        projectCard.style.setProperty("--x", e.clientX - x);
        projectCard.style.setProperty("--y", e.clientY - y);
    });
});


const containers = document.querySelectorAll('.container');

for (const container of containers) {
  const inner = container.querySelector('.inner');

  const mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      const e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
  };

  mouse.setOrigin(container);

  let counter = 0;
  const updateRate = 10;
  const isTimeToUpdate = function () {
    return counter++ % updateRate === 0;
  };

  const onMouseEnterHandler = function (event) {
    update(event);
  };
  const onMouseLeaveHandler = function () {
    inner.style = '';
  };
  const onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  const update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  const updateTransformStyle = function (x, y) {
    x = -x / 2;
    y = -2 * y;
    const style = `rotateX(${x}deg) rotateY(${y}deg)`;
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
}