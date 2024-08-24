let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata)

function Signup(){
    let mobile = document.getElementById("phone").value;

   if(mobile.length==0)
   {
    alert("Enter mobile number")
   }
   else if(mobile.length !== 10)
   {
    alert("Invalid Mobile Number")
   }
   else{
        let userData = {
         mobile:mobile,
        }

        let users = [];
        users.push(userData);

        localStorage.setItem("usersdata", JSON.stringify(users));

        alert("Signed up Successfully")
        window.location.href = "signin.html"
   }

   
}
function Login() {
     window.location.href = './signin.html'; 
 }

