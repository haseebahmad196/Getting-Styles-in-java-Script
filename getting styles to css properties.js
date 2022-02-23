var buttonincrease= document.getElementById('btn-increase')

var buttondecrease= document.getElementById('btn-decrease') 
var mainheading= document.getElementById('main-heading')


var ini= window.getComputedStyle(mainheading).fontSize
console.log(ini)  
 ini=  parseInt(ini.substr(0, (ini.length -2) )) 
 console.log(ini)  
 mainheading.style.fontSize = parseInt(ini)+ 10 + 'px' 

 buttonincrease.onclick = function() {
    
    ini+= 10 
    mainheading.style.fontSize= ini +  'px'
 } 

 buttondecrease.onclick = function() {
    
    ini-= 10 
    mainheading.style.fontSize= ini +  'px'
 }