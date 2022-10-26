
function loadCoupon(){
    document.getElementById(`coupon`).style.visibility =`visible`
    document.getElementById(`main`).style.opacity = `.5`
}

function closeCoupon(){
    document.getElementById(`coupon`).style.visibility =`hidden`
    document.getElementById(`main`).style.opacity = `1`
}


function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle(`mydark`)
}


let x = document.getElementById('out');
let y = document.getElementById('weatherOut');
            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                }else{
                    x.innerText = "Geo Not Supported"
                }
            }

            function showPosition(data){
                let x = document.getElementById('out');
                let y = document.getElementById('weatherOut');
                console.log(data)
                let lat = data.coords.latitude;
                let long = data.coords.longitude;
                x.innerText = `Latitude: ${lat}  Longitude: ${long}`
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                // //api calling
                fetch(url,{method: 'GET'})
                // return promise
                .then((res) => res.json())
                // resolve promise
                .then((data) => {
                    console.log(data)
                    let cityName = data.city.name;
                    let temp = data.list[0].temp.day;
                    y.innerText = ` ${cityName}
                    Day temp: ${temp} °C `
                })
                .catch((err) => {
                    console.log(err)
                })
            }



    //         if(navigator.geolocation)
    // {
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //         long=position.coords.longitude;
    //         lat=position.coords.latitude;
    //         const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2987338fad4fd5f2f31bf39d94703f78`
    //         fetch(api).then((response)=>{
    //             return response.json();
    //         })
    //         .then(data=>{
    //             const{name}=data;
    //             const{feels_like}=data.main;
    //             const{id,description}=data.weather[0];
    //             const{country}=data.sys
    //             console.log(data)

    //             loc.textContent=`${name}, ${country}`;
    //             NavbarLocation.textContent=`${name}`;
    //             weatherDescription.textContent=description;
    //             tempValue.textContent=Math.round(feels_like-273);
    //             if(id<300 && id>=200){
    //                 tempIcon.src="https://openweathermap.org/img/wn/11d@2x.png"
    //             }
    //             else if(id<400 && id>=300){
    //                 tempIcon.src="https://openweathermap.org/img/wn/04d@2x.png"
    //             }
    //             else if(id<600 && id>=500){
    //                 tempIcon.src="https://openweathermap.org/img/wn/09d@2x.png"
    //             }
    //             else if(id<700 && id>=600){
    //                 tempIcon.src="https://openweathermap.org/img/wn/13d@2x.png"
    //             }
    //             else if(id===800){
    //                 tempIcon.src="https://openweathermap.org/img/wn/01d@2x.png"
    //             }
    //             else if(id<800 && id>=700){
    //                 tempIcon.src="https://openweathermap.org/img/wn/50d@2x.png"
    //             }
    //             else if(id<850 && id>=801){
    //                 tempIcon.src="https://openweathermap.org/img/wn/02d@2x.png"
    //             }

    //         })
    //     })    
            
    // }