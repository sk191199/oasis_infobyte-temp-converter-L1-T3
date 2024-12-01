

let converBtn = document.getElementById("converBtn")
let inputEl = document.getElementById("inputEl")
let dropdown = document.getElementById("dropdown")
let resultEl = document.getElementById("resultEl")

let inputdd = ""
let selectDg = ""

dropdown.addEventListener("change", function () {
    selectDg = dropdown.value

})


converBtn.addEventListener("click", function () {
    inputdd = inputEl.value;
    console.log(inputdd);
    console.log(selectDg)
    dropdown.addEventListener("change", function () {
        selectDg = dropdown.value
    });
    if(inputdd === ""){
        inputEl.placeholder = "Enter valid value";
    };
    
    if (selectDg === "f"){
        let result = (inputdd * (9/5)) + 32;
        resultEl.textContent = result + "c";
        console.log(result);
    }

    if(selectDg === "c"){
        let cresult = (inputdd - 32) / (1.8);
        resultEl.textContent = cresult + "f";

    }
});