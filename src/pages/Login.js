import GoogleLogin from "react-google-login";

export default function Login() {
  const responseGoogle = (response) => {
    console.log(response.tokenId);
  };

  return (
    <GoogleLogin
      clientId="268179671957-20g656n262bht8rf887efscj2uqh3kcj.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
