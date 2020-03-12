    //выполняется весь код
const root = document.getElementById("root");
const arr_symbols = ['j', 'k', 'f', 'd', " "];
const arr_colors = ['success', 'warning', 'error', 'yellow', 'violet'];
let screen = document.createElement('div');
let mistakes_count = 0;

    //createInitialScreen
    screen.classList.add("initial-screen");
    root.appendChild(screen);

    let initialScreen__text = document.createElement("div");
    let initialScreen__data = document.createElement("div");
    initialScreen__text.classList.add("initial-screen__text");
    initialScreen__data.classList.add("initial-screen__data");
    let data__input = document.createElement("input");
    let data__button = document.createElement("button");

    initialScreen__data.appendChild(data__input);
    initialScreen__data.appendChild(data__button);

    initialScreen__text.innerHTML = `Введите количество элементов`;
    data__button.innerHTML = "Начать";

    screen.insertAdjacentElement('beforeend', initialScreen__text);
    screen.insertAdjacentElement('beforeend', initialScreen__data);


    //clearInitialScreen and render game
    data__button.onclick = function (event) {
        event.preventDefault();
        const input_count = data__input.value;
        root.removeChild(screen);
        root.classList.add("ten");
        render(input_count);
    };



function render(input_count) {
    function render_state(arr, count){
        let rand_arr = [];
        for (let i = 0; i < count; i++) {
            let rand_numb = Math.floor(Math.random() * arr.length);
            let newButton = document.createElement("button");
            newButton.innerHTML = arr[rand_numb];
            newButton.classList.add(arr_colors[rand_numb]);
            rand_arr.push(newButton);
        }
        return rand_arr;
    }
    let final_arr = render_state(arr_symbols , input_count);

    final_arr.forEach(element => {
        root.insertAdjacentElement('beforeend', element);
    });


    let startTime = 0;
    let stopTime = 0;
    mistakes_count = 0;

    window.onkeydown = function(event){
        let buttons = document.querySelectorAll("button");
        if (event.key === buttons[0].textContent){
            if(buttons.length === +data__input.value && mistakes_count === 0){
                startTime = event.timeStamp;
            } else if(buttons.length === 1){
                stopTime = event.timeStamp;
                let result = document.createElement("div");
                result.classList.add("result");
                result.innerHTML = `Вы затратили ${Math.floor((stopTime - startTime) / 100) / 10} с., количество
                ошибок: ${mistakes_count}`;
                root.classList.remove("ten");
                root.classList.add("three");

                root.appendChild(result);
                setTimeout(() => { document.location.reload(); }, 1000);

            }
            buttons[0].remove();
        } else {
            if(startTime === 0){
                startTime = event.timeStamp;
            }
            mistakes_count++;
        }
    }
}



    // получаем массив кнопок из DOM
    // получить их содержимое через контекст
    //если нажата кнопка key, которая совпадает с context
    // элемент удаляется

    // когда элементы закончатся, вы победили
    // вы прошли уровень за столько ко секунд

