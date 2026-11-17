const videoLinks = {
  messi: "https://youtu.be/nuSZ_pgkwGQ?is=94I3amoCvzDn7vXG",
  ronaldo: "https://youtu.be/ttDbSrXnCH4?is=YIbc6horFOhP6UeW"
};

const result = document.querySelector("#result");
const resultTitle = document.querySelector("#result-title");
const resultCopy = document.querySelector("#result-copy");
const videoLink = document.querySelector("#video-link");
const resetButton = document.querySelector("#reset-button");

document.querySelectorAll(".vote-button").forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.dataset.player;

    if (choice === "messi") {
      resultTitle.textContent = "MESSI É O SEU GOAT! 🐐";
      resultCopy.textContent = "A pior escolha foi feita.";
      videoLink.href = videoLinks.messi;
    } else {
      resultTitle.textContent = "CRISTIANO RONALDO É O SEU GOAT! 🐐";
      resultCopy.textContent = "A escolha foi feita. Prepare-se o Verdadeiro GOAT.";
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
