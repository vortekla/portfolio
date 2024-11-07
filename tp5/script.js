function login() {
    
    let username = document.getElementById("Username").value
    let password = document.getElementById("Password").value

    if (username == "admin" && password == "admin")
      {window.location.href = "yes.html"}  

    else {
        window.location.href = "no.html"
 }
 function back(){
        window.location.href = "index.html"
 }
    }