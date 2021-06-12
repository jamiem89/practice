const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// Reusable fetch function
function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(error => console.log(`Error recieving breed list`, error));
};

// Promise all consolidates all promises into one.
// It returns an array of responses in the order they were passed in.
Promise.all([
    fetchData('https://dog.ceo/api/breeds/list'),
    fetchData('https://dog.ceo/api/breeds/image/random')
])
    .then(data => {
        const breedList = data[0].message;
        const randomImage = data[1].message;
        generateOptions(breedList);
        generateImage(randomImage);
    });

// Seperate responses are no longer required as
// promise.all is handling this for us.

// Fetch the breed list data
// fetchData('https://dog.ceo/api/breeds/list')
// .then(data => generateOptions(data))


// // Fetch the image data
// fetchData('https://dog.ceo/api/breeds/image/random')
// .then(data => generateImage(data.message))



// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
    if(response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function generateOptions(data){
    const options = data.map(item => `
        <option value="${item}">${item}</option>
    `).join('');
    select.innerHTML = options;
}

function generateImage(data){
    const html = `
    <img src="${data}">
    <p>Click to view images of ${select.value}s</p>
    `;
    card.innerHTML = html;
};

function fetchBreedImage() {
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');

    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(data => {
        img.src = data.message;
        img.alt = breed;
        p.textContent = `Click to view more ${breed}s`;
    });
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);
form.addEventListener('submit',postData);



// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            comment: comment
        })
    })
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data));
}