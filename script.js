const body = document.querySelector("body");
const date = document.getElementById("date");
const open = document.getElementById("open");
const rootElement = document.querySelector(":root");
open.addEventListener("click", function () {
  opened();
});

function opened() {
  body.className = "";
  if (date) {
    date.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  playmusic();
  mediaplayer.classList.remove("d-none");

  setTimeout(() => {
    open.classList.add("d-none");
  }, 500);
}

// window.onload = () => {
//   scrollTo(0, 0);

//   setTimeout(() => {
//     body.className = "max-vh-100 overflow-hidden";
//   }, 100);
// };

const audioplayer = document.getElementById("audio-player");
const mediaplayer = document.querySelector(".media-player");
// audioplayer.play();

function playmusic() {
  audioplayer.play();
  date.classList.add("active");
  mediaplayer.style.animation = "rotation 2s linear infinite";
}

function pausemusic() {
  audioplayer.pause();
  date.classList.remove("active");
  mediaplayer.style.animation = "";
}

mediaplayer.addEventListener("click", function () {
  date.classList.contains("active") ? pausemusic() : playmusic();
});

audioplayer.addEventListener("ended", function () {
  playmusic();
});

const urlname = new URLSearchParams(window.location.search);
const getnama = urlname.get("nama");

const nama = document.querySelector(".nama");

if (getnama !== null) {
  nama.innerHTML = getnama;
} else {
  nama.innerHTML = "Keluarga Besar Yang Bersangkutan";
}
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success!");
    });
  });
});
