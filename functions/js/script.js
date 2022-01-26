let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  Omdat er tekst staat. vul je antwoord in op de lijn
let myInt = 6; //dit is een variabele van het datatype Integer. waarom? omdat er een getal staat. vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? Als je een variabele voor het eerst aanmaakt moet je hem declareren. vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen Regel 18. vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde 250 de waarde noemen we een Argument vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een melding op het scherm met je naam. deze tekst staan op regel 18 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? Nee vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? Het verstopt de foto en laat het zien. en waar wordt deze in je HTML aangeroepen? Op regel 24 vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML op regel 26. vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? Het element die een id heeft pakken. vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? Het verstopt de foto hem en laat hem zien. vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen regel 33. en wanneer wordt deze aangeroepen Als je op de knop klikt. vul je antwoord in op de lijn

    let antwoord = myInt - getal; //waar komt de waarde van myInt vandaan. Van het getal. en waar komt de waarde van getal vandaan? Van de som. vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? het laat het antwoord van de som zien.  Wat is antwoord hier? de waarde. vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? Het rekent de som uit. vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? Het getal veranderd. vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? Het getal verandert weer.
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen. regel 39. vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan. Van de kleur. en waar komt de waarde van kleur vandaan? Van het woord aqua. vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? Van de 30px. vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? Het verandert de kleur van de tekst. vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven Het zorgt dat als je de pagina opent/refreshed dat je een melding krijgt. en wanneer gebeurt dat. als je de pagina opent of refresht (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? Het bericht veranderd. vul je antwoord in op de lijn.