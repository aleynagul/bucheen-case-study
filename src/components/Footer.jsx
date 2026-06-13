import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import logo from "../assets/images/Bucheen.png";

function Footer() {
  return (
    <footer className="bg-[#FFF8F7] px-6 py-14 md:py-20">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-2 gap-x-12 gap-y-10 md:flex md:items-start md:justify-between">
          
          <div className="col-span-2 md:w-[400px] md:mt-8">
            <img
              src={logo}
              alt="Bucheen Logo"
              className="w-[120px]"
            />

            <p className="mt-4 max-w-[400px] md:w-[400px] text-[16px] font-light leading-8 text-[#727272]">
              The most accurate and simplest time tracking for all of you. and
              we have been serving for more than 4 years and have made you happy
            </p>
          </div>

          <div className="contents md:flex md:gap-20 md:pl-20">
            <div>
              <h3 className="text-[16px] font-semibold text-[#FF725E]">
                About us
              </h3>

              <ul className="mt-5 space-y-4 w-[120px] text-[16px] font-light text-[#727272]">
                <li>Our people</li>
                <li>Our categories</li>
                <li>Contact us</li>
                <li>Testimonial</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-semibold text-[#FF725E]">
                Product
              </h3>

              <ul className="mt-5 space-y-4 w-[160px] text-[16px] font-light text-[#727272]">
                <li>Task Management</li>
                <li>Service</li>
                <li>Task Schedule</li>
              </ul>
            </div>

            <div className="col-span-2 md:w-[260px]">
              <h3 className="text-[16px] font-semibold text-[#FF725E]">
                Contact us
              </h3>

              <ul className="mt-5 space-y-4 text-[16px] font-light leading-7 text-[#727272]">
                <li className="flex items-start gap-3">
                  <FiPhone className="mt-1 shrink-0 text-[#CFCFCF]" />
                  <span>(021) 3258 4930</span>
                </li>

                <li className="flex items-start gap-3">
                  <FiMail className="mt-1 shrink-0 text-[#CFCFCF]" />
                  <span>Pokan@Hola.com</span>
                </li>

                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-[#CFCFCF]" />
                  <span>
                    Sukabumi, Jawa Barat
                    <br />
                    Indonesia, IDN
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;