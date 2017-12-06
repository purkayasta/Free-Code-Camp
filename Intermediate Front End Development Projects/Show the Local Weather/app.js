

$(document).ready(function(){
    var lat, lon, api, celsius, farhenheit, kelvin, windType, windSpeed, cityName;
    var swap = true;

    $('#showTemp').on('click', function(){

        if ("geolocation" in navigator){
            // Materialize.toast('Location is supported in your Browser', 4000);

            navigator.geolocation.getCurrentPosition(gotLocation);
            console.log(gotLocation);


            function gotLocation(position){
                lat = position.coords.latitude;

                lon = position.coords.longitude;

                //console.log(lat);
                //console.log(lon);

                // api='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=yourAPI';




                $.getJSON(api, function(data){
                    // Materialize.toast(data.coord.lat, 4000);
                    kelvin = data.main.temp;

                    // windtype,windspeed,city
                    windType = data.weather[0].description;
                    windSpeed = data.wind.speed;
                    cityName = data.name;
                    var icons = data.weather[0].icon;

                    windType = windType.toUpperCase();
                    windSpeed = (2.237*(windSpeed)).toFixed(1)+ ' MPH';

                    // console.log('Wind Type',windType);
                    // console.log('wind speed',windSpeed);
                    // console.log('city name',cityName);


                    celsius = (kelvin - 273.15).toFixed(2)+ ' &#8451';
                    farhenheit = (((kelvin-273.15)*1.8)+32).toFixed(2) + ' &#8457';

                    // console.log(kelvin);
                    // console.log(celsius);
                    // console.log(farhenheit);

                    $('#cityName').html(cityName);
                    $('#windType').html(windType);
                    $('#windSpeed').html(windSpeed);
                    $('#temp').html(farhenheit);
                    $('#imageLook').html('<img src='+"http://openweathermap.org/img/w/"+icons+".png"+ '>' + windType);
                    

                    


                    $('#changeTemp').on('click', function(){

                        if (swap === true){
                            $('#temp').html(farhenheit) === $('#temp').html(celsius);
                            swap = false;
                        } else {
                            $('#temp').html(celsius) === $('#temp').html(farhenheit);
                            swap = true;
                        }
                        
                    });

                    
                    // $('#temp').on('click', function(){

                    //     // if (swap != swap){
                    //     //     $('#temp').html(celsius);
                    //     // }

                    //     if(swap === false){
                    //         $('#temp').html(celsius);
                    //         swap = true;   
                    //     } else {
                    //         $('#temp').html(farhenheit);
                    //         swap = false;
                    //     }

                    // })

                });


            }


        } else{
            Materialize.toast('Please use a real browser!!', 4000);
             // 4000 is the duration of the toast
        }
    });

    
});