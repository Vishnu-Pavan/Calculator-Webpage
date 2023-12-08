var a = "";
let count = 0;
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
        if (count){
            b=a;
            a="";
            count=0;
        }
        a+=textOfButtonClicked;
        if (opp.includes(a[0])){
            a=b+a;
        }
        $("h1").text(a);
    }
    else if(mainClassOfButtonClicked == "bss"){
        a=a.slice(0, -1);
        $("h1").text(a);
    }
    else if(mainClassOfButtonClicked == "acc"){
        a="";
        $("h1").text("0");
    }
    else{
        console.log(a);
        console.log(eval(a));
        if (a.includes(".")){
            a=eval(a).toFixed(2).toString();
        }
        else{
            a=eval(a).toString();
        }
        $("h1").text(a);
        count = 1;
    }
    buttonAnimation(mainClassOfButtonClicked)
});