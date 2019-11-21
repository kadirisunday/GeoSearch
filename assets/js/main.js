// Initialize Firebase
var config = {
  apiKey: "AIzaSyDDKwUckq4aPc_WMcdyqG7iAh1tJ7PPyCk",
  authDomain: "portfolio-efac7.firebaseapp.com",
  databaseURL: "https://portfolio-efac7.firebaseio.com",
  projectId: "portfolio-efac7",
  storageBucket: "portfolio-efac7.appspot.com",
  messagingSenderId: "187575136076"
};
firebase.initializeApp(config);

var app = {
  submitToDatabase: function () {
    var _form = document.querySelector('.job__form');
    var _name = _form.querySelector('.form__input');
    var _message = _form.querySelector('.job__textarea');
    _form.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log(_name.value, _message.value)
    });
  },
  showResume: function () {
    var _togglers = Array.from(document.getElementsByClassName('toggler'));
    var _html = document.getElementsByTagName('html')[0];

    _togglers.forEach(function (_toggler) {
      _toggler.addEventListener('click', function () {
        _html.classList.toggle('cv-open');
      });
    });
  }
}