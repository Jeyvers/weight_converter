

const lbsInput = document.querySelector('#lbsInput');

const kgInput = document.querySelector('#kgInput');

const gramsInput = document.querySelector('#gramsInput');

const ozInput = document.querySelector('#ozInput');


let selectOptions = document.getElementById('selectOptions');

selectOptions.addEventListener('change', getSelectedValue);





function getSelectedValue (){
   
    if(selectOptions.value == 'pounds'){
        lbsInput.classList.add('active')
            lbsInput.addEventListener('input', lbsConvert);

    }
    else {
        lbsInput.classList.remove('active')
       
    }
    if(selectOptions.value == 'kilograms'){
        kgInput.classList.add('active')
        document.querySelector('#kgOutputText').innerHTML = 'Pounds:'
        kgInput.addEventListener('input', kgConvert);

    } else {
        kgInput.classList.remove('active')
        document.querySelector('#kgOutputText').innerHTML = 'Kilograms:'
    }
    if(selectOptions.value == 'grams'){
        gramsInput.classList.add('active')
    

        document.querySelector('#gramsOutputText').innerHTML = 'Pounds:'
        kgInput.addEventListener('input', gramsConvert);

    } else {
        gramsInput.classList.remove('active')
        document.querySelector('#gramsOutputText').innerHTML = 'Grams:'
    }
    if(selectOptions.value == 'ounces'){
        ozInput.classList.add('active')
        document.querySelector('#ozOutputText').innerHTML = 'Pounds:'
        ozInput.addEventListener('input', ozConvert);

    }
    else {
        ozInput.classList.remove('active')
        document.querySelector('#ozOutputText').innerHTML = 'Ounces:'
    }
}

getSelectedValue();



       

function lbsConvert(e){
   
    document.getElementById('output').style.visibility = 'visible'
   let lbs = e.target.value;
    document.querySelector('#gramsOutput').innerHTML = lbs*453.59237;

    document.querySelector('#kgOutput').innerHTML = lbs/2.2046;

    document.querySelector('#ozOutput').innerHTML = lbs * 16;

};


function kgConvert(e){
 
    document.getElementById('output').style.visibility = 'visible'
   let kg = e.target.value;
    document.querySelector('#gramsOutput').innerHTML =kg*1000;

    document.querySelector('#kgOutput').innerHTML =kg*2.2;

    document.querySelector('#ozOutput').innerHTML =kg * 35.2739619;

};
function gramsConvert(e){
 
    document.getElementById('output').style.visibility = 'visible'
   let grams = e.target.value;
    document.querySelector('#gramsOutput').innerHTML =grams * 000220462;

    document.querySelector('#kgOutput').innerHTML =grams / 1000;

    document.querySelector('#ozOutput').innerHTML =grams / 28.34952;

};

function ozConvert(e){
 
    document.getElementById('output').style.visibility = 'visible'
   let oz = e.target.value;
    document.querySelector('#gramsOutput').innerHTML =oz* 28.35;

    document.querySelector('#kgOutput').innerHTML =oz/ 0.02835;

    document.querySelector('#ozOutput').innerHTML =oz/ 15;

};


// A COMPILATION OF ALL TRIALS BEFORE I GOT IT
// ..............................................................................
// document.getElementById('output').style.visibility = 'hidden'
    
// document.querySelector('#lbsInput').addEventListener('input', lbsConvert)
// ..............................................................................

// document.querySelector('#kgInput').addEventListener('input', kgConvert)
// document.querySelector('#gramsInput').addEventListener('input', gramsConvert)
// document.querySelector('#ozInput').addEventListener('input', ozConvert)
// let selectedText = selectOptions.options[selectOptions.selectedIndex].text;
// console.log(selectedText);

// let grams = document.querySelector('#grams');
// console.log(grams)
// selectOptions.addEventListener('onselect', kgConvert);


// let selectOthers = document.getElementsByTagName('option');
// let selectOptions = document.querySelector('#selectOptions').addEventListener('onchange', kgConvert)



// let selectKg = document.querySelector('#selectKg').addEventListener('onchange', kgConvert)

// optionCollection = [kgInput, lbsInput, ozInput, gramsInput];

// const allOptions = selectOptions.options;

// ..............................................................................
    // kgInput.classList.remove('active')
        // ozInput.classList.remove('active')
        // gramsInput.classList.remove('active')
// ..............................................................................
    //    lbsInput.classList.remove('active')
    //     ozInput.classList.remove('active')
    //     gramsInput.classList.remove('active')
// ..............................................................................
    //    lbsInput.classList.remove('active')
    //     ozInput.classList.remove('active')
    //     kgInput.classList.remove('active')
// ..............................................................................
      //    lbsInput.classList.remove('active')
    //     gramsInput.classList.remove('active')
    //     kgInput.classList.remove('active')

    
// Array.from(allOptions).forEach(function(option){
//     let arrayOfOptions = option.classList;
     
// });