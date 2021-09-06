// Set the output areas to nothing until there's an input event. 
document.getElementById('output').style.visibility = 'hidden'

//Declaration of all inputs
const lbsInput = document.querySelector('#lbsInput');

const kgInput = document.querySelector('#kgInput');

const gramsInput = document.querySelector('#gramsInput');

const ozInput = document.querySelector('#ozInput');


// Get the select id
let selectOptions = document.getElementById('selectOptions');

// Add the event listener (change - when you change the select option), and the function it should run when that change occurs 

selectOptions.addEventListener('change', getSelectedValue);

// Clear fields function to set the output sections to a clean state when there's a change of selectOptons. Without this, if the user converts one weight to another, and changes the selectOption, the result of the previous change will remain.
function clearFields(){
    document.querySelector('#gramsOutput').innerHTML = '';
    document.querySelector('#kgOutput').innerHTML = '';
    document.querySelector('#ozOutput').innerHTML = '';

}


// Implemnet the function getSelectedValue which will run when there's a change(This function was added in the selectOptions area.) 
function getSelectedValue (){
   
    // Individual implementation of each option. WHen the user changes an option, the value of that option equals something (one of the weight values(check HTML)). So if the value equals ..., do this, else this. 
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
    // Run the clearFields function when there's a change as well. 
    clearFields(); 
}


getSelectedValue();





       
// All the function which will run if an if function is met. 
function lbsConvert(e){
   
    document.getElementById('output').style.visibility = 'visible'
    // This gets the value the user inputs 
   let lbs = e.target.value;

   // Mathematical equation.
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