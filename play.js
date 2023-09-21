// const browser = window;
// const url = new URL("./bgm/Future_1.mp3");
// const audio = new Audio('./bgm/Future_1.mp3');
// audio.play();
// audio.volume = 0.5;

var btn = document.createElement("button");
btn.setAttribute("id", "cheat_btn");
btn.innerHTML = "答えを見る";


var  title = document.getElementsByClassName("tmp2203-question__hd__l")[0];
title.appendChild(btn);

function buttonClick(){
    let element = document.getElementById("explain_block").children[0].innerText
    let textbox_element = document.getElementsByClassName('tmp2203-question__bd__hd__ttl')[0];
    let new_element = document.createElement('p');
    new_element.textContent = element;
    textbox_element.appendChild(new_element);
}


let button = document.getElementById('cheat_btn');
button.onclick = buttonClick;