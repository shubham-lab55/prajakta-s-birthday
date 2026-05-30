/* =========================
   OPEN LETTER
========================= */

const message = `

Happy Birthday Prajuuu 💖🌸

Today is all about celebrating YOU.

Thank you for all the laughs,
the memories,
the random conversations,
and all the moments that became special.

You bring happiness wherever you go
and make ordinary days brighter.

I hope this birthday brings you
lots of smiles,
lots of happiness,
and everything you wish for.

Keep shining,
keep smiling,
and keep being the amazing person you are.

✨ Happy Birthday Prajuuu ✨

- Shubham 💖

`;

function openLetter() {

    document.getElementById("letter").style.display = "block";

    typeWriter();

    createHearts();

}

/* =========================
   TYPEWRITER EFFECT
========================= */

let i = 0;

function typeWriter() {

    const target =
        document.getElementById("typewriter");

    if (i < message.length) {

        target.innerHTML +=
            message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);
    }
}

/* =========================
   CHERRY BLOSSOMS
========================= */

function createPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
        Math.random() *
        window.innerWidth + "px";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);

}

setInterval(createPetal, 300);

/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let x = 0; x < 25; x++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "💖";

        heart.style.left =
            Math.random() *
            window.innerWidth + "px";

        heart.style.top =
            (window.innerHeight - 100) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);

    }

}

/* =========================
   PHOTO SLIDESHOW
========================= */

const photos = [


    "images/prajuu 1.jpeg",
    "images/prajuu 2.jpeg",
    "images/prajuu 3.jpeg",
    "images/prajuu 4.jpeg",
    "images/prajuu 5.jpeg",
    "images/prajuu 6.jpeg",
    "images/prajuu 7.jpeg",
    "images/prajuu 8.jpeg"


];

const captions = [

    "🌸 Your smile brightens everyone's day🌸",
    "🌸One of my favourite friend 🌸",
    "✨Pookie energy detected ✨",
    "Always making life brighter ☀️",
    "🎂 Today is your special day🎂",
    "🌟 You deserve lots of happiness🌟",
    "🌷 Keep being your awesome self 🌷",
    "🎉 Happy Birthday Prajuuu 🎂"

];

let current = 0;

setInterval(() => {

    current =
        (current + 1)
        % photos.length;

    document.getElementById("slide").src =
        photos[current];

    document.getElementById("caption").innerText =
        captions[current];

}, 3000);

/* =========================
   BIRTHDAY POPUP
========================= */

setTimeout(() => {

    alert(
        "🎂 Happy Birthday Prajuuu 🌸💖"
    );

}, 5000);