const getWeatherApi = () => {
  console.log('Fetching Api')

  const zipCode = document.querySelector('.zip-code').value

  if (isNaN(zipCode) === true) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&appid=0cd7f50a9d7d1426f22f3ba74c9e2e45`
    )
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log({ data })
        document.querySelector('.name').textContent = data.name
        let calvinConvert = Math.ceil(data.main.temp * (9 / 5) - 459.67)
        document.querySelector('.temp').textContent = calvinConvert
      })
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=0cd7f50a9d7d1426f22f3ba74c9e2e45`
    )
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log({ data })
        document.querySelector('.name').textContent = data.name
        let calvinConvert = Math.ceil(data.main.temp * (9 / 5) - 459.67)
        document.querySelector('.temp').textContent = calvinConvert
      })
  }
}

const main = () => {}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.submit-button')
  .addEventListener('click', getWeatherApi)
