const paragrafos = document.querySelector(".paragrafos");
const tagsP = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.background;

for (let tagP of tagsP){
    tagP.style.backgroundColor = backgroundColorBody;
    tagP.style.color = "#FFFFFF";
}