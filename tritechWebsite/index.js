'use strict';


const button = document.getElementById('menu');

button.addEventListener('click', function() {
    const links = document.getElementById('links');
    if (links.classList.contains('header-display')) {
        links.classList.remove('header-display');
    } else {
       
        links.classList.add('header-display');
    }
});

let charCount = document.getElementById('char-count');
let msg = document.getElementById('msg');

const maxChars = 250;

const countCharacters = () => {
    let msgChars = msg.value.length;
    let counter = maxChars - msgChars;
    charCount.textContent = "Max 250 characters. " + counter + "/250";
};

msg.addEventListener("input", countCharacters);

function validateName(name_input) {
    let re = /[A-Za-z0-9]/;
  
    return re.test(name_input);
  }
function validateEmail(input_str) {
    let re = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
  
    return re.test(input_str);
  }
  function validatePhoneNumber(input) {
    let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input);
  }
  function validateForm(event) {
    let email = document.getElementById('email').value;
    if (!validateEmail(email)) {
  
  document.getElementById('email_error').classList.remove('hidden');
  document.getElementById('email').classList.add('err_border');
  event.preventDefault();   
} else {
  
  document.getElementById('email_error').classList.add('hidden');
  document.getElementById('email').classList.remove('err_border');
    }

    let phone = document.getElementById('phone').value;
    if (!validatePhoneNumber(phone)) {
  
  document.getElementById('phone_error').classList.remove('hidden');
  document.getElementById('phone').classList.add('err_border');
  event.preventDefault();   
} else {
  
  document.getElementById('phone_error').classList.add('hidden');
  document.getElementById('phone').classList.remove('err_border');
    }

    let _name = document.getElementById('name').value;
    if(!validateName(_name)) {
        document.getElementById('name_error').classList.remove('hidden');
        document.getElementById('name').classList.add('err_border');
        event.preventDefault();   
      } else {
        
        document.getElementById('name_error').classList.add('hidden');
        document.getElementById('name').classList.remove('err_border');
          }

    let msgChars = msg.value.length;
    if(msgChars > maxChars) {
              document.getElementById('msg_error').classList.remove('hidden');
              document.getElementById('msg').classList.add('err_border');
              event.preventDefault();   
            } else {
              
              document.getElementById('msg_error').classList.add('hidden');
              document.getElementById('msg').classList.remove('err_border');
                }
      
    
  }
  
  document.querySelector('form').addEventListener('submit', validateForm);

  const pantryId = "8574817a-4ab1-4d34-bdb2-728cb83f6714"
  let basketId = 1;
  

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    const fieldValue = JSON.stringify(value);

    const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  

  
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: fieldValue,
    redirect: 'follow'
  };

  
  
  await fetch(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketId}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));    
    
    const getOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    let setText = function setText(text) {
      let submittedContent = JSON.stringify(JSON.parse(text), null, '\n');
      document.getElementById('confirmation').textContent = submittedContent.replace(/[\[\]\{\}]+/g, '');
      
    }
  await  fetch(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketId}`, getOptions)
      .then(response => response.text())
      .then(result => setText(result))
      .catch(error => console.log('error', error));

      
    document.getElementById('submitted').classList.remove('hidden');



    basketId++;  
  
  
};
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);