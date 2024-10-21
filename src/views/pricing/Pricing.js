import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/card/CardList";
import { GoDotFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { PLAN_URL } from "../../constants/Constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../auth/AuthProvider";

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
    planType: "1_year",
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
    planType: "lifetime",
  },
];

const pricingFooter = ["Free trial", "Cancel anytime", "Support included"];

const Pricing = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleChildClick = async (e) => {
    const plan_type = e.currentTarget.getAttribute("data-planType");
    const user_id = auth.getUserData().user_id;
    const request = {
      user_id,
      plan_type,
    };

    console.log("request ", request);

    try {
      const result = await axios.post(PLAN_URL, request);

      if (result.status.toString().startsWith("2")) {
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      console.log(err.response.data.error);
    }
  };

  return (
    <div className="gradient-bg mx-auto ">
      <Navbar isloggedIn={true} />

      <section className={`my-24`}>
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

        <CardList clickEvent={handleChildClick} cardList={cardList} />

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
