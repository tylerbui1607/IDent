import { GoogleLogin as Login } from 'react-google-login';

const CLIENT_ID = "428568904300-qr141kvg7m1mjnun6oc0nftikuuk3ifm.apps.googleusercontent.com";

export default function GoogleLogin(props) {
  const onSuccess = (res) => {
    console.log(res.profileObj);
  }
  function onFailure(res) {
    console.log(res);
  }
  return (
    <Login
      clientId={CLIENT_ID}
      buttonText="Login with google"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  )
}