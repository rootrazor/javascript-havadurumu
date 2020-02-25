$(document).ready(fonksiyon(){
  var bolgegetir = "Turkiye";
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + bolgegetir + "&format=json").success(fonksiyon(veri){
   console.log(vericek);
   $('#albakalim').html("Bölgenin Durumu Ve Sıcaklığı " + bolgegetir + " ");
  });
});
