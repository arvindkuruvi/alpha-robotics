import Navbar from "../../components/navbar/Navbar";
import hello from "../../assets/img/hello.png";
import Footer from "../../components/footer/Footer";

const Landing = () => {
  return (
    <div className="gradient-bg mx-auto">
      <Navbar />

      <div className=" mt-10  mx-10 p-10 md:h-screen-0">
        <img src={hello} alt="Hello image" className="h-auto mx-auto md:mx-0" />
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
