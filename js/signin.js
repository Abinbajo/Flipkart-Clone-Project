let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata)

function Signin(){

    let mobile = document.getElementById("phone").value;

    if(mobile.length !==10)
    {
        alert("Please enter a valid mobile number")
    }
    
    else{

        for(let i=0;i<getUsersdata.length;i++)
        {

            if(mobile == getUsersdata[i].mobile)
            {
            
                window.location.href = './index.html';
                 alert("Login Successfully")
            }
            else{
                alert("User not Registered, Sign up to Continue")
                window.location.href='./signup.html'
            }
        }
    }
}





function goSignUp() {
    window.location.href = './signup.html'; 
}