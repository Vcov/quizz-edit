// Modyfikacja wyniku
const success = document.getElementById("success-fill");
const danger = document.getElementById("danger-fill");
const resultInput = document.getElementById("wynik");
const pasek = document.getElementById("pasek");
const pasekText = document.getElementById("pasektext");

// Modyfikacja odpowiedzi

const podpInput = document.getElementById("podp");
const zodpInput = document.getElementById("zodp");
const podpLabel = document.getElementById("pop");
const zodpLabel = document.getElementById("zle");

const nazwaGracza = document.getElementById("nazwa");
const nazwaInput = document.getElementById("nazwa-input");

resultInput.addEventListener("change", () => {
  let percentage = resultInput.value;
  success.style = `width: calc(${percentage}% - 2px)`;
  danger.style = `width: calc(${100 - percentage}% - 2px)`;
  pasek.style = `left: calc(${percentage}% - 18px)`;
  pasekText.textContent = `${percentage}%`;
});

podpInput.addEventListener("change", () => {
  podpLabel.textContent = podpInput.value;
});

zodpInput.addEventListener("change", () => {
  zodpLabel.textContent = zodpInput.value;
});

nazwaInput.addEventListener("change", () => {
  nazwaGracza.textContent = nazwaInput.value;
});
