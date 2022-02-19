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

    let answerList=[];

    function getAnswers(){
        alert("Please Answer with yes or no for the Next Questions ");
        answerList.push(prompt("Is this your first visit? ").toLowerCase());
        answerList.push(prompt("Do you think our website is good? ").toLowerCase());
        answerList.push(prompt("Do you like cats? ").toLowerCase());
        
    }
    function checkAnswer (){
        for(let i=0;i<answerList.length;i++){
            if (!(answerList[i]=="yes" || answerList[i]=="no")){ 
                answerList[i] = "Invalid";
            }  
        } 
    }
    
    function consoleAnswers (){
        for(let i=0;i<answerList.length;i++){
            console.log(i+1 + "- " + answerList[i]);
        }
    }
    getAnswers();
    checkAnswer();
    consoleAnswers();