////1st-way

var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://fakestoreapi.com/products/1', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();
//////////////
///2st-way
fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
////////////
///3rd-way
import axios from 'axios';

axios.get('https://fakestoreapi.com/products/1')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
