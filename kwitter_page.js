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


    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);

                        console.log(message_data);

                        name_u = message_data['name'];

                        message = message_data['message'];

                        like = message_data['like'];

                        name_with_tag = "<h4>"+ name_u +"<img class='user_tick' src='tick.png'></h4>";

                        message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";

                        like_button="<button class='btn btn-success' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";

                        span_with_tag= "<span class='glyphicon glyphicon-thumb-up'> Like: "+ like +"</span></button><hr>";

                        row = name_with_tag + message_with_tag + like_button + span_with_tag;

                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
    }