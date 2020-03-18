function pr(input) {
        input.value = input.value.replace(/[^\d,]/g, '');
    };

    const root = document.getElementById("root");
    const arr_symbols = ['j', 'k', 'f', 'd', " "];
    const arr_colors = ['success', 'warning', 'error', 'yellow', 'violet'];
    let miss = 0;
   

    function init(){
                sec = 0;
                setInterval(tick, 1000);
            }
            
    function tick(){
        sec++;
        document.getElementById("times").
        childNodes[0].nodeValue = sec;       
        }

    function play(){
        if (input.value == ""){
            input.placeholder = "Не заполнено!"
            input.style.border = "3px solid red";
        }
        else{
            event.preventDefault();
            const input_count = input.value;
            root.classList.add("ten");
            document.getElementById("del").remove();
            time.style.display = 'flex';
            init();
            game(input_count);
        }
    }

    function game(input_count){

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
    
        final_arr.forEach(element => {
            root.insertAdjacentElement('beforeend', element);
        });
    
    
    
    window.onkeydown = function(event){
       let buttons = document.querySelectorAll("button");
        if (event.key == buttons[0].textContent){
            if(buttons.length == 1){ 
                document.getElementById("time").remove();  
                alert('Вы затратили '+sec+' sec и '+miss+' ошибки');
                location.reload(true)
            }
                buttons[0].remove();     
        }
        else {
            miss++;
        }
    }
    }







