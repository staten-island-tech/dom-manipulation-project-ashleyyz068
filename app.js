
const DOMSelectors ={
    button: document.getElementById("btn"), 
    text: document.querySelector("#input"), 
    box: document.getElementById("big-black-box"), 
    point: document.querySelectorAll(".point"),
};


DOMSelectors.button.addEventListener("click", function(){
    backgroundAndText(DOMSelectors.box, DOMSelectors.text);
})
DOMSelectors.text.addEventListener("")

function changeLi(){
    let pointIndec = 1; 
    DOMSelectors.point.forEach((point) => {
        point.addEventListener("click", function() {
            point.textContent = `hello ${pointIndec}`; 
        });
    });
}

changeLi(); 

 