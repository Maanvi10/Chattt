function addUser(){
    user_name = document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        Barbie: "I am The Most Pinkest Barbie in the world!"
    });
}
