import React, {useState, useEffect} from 'react'
import axios from 'axios'

const WEATHERSTACK_API_KEY="Putt Your Key Here"

const Weather = (props) =>{
	const [weather, setWeather] = useState({})
	const [completed,setCompleted] = useState(false)
	
	const getWeather = () =>{
		axios.get(`http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${props.country.capital}`)
		.then(response => {
			console.log(response.data)
			setWeather(response.data)
			setCompleted(true)
		})
		.catch(error => {
			console.log(error)
			setCompleted(false)
		})
	}

	useEffect(getWeather,[])
	if (completed===true){
		return(
			<>
			<h3>Weather in {props.country.capital}</h3>
			<p>
				<strong>temperature:</strong> {weather.current.temperature} celsius
			</p>
			<img src={weather.current.weather_icons[0]} alt={"Sky Representation"}/>
			<p>
				<strong>wind:</strong> {weather.current.wind_speed} kph direction {weather.current.wind_dir}
			</p>
		</>
		)
	}
	else {
		return null
	}
}

const Content = (props) =>{
	const countriesToShow = () =>{
		if (props.filterPar==="") {
			return props.countries
		}
		else {
			let filterParUpper = props.filterPar.toUpperCase()
			let newlist = props.countries.filter(element => element.name.toUpperCase().search(filterParUpper)>-1)
			return newlist
		}
	}
	const showData = (country) =>{ 
		return(
			<>
			<h1>{country.name}</h1>
			<div>capital {country.capital}</div>
			<div>population {country.population}</div>
			<h2>languages</h2>
			<ul>
				{country.languages.map(element => <li key={element.name}>{element.name}</li>)}
			</ul>
			<img src={country.flag} alt="Country Flag" width="300" height="200"/>
			<Weather country={country}/>
			</>
		)
	}

	if (countriesToShow().length===1) {
		return (showData(countriesToShow()[0]))
	}
	else if (props.showButton!==""){
		return (showData(countriesToShow().filter(element => element.name===props.showButton )[0]))
	}
	else if (countriesToShow().length<=10){
		return(
			<div>{countriesToShow().map((element) => <li key={element.name}>{element.name} <button onClick={() => {
				props.setShowButton(element.name)
			}}>show</button></li>)} </div>
		)
	}
	else if (countriesToShow().length>10) {
		return(
			<div>Too many matches, specify another filter</div>
		)
	}
}

const App = () => {
	const [filterPar,setFilterPar] = useState("")
	const [countries,setCountries] = useState([])
	const [showButton, setShowButton] = useState("")

	const getCountries = () => {
		axios.get("https://restcountries.eu/rest/v2/all").then(response => setCountries(response.data))
	}

	const changeFilterPar = (event) =>{
		setFilterPar(event.target.value)
		setShowButton("")
	}

	useEffect(getCountries, [])

	return(
		<div>
			<div>find countries <input value={filterPar} onChange={changeFilterPar}/></div>
			<Content countries={countries} filterPar={filterPar} setShowButton={setShowButton} showButton={showButton}/>
		</div>
	)
}

export default App;
