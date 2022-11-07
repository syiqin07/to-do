function crudplan(){
    window.location.href="crud.html"
  }

function buttonClick(){
  var city=document.getElementById("city_input").value;

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
.then((response) => response.json())
.then((data) => {
  console.log(data)

  //country buat if tempat tu tak jumpa
  if(data.message==='city not found'){
      var city=data.name
      var city="City information is not available";
      document.getElementById("displayname").innerHTML= city;
  }
  else{
  var city=data.name
  var temperature=data.main.temp- 273.15 ;
  var weather=data.weather[0].main;
  var desc=data.weather[0].description;
  var country=data.sys.country;
  var wind=data.wind.speed;
  

  //current weather
  
  if(weather=="Clouds"){
    var info="Hiking could be wonderful but needs a little more preperation ☁️.<br> Make sure to always prepare your sunblock and raincoat!☔";
  }
  else if(weather=="Clear"){
    var info="The sky is clear.<br> No sign of rain anytime soon";
  }
  else if(weather=="Rain"){
    var info="Oops! Its not the time for hiking 🌧️ .<br> Maybe searching another place?";
  }
  else if(weather=="Snow"){
    var info="Its snowing! ❄️<br> Winter hiking would be perfect... <br> Don't forget your gear.";
  }

  //wind speed
  
  if(wind<=0){
    var speed="The wind is calm and barely no wind speed.";
  }
  else if(wind>0 && wind<=3){
    var speed="Its time to feel the light and soothing air";
  }
  else if(wind>3 && wind<=18){
    var speed="Feel the light breeze! Its very soothing...";
  }
   else if(wind>18 && wind<=31){
    var speed="Fresh breeze from the atmosphere~";
  }

  //temperature 
  
  if(temperature<=5){
    var tempdata="Its freezing! 🥶<br> You'll need winter-gear to keep you safe from frostbite🧣 ";
  }
  else if(temperature>5 && temperature<=14){
    var tempdata="Its cold but you might not need winter gear.<br> suitable for those who love the cold breeze.";
  }
  else if(temperature>14 && temperature<=21){
    var tempdata="Its a good time to hike!<br> Not too hot and not too cold.";
  }
   else if(temperature>21 && temperature<=28){
    var tempdata="Its a perfect time to hike if your not into cold weather <br> Make sure to wear sunblock and drink plenty of water.";
  }
   else if(temperature>28 && temperature<=35){
    var tempdata="Its too hot for a hike. <br> Please bring plenty of water to avoid heatstroke.";
  }

    document.getElementById("displayspeed").innerHTML="Wind speed, "+ wind+ " m/s";
    document.getElementById("displaywindspeed").innerHTML=speed ;
    document.getElementById("displayweather").innerHTML=weather;
    document.getElementById("displayinfo").innerHTML= info;
    document.getElementById("displaydesc").innerHTML="Description, "+desc;
    document.getElementById("displayname").innerHTML= city+" , "+ country;
    document.getElementById("displaytemp").innerHTML=temperature.toFixed(2) + "°C";
    document.getElementById("displaytempdata").innerHTML=tempdata; 
    document.getElementById("displaytemptopic").innerHTML="Temperature, "+ temperature.toFixed(2) + "°C"; 
    
  }
 
  
}
     )
}