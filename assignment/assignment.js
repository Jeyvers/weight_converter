// Set the output areas to nothing until there's an input event. 
document.getElementById('output').style.visibility = 'hidden';

// Get DOM elements
let selectOptions = document.getElementById('selectLevel');
let weightInput = document.getElementById('weightInput');
let gramsOutput = document.querySelector('#gramsOutput');
let kgOutput = document.querySelector('#kgOutput');
let ozOutput = document.querySelector('#ozOutput');
let gramsOutputText = document.querySelector('#gramsOutputText');
let kgOutputText = document.querySelector('#kgOutputText');
let ozOutputText = document.querySelector('#ozOutputText');


optionsValue = [ 
    {
        name:'Grams'
    },
    {
        name:'Kilograms'
    },
    {
        name: 'Ounces'
    }, 
    {
        name: 'Pounds'
    }
    ]

optionsValue.forEach(options => {
    // Create option element 
    const option = document.createElement('option');
    option.value = options.name;
    option.textContent = options.name;
    selectOptions.appendChild(option);
});

const convertWeight = function(){
    if(weightInput.value != ''){
        document.getElementById('output').style.visibility = 'visible';
    }

    let weight = weightInput.value;
    
    if(selectOptions.value == 'Grams') {

        gramsOutputText.innerHTML = 'Pounds';
        gramsOutput.innerHTML = weight * 000220462;
        kgOutput.innerHTML = weight / 1000;
        ozOutput.innerHTML = weight / 28.34952;

    
    } else {
        gramsOutputText.innerHTML = 'Grams'
    }
    
    if (selectOptions.value == 'Kilograms') {
        kgOutputText.innerHTML = 'Pounds';
        gramsOutput.innerHTML = weight * 1000;
        kgOutput.innerHTML = weight * 2.2;
        ozOutput.innerHTML = weight * 35.2739619;
    }  else {
        kgOutputText.innerHTML = 'Kilograms'
    }
    
    if (selectOptions.value == 'Ounces') {
        ozOutputText.innerHTML = 'Pounds';
        gramsOutput.innerHTML = weight * 28.35;
        kgOutput.innerHTML = weight / 0.02835;
        ozOutput.innerHTML = weight / 15;

    }  else {
        ozOutputText.innerHTML = 'Ounces'
    }

    if(selectOptions.value == 'Pounds'){
        gramsOutput.innerHTML = weight * 28.35;
        kgOutput.innerHTML = weight / 0.02835;
        ozOutput.innerHTML = weight / 15;
        
    }


}

weightInput.addEventListener('input', convertWeight);
selectOptions.addEventListener('change', () => convertWeight());



