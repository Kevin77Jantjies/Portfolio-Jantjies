  
// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFTm0OTYhgubmYLlyr1WwKE8_Q1swgZZc",
    authDomain: "kevin-website-8618d.firebaseapp.com",
    databaseURL: "https://kevin-website-8618d.firebaseio.com",
    projectId: "kevin-website-8618d",
    storageBucket: "kevin-website-8618d.appspot.com",
    messagingSenderId: "786419213771",
    appId: "1:786419213771:web:9c3a4f7816c8fecfeb024e",
    measurementId: "G-HZZ94X6C14"
  };
// Initialize Firebase
      firebase.initializeApp(firebaseConfig);

//Reference messages collection
    var messagesRef = firebase.database().ref("messages")


// Listen for form submit 
    document.getElementById('contactForm').addEventListener('submit', submitForm);


// submit form 
    function submitForm(e){
        e.preventDefault();
        

//Get values

     var name = getInputVal('name');
     var email = getInputVal('email');
     var message = getInputVal('message');

// Save message 	
     saveMessage(name, email, message)


// Clear form
document.getElementById('contactForm').reset();

}


//Function to get form values
    function getInputVal(id){
        return document.getElementById(id).value;

}


// Save message to firebase
    function saveMessage(name, email, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            message:message

        });
     }