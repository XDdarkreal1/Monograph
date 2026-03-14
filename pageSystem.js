const pages = [
"pages/issue1/cover.jpg",
"pages/issue1/2.jpg",
"pages/issue1/3.jpg",
"pages/issue1/4.jpg"
];

let currentPage = 0;

const page = document.getElementById("page");

function showPage(){
    page.src = pages[currentPage];
}

showPage();

document.getElementById("next").onclick = () => {

    if(currentPage < pages.length - 1){
        currentPage++;
        showPage();
    }

};

document.getElementById("prev").onclick = () => {

    if(currentPage > 0){
        currentPage--;
        showPage();
    }

};

document.addEventListener("keydown", e => {

if(e.key === "ArrowRight") document.getElementById("next").click();

if(e.key === "ArrowLeft") document.getElementById("prev").click();

});
