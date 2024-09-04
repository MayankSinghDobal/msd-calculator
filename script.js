document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerText;

            switch (value) {
                case 'C':
                    display.value = '';
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += value;
                    break;
            }
        });
    });
});
