
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
                // x.innerText = `Latitude: ${lat}  Longitude: ${long}`
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
                    Day temp: ${temp} \u00B0C `
                    // \u00B0C as 'A^°C' was coming there on putting '°C' here
                    x.innerText = `Latitude: ${lat}  Longitude: ${long}`
                })
            }

            geolocation();
            // called the function at the end of javascript without giving onclick
