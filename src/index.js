console.log('%c HI', 'color: firebrick')
//Part 1
//on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
addEventListener("DOMContentLoaded", (event) => {
    const dogKennel = document.querySelector('#dog-image-container')
    function addImagesToDom(dog) { 
        let li = document.createElement('li')
        li.innerHTML = `<img src="${dog}">`
        dogKennel.appendChild(li)
    }

    function imgUrl(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(images => {
        for(const key in images.message){
            addImagesToDom(images.message[key])
                }
            }
        )
    }
    imgUrl()
    

// Part 2
//const breedUrl = "https://dog.ceo/api/breeds/list/all";
// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html
    
    function allBreeds(doggos){
        const ul = document.getElementById('dog-breeds')
        let li = document.createElement('li')
        li.innerHTML = doggos
        ul.appendChild(li)
    }

    function breedUrl(){
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(breeds => {
            for(const key in breeds.message){
                allBreeds(key)
                    }
                }
            )
        }
        breedUrl()
      
})
