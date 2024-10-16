import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/card/CardList";
import { GoDotFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";

const cardList = [
  {
    title: "Life Time Plan",
    primaryPrice: "$500.00",
    secondaryPrice: "$600.00",
    descriptionList: [
      "Everything in Innovator, plus",
      "Competitoe Benchmarking",
      "Holistic Market Visualization",
      "Adaptive Stategy Planner",
      "24/7 Priority Support",
    ],
  },
  {
    title: "1 Year Plan",
    primaryPrice: "$200.00",
    secondaryPrice: "$300.00",
    descriptionList: [
      "Everything in Innovator, plus",
      "Competitoe Benchmarking",
      "Holistic Market Visualization",
      "Adaptive Stategy Planner",
      "24/7 Priority Support",
    ],
  },
];

const pricingFooter = ["Free trial", "Cancel anytime", "Support included"];

const Pricing = () => {
  return (
    <div className="gradient-bg mx-auto ">
      <Navbar />

      <section className="my-24">
        {/* pricing header section starts */}
        <div className="text-5xl text-alphaWhite mt-9">
          <div className="text-lg border-alphaWhite bg-alphaWhite inline-block px-3 py-1 rounded-lg uppercase">
            <span className="text-alphaGreen font-semibold my-3">
              <GoDotFill className="inline-block" />{" "}
              <span className="">Pricing </span>
            </span>
          </div>

          <span className="block my-3">
            Start making <span className="text-alphaGreen">smarter </span>
            decisons,
          </span>
          <span className="block my-3">Choose a plan</span>
        </div>
        {/* pricing header section ends */}

        <CardList cardList={cardList} />

        {/* pricing footer starts */}
        <div className="">
          <div className="flex flex-col md:flex-row my-5 text-alphaGreen justify-center  ">
            {pricingFooter.map((footerItem, index) => (
              <div className="flex items-center justify-center">
                <div className="text-left">
                  <span className="mx-5">
                    <FaCheckCircle className="inline mx-3" />
                    {footerItem}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* pricing footer ends */}
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
