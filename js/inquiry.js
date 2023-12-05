function numbersOfNight() {

    let nights = document.querySelector("#nights")
    console.log("nights")

    if (nights.value < 0 || nights.value > 30) {
        return "Amount has to be between 0 and 30\n"
    }
    return ""
}

function ValidateEmail(email) {
    var validRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (email.value.match(validRegex)) { return  ""} else {
      return ("Invalid email address!\n");
    }
}

const $ = selector => document.querySelector(selector);

 document.addEventListener("DOMContentLoaded", () => {
    console.log("Hi")
    $("#submit").addEventListener("click",() =>{
        console.log("boo")
        const arrivalDate =$("#arrivalDate").value;
        numbersOfNight()
        const nights =$("#nights").value;
        const adults =$("#adults").value;
        const children =$("#children").value;
        const name =$("#name").value;
        const email =$("#email").value;
        const phone =$("#phone").value;
        let errorMessage ="";

        if (arrivalDate ==""){
            errorMessage += "Enter your birthday\n"}
        if (nights ==""){
            errorMessage += "Enter number of days you have off\n"}
            errorMessage += numbersOfNight()
        if (adults ==""){
            errorMessage += "Enter number of adults joining you\n"}
        if (children ==""){
            errorMessage += "Enter number of children joining\n"}

        let vacation = document.querySelector('input[name="vacation"]:checked');
        if (vacation == null) {
            errorMessage += "Please select vacation type\n"}
        let travel = document.querySelector('input[name="travel"]:checked');
        if (travel ==null){
            errorMessage += "Please select where would you like to go\n"
        }
        let budget = document.querySelector('input[name="budget"]:checked');
        if (travel ==null){
            errorMessage += "Please select your budget\n"
        }

        if (name ==""){
            errorMessage += "Enter your full name\n"}
        if (email ==""){
            errorMessage += "Enter your e-mail\n"} else {
            errorMessage += ValidateEmail($("#email"))}

        if (phone ==""){
            errorMessage += "Enter your phone number\n"}
        if (errorMessage !=""){
            alert(errorMessage);
        }
    });
});