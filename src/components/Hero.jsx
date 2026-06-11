import Phone1 from "../assets/images/Phone1.png";
import Phone2 from "../assets/images/Phone2.png";
function Hero() {
    return (
        <section className="bg-[#FFB9AF]/10">
            <div className="mx-auto flex max-w-[1140px] flex-col-reverse items-center px-6 pt-8 pb-12 md:min-h-[620px] md:flex-row md:justify-between md:pt-20 md:pb-16">
                <div className="w-full shrink-0 text-center md:w-[553px] md:text-left">
                    <h1 className="text-[35px] text-left font-semibold leading-[1.35] text-[#262626] md:text-[56px] md:leading-[1.50]">
                        Find <span className="font-bold text-[#FF725E]">Match Now</span>
                        <br />
                        and Grow Your
                        <br />
                        Feelings
                    </h1>

                    <p className="mt-6 max-w-[527px] text-left text-[16px] leading-[32px] text-[#727272]">
                        There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
                    </p>

                    <div className="mt-7 flex flex-col  items-center gap-6 md:mt-8 md:block">
                        <div className="flex h-[64px] w-full max-w-[427px]  items-center rounded-[16px] bg-white px-[32px] ">
                            <div className="flex min-w-[110px]  items-center gap-3 text-[15px] text-[#727272]">
                                <span>Male</span>
                                <span className="text-[20px] relative -top-[3px] text-black">⌄</span>
                            </div>

                            <div className="mx-6 h-[42px] min-w-px bg-[#2B2B2B]"></div>

                            <div className="flex ml-2 min-w-[110px] items-center gap-3 text-[15px] text-[#727272]">
                                <span>Female</span>
                                <span className="text-[20px] relative -top-[3px] text-black">⌄</span>
                            </div>
                            <button className="ml-auto hidden h-[48px] w-[104px] rounded-[10px] bg-[#FF725E] text-[15px] font-medium text-white md:block">
                                Find Now
                            </button>
                        </div>

                        <button className="h-[48px] w-[104px] rounded-[10px] bg-[#FF725E] text-[15px] font-medium text-white md:hidden">
                            Find Now
                        </button>
                    </div>
                </div>

                <div className="relative mb-8 h-[340px] w-full max-w-[340px] left-[-30px] shrink-0 md:mb-0 md:h-[560px] md:w-[620px] md:max-w-none">
                    <img
                        src={Phone1}
                        alt="Phone app preview"
                        className="absolute left-[30px] top-5 z-25 w-[190px] object-contain md:left-[40px] md:w-[320px]"
                    />

                    <img
                        src={Phone2}
                        alt="Phone app preview"
                        className="absolute left-[140px] top-[70px] z-10 w-[230px] object-contain md:left-[220px] md:top-[35px] md:w-[430px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;