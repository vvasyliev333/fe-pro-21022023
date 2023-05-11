let firstElement;

function selectFirstChild() {
  let elem;
  if (firstElement) {
    elem = firstElement;
    elem.style.backgroundColor = 'transparent';
    elem = document.querySelector('#list').firstElementChild;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  } else {
    elem = document.querySelector('#list').firstElementChild;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  }
}

function selectLastChild() {
  let elem;
  if (firstElement) {
    elem = firstElement;
    elem.style.backgroundColor = 'transparent';
    elem = document.querySelector('#list').lastElementChild;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  } else {
    elem = document.querySelector('#list').lastElementChild;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  }
}


function selectNextNode() {
  let elem;
  if (!firstElement) {
    elem = document.querySelector('#list').firstElementChild;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  } else if (firstElement == document.querySelector('#list').lastElementChild) {
    elem = firstElement;
    elem.style.backgroundColor = 'transparent';
    elem = document.querySelector('#list').firstElementChild;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  } else {
    elem = firstElement;
    elem.style.backgroundColor = 'transparent';
    elem = elem.nextElementSibling;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  }
}

function selectPrevNode() {
  let elem;
  if (!firstElement) {
    elem = document.querySelector('#list').lastElementChild;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  } else if (firstElement == document.querySelector('#list').firstElementChild) {
    elem = firstElement;
    elem.style.backgroundColor = 'transparent';
    elem = document.querySelector('#list').lastElementChild;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  } else {
    elem = firstElement;
    elem.style.backgroundColor = 'transparent';
    elem = elem.previousElementSibling;
    elem.style.color = 'red';
    elem.style.backgroundColor = 'black';
    firstElement = elem;
  }
}
function createNewChild() {
    const elem = document.querySelector("#list");
    let newElement = document.createElement("li");
    newElement.innerText = "New element";
    elem.append(newElement);
}

function removeLastChild() {
    document.querySelector('#list').lastElementChild.remove();
  }
  
function createNewChildAtStart() {
    const elem = document.querySelector("#list");
    let newElement = document.createElement("li");
    newElement.innerText = "New element";
    elem.prepend(newElement);
}


