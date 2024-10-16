import hello from "../../assets/img/hello.png";
import logo from "../../assets/img/logo.png";
import { FaInstagram } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "./Footer.css";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer div className="bg-alphaPurple">
      <hr class=" border-t-4 border-alphaGreen sm:mx-auto " />
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-10">
        <div class="md:flex  md:justify-between">
          <div class="mb-6 md:mb-0">
            <div>
              <a
                href="#"
                class="flex justify-center items-center md:justify-start"
              >
                <img src={logo} class="h-8 me-3" alt="Logo" />
              </a>
            </div>
            <div className="flex justify-center md:justify-start gap-5 mt-4">
              <span className="text-alphaGreen inline-block text-2xl">
                <FaInstagram />
              </span>
              <span className="text-alphaGreen inline-block text-2xl">
                <FaXTwitter />
              </span>
              <span className="text-alphaGreen inline-block text-2xl">
                <FiFacebook />
              </span>
              <span className="text-alphaGreen inline-block text-2xl ">
                <TbBrandThreads />
              </span>
            </div>
            <div className="mt-3">
              <p className="uppercase text-alphaGreen md:text-left lg:w-64">
                Nevr miss any updated about us by subscribing to our newsletter
              </p>
            </div>
            <div class="input-container my-4 flex justify-center items-center md:justify-start">
              <input type="text" placeholder="EMAIL" />
              <button className="text-alphaGreen">
                SIGN UP
                <FaArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 md:text-left items-center">
            <div>
              <ul class=" text-alphaWhite font-medium">
                <li class="mb-4">
                  <a href="#">Tokens</a>
                </li>
                <li class="mb-4">
                  <a href="#">About Us</a>
                </li>
                <li class="mb-4 ">
                  <a href="#" class="text-alphaGray font-thin">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class=" text-alphaWhite font-medium">
                <li class="mb-4">
                  <a href="#" class="">
                    Pricing
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="">
                    Team
                  </a>
                </li>
                <li class="mb-4 ">
                  <a href="#" class="text-alphaGray font-thin">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class=" text-alphaWhite font-medium">
                <li class="mb-4">
                  <a href="#" class="">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="block md:hidden lg:block">
              <div className="flex justify-center">
                <img src={hello} className="object-cover h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="mb-3 border-alphaGreen sm:mx-auto " />
      <div className="lg:px-32 pb-4 bg-alphaPurple flex flex-col lg:flex-row justify-center md:justify-between">
        <div className="text-sm text-alphaWhite sm:text-center">
          © alpha robotics llp. All Rights Reserved {currentYear}
        </div>

        <div className="text-sm text-alphaWhite sm:text-center">
          Designed by our company
        </div>
      </div>
    </footer>
  );
};
export default Footer;
