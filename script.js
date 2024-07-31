const form = document.querySelector(".busca")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = document.querySelector("#searchInput").value

    if(input !== "") {
        showWarning("Carregando...")

        const url = `https://api.openweathermap.org/data/2.5/weather?q={lat}${encodeURI(input)}&appid=d279e862fefebfb0383ba06b6b6382a0`
    }
})

const showWarning = (msg) => {
    document.querySelector(".aviso").innerHTML = msg
}