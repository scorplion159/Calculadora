var button = document.querySelectorAll("button")
var display = document.getElementById("display");
var a = 0
var b = 0
var operador =''
for(let i = 0;i<button.length;i++){
    button[i].addEventListener('click',function(){{botaoapertado(this)}}, false)}


function acrescenteadigito(digito)
    {digito=parseInt(digito)
        if (operador=="") {a= a*10 +digito
            escrevenodisplay(a)
            
        } else {b=b*10+digito
            escrevenodisplay(b)}
            
        
        
    };


function botaoapertado(button){
    console.log("Botão foi apertado")
    if(button.classList.contains("operador")){defineoperador(button.innerText)}
    else if(button.classList.contains("numero")){
        acrescenteadigito(button.innerText)}
    else if(button.id=="igual"){calcula()}
    else if(button.id=="limpar"){limpar()}
    };


function escrevenodisplay(valor){display.innerText=valor};
function defineoperador(op){
    if (operador != ''){calcula()}
    operador=op
    escrevenodisplay(a)}

function limpar(){a=0
    b=0
    operador=''
 escrevenodisplay(0)}
function calcula(){
    if (operador=='+') {resultado=a+b
        
    }  
    if (operador=='-'){resultado=a-b}
    if (operador=='*'){
        
        resultado= a * b}
    if (operador=='/'){
        resultado = a / b}
    
    
    a=resultado 
    escrevenodisplay(resultado) 
    b=0
    operador=''
    
    
    
    }
    


