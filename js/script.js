const textElement = [ 'Ordinary emloyee','web Developer', 'Administrator Linux'];
let count = 0;
let textindek = 0;
let currentTxt = '';  
let words = '';

(function ngetik(){
     if(count == textElement.length){
        count = 0;
     }
     currentTxt = textElement[count];
        words = currentTxt.slice(0, ++textindek);
        console.log(words);
        document.querySelector('.efek-ngetik').textContent = words;
       if(words.length == currentTxt.length){
        count++;
        textindek = 0;
       }
       
        setTimeout(ngetik, 500);

})();
