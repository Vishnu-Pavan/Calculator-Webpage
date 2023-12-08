var a = "";
let count = false;
var opp = ["%","/","*","-","+"]

function buttonAnimation(currentKey){
    var activeButtion = document.querySelector("."+ currentKey);
    activeButtion.classList.add("pressed");
    setTimeout(function(){
        activeButtion.classList.remove("pressed");
    },100);
}

$("button").click(function(){
    // text in button
    var textOfButtonClicked=$(this).text();

    // class is digit or symbol of button
    var classOfButtonClicked=$(this).attr('class').substring(4,11);

    // main class of button
    var mainClassOfButtonClicked=$(this).attr('class').substring(11,14);

    if (mainClassOfButtonClicked!= "acc" && mainClassOfButtonClicked!= "bss" && mainClassOfButtonClicked!= "equ"){
        if(a.length<10){
            if (count){
                b=a;
                a="";
                count = false;
            }
            a+=textOfButtonClicked;
            if (opp.includes(a[0])){
                a=b+a;
            }
            $("h1").text(a);
        }
    }
    else if(mainClassOfButtonClicked == "bss"){
        a=a.slice(0, -1);
        $("h1").text(a);
        count = false;
    }
    else if(mainClassOfButtonClicked == "acc"){
        a="";
        $("h1").text("0");
        count = false;
    }
    else{
        console.log(a);
        console.log(eval(a));
        a=eval(a);
        if (a%1!=0){
            a=a.toFixed(2).toString();
        }
        else{
            a=a.toString(); }
        $("h1").text(a);
        count = true;
    }
    buttonAnimation(mainClassOfButtonClicked)
});