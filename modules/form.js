(function(){

    function someFn() {
        //функция что-то делает в форме или становится обработчиком
    }

    function validationInput(evt) {
        var input = evt.currentTarget;

        // используем другой модуль
        if (window.validation.isMail(input)) {
            // валидация прошла
        } else {
            // валидация не прошла
        }
    }

    window.form = {
        init: function(domElem) {
            var emailInput = domElem.elements.email;

            domElem.addEventListener('click', someFn);
            emailInput.addEventListener('input', validationInput);
        }
    }
})()