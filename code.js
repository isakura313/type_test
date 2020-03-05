
    //выполняется весь код
    const root = document.getElementById("root");
    const arr_symbols = ['j', 'k', 'f', 'd', " "];
    const arr_colors = ['success', 'warning', 'error', 'yellow', 'violet'];

    const input_count = 20;

    function render_state(arr, count){
        let rand_arr = [];
        for (let i = 0; i < count; i++) {
            let rand_numb = Math.floor(Math.random() * arr.length)
            let newButton = document.createElement("button");
            newButton.innerHTML = arr[rand_numb];
            newButton.classList.add(arr_colors[rand_numb]);
            rand_arr.push(newButton);
        }
        return rand_arr; 
    }
    let final_arr = render_state(arr_symbols , input_count);

    // for (let i = 0; i < 10; i++) {
    //     root.insertAdjacentElement('beforeend', final_arr[i]);
    // }

    final_arr.forEach(element => {
        root.insertAdjacentElement('beforeend', element);
    });


// получаем массив кнопок из DOM
// получить их содержимое через контекст
//если нажата кнопка key, которая совпадает с context 
// элемент удаляется

// когда элементы закончатся, вы победили
// вы прошли уровень за столько ко секунд

// let buttons = document.querySelectorAll("button");

window.onkeydown = function(event){
   let buttons = document.querySelectorAll("button");
    if (event.key == buttons[0].textContent){
        buttons[0].remove();        
    }
}



