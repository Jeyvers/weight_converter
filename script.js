document.getElementById('output').style.visibility = 'hidden'

let lbsInput = document.querySelector('#lbsInput');
document.querySelector('#lbsInput').addEventListener('input', lbsConvert)

// let kgInput = document.querySelector('#kgInput');
// document.querySelector('#kgInput').addEventListener('input', kgConvert)

// let gramsInput = document.querySelector('#gramsInput');
// document.querySelector('#gramsInput').addEventListener('input', gramsConvert)

// let ozInput = document.querySelector('#ozInput');
// document.querySelector('#ozInput').addEventListener('input', ozConvert)

document.getElementById('selectOptions').addEventListener('change', function(event){
   
    
})
       
// selectOptions.addEventListener('onselect', kgConvert);


// let selectOthers = document.getElementsByTagName('option');
// let selectOptions = document.querySelector('#selectOptions').addEventListener('onchange', kgConvert)



// let selectKg = document.querySelector('#selectKg').addEventListener('onchange', kgConvert)



function lbsConvert(e){
    if(e.target.classList.contains('lbs')) {

   
    document.getElementById('output').style.visibility = 'visible'
   let lbs = e.target.value;
    document.querySelector('#gramsOutput').innerHTML = lbs/0.0022046;

    document.querySelector('#kgOutput').innerHTML = lbs/2.2046;

    document.querySelector('#ozOutput').innerHTML = lbs * 16;
}
};

function kgConvert(){
   
    console.log('li')
}


    




