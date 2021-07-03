 display = document.querySelector('input'),
 button = document.querySelector('button'),
 copyBtn = document.querySelector('span.far'),
 copyActive = document.querySelector('span.fas'),
 display = document.querySelector('input');
let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+`|}{[]:;><,./-="
button.onclick = () => {
    let i,
    randomPassword = "";
    copyBtn.style.display = 'block';
    copyActive.style.display = 'none';
    debugger;
    for (i = 0; i <16; i++) {
        randomPassword = randomPassword + char.charAt(
            Math.floor(Math.random() * char.length)
        );
    }
    display.value = randomPassword;

}
function copy() {
    copyBtn.style.display = 'none';
    copyActive.style.display = 'block';
    display.select();
    document.execCommand('copy')
}

