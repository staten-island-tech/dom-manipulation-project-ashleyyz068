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
    clearFields();
}); 

function injectCard(card){
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend", `
        <div class="card1">
        <div class="card">
        <h2> ${card.title} </h2>
        <img class="card-img" src="${card.image}" alt="">
        <p> ${card.description}</p>
    </div>
    <button class="removeBtn" onclick="removeCard(this)">Remove</button>
    </div>
        `)
}; 

const images = document.querySelectorAll('.card-img');


function clearFields() {
    DOMSelectors.title.value = "";
    DOMSelectors.image.value = "";
    DOMSelectors.description.value = "";
}; 

function removeCard(element) {
    element.parentElment.remove(); 
}
