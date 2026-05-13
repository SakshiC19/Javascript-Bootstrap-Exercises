function AmountChange(){
    document.getElementById("txtAmount").value=document.getElementById("rangeAmount").value;
    CalculateClick();
}

function YearsChange(){
    document.getElementById("txtYears").value= document.getElementById("rangeYears").value;
    CalculateClick();
}

function RateChange(){
    document.getElementById("txtRate").value= document.getElementById("rangeRate").value;
    CalculateClick();
}

function CalculateClick(){
    var P =parseInt(document.getElementById("txtAmount").value);
    var R = parseInt(document.getElementById("txtRate").value)/12/100;
    var N =parseInt(document.getElementById("txtYears").value) * 12;

    //  P x R x (1+R)^N] / [(1+R)^N-1]

    var EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)-1);

    document.getElementById("lblEmi").innerHTML = `${EMI.toLocaleString('en-in', {style:"currency", currency:"INR", minimumFractionDigits:0, maximumFractionDigits:0})}`;
}