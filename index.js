const API = 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8';
const API_IP = 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=204.141.32.155&apikey=873dbe322aea47f89dcf729dcc8f60e8'
const  ipAddress = document.querySelector('#ip_address');
const btn = document.querySelector('#btn_address');
 
  //ip=204.141.32
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23958bc3dbmshe25fdf2ca3bf9e6p139625jsnee76e010e4f2',
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};

const showIp = async function(){
	 try{
       const response  = await fetch(API_IP,options);
	   const data = await response.json();
	   console.log(response);
	   console.log(data);
	   let continent = data.continent;
	   let country = data.country;
	   let countryCapital = data.countryCapital;
	   let countryIsos = data.countryISO2;
	   let currencyName = data.currencyName;
	   let flag = data.flag;
	   let cities = data.numOfCities;
	   let state = data.numOfStates;
	   let phone = data.phoneCode;
	   `<div class="images">
			<div class="img-area">
			<img src="${flag}" id="img-size">
			</div>
			
		</div>
		
		<div class="properties">
			<div>${continent}</div>
			<div>${country}</div>
			<div>${countryCapital} <span>${countryIsos }</span></div>
			<div>${currencyName}</div>
			<div>${cities}</div>
			<div>${state}</div>
			<div>${phone}</div>
		</div>`

	   

	 }catch(err){
		 console.log(err)
	 }
}

 btn.addEventListener('click', function(e){
  	e.preventDefault()
  	showIp()
  	console.log(ipAddress.value )
  })
