let buttonModeClass="square", buttonModeClass2="rectangle",
buttonMethodClass="area", Lenght, Width;

const inputValidation1 = document.getElementById("inputLength");
const inputValidation2 = document.getElementById("inputWidth");
const calculateButton = document.getElementById("calculateButton");

function validateInput() {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}

inputValidation1.addEventListener('keypress', function() {
    const inputValue = inputvalidation1.ariaValueMax.trim()
    if(validateInput(inputValue)) {
        calculateButton.disabled = false
    } else {
        calculateButton.disabled = true
    }
})

inputValidation2.addEventListener('keypress', function() {
    const inputValue = inputvalidation2.ariaValueMax.trim()
    if(validateInput(inputValue)) {
        calculateButton.disabled = false
    } else {
        calculateButton.disabled = true
    }
})

function scanButtonModeClass() {
    buttonModeClass = (document.getElementById("defaultMode").classList.contains("square")) ? "square" : "rectangle";
}

function scanButtonModeClass2() {
    buttonModeClass2 = (buttonModeClass == "square") ? "rectangle" : "square";
}

function scanMode() {
    scanButtonModeClass();
    scanButtonModeClass2();
}

function sentenceFormulaChange(sentenceFormulaChanges,formulaChanges,calculateTitle,inputDiv) {
    if (buttonModeClass=="square" & buttonMethodClass == "area") {
        document.getElementById(sentenceFormulaChanges).textContent="The formula for counting the area of a Square is:";
    } else if (buttonModeClass=="square" & buttonMethodClass != "area") {
        document.getElementById(sentenceFormulaChanges).textContent="The formula for counting the perimeter of a Square is:";
    } else if (buttonModeClass!="square" & buttonMethodClass == "area") {
        document.getElementById(sentenceFormulaChanges).textContent="The formula for counting the area of a Rectangle is:";
    } else if (buttonModeClass!="square" & buttonMethodClass != "area") {
        document.getElementById(sentenceFormulaChanges).textContent="The formula for perimeter the area of a Rectangle is:";
    }
    if (buttonModeClass=="square" & buttonMethodClass == "area") {
        document.getElementById(formulaChanges).textContent="A = S x S";
    } else if (buttonModeClass=="square" & buttonMethodClass != "area") {
        document.getElementById(formulaChanges).textContent="P = 4 x S";
    } else if (buttonModeClass!="square" & buttonMethodClass == "area") {
        document.getElementById(formulaChanges).textContent="A = L x W";
    } else if (buttonModeClass!="square" & buttonMethodClass != "area") {
        document.getElementById(formulaChanges).textContent="P = (2 x L) + (2 x W)";
    }
    if (buttonModeClass=="square" & buttonMethodClass == "area") {
        document.getElementById(calculateTitle).textContent="Calculate the Area of a Square";
    } else if (buttonModeClass=="square" & buttonMethodClass != "area") {
        document.getElementById(calculateTitle).textContent="Calculate the Perimeter of a Square";
    } else if (buttonModeClass!="square" & buttonMethodClass == "area") {
        document.getElementById(calculateTitle).textContent="Calculate the Area of a Rectangle";
    } else if (buttonModeClass!="square" & buttonMethodClass != "area") {
        document.getElementById(calculateTitle).textContent="Calculate the Perimeter of a Rectangle";
    } 
    if (buttonModeClass=="square") {
        document.getElementById(inputDiv).innerHTML='<input class="inputBox" type="number" placeholder="Side Length" id="inputLength">';
    } else if (buttonModeClass!="square") {
        document.getElementById(inputDiv).innerHTML='<input class="inputBox" type="number" placeholder="Length" id="inputLength"><input class="inputBox"  type="number" placeholder="Width" id="inputWidth">';
    }
    
}

function changeClassButtonMode (mode) {
    scanMode();
    if (buttonModeClass != mode) {
        document.getElementById("defaultMode").id = "alternativeId";
        document.getElementById("changedMode").id = "defaultMode";
        document.getElementById("alternativeId").id = "changedMode";
    }
    scanMode();
    document.getElementById("shapeName").textContent = (buttonModeClass=="square") ? "square" : "rectangle";
    if (buttonModeClass != "square") {
        document.getElementById("box").classList.replace("square", "rectangle");
    } else {
        document.getElementById("box").classList.replace("rectangle", "square");
    }

    sentenceFormulaChange("sentenceFormula","formula","calculateTitle","inputDiv");
}

function changeClassButtonMethod() {
    document.getElementById("buttonChangeMethod").textContent = (document.getElementById("buttonChangeMethod").textContent=="area") ? "perimeter" : "area";
    buttonMethodClass = (document.getElementById("buttonChangeMethod").textContent=="area") ? "area" : "perimeter";
    sentenceFormulaChange("sentenceFormula","formula","calculateTitle","inputDiv");
}

function concatanate(Length,Width) {
    if (buttonMethodClass=="area" & buttonModeClass == "square") {
        document.getElementById("firstParagraph").textContent = "A = S x S";
        document.getElementById("secondParagraph").textContent = "A = " + Length + " x " + Length;
        document.getElementById("thirdParagraph").textContent = "A = " + Length*Length;
    } else if (buttonMethodClass!="area" & buttonModeClass == "square") {
        document.getElementById("firstParagraph").textContent = "P = 4 x S";
        document.getElementById("secondParagraph").textContent = "P = 4 x " + Length;
        document.getElementById("thirdParagraph").textContent = "P = " + (4*Length);
    } else if (buttonMethodClass=="area" & buttonModeClass != "square") {
        document.getElementById("firstParagraph").textContent = "A = L x W";
        document.getElementById("secondParagraph").textContent = "A = " + Length + " x " + Width;
        document.getElementById("thirdParagraph").textContent = "A = " + (Length*Width);
    } else if (buttonMethodClass!="area" & buttonModeClass != "square") {
        document.getElementById("firstParagraph").textContent = "P = (2 x L) + (2 x W)";
        document.getElementById("secondParagraph").textContent = "P = (2 x " + Length + ") + (2 x" + Width + ")";
        document.getElementById("thirdParagraph").textContent = "P = " + ((2*Length) + (2*Width));
    }
}

function calculate() {
    if (buttonModeClass == "square") {
        Length = document.getElementById("inputLength").value;
    } else {
        Length = document.getElementById("inputLength").value;
        Width = document.getElementById("inputWidth").value;
    }
    document.getElementById("resultCalculation").innerHTML = '<p id="firstParagraph"></p><p id="secondParagraph"></p><p id="thirdParagraph"></p>';
    concatanate(Length,Width);
}

function reset() {
    document.getElementById("inputDiv").reset();
    document.getElementById("resultCalculation").textContent = "";
}