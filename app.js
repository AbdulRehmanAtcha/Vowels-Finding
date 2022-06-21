function save(){
    var input = document.getElementById("userInput").value;
    input = input.toLowerCase();
    var vowels = [];
    var consonant = [];
    var flag = 0;
    for(var i = 0;i<input.length;i++){
        if(input.charAt(i) === "a" || input.charAt(i) === "e" || input.charAt(i) === "i" || input.charAt(i) === "o" || input.charAt(i) === "u"){
            flag = 1;
            break;
        }
    }
    if(flag == 1){
        vowels.push(input);
    }
    else{
        consonant.push(input);
    }
    for(j = 0;j<vowels.length;j++){
        document.getElementById("Vowel").innerHTML += "<li>"+vowels+"</li>";
        
    }
    for(k = 0;k<consonant.length;k++){
        document.getElementById("Cons").innerHTML += "<li>"+consonant+"</li>";
    }
}