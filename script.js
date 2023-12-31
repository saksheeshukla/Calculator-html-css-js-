const Solve = (char) => {
    var sound = document.getElementById("audio");
     sound.play();
    let display = document.getElementById("display");
    display.value += char;
};

const Clear = () => {
    document.getElementById("display").value = "";
};

const Backspace = () => {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
};

const Result = () => {
    let display = document.getElementById("display");
    let expression = display.value;
    try {
        display.value = eval(expression);
    } catch (err) {
        document.getElementById("error").innerText="Please enter a valid expression"
        let text = `Error! ${expression} is not a valid expression`;
        console.error(text);
    }
};

function PlaySound(soundObj) {
    var sound = document.getElementById(soundObj);
    sound.Play();
}
