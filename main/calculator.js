window.onload=function(){
    var numb=document.forms.calculator;
    function getI(a){
        return document.getElementById(a);
    }
    for(var k=0;k<numb.length;k++){
        numb.elements[k].onchange=function(){
            var x=numb.choose.value;
            getI('answar').onclick=function(){  
                var input=getI('field').value;
                if(input<22.8){
                     getI('res').innerHTML='unknown';
                }
                if(x==1){
                     if(input<23.1){
                         getI('res').innerHTML=3;
                    }
                    else if(input<23.5){
                        getI('res').innerHTML=3.5;
                    }
                    else if(input<23.8){
                        getI('res').innerHTML=4;
                    }
                    else if(input<24.1){
                        getI('res').innerHTML=4.5;
                    }
                    else if(input<24.5){
                        getI('res').innerHTML=5;
                    }
                    else if(input<24.8){
                        getI('res').innerHTML=5.5;
                    }  
                    else if(input<25.1){
                        getI('res').innerHTML=6;
                    }
                    else if(input<25.4){
                        getI('res').innerHTML=6.5;
                    }
                    else if(input<25.9){    
                        getI('res').innerHTML=7;
                    }
                    else if(input<26){
                        getI('res').innerHTML=7.5;
                    }
                    else if(input<26.7){
                        getI('res').innerHTML=8;
                    }
                    else if(input<27.3){
                        getI('res').innerHTML=8.5;
                    }
                    else if(input<27.9){
                        getI('res').innerHTML=10;
                    }
                    else if(input<28.6){
                        getI('res').innerHTML=11;
                    }
                    else if(input<29.2){
                        getI('res').innerHTML=12;
                    }
                    else{   
                        getI('res').innerHTML=13.5;
                    }
                }    
                else if(x==2){
                    if(input<23.1){
                        getI('res').innerHTML=2.5;
                    }
                    else if(input<23.5){
                        getI('res').innerHTML=3;
                    }
                    else if(input<23.8){
                        getI('res').innerHTML=3.5;
                    }
                    else if(input<24.1){
                        getI('res').innerHTML=4;
                    }
                    else if(input<24.5){
                        getI('res').innerHTML=4.5;
                    }
                    else if(input<24.8){
                        getI('res').innerHTML=5;
                    }  
                    else if(input<25.1){
                        getI('res').innerHTML=5.5;
                    }
                    else if(input<25.4){
                        getI('res').innerHTML=6;
                    }
                    else if(input<25.9){
                        getI('res').innerHTML=6.5;
                    }
                    else if(input<26){
                        getI('res').innerHTML=7;
                    }
                    else if(input<26.7){
                        getI('res').innerHTML=7.5;
                    }
                    else if(input<27.3){
                        getI('res').innerHTML=8;
                    }
                    else if(input<27.9){
                        getI('res').innerHTML=9.5;
                    }
                    else if(input<28.6){    
                        getI('res').innerHTML=10.5;
                    }
                    else if(input<29.2){   
                        getI('res').innerHTML=11.5;
                    }
                    else{
                        getI('res').innerHTML=13;
                    }
                }
                else{
                    if(input<23.1){
                        getI('res').innerHTML=35;
                    }
                    else if(input<23.5){
                        getI('res').innerHTML=35.5;
                    }
                    else if(input<23.8){    
                        getI('res').innerHTML=36;
                    }
                    else if(input<24.1){
                        getI('res').innerHTML=37;
                    }
                    else if(input<24.5){
                        getI('res').innerHTML=37.5;
                    }
                    else if(input<24.8){
                        getI('res').innerHTML=38;
                    }  
                    else if(input<25.1){
                        getI('res').innerHTML=38.5;
                    }
                    else if(input<25.4){
                        getI('res').innerHTML=39;
                    }
                    else if(nput<25.9){
                        getI('res').innerHTML=40;
                    }
                    else if(input<26){  
                        getI('res').innerHTML=41;
                    }
                    else if(input<26.7){    
                        getI('res').innerHTML=42;
                    }
                    else if(input<27.3){    
                        getI('res').innerHTML=43;
                    }
                    else if(input<27.9){
                        getI('res').innerHTML=44;
                    }
                    else if(input<28.6){
                        getI('res').innerHTML=45;
                    }
                    else if(input<29.2){
                        getI('res').innerHTML=46.5;
                    }
                    else{
                        getI('res').innerHTML=48.5;
                    }
                }
		   }
	    }
    }
}
