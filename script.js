const api = "https://dog.ceo/api/breeds/image/random"
fetch(api).then((response) => response.json())
    .then((data) => {
        const img = document.querySelector("img")
        img.src = data.message
        console.log(img);

        const randomImageGenrator = document.querySelector("#randomImageGenrator");
        // console.log(randomImageGenrator);

        randomImageGenrator.addEventListener("click", function () {
            location.reload();
        })
    })