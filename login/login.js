if(!location.href.includes("localhost")){
  document.location = "http://localhost:5500/FE/login/loginWithGoogle.html";
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

async function onSignIn(googleUser) {
  console.log('login');
  var profile = googleUser.getBasicProfile();
  let data = {};
  data.email = profile.getEmail();
  data.name = profile.getName();
  data.googleID = profile.getId();

  await fetch("http://localhost:3000/api/users/login" , {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  }).then((response)=>response.json()).then(rs => {
    console.log(rs);
    document.getElementById('jwt').innerHTML += rs.token;
  }).catch( error => console.log(error));
}