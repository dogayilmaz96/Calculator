function calculate(){
    var num1=document.querySelector("#num1").value;
    num1=Number.parseInt(num1);

    var operator=document.querySelector("#operator").value;
    var num2=document.querySelector("#num2").value;
    num2=Number.parseInt(num2);
    var result;
    if(operator=="add"){
        result=num1+num2;
    }
    else if(operator=="sub"){
        result=num1-num2;
    }else if(operator=="mul"){
        result=num1*num2;
    }else if(operator=="div"){
        result=num1/num2;
    }
    document.querySelector("#result").innerHTML =result;
    console.log(result);
}
    document.getElementById("button").onclick=calculate;
