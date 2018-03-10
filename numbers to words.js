 window.onload = function(){
   var but = document.getElementById("butt");
   var out2 = document.getElementById("tab2");
   
   but.addEventListener("click",function(){
      var num = document.getElementById("input").value;
      var txt = "";
      
      var rev = num.split("").reverse();
      var arr = [ones,tens];
      var arr2 = [" thousand ", " million ", " billion ", " trillion " ," quadrillion ", " quintillion ", " sextillion ", " septillion ", " octillion ", " nonillion ", " decillion ", " undecillion ", " duodecillion ", " tredecillion ", " quattuordecillion ", " quindecillion ", " sexdecillion ", " septendecillion ", " octodecillion ", " novemdecillion ", " vigintillion ", " centillion "];
      var j1 = 0, j2 = 0;
      var n2 = parseInt(num);
      if(n2 < 0){
        var x = rev.pop();
      }
      var l = rev.length;
      
      for(var i=0; i<l; i++){
        if(num == "0"){
          txt = "zero";
          break ;
        }
        if(j1 === 2 && rev[i] != "0"){
          txt = " hundred " + txt;
        }
        if(j1 == 1 && rev[i] == "1"){
          if(i < 2){    
             txt = below20(rev[i-1]);
          }
          else{
             txt = below20(rev[i-1]) + txt;       
          }
        }
        else{
          if(j1 < 2 ){
            if(j1 === 0 && rev[i+1] != "1"){
               txt = arr[j1](rev[i]) + " " + txt ;               
            }
            else if(j1 === 1){
               txt = arr[j1](rev[i]) + " " + txt ;              
            }
          }
          else{
            txt = arr[0](rev[i]) + txt;
          }
        }

        j1++;
        if(j1 === 3){  
          if(i+1 != l){
            if(rev[i+1] != "0" || rev[i+2] != "0" || rev[i+3] != "0"){
              txt = arr2[j2] + txt;         
            }
            j2++;
          }
          j1 = 0 ; 
        }
      }
      if(n2 < 0){
        txt = "negative " + txt;
      }
      
      function ones(n){
        switch(n){
          case "1":
            return "one"; break;
          case "2":
            return "two"; break;
          case "3":
            return "three"; break;
          case "4":
            return "four"; break;
          case "5":
            return "five"; break;
          case "6":
            return "six"; break;
          case "7":
            return "seven"; break;
          case "8":
            return "eight"; break;
          case "9":
            return "nine"; break;
          case "0":
            return ""; break;
        }
      }
      
      function below20(n){
        switch(n){
          case "1":
            return "eleven"; break;
          case "2":
            return "twelve"; break;
          case "3":
            return "thirteen"; break;
          case "4":
            return "fourteen"; break;
          case "5":
            return "fifteen"; break;
          case "6":
            return "sixteen"; break;
          case "7":
            return "seventeen"; break;
          case "8":
            return "eighteen"; break;
          case "9":
            return "nineteen"; break;
          case "0":
            return "ten"; break;
        }
      }
      
      function tens(n){
        switch(n){
          case "0":
            return ""; break;
          case "1":
            return below20(n); break;
          case "2":
            return "twenty"; break;
          case "3":
            return "thirty"; break;
          case "4":
            return "fourty"; break;
          case "5":
            return "fifty"; break;
          case "6":
            return "sixty"; break;
          case "7":
            return "seventy"; break;
          case "8":
            return "eighty"; break;
          case "9":
            return "ninety"; break;
        }
      }
      txt = txt.charAt(0).toUpperCase() + txt.slice(1) + ".";
      out2.innerHTML = txt;
   })
 
}
  