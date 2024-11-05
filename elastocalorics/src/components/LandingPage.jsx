import Logo from "../assets/logo-white.png";
import "./LandingPage.css";

const LandingPage = () => {
    return (
      <div>
        <header>
          <img id="logo" src={Logo} alt="IES Logo in white" />
        </header>
        <main>
          <h1>Welcome to IES - International Elastocalorics Society</h1>
          <p>The sign up for the conference will be open soon!</p>
        </main>
        <footer>
          <p>© elastocalorics.org 2024</p>
        </footer>
      </div>
    );
  };

  export default LandingPage;