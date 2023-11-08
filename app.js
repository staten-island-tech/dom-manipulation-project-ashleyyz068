const DOMSelectors = {
    form: document.querySelector(`#form`),
    title: document.querySelector(`#title`),
    image: document.querySelector(`#image`),
    description: document.querySelector(`#description`),
    container: document.querySelector(`.container`) 
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const card = {
        title: DOMSelectors.title.value,
        image: DOMSelectors.image.value, 
        description: DOMSelectors.description.value,
    };
    injectCard(card);
    removeCard(); 
    clearFields();
}); 

function injectCard(card){
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend", `
        <div class="card1">
        <div class="card">
        <h2 class="card-heading"> ${card.title} </h2>
        <img class="card-img" src="${card.image}" alt="">
        <p class="card-description"> ${card.description}</p>
    </div>
    <button class="removeBtn">Remove</button>
    </div>
        `)
}; 

const images = document.querySelectorAll('.card-img');




function removeCard() {

    const buttons= document.querySelectorAll("removeBtn");
    buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        btn.target.parentElement.remove();
    });
});
}
function clearFields() {
    DOMSelectors.title.value = "";
    DOMSelectors.image.value = "";
    DOMSelectors.description.value = "";
}; 

// removeCard(); 