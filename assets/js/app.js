var btn = document.getElementById('button');

btn.addEventListener('click', loadText);

function loadText(){

    //Create XHR Object
    var xhr = new XMLHttpRequest();
    
    //OPEN - type, url/file, async

    xhr.open('GET', 'sample.txt', true);

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
        }
    }
    //Sends request
    xhr.send();
}

