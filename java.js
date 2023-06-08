function countVowels(){
    let str = document.getElementById('inputString').value;
   
    let matches = str.match(/[aeiıouüö]/gi);
    let count = matches ? matches.length : 0;
    document.getElementById('result').innerHTML = "There are " + count + " vowels in  <small style='color:red; font-weight:600; font-size:2rem'>" + str + "</small>" ;



}
