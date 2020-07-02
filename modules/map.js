(function(){

    function someFn() {
        //функция что-то делает в карте или становится обработчиком
    } 

    window.map = {
        init: function(domElem) {
            domElem.addEventListener('click', someFn);
        }
    }
})()