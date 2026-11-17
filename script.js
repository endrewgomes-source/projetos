const videoLinks = {
  messi: "https://www.youtube.com/results?search_query=Messi+roubando+a+bola+melhores+lances",
  ronaldo: "https://www.youtube.com/results?search_query=Cristiano+Ronaldo+skills+melhores+gols+carreira"
};

const result = document.querySelector("#result");
const resultTitle = document.querySelector("#result-title");
const resultCopy = document.querySelector("#result-copy");
const videoLink = document.querySelector("#video-link");
const resetButton = document.querySelector("#reset-button");

// Efeitos sonoros originais feitos com a Web Audio API (sem biblioteca externa).
function playVoteSound(player) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const audio = new AudioContext();
  const now = audio.currentTime;

  function tone(frequency, start, duration, type = "sine", volume = 0.12) {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now + start);
    gain.gain.setValueAtTime(0.001, now + start);
    gain.gain.exponentialRampToValueAtTime(volume, now + start + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.001, now + start + duration);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(now + start);
    oscillator.stop(now + start + duration + 0.03);
  }

  if (player === "messi") {
    // Sequência brilhante e rápida, como um toque de vitória.
    [659, 784, 988, 1318].forEach((note, index) => {
      tone(note, index * 0.11, 0.42, "sine", 0.10);
    });
  } else {
    // Acorde grave e marcante, lembrando uma chamada de estádio.
    [196, 246.94, 293.66].forEach((note) => {
      tone(note, 0, 0.75, "sawtooth", 0.055);
    });
    tone(392, 0.18, 0.55, "triangle", 0.09);
    tone(523.25, 0.38, 0.65, "triangle", 0.08);
  }

  window.setTimeout(() => audio.close(), 1800);
}

document.querySelectorAll(".vote-button").forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.dataset.player;
    playVoteSound(choice);

    if (choice === "messi") {
      resultTitle.textContent = "MESSI É O SEU GOAT! 🐐";
      resultCopy.textContent = "A escolha foi feita. Confira lances em que Messi recupera a bola e desmonta a defesa.";
      videoLink.href = videoLinks.messi;
    } else {
      resultTitle.textContent = "CRISTIANO RONALDO É O SEU GOAT! 🐐";
      resultCopy.textContent = "A escolha foi feita. Prepare-se para rever dribles, habilidades e gols marcantes de CR7.";
      videoLink.href = videoLinks.ronaldo;
    }

    result.classList.remove("hidden");
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

resetButton.addEventListener("click", () => {
  result.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#year").textContent = new Date().getFullYear();
