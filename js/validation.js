

// email validation event listner
{
    var email = document.getElementById('email');
    email.addEventListener('focus',()=>{

        emailMsg.style.display = 'block';

        email.addEventListener('input', () => {

            ValidateEmail();
            email.addEventListener('focusout', () => {
                emailMsg.style.display = 'none'
            })
        })
    })
   


    // Email validation Function
    function ValidateEmail() {
        var email = document.getElementById('email');
        var emailMsg = document.getElementById('emailMsg');
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value.match(mailformat)) {
            emailMsg.classList.remove('wrong');
            emailMsg.classList.add("success");


            return true;
        }
        else {
            emailMsg.classList.remove('success');
            emailMsg.classList.add('wrong');

            return false;

        }

    }


}


// Password validation Function
{

    // password validation event listners
    var pswd = document.getElementById('pswd');

    pswd.addEventListener('focus',()=>{
        pswdText.style.display = 'block';
        pswdMsg.style.display = 'block';
        pswd.addEventListener('input', () => {

            pswdText.style.display = 'block;';
            pswdMsg.style.display = 'block';
    
            ValidatePswd();
    
            pswd.addEventListener('focusout', () => {
                pswdText.style.display = "none"
                pswdMsg.style.display = 'none';
            })
        })
    })

    

    function ValidatePswd() {
        var pswdMsg = document.getElementById('pswdMsg');
        var pswdText = document.getElementById('pswdText');
        var pswdClass = document.getElementsByClassName('pswdClass');


        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        if (pswd.value.length < 8) {
            pswdClass[2].style.color = 'grey'

            pswdMsg.classList.remove('warning');
            pswdMsg.classList.remove('success');
            pswdMsg.classList.add('wrong');

            {
                pswdClass[0].style.color = 'grey';
                pswdClass[1].style.color = 'grey';
                pswdClass[2].style.color = 'grey';
                pswdClass[3].style.color = 'grey';
                // for uppercase varification
                if (pswd.value.match('(?=.*[A-Z])')) {

                    pswdClass[1].style.color = '#00FF00';


                }
                // for lowercase varification
                if (pswd.value.match('(?=.*[a-z])')) {

                    pswdClass[0].style.color = '#00FF00';

                }
                // for Symbol varification
                if (pswd.value.match('(?=.*[!@#\$%\^&\*])')) {


                    pswdClass[3].style.color = '#00FF00';

                }
            }



        } else if (pswd.value.length >= 8 && pswd.value.length < 10) {
            pswdClass[2].style.color = '#00FF00';

            pswdMsg.classList.remove('wrong');
            pswdMsg.classList.remove('success');
            pswdMsg.classList.add('warning');

            {
                pswdClass[0].style.color = 'grey';
                pswdClass[1].style.color = 'grey';
                pswdClass[3].style.color = 'grey';
                // for uppercase varification
                if (pswd.value.match('(?=.*[A-Z])')) {

                    pswdClass[1].style.color = '#00FF00';


                }
                // for lowercase varification
                if (pswd.value.match('(?=.*[a-z])')) {

                    pswdClass[0].style.color = '#00FF00';

                }
                // for Symbol varification
                if (pswd.value.match('(?=.*[!@#\$%\^&\*])')) {


                    pswdClass[3].style.color = '#00FF00';

                }
            }

        } else if (pswd.value.length > 10) {
            pswdClass[2].style.color = '#00FF00';
            pswdMsg.classList.remove('wrong');
            pswdMsg.classList.remove('warning');
            pswdMsg.classList.add('success');

            {
                pswdClass[0].style.color = 'grey';
                pswdClass[1].style.color = 'grey';
                pswdClass[3].style.color = 'grey';
                // for uppercase varification
                if (pswd.value.match('(?=.*[A-Z])')) {

                    pswdClass[1].style.color = '#00FF00';


                }
                // for lowercase varification
                if (pswd.value.match('(?=.*[a-z])')) {

                    pswdClass[0].style.color = '#00FF00';

                }
                // for Symbol varification
                if (pswd.value.match('(?=.*[!@#\$%\^&\*])')) {


                    pswdClass[3].style.color = '#00FF00';

                }
            }

        }
        if (pswd.value.match('(?=.*[a-z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.{8,})')) {
            return true;
        }
        else {

            return false;
        }


    }
}


// Password matching
{
    var pswdMatch = document.getElementById('pswdMatch');
    var pswdMatchMsg = document.getElementById('pswdMatchMsg');
    
    pswdMatch.addEventListener('focus',()=>{
        
        pswdMatchMsg.style.display = 'block';
        pswdMatch.addEventListener('input',()=>{
            passwordMatch();

            pswdMatch.addEventListener('focusout',()=>{

                pswdMatchMsg.style.display = 'none';
                
            });
    
        });
        
    });

    

    function passwordMatch(){
        if(pswd.value===pswdMatch.value){
            pswdMatchMsg.classList.remove('wrong');
            pswdMatchMsg.classList.add('success');
            return true;
        }else{
            pswdMatchMsg.classList.remove('success');
            pswdMatchMsg.classList.add('wrong');
            return false;
        }
    }
}


// PhoneNumber Validation
{
    var phn = document.getElementById('phn');

    phn.addEventListener('focus', () => {
        phnMsg.style.display = 'block';
        phn.addEventListener('input', () => {
            ValidatePhn();

            phn.addEventListener('focusout', () => {
                phnMsg.style.display = 'none'
            })
        })
    })

    // Phonenumber validation function
    function ValidatePhn() {
        var phnMsg = document.getElementById('phnMsg');
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phn.value.match(phoneno)) {

            phnMsg.classList.remove('wrong');
            phnMsg.classList.add('success');

            return true;
        }
        else {

            phnMsg.classList.remove('success');
            phnMsg.classList.add('wrong');
            return false;
        }
    }


    
}

// Form submition
function formSubmit(event) {
    console.log('working')
    // if (!ValidateEmail()) {
    //     alert('Enter a valid EmailId');
    // }
    // if (!ValidatePhn()) {
    //     alert('Enter a valid Phone number');
    // }
    // if (!ValidatePswd()) {
    //     alert('Enter a password that meets the requirement');
    // }
    if(ValidateEmail() && ValidatePswd()&& ValidatePhn()){
        alert('Signup Successfull');
    
    } else if (ValidateEmail() && ValidatePswd()) {
        alert('enter a valid phone number');
        phnMsg.style.display = 'block';
        event.preventDefault();
    }else if (ValidateEmail() && ValidatePhn()) {
        alert('enter a password that meets the requirement');
        pswdText.style.display = 'block';
        pswdMsg.style.display = 'block';
        event.preventDefault();
    }
    else if (ValidatePswd() && ValidatePhn()) {
        alert('enter a valid Email Id');
        emailMsg.style.display = 'block';
        event.preventDefault();
       
    }else if(!ValidateEmail() && !ValidatePswd()&& !ValidatePhn()){
        alert('All the fileds should be filled');
        pswdText.style.display = 'block';
        pswdMsg.style.display = 'block';
        phnMsg.style.display = 'block';
        emailMsg.style.display = 'block';
        event.preventDefault();
    }
     else if (!ValidateEmail() && !ValidatePswd()) {
        alert('enter a valid Email Id and a password that meets the requiremt');
        emailMsg.style.display = 'block';
        pswdText.style.display = 'block';
        pswdText.style.display = 'block';
        event.preventDefault();
    }else if (!ValidateEmail() && !ValidatePhn()) {
        alert('enter a valid Email Id and a valid phone number');
        emailMsg.style.display = 'block';
        phnMsg.style.display = 'block';
        event.preventDefault();
    }
    else if (!ValidatePswd() && !ValidatePhn()) {
        alert('enter a password that meets the requirement and a valid phone number');
        pswdText.style.display = 'block';
        pswdMsg.style.display = 'block';
        phnMsg.style.display = 'block';
        event.preventDefault();
        
       
    }
    



}
// For accepting only numbers
// function isNumber(evt) {
//     evt = (evt) ? evt : window.event;
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     if ((charCode<189 || charCode>190)||(charCode < 48 || charCode > 57)) {
//         return false;
//     }
//     return true;
// }