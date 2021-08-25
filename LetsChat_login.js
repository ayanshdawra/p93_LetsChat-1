function addUser(){
    console.log("it works")
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="LetsChat_page.html";
}