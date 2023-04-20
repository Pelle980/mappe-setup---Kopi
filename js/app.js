//laver streg over opslag gemt eller tagget
const items = document.querySelectorAll("[aria-selected]");
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => item.classList.remove("selected"));
    item.classList.add("selected");
  });
});

//skift mellem opslag gemt og tagget
function toggleStuff(tab) {
  const opslagStuff = document.querySelector(".opslag-stuff");
  const gemStuff = document.querySelector(".gem-stuff");
  const taggetStuff = document.querySelector(".tagget-stuff");

  if (tab === "opslag") {
    opslagStuff.classList.remove("hide");
    gemStuff.classList.add("hide");
    taggetStuff.classList.add("hide");
  } else if (tab === "gemt") {
    opslagStuff.classList.add("hide");
    gemStuff.classList.remove("hide");
    taggetStuff.classList.add("hide");
  } else if (tab === "tagget") {
    opslagStuff.classList.add("hide");
    gemStuff.classList.add("hide");
    taggetStuff.classList.remove("hide");
  }
}

//settings popup
const popup = document.querySelector(".popup-settings");
const settingsIcon = document.querySelector(".settings-icon");
const cancelBtn = document.querySelector(".box button:last-child");

// vis popup når man trykker på settings iconet
settingsIcon.addEventListener("click", function () {
  popup.classList.remove("hide");
});

// fjerne popup når man trykker på annuller
cancelBtn.addEventListener("click", function () {
  popup.classList.add("hide");
});
