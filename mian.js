(function () {
    var startBtn = document.querySelector('#strtBtn');
    var mapContainer = document.querySelector('#map');
    var formContainer = document.querySelector('#form');

    function appInit() {
        window.form.init(formContainer);
        window.map.init(mapContainer);
    }

    startBtn.addEventListener('click', appInit);
})();