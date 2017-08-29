window.onload=function(){
    var numb=document.forms.calculator;
    function getI(a){
        return document.getElementById(a);
    }
    var arr=[]
    getI('answar').onclick=function(){
        var input=getI('field').value;
        for(var k=0;k<numb.length;k++){
            numb.elements[k].onchange=function(){
                var x=numb.choose.value;
                arr.push(x);
		   }
	    }
        if(input<22.8){
            getI('res').innerHTML='unknown';
        }
        else if(input<23.1){
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
        else if(input<23.1){
            getI('res').innerHTML=5;
        }
        else if(input<23.5){
            getI('res').innerHTML=5.5;
        }
        else if(input<23.8){
            getI('res').innerHTML=6;
        }
        else if(input<24.1){
            getI('res').innerHTML=6.5;
        }
        else if(input<24.5){
            getI('res').innerHTML=7;
        }
        else if(input<24.8){
            getI('res').innerHTML=7.5;
        }
    }
}
