let firstElem

function selectFirstChild(){
    let element; 
    if (firstElem){
        firstElem = element; 
        element = document.querySelector("#list").firstElementChild;
        element.style.color = "red";
        element.style.backgroundColor = "black";
    }
    else{
        element = document.querySelector("#list").firstElementChild;
        element.style.color = "red";
        element.style.backgroundColor = "black";
        firstElem = element;
    }
}

function selectLastChild(){
    let element; 
    if (firstElem){
        firstElem = element; 
        element = document.querySelector("#list").lastElementChild;
        element.style.color = "blue";
        element.style.backgroundColor = "black";
    }
    else{
        element = document.querySelector("#list").lastElementChild;
        element.style.color = "blue";
        element.style.backgroundColor = "black";
        firstElem = element;
    }
}

function selectNextNode(){
    let element; 
    if (!firstElem){
        element = document.querySelector("#list").firstElementChild;
        element.style.color = "red";
        element.style.backgroundColor = "black";
        firstElem = element;
    }
    else if(element == document.querySelector("#list").lastElementChild){
        element = firstElem;
        element = document.querySelector("#list").firstElementChild;
        element.style.color = "pink";
        element.style.backgroundColor = "black";
        firstElem = element;
    }
    else{
        element = firstElem;
        element = element.nextElementSibling;
        element.style.color = "yellow";
        element.style.backgroundColor = "blue";
        firstElem = element;
    }
}

function selectPrevNode(){
    let element; 
    if (!firstElem){
        element = document.querySelector("#list").lastElementChild;
        element.style.color = "yellow";
        element.style.backgroundColor = "blue";
        firstElem = element;
    }
    else if(element == document.querySelector("#list").firstElementChild){
        element = firstElem;
        element = document.querySelector("#list").lastElementChild;
        element.style.color = "red";
        element.style.backgroundColor = "black";
        firstElem = element;
    }
    else{
        element = firstElem;
        element = element.previousElementSibling;
        element.style.color = "purple";
        element.style.backgroundColor = "black";
        firstElem = element;
    }
}
function createNewChild() {
    const element = document.querySelector("#list");
    let newElement = document.createElement("li");
    newElement.innerText = "New element";
    element.append(newElement);
}

function removeLastChild() {
    document.querySelector('#list').lastElementChild.remove();
  }
  
function createNewChildAtStart() {
    const element = document.querySelector("#list");
    let newElement = document.createElement("li");
    newElement.innerText = "New element";
    element.prepend(newElement);
}


