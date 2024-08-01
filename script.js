const form = document.querySelector(".busca")

form.addEventListener("submit", async(e) => {
    e.preventDefault()
    const input = document.querySelector("#searchInput").value

    if(input !== "") {
        showWarning("Carregando...")

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d279e862fefebfb0383ba06b6b6382a0&units=metric&lang=pt_br`

        const response = await fetch(url)
        const json = await response.json()

        if(json.cod ===200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg

            })

        } else {
            clearInfo()
            showWarning("Localização não encontrada")
        }
    } else {
        clearInfo()
    }
})

const showInfo = (json) => {
    showWarning("")

    document.querySelector(".resultado").style.display = "block"

    document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`
    document.querySelector(".tempInfo").innerHTML = `${json.temp}<sup>°C</sup>`
    document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed}<span>km/h</span>`

    document.querySelector(".temp img").setAttribute("src", `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)

    document.querySelector(".ventoPonto").style.transform = `rotate(${json.windAngle}deg)`
}

const clearInfo = () => {
    showWarning("")
    document.querySelector(".resultado").style.display = "none"

}

const showWarning = (msg) => {
    document.querySelector(".aviso").innerHTML = msg
}