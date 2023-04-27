function appendBody(tag) {
    document.body.append(tag);
  }
  
  function inputAdd(amount) {
    for (let i = 0; i < amount; i++) {
      const input = document.createElement('input');
      input.classList.add("input");
      appendBody(input);
    }
  }
  inputAdd(2);
  
  const changeBtn = document.createElement('button');
  changeBtn.innerText = "flip-flop";
  changeBtn.onclick = function () { flipFlop(); };
  appendBody(changeBtn);
  
  function flipFlop() {
    const [...arr] = document.getElementsByClassName('input');
    if (!arr[0].value || !arr[1].value) { return alert('заполните оба поля'); }
    arr[2] = arr[0].value;
    arr[0].value = arr[1].value;
    arr[1].value = arr[2];
  }