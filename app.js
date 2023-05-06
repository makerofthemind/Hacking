const API_KEY = '1eab00cbb783ed61d0e8a2bb596dfaa2'; // Replace with your own API key

// Function to get the weather data from the API
async function getWeatherData(city) {
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

// Function to render the weather data to the page
function renderWeatherData(data) {
	const container = document.getElementById('weather-container');

	container.innerHTML = '';

	data.list.forEach((item) => {
		const date = new Date(item.dt * 1000);
		const day = date.toLocaleDateString('en-US', { weekday: 'long' });
		const temp = Math.round(item.main.temp);
		const icon = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
		const description = item.weather[0].description;

		const card = document.createElement('div');
		card.classList.add('weather-card');
		card.innerHTML = `
			<h2>${day}</h2>
			<img src="${icon}" alt="${description}">
			<p>${temp}°C</p>
			<p>${description}</p>
		`;

		container.appendChild(card);
	});
}

// Function to handle the form submission
async function handleSubmit(event)
