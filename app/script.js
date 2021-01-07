const cat_btn = document.querySelector('#cat_btn');
const cat_result = document.querySelector('#cat_result');

const dog_btn = document.querySelector('#dog_btn');
const dog_result = document.querySelector('#dog_result');

cat_btn.addEventListener('click', getRandomcat);
dog_btn.addEventListener('click', getRandomdog);

function getRandomcat(){
    const url = 'https://api.thecatapi.com/v1/images/search';

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        console.log(data[0].url);
        cat_result.innerHTML = `<img src=${data[0].url} alt= "cat" />`;
        
    });
}

function getRandomdog(){
    const url = 'https://dog.ceo/api/breeds/image/random';

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        console.log(data.message);
        dog_result.innerHTML = `<img src=${data.message} alt= "dog" />`;
        
    });
}
