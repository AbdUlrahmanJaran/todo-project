    //Name
    var userName = prompt("Enter your Name:")
    console.log(userName)

    //Gender
    var userGender = prompt("Enter your Gender:").toLowerCase()
    if(userGender =="male" || userGender == "female"){
        console.log("user Gender : " + userGender);
    }
    else
        alert("Gender is not Correct")

    //Age
    var userAge = prompt("Enter your Age:")
    if(userAge <="0"){
        alert("age coudn't be less than or equal to 0");  
    }
    else
        console.log("user Age : "+userAge)
 
    //Welcome Message Ask
    var askWelcoming = confirm("Do you want to Skip the Welcome Message?")
    if(askWelcoming == false){
    //Welcome Message
        if(userGender == "male"){
            var welcomeMassege = alert(`Hello Mr. ${userName}`)
            console.log(`Hello Mr. ${userName}`)
        }
        else if (userGender == "female"){
            var welcomeMassege2 = alert(`Hello Ms. ${userName}`)
            console.log(`Hello Ms. ${userName}`)}
        else {
            var welcomeMassege3 = alert(`Hello  ${userName} (Gender not Correct)`)
            console.log(welcomeMassege3)
            console.log(`Hello  ${userName} + (Gender not Correct)`)
        }
    }