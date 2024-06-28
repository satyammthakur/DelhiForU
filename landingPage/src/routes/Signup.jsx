import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SignupImg from "../assets/login.avif";
import SignUpForm from "../components/SignupForm";
//want to improve this also 
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