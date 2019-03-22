//accessing DOM
const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'assets/logo.png';
const containter = document.createElement('div');
containter.setAttribute('class','container');
app.appendChild(logo);
app.appendChild(containter);

// create a XMLHTTPRequest and retrieve the API endpoint with open() method.

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films',true);

// onload we can access the films in here.
request.onload = function() {
    var data = JSON.parse(this.response);

    if(request.status >=200 && request.status < 400) {        //HTTP Request Status codes where 404 is not found and 200 is a successful request
    data.forEach(movie => {
        console.log(movie.title);
        console.log(movie.description);

        const card = document.createElement('div');
        card.setAttribute('class','card');
        
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        const p = document.createElement('p');
        movie.description = movie.description.substring(0,300);

        p.textContent = `${movie.description}...`;

        containter.appendChild(card);

        card.appendChild(h1);
        card.appendChild(p);
        
    });
    } 
    else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}
request.send();