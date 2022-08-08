

//For some reason I wasn't able to create the random season button
function getRandomImage() {  

    var randomImage = new Array();  
     
    randomImage[0] = https://m.media-amazon.com/images/I/71UZSm96siL._SL1500_.jpg
    randomImage[1] = 
    randomImage[2] = 
    randomImage[3] = 
    randomImage[4] = 
  
    var number = Math.floor(Math.random()*randomImage.length);  

    return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
    }  
