html[lang="ru"] [lang="en"] {
    display: none;
  }
  html[lang="en"] [lang="ru"] {
    display: none;
  }
  
  <ul class="langswitcher">
  <li class="active"><a href="#ru" data-lang="ru">Ru</a></li>
  <li><a href="#en" data-lang="en">En</a></li>
  </ul>
  
  $(".langswitcher a").on("click",function(e){
    e.preventDefault();
    $(".langswitcher li").removeClass("active");
    $("html").attr("lang",$(this).data("lang"));
    $(this).parent().addClass("active");
  });