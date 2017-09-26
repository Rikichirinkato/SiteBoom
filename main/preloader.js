window.onload=function(){
    function getI(a){
        return document.getElementById(a);
    }
    var time=setTimeout(flash,500);
    time=setTimeout(dark,1000);
    time=setTimeout(flash,1500);
    time=setTimeout(dark,2000);
    time=setTimeout(flash,2500);
    function flash(){
        getI('bulb').style.border=1+'px solid yellow';
        getI('bulb').style.boxShadow=0+' '+0+' '+15+'px yellow';
        getI('clew').style.borderTopColor='yellow';
        getI('clew').style.boxShadow=0+' '+-1+'px '+5+'px yellow';
    }
    function dark(){
        getI('bulb').style.border=1+'px solid grey';
        getI('bulb').style.boxShadow='none';
        getI('clew').style.borderTopColor='grey';
        getI('clew').style.boxShadow='none';
    }
}