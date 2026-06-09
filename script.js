const greetBtn = document.getElementById('greet-btn');
const nameInput = document.getElementById('name-input');
const greetingText = document.getElementById('greeting');

greetBtn.addEventListener('click', function() {
    const enteredName = nameInput.value;

    if (enteredName.trim() !=="") {
        greetingText.innerText = "Hello, " + enteredName;
    } else {
        greetingText.innerText = "hello, ";
    }
});

const colorBoxes = document.querySelectorAll('.color-box');

colorBoxes.forEach(function(box) {
    box.addEventListener('click', function() {
        const selectedColor = box.getAttribute('data-color');
        box.classList.toggle('is-circle');
         
        if (box.classList.contains('is-circle')) {
            box.style.backgroundColor = selectedColor;
            box.style.borderColor = selectedColor;
            box.style.boxShadow = `0 0 30px ${selectedColor}`;
            box.style.color = (selectedColor === '#eccc68') ? '#121212' : '#ffffff';
        } else {
            box.style.backgroundColor = '#1e1e24';
            box.style.borderColor = '#333';
            box.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.5)';
            box.style.color = '#777';
        }
    });
});