const button= document.getElementById('get-location-button');

function getLocation(position){
console.log(position);
}

function failedToGet()
{
    console.log("there was some issue")
}



button.addEventListener('click'  , async()=>{
 const result = navigator.geolocation.getCurrentPosition(getLocation,failedToGet)

})