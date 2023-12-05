const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((projectCard) => {
    projectCard.addEventListener("mousemove", (e) => {
        const { x, y } = projectCard.getBoundingClientRect();
        projectCard.style.setProperty("--x", e.clientX - x);
        projectCard.style.setProperty("--y", e.clientY - y);
    });
});


const containers = document.querySelectorAll('.container');

containers.forEach((container) => {
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
            this._x = e.getBoundingClientRect().left + e.getBoundingClientRect().width / 2;
            this._y = e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2;
        },
    };

    let counter = 0;
    const updateRate = 10;
    const isTimeToUpdate = function () {
        return counter++ % updateRate === 0;
    };

    const onMouseEnterHandler = function (event) {
        mouse.setOrigin(container);
        // console.log(mouse._x + " " + mouse._y); //printing the orgin when the mouse enters
        update(event);
    };
    const onMouseLeaveHandler = function () {
        const style = `rotateX(${0}deg) rotateY(${0}deg)`;
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTransform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
    };
    const onMouseMoveHandler = function (event) {
        // console.log(mouse.x + " " + mouse.y);
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
});


w = {"words": [
    {
      "word": "light",
      "start": 1.12,
      "end": 1.62,
      "confidence": 0.9680569,
      "punctuated_word": "Light"
    },
    {
      "word": "filtered",
      "start": 1.68,
      "end": 2.1599998,
      "confidence": 0.98538107,
      "punctuated_word": "filtered"
    },
    {
      "word": "down",
      "start": 2.1599998,
      "end": 2.6599998,
      "confidence": 0.9998505,
      "punctuated_word": "down"
    },
    {
      "word": "through",
      "start": 3.1999998,
      "end": 3.4399998,
      "confidence": 0.99836046,
      "punctuated_word": "through"
    },
    {
      "word": "the",
      "start": 3.4399998,
      "end": 3.6,
      "confidence": 0.99977595,
      "punctuated_word": "the"
    },
    {
      "word": "water",
      "start": 3.6,
      "end": 4.1,
      "confidence": 0.9999734,
      "punctuated_word": "water"
    },
    {
      "word": "to",
      "start": 4.4,
      "end": 4.64,
      "confidence": 0.9980731,
      "punctuated_word": "to"
    },
    {
      "word": "the",
      "start": 4.64,
      "end": 4.72,
      "confidence": 0.999913,
      "punctuated_word": "the"
    },
    {
      "word": "bed",
      "start": 4.72,
      "end": 5.22,
      "confidence": 0.99980325,
      "punctuated_word": "bed"
    },
    {
      "word": "where",
      "start": 5.8399997,
      "end": 6.24,
      "confidence": 0.80726254,
      "punctuated_word": "where"
    },
    {
      "word": "the",
      "start": 6.24,
      "end": 6.48,
      "confidence": 0.99983644,
      "punctuated_word": "the"
    },
    {
      "word": "oysters",
      "start": 7.44,
      "end": 7.94,
      "confidence": 0.9994594,
      "punctuated_word": "oysters"
    },
    {
      "word": "lay",
      "start": 8.955,
      "end": 9.115,
      "confidence": 0.9992506,
      "punctuated_word": "lay"
    },
    {
      "word": "fastened",
      "start": 9.115,
      "end": 9.615,
      "confidence": 0.99875915,
      "punctuated_word": "fastened"
    },
    {
      "word": "to",
      "start": 9.675,
      "end": 9.915,
      "confidence": 0.9996623,
      "punctuated_word": "to"
    },
    {
      "word": "rocky",
      "start": 10.155001,
      "end": 10.635,
      "confidence": 0.9998833,
      "punctuated_word": "rocky"
    },
    {
      "word": "a",
      "start": 11.755,
      "end": 11.995,
      "confidence": 0.998949,
      "punctuated_word": "a"
    },
    {
      "word": "bottom",
      "start": 11.995,
      "end": 12.475,
      "confidence": 0.99899906,
      "punctuated_word": "bottom"
    },
    {
      "word": "strewn",
      "start": 12.475,
      "end": 12.975,
      "confidence": 0.9999052,
      "punctuated_word": "strewn"
    },
    {
      "word": "with",
      "start": 13.434999,
      "end": 13.755,
      "confidence": 0.98907846,
      "punctuated_word": "with"
    },
    {
      "word": "shells",
      "start": 13.755,
      "end": 14.255,
      "confidence": 0.99018455,
      "punctuated_word": "shells"
    },
    {
      "word": "of",
      "start": 14.315001,
      "end": 14.555,
      "confidence": 0.9998568,
      "punctuated_word": "of"
    },
    {
      "word": "broken",
      "start": 14.555,
      "end": 15.055,
      "confidence": 0.99990094,
      "punctuated_word": "broken"
    },
    {
      "word": "this",
      "start": 17.76,
      "end": 18,
      "confidence": 0.9994962,
      "punctuated_word": "This"
    },
    {
      "word": "was",
      "start": 18,
      "end": 18.24,
      "confidence": 0.999699,
      "punctuated_word": "was"
    },
    {
      "word": "the",
      "start": 18.24,
      "end": 18.4,
      "confidence": 0.9993426,
      "punctuated_word": "the"
    },
    {
      "word": "bed",
      "start": 18.4,
      "end": 18.9,
      "confidence": 0.9999548,
      "punctuated_word": "bed"
    },
    {
      "word": "that",
      "start": 19.119999,
      "end": 19.279999,
      "confidence": 0.9996524,
      "punctuated_word": "that"
    },
    {
      "word": "had",
      "start": 19.279999,
      "end": 19.599998,
      "confidence": 0.9995152,
      "punctuated_word": "had"
    },
    {
      "word": "raised",
      "start": 19.599998,
      "end": 20.099998,
      "confidence": 0.999856,
      "punctuated_word": "raised"
    },
    {
      "word": "the",
      "start": 20.16,
      "end": 20.4,
      "confidence": 0.99944323,
      "punctuated_word": "the"
    },
    {
      "word": "king",
      "start": 20.4,
      "end": 20.64,
      "confidence": 0.97845995,
      "punctuated_word": "king"
    },
    {
      "word": "of",
      "start": 20.64,
      "end": 20.8,
      "confidence": 0.9995865,
      "punctuated_word": "of"
    },
    {
      "word": "spain",
      "start": 20.8,
      "end": 21.3,
      "confidence": 0.9998405,
      "punctuated_word": "Spain"
    },
    {
      "word": "to",
      "start": 22,
      "end": 22.16,
      "confidence": 0.93484885,
      "punctuated_word": "to"
    },
    {
      "word": "be",
      "start": 22.16,
      "end": 22.4,
      "confidence": 0.9997811,
      "punctuated_word": "be"
    },
    {
      "word": "a",
      "start": 22.4,
      "end": 22.64,
      "confidence": 0.9997888,
      "punctuated_word": "a"
    },
    {
      "word": "great",
      "start": 22.64,
      "end": 22.96,
      "confidence": 0.9998838,
      "punctuated_word": "great"
    },
    {
      "word": "power",
      "start": 22.96,
      "end": 23.439999,
      "confidence": 0.9999503,
      "punctuated_word": "power"
    },
    {
      "word": "in",
      "start": 23.439999,
      "end": 23.68,
      "confidence": 0.9998722,
      "punctuated_word": "in"
    },
    {
      "word": "europe",
      "start": 23.68,
      "end": 24.16,
      "confidence": 0.99984837,
      "punctuated_word": "Europe"
    },
    {
      "word": "in",
      "start": 24.16,
      "end": 24.56,
      "confidence": 0.999561,
      "punctuated_word": "in"
    },
    {
      "word": "past",
      "start": 24.56,
      "end": 24.88,
      "confidence": 0.99904543,
      "punctuated_word": "past"
    },
    {
      "word": "years",
      "start": 24.88,
      "end": 25.38,
      "confidence": 0.9989879,
      "punctuated_word": "years."
    },
    {
      "word": "it",
      "start": 27.135,
      "end": 27.375,
      "confidence": 0.9995796,
      "punctuated_word": "It"
    },
    {
      "word": "helped",
      "start": 27.535,
      "end": 28.035,
      "confidence": 0.99996233,
      "punctuated_word": "helped"
    },
    {
      "word": "to",
      "start": 28.335,
      "end": 28.494999,
      "confidence": 0.99979395,
      "punctuated_word": "to"
    },
    {
      "word": "pay",
      "start": 28.494999,
      "end": 28.735,
      "confidence": 0.99993217,
      "punctuated_word": "pay"
    },
    {
      "word": "for",
      "start": 28.735,
      "end": 28.975,
      "confidence": 0.9997881,
      "punctuated_word": "for"
    },
    {
      "word": "his",
      "start": 28.975,
      "end": 29.215,
      "confidence": 0.9998584,
      "punctuated_word": "his"
    },
    {
      "word": "wars",
      "start": 29.215,
      "end": 29.715,
      "confidence": 0.99976116,
      "punctuated_word": "wars"
    },
    {
      "word": "and",
      "start": 30.494999,
      "end": 30.654999,
      "confidence": 0.78154653,
      "punctuated_word": "and"
    },
    {
      "word": "had",
      "start": 30.654999,
      "end": 30.974998,
      "confidence": 0.9998098,
      "punctuated_word": "had"
    },
    {
      "word": "decorated",
      "start": 30.974998,
      "end": 31.474998,
      "confidence": 0.99999833,
      "punctuated_word": "decorated"
    },
    {
      "word": "the",
      "start": 31.615,
      "end": 31.775,
      "confidence": 0.9993544,
      "punctuated_word": "the"
    },
    {
      "word": "churches",
      "start": 31.775,
      "end": 32.275,
      "confidence": 0.99979025,
      "punctuated_word": "churches"
    },
    {
      "word": "for",
      "start": 32.495,
      "end": 32.735,
      "confidence": 0.9998005,
      "punctuated_word": "for"
    },
    {
      "word": "his",
      "start": 32.735,
      "end": 32.975,
      "confidence": 0.9998555,
      "punctuated_word": "his"
    },
    {
      "word": "the",
      "start": 34,
      "end": 34.4,
      "confidence": 0.9998473,
      "punctuated_word": "The"
    },
    {
      "word": "gray",
      "start": 34.4,
      "end": 34.72,
      "confidence": 0.9437498,
      "punctuated_word": "gray"
    },
    {
      "word": "oysters",
      "start": 34.72,
      "end": 35.22,
      "confidence": 0.99726456,
      "punctuated_word": "oysters"
    },
    {
      "word": "with",
      "start": 36.16,
      "end": 36.56,
      "confidence": 0.75733703,
      "punctuated_word": "with"
    },
    {
      "word": "ruffles",
      "start": 36.56,
      "end": 37.06,
      "confidence": 0.9999028,
      "punctuated_word": "ruffles"
    },
    {
      "word": "like",
      "start": 37.2,
      "end": 37.6,
      "confidence": 0.99701536,
      "punctuated_word": "like"
    },
    {
      "word": "skirts",
      "start": 37.6,
      "end": 38.08,
      "confidence": 0.99955946,
      "punctuated_word": "skirts"
    },
    {
      "word": "on",
      "start": 38.08,
      "end": 38.32,
      "confidence": 0.9994332,
      "punctuated_word": "on"
    },
    {
      "word": "the",
      "start": 38.32,
      "end": 38.56,
      "confidence": 0.9992324,
      "punctuated_word": "the"
    },
    {
      "word": "shells",
      "start": 38.56,
      "end": 39.06,
      "confidence": 0.80806863,
      "punctuated_word": "shells,"
    },
    {
      "word": "were",
      "start": 40.16,
      "end": 40.48,
      "confidence": 0.99877125,
      "punctuated_word": "were"
    },
    {
      "word": "encrusted",
      "start": 40.48,
      "end": 40.98,
      "confidence": 0.9996104,
      "punctuated_word": "encrusted"
    },
    {
      "word": "with",
      "start": 41.28,
      "end": 41.6,
      "confidence": 0.99985266,
      "punctuated_word": "with"
    },
    {
      "word": "barnacles",
      "start": 41.6,
      "end": 42.1,
      "confidence": 0.97232276,
      "punctuated_word": "barnacles."
    },
    {
      "word": "little",
      "start": 44.655,
      "end": 44.895,
      "confidence": 0.9997552,
      "punctuated_word": "Little"
    },
    {
      "word": "bits",
      "start": 44.895,
      "end": 45.295002,
      "confidence": 0.99986434,
      "punctuated_word": "bits"
    },
    {
      "word": "of",
      "start": 45.295002,
      "end": 45.615,
      "confidence": 0.99960333,
      "punctuated_word": "of"
    },
    {
      "word": "weed",
      "start": 45.615,
      "end": 46.115,
      "confidence": 0.999305,
      "punctuated_word": "weed"
    },
    {
      "word": "clung",
      "start": 46.895,
      "end": 47.295,
      "confidence": 0.9741685,
      "punctuated_word": "clung"
    },
    {
      "word": "to",
      "start": 47.295,
      "end": 47.535,
      "confidence": 0.99942845,
      "punctuated_word": "to"
    },
    {
      "word": "the",
      "start": 47.535,
      "end": 47.775,
      "confidence": 0.9996532,
      "punctuated_word": "the"
    },
    {
      "word": "skirts",
      "start": 47.775,
      "end": 48.275,
      "confidence": 0.99877685,
      "punctuated_word": "skirts"
    },
    {
      "word": "and",
      "start": 49.295,
      "end": 49.695,
      "confidence": 0.75674754,
      "punctuated_word": "and"
    },
    {
      "word": "small",
      "start": 49.695,
      "end": 50.175,
      "confidence": 0.9998548,
      "punctuated_word": "small"
    },
    {
      "word": "climbed",
      "start": 51.755688,
      "end": 51.99569,
      "confidence": 0.9944377,
      "punctuated_word": "climbed"
    },
    {
      "word": "over",
      "start": 51.99569,
      "end": 52.395687,
      "confidence": 0.99696606,
      "punctuated_word": "over"
    },
    {
      "word": "them",
      "start": 52.395687,
      "end": 52.895687,
      "confidence": 0.93306446,
      "punctuated_word": "them."
    }
  ]
};

onsole.log(w["words"][0].word);
