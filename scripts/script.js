let searchText = document.querySelector(".header__search-text");
let search = document.querySelector('.header__search');
let langSwitch = document.querySelector('.header__lang-switch');

search.onclick = function () {
  searchText.style.display = 'block';
  searchText.focus();
  search.style.display = 'none';
  langSwitch.style.display = 'none';
}

searchText.addEventListener("blur", function( event ) {
  searchText.style.display = 'none';
  search.style.display = 'block';
  langSwitch.style.display = 'block';
}, true);
