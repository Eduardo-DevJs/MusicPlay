const buttonAction = document.querySelector("#button-action");
const music = new Audio(
  "./assets/Charlie Brown Jr. - Dias de Luta_ Dias de Glória(MP3_160K).mp3"
);

const toogleMusic = async () => {
  if (music.paused) {
    await music
      .play()
      .then(() => {})
      .catch((err) => {
        console.log("Erro ao tocar musica: " + err);
      });

    buttonAction.setAttribute("src", "./assets/img/pause.png");
  } else {
    music.pause();
    buttonAction.setAttribute("src", "./assets/img/play.png");
  }
};

buttonAction.addEventListener("click", toogleMusic);
