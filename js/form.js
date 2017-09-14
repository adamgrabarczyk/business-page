// $(".holder").hide();
// $(".holder").fadeIn(2000);
//
//
// //*************************************************************
// (function() {
//     "use strict";
//     var //GLOBAL VARIABLES
//         input,
//         container,
//         //CSS CLASSES
//         classSuccess = "success",
//         classError = "error",
//         //FORM VALIDATOR
//         formValidator = {
//             init: function() {
//                 this.cacheDom();
//                 this.bindEvents();
//             },
//             cacheDom: function() {
//                 //MAIN PARENT ELEMENT
//                 this.contactForm = document.getElementById("contactForm");
//                 //MAIN FORM ELEMENTS
//                 this.formHeader = document.querySelector("#formHeader h1");
//                 this.formBody = document.getElementById("formBody");
//                 this.inputContainer = document.getElementsByClassName("inputContainer");
//                 //USER INPUT ELEMENTS
//                 //INPUT FIELDS
//                 this.fields = {
//                     userName: document.getElementById("userName"),
//                     userEmail: document.getElementById("userEmail"),
//                     userMessage: document.getElementById("userMessage")
//                 };
//                 this.submitBtn = document.getElementById("submitBtn");
//             },
//             bindEvents: function() {
//                 var i;
//                 //RUN RULES ON SUBMIT BUTTON CLICK
//                 this.submitBtn.onclick = this.runRules.bind(this);
//                 //BIND EVENTS TO EACH INPUT FIELD
//                 for (i in this.fields) {
//                     if (this.fields.hasOwnProperty(i)) {
//                         //VARIABLES
//                         input = this.fields[i];
//                         container = input.parentElement;
//                         //RUN RULES WHEN INPUT HAS FOCUS
//                         input.onfocus = this.runRules.bind(this);
//                         //RESET ERRORS WHEN CONTAINER IS CLICKED
//                         container.onclick = this.resetErrors.bind(this, input);
//                     }
//                 }
//             },
//             runRules: function(evnt) {
//                 var target = evnt.target,
//                     type = evnt.type;
//                 //IF EVENT ON SUBMIT BUTTON
//                 if (target === this.submitBtn) {
//                     //PREVENT FORM SUBMITTION
//                     this.preventDefault(evnt);
//                     //IF INPUT HAS FOCUS
//                 } else if (type === "focus") {
//                     //RESET CLASSLIST
//                     this.resetClassList(target.parentElement);
//                     //RESET ERRORS
//                     this.resetErrors(target);
//                     return false;
//                 }
//                 //RESET CLASSLIST
//                 this.resetClassList();
//                 //CHECK FIELDS
//                 this.checkFields();
//             },
//             preventDefault: function(evnt) {
//                 //PREVENT DEFUALT
//                 evnt.preventDefault();
//             },
//             checkFields: function() {
//                 var i,
//                     validCount = 0,
//                     //EMAIL FILTER
//                     filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//                 //CYLCE THROUGH INPUTS
//                 for (i in this.fields) {
//                     if (this.fields.hasOwnProperty(i)) {
//                         input = this.fields[i];
//                         //CHECK IF FIELD IS EMPTY
//                         if (input.value === "") {
//                             //ADD ERROR CLASS
//                             this.addClass(input, classError);
//                             //CHECK IF EMAIL IS VALID
//                         } else if (i === "userEmail" && !filter.test(input.value)) {
//                             //ADD ERROR CLASS
//                             this.addClass(input, classError);
//                         } else {
//                             //FIELD IS VALID
//                             this.addClass(input, classSuccess);
//                             validCount += 1;
//                         }
//                     }
//                 }
//                 //IF ALL FEILDS ARE VALID
//                 if (validCount === 3) {
//                     //SUBMIT FORM
//                     this.submitForm();
//                 }
//             },
//             addClass: function(input, clss) {
//                 container = input.parentElement;
//                 //IF INPUT HAS ERROR
//                 if (clss === classError) {
//                     //SHOW ERROR MESSAGE
//                     this.errorMessage(input);
//                 }
//                 //ADD CLASS
//                 input.parentElement.classList.add(clss);
//             },
//             errorMessage: function(input) {
//                 var message;
//                 //IF USERNAME HAS ERROR
//                 if (input === this.fields.userName) {
//                     message = "Wprowadź poprawne imię";
//                     //ELSE IF USEREMAIL HAS ERROR
//                 } else if (input === this.fields.userEmail) {
//                     message = "Wprowadź poprawny adres email";
//                     //ELSE IF USERMESSAGE HAS ERROR
//                 } else if (input === this.fields.userMessage) {
//                     message = "napisz wiadomość";
//                 }
//                 this.renderError(input, message);
//             },
//             renderError: function(input, message) {
//                 var html;
//                 //GET INPUT CONTAINER
//                 container = input.parentElement;
//                 //RENDER HTML
//                 html = document.createElement("div");
//                 html.setAttribute("class", "message");
//                 html.innerHTML = message;
//                 //IF MESSAGE ELEMENT DOESN'T EXIST
//                 if (!container.getElementsByClassName("message")[0]) {
//                     //INSERT MESSAGE TO INPUT CONTAINER
//                     container.insertBefore(html, container.firstElementChild);
//                 }
//             },
//             resetClassList: function(input) {
//                 var i;
//                 //IF TARGETING SPECIFIC INPUT
//                 if (input) {
//                     //GET INPUT CONTAINER
//                     container = input.parentElement;
//                     //REMOVE CLASSES
//                     container.classList.remove(classError, classSuccess);
//                     //FOCUS ON INPUT FIELD
//                     input.focus();
//                 } else {
//                     for (i in this.fields) {
//                         if (this.fields.hasOwnProperty(i)) {
//                             //REMOVE CLASSES FROM ALL FIELDS
//                             this.fields[i].parentElement.classList.remove(classError, classSuccess);
//                         }
//                     }
//                 }
//             },
//             resetErrors: function(input) {
//                 //GET INPUT CONTAINER
//                 container = input.parentElement;
//                 //IF CONTAINER CONTAINS ERROR
//                 if (container.classList.contains(classError)) {
//                     //RESET CLASSES
//                     this.resetClassList(input);
//                 }
//             },
//             submitForm: function() {
//
//                 $("#popup").css("display", "block");
//
//                 $("#close_popup").click(function(){
//                     $("#popup").css("display", "none");
//                 });
//
//
//
//             }
//         };
//     //INITIATE FORM VALIDATOR
//     formValidator.init();
// }());

//
// $("#open_popup").click(function(){
//
//     $("#close_popup").click(function(){
//         $("#popup").css("display", "none");
//     });
//
// }



function validateForm() {
    var valid = 1;
    var email = document.getElementById('email');
    var email_validation = document.getElementById("email_validation");
    var name = document.getElementById('name');
    var name_validation = document.getElementById("name_validation");
    var message_validation = document.getElementById("message_validation");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name.value === "") {
        valid = 0;
        name_validation.innerHTML = "Field Required";
        name_validation.style.display = "block";
        name_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
        name_validation.style.display = "none";
        name_validation.parentNode.style.backgroundColor = "transparent";
    }

    if (message.value === "") {
        valid = 0;
        message_validation.innerHTML = "Field Required";
        message_validation.style.display = "block";
        message_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
        message_validation.style.display = "none";
        message_validation.parentNode.style.backgroundColor = "transparent";
    }

    if (email.value === "") {
        valid = 0;
        email_validation.innerHTML = "Field Required";
        email_validation.style.display = "block";
        email_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
        email_validation.style.display = "none";
        email_validation.parentNode.style.backgroundColor = "transparent";
    }

    if(!filter.test(email.value)) {
        valid = 0;
        email_validation.innerHTML = "Invalid email address";
        email_validation.style.display = "block";
        email_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
        email_validation.style.display = "none";
        email_validation.parentNode.style.backgroundColor = "transparent";
        alert("dziekuje wiadomosc zostala wyslana");

    }
    if (!valid)
        return false;
}