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
  const taggetStuff = document.querySelector(".tagget-stuff");

  if (tab === "opslag") {
    opslagStuff.classList.remove("hide");
    taggetStuff.classList.add("hide");
  } else if (tab === "gemt") {
    opslagStuff.classList.add("hide");
    taggetStuff.classList.add("hide");
  } else if (tab === "tagget") {
    opslagStuff.classList.add("hide");
    taggetStuff.classList.remove("hide");
  }
}

//gør så følg knappen virker
function toggleFollow() {
  const followBtn = document.querySelector(".Følg-button");
  const followerBtn = document.querySelector("#follower-btn");
  const followerProfile = document.querySelector(".følgere-profil");

  if (followBtn.textContent === "Følg") {
    // ændringer skal foretages
    followBtn.textContent = "Følgere";
    followBtn.style.backgroundColor = "lightgray";
    followBtn.style.color = "black";
    followerBtn.innerHTML = "<h2>1 følgere</h2>";
    followerProfile.classList.remove("hide");
  } else {
    // ændringerne skal fjernes
    followBtn.textContent = "Følg";
    followBtn.style.backgroundColor = "";
    followBtn.style.color = "";
    followerBtn.innerHTML = "<h2>0 følgere</h2>";
    followerProfile.classList.add("hide");
  }
}

const følgereButton = document.querySelector(".følgere-button");
const popupfølgere = document.querySelector(".popup-følgere");
const closefølgere = document.querySelector(".fa-x");

følgereButton.addEventListener("click", () => {
  popupfølgere.classList.remove("hide");
});

closefølgere.addEventListener("click", () => {
  popupfølgere.classList.add("hide");
});

const nysamling = document.querySelector(".ny-samling");
const popupsamling = document.querySelector(".popup-samling");
const closesamling = document.querySelector(".fa-regular");

nysamling.addEventListener("click", () => {
  popupsamling.classList.remove("hide");
});

closesamling.addEventListener("click", () => {
  popupsamling.classList.add("hide");
});

function søgpop() {
  const navbarStuff = document.querySelector(".navbar-stuff");

  const navbar = document.querySelector(".navbar");
  const h2Elements = navbar.querySelectorAll("h2");
  for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].remove();
  }

  navbarStuff.style.paddingRight = "10px";
  navbarStuff.style.display = "flex";
  navbarStuff.style.justifyContent = "center";
  navbarStuff.style.alignItems = "center";
  navbarStuff.style.textAlign = "center";
  navbarStuff.style.flexDirection = "column";

  const profilBillede = document.querySelector("#logo");
  const instagramIkon = document.createElement("i");
  instagramIkon.classList.add("fa-brands", "fa-instagram");
  profilBillede.replaceWith(instagramIkon);
}
