// load images on page load
function preloader() {

  const imagesPaths = [
    "./portfolio/lightbulb.png",
    "./portfolio/shower.png",
    "./portfolio/washing-machine.png"
  ];

  const images = [ ];

  for (let i = 0; i <imagesPaths.length; i++) {
    images[i] = new Image();
    images[i].src = imagesPaths[i];
  }

  // images ready to be used:
  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

window.addEventListener("load", preloader);

// create resources
const resources = [
  {
    headingContent: "Just the Tips Mobile App",
    imgUrl: "./portfolio/jtp.png",
    bodyText: "I redesigned the Just the Tips mobile app for a more user friendly experience."
  },
  {
    headingContent: "Students at Risk Research Project",
    imgUrl: "./portfolio/sar.png",
    bodyText: "As UX designer on the Students at Risk research project, I conducted all user research and testing, as well as designed all user interfaces."
  },
  {
    headingContent: "Community Dentist Desktop App",
    imgUrl: "./portfolio/dentist.png",
    bodyText: "This desktop website was designed in an effort to make appointment setting and patient information more accessible,."
  },
  {
    headingContent: "WatchD Desktop App",
    imgUrl: "./portfolio/watchd.png",
    bodyText: "This website was designed and developed to full functionality by me."
  }

];

const resources2 = [
  {
    headingContent: "Ethos Landscaping Company",
    imgUrl: "./portfolio/ethos.png",
    bodyText: "Ethos was given an entire brand refresh, including logo, colours and look & feel."
  },
  {
    headingContent: "Chronic Traumatic Encepholapathy",
    imgUrl: "./portfolio/info.png",
    bodyText: "This inforgraphic was researched and designed by me to call attention to the growing epedemic of CTE."
  },
  {
    headingContent: "Darkside of Online Shopping",
    imgUrl: "./portfolio/darkside.png",
    bodyText: "Using only the characters, I designed this to depict the environmtal impacts of online shopping."
  }
];

const resources3 = [
  {
    headingContent: "Organ Donation Banner Ad",
    imgUrl: "./portfolio/mitchell-a03.gif",
    bodyText: "This banner ad was designed and made by me. I used a slot machine to demonstate how low the chances are of receiving an organ transplant."
  },
  {
    headingContent: "CTE Explainer Video",
    imgUrl: "https://player.vimeo.com/video/332059645",
    bodyText: "In a continuation of CTE awareness, I made a video to explain the disease in more detail."
  },
  {
    headingContent: "Demo Reel",
    imgUrl: "https://player.vimeo.com/video/332061992",
    bodyText: "I edited this video to showcase all my work."
  }
];



/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

currentContent.innerHTML = `<div id="dots">
                            <h2>${resources[0].headingContent}</h2>
                            <article>
                            <img src="${resources[0].imgUrl}">
                            <p>${resources[0].bodyText}</p>
                            </article>
                            </div>

                            <div id="more">
                            <h2>${resources[1].headingContent}</h2>
                            <article>
                            <img src="${resources[1].imgUrl}">
                            <p>${resources[1].bodyText}</p>
                            </article>

                            <h2>${resources[2].headingContent}</h2>
                            <article>
                            <img src="${resources[2].imgUrl}">
                            <p>${resources[2].bodyText}</p>
                            </article>

                            <h2>${resources[3].headingContent}</h2>
                            <article>
                            <img src="${resources[3].imgUrl}">
                            <p>${resources[3].bodyText}</p>
                            </article>
                            </div>

                            `;

/* CREATING EVENT HANDLER */
function contentLoader(ev) {
  // console.log("content loader works");
  let eventTarget = ev.target.textContent;
  console.log(eventTarget.textContent);

  if (eventTarget === "UX Design") {
    currentContent.innerHTML = `
                                <div id="dots2">
                                <h2>${resources[0].headingContent}</h2>
                                <article>
                                <img src="${resources[0].imgUrl}">
                                <p>${resources[0].bodyText}</p>
                                </article>
                                </div>

                                <div id="more2">
                                <h2>${resources[1].headingContent}</h2>
                                <article>
                                <img src="${resources[1].imgUrl}">
                                <p>${resources[1].bodyText}</p>
                                </article>

                                <h2>${resources[2].headingContent}</h2>
                                <article>
                                <img src="${resources[2].imgUrl}">
                                <p>${resources[2].bodyText}</p>
                                </article>

                                <h2>${resources[3].headingContent}</h2>
                                <article>
                                <img src="${resources[3].imgUrl}">
                                <p>${resources[3].bodyText}</p>
                                </article>
                                </div>

                                `;

  } else if (eventTarget === "Print Design") {
    currentContent.innerHTML = `<div id="dots3">
                                <h2>${resources2[0].headingContent}</h2>
                                <article>
                                <img src="${resources2[0].imgUrl}">
                                <p>${resources2[0].bodyText}</p>
                                </article>
                                <div>

                                <div id="more3">
                                <h2>${resources2[1].headingContent}</h2>
                                <article>
                                <img src="${resources2[1].imgUrl}">
                                <p>${resources2[1].bodyText}</p>
                                </article>

                                <h2>${resources2[2].headingContent}</h2>
                                <article>
                                <img src="${resources2[2].imgUrl}">
                                <p>${resources2[2].bodyText}</p>
                                </article>
                                </div>
                                `;
  } else {
    currentContent.innerHTML = `
                                <h2>${resources3[0].headingContent}</h2>
                                <article>
                                <img src="${resources3[0].imgUrl}">
                                <p>${resources3[0].bodyText}</p>
                                </article>

                                <h2>${resources3[1].headingContent}</h2>
                                <article>
                                <iframe src="${resources3[1].imgUrl}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                <p>${resources3[1].bodyText}</p>
                                </article>

                                <h2>${resources3[2].headingContent}</h2>
                                <article>
                                <iframe src="${resources3[2].imgUrl}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                <p>${resources3[2].bodyText}</p>
                                </article>
                                `;
  }

  /* MOVE ID TO THE CURRENT BUTTON */
  // ev.target.id = "active";
  for (let btn of btns) {
    if (btn.id) {
      btn.removeAttribute("id");
    }
  }

  ev.target.id = "active";

}


/* REGISTER EVENT CONTENT (access buttons) */
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);
