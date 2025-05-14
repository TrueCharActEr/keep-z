const textInput = document.getElementById('textInput');
    const keys = document.querySelectorAll('.key');
    const displayText = document.getElementById('displayText');
    const backspaceButton = document.querySelector('.action-btn:nth-child(1)');
    const spaceButton = document.querySelector('.action-btn:nth-child(2)');
    const enterButton = document.querySelector('.action-btn:nth-child(3)');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            if (textInput.value.length < 9) { 
                textInput.value += key.innerText; 
            }
            textInput.focus(); 
        });
    });

    backspaceButton.addEventListener('click', () => {
        textInput.value = textInput.value.slice(0, -1);
        textInput.focus();
    });

    spaceButton.addEventListener('click', () => {
        textInput.value += ' '; 
        textInput.focus();
    });

    enterButton.addEventListener('click', () => {
        textInput.blur(); 
    });

    textInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            textInput.blur(); 
        }
    });
