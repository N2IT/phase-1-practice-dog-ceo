console.log('%c HI', 'color: firebrick')
//Part 1
//on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
document.addEventListener("DOMContentLoaded", (event) => {

    let allDogs = []

    const dogKennel = document.querySelector('#dog-image-container')
    function addImagesToDom(dog) {
        let p = document.createElement('p')
        p.innerHTML = `<img src="${dog}">`
        dogKennel.appendChild(p)
    }

    function imgUrl() {
        fetch("https://dog.ceo/api/breeds/image/random/4")
            .then(res => res.json())
            .then(images => {
                for (const key in images.message) {
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

    function allBreeds(breedName) {
        const ul = document.getElementById('dog-breeds')
        let li = document.createElement('li')
        li.innerHTML = breedName
        ul.appendChild(li)
    }

    function breedUrl() {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(breeds => {
                for (const key in breeds.message) {
                    allBreeds(key)
                    allDogs.push(key)
                }
            })
            .then(() => {
                // Call the function to add event listeners
                addEventListenersToLi();
            });
    }
    breedUrl()

    function addEventListenersToLi() {
        let pups = document.querySelectorAll('li');

        pups.forEach((li) => {
            li.addEventListener('click', changeColor);
        });

        function changeColor(event) {
            const clickedLi = event.target;
            if (clickedLi.style.color === "#000" || !clickedLi.style.color) {
                clickedLi.style.color = "#ee5852";
            } else {
                clickedLi.style.color = "#000";
            }
        }

        //Select Dropdown
        let dropdown = document.querySelector('#breed-dropdown')
        dropdown.addEventListener('change', function (e){
            console.log(e.target.value)

        let filterDogs = allDogs.filter(dog => {
            return dog.startsWith(e.target.value)
        })
        let dogBreeds = document.querySelector('#dog-breeds')
        dogBreeds.innerHTML = ''
        // for (const breed in filterDogs) {
        //     allBreeds(breed)   
        // }
        filterDogs.forEach(dog => {
            allBreeds(dog)
        })
        console.log(allDogs)

        })

        // console.log(dropdown)

        // function dropDownFilter() {
        //     let select = document.querySelector('select').options
        //     let pups = document.querySelectorAll('li')
        //     for(const key of select) {
        //         let dropDownValues = key.value
        //         // console.log (dropDownValues)
        //         // debugger
        //     }
        //     for(const key of pups){
        //         let pupValue = key.innerHTML
        //         for(const)
                
        //         // console.log(pupValue)
        //         // debugger
        //     }
        // }
        // dropDownFilter()
    }
})

//Part 4 - dropdown selections
//