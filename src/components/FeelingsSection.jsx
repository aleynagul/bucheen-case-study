import Elips1 from "../assets/images/Ellipse1.png";
import Elips2 from "../assets/images/Ellipse2.png";
import Elips3 from "../assets/images/Ellipse3.png";   

function FeelingsSection() {
  return (
    <section className="border-t border-[#D9D9D9] bg-[#FEEDB]">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center px-6 py-50 md:flex-row md:items-center md:justify-between md:py-28">

        <div className="hidden md:block relative h-[320px] w-[320px]">
          <img
            src={Elips1}
            alt=""
            className="absolute left-[0px] top-[0px] w-[180px] md:left-[-180px] md:top-[-15px] md:w-[310px]"
          />

          <img
            src={Elips2}
            alt=""
            className="absolute left-[20px] top-[20px] w-[320px] md:left-[-160px] md:top-[10px] md:w-[600px]"
          />

          <img
            src={Elips3}
            alt=""
            className="absolute left-[40px] top-[55px] w-[150px] md:left-[-140px] md:top-[50px] md:w-[230px]"
          />
        </div>

        <div className="w-full max-w-[470px] text-left md:text-left">
          <h2 className="text-[25px] font-semibold leading-[1.3] text-[#2B2B2B] md:text-[36px] md:leading-[1.50]">
            Find Match Now and
            <br />
            Develop Your Feelings
          </h2>

          <p className="mt-6 text-[16px] leading-7 text-[#727272]">
            There are so many platforms from this Pokan to make a task manager
            manage all your time, the data needed is very useful. and we have
            it all to get you to be successful
          </p>

          <div className="flex md:block">
            <button className="mt-8 h-[48px] w-[120px] rounded-[10px] bg-[#FF725E] text-[15px] font-medium text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeelingsSection;