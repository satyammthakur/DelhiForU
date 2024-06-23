import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SignupImg from "../assets/signup.jpg";
import SignUpForm from "../components/SignupForm";

function SignUpPage() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-signup" heroImg={SignupImg} btnClass="hide" />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default SignUpPage;