const firebaseConfig = {
  apiKey: "AIzaSyBW92qei9tklU3VETlxB_uam-NGzhNEB1A",
  authDomain: "kwitter-974e4.firebaseapp.com",
  databaseURL: "https://kwitter-974e4-default-rtdb.firebaseio.com",
  projectId: "kwitter-974e4",
  storageBucket: "kwitter-974e4.appspot.com",
  messagingSenderId: "1033374096649",
  appId: "1:1033374096649:web:d020360268c3e7b54107d8",
  measurementId: "G-CFB52P49R6"
};
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " +user_name; 

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  Chat:"chitter"
});
 localStorage.setItem("room_name", room_name);

 window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

