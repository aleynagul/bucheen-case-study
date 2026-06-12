import { FiHeart, FiSearch, FiUser } from "react-icons/fi";

const steps = [
    {
        icon: <FiSearch />,
        text: "Find your dating relationship in app and waiting until you get a notification. have a good relationship its started",
    },
    {
        icon: <FiHeart />,
        text: "Dating with benefits and you redefine the expectations of a perfect relationship with your partner",
    },
    {
        icon: <FiUser />,
        text: "Ideal relationship makes your online dating relationship run more smoothly using this app",
    },
];

function HowItWorks() {
    return (
        <section className="border-t border-[#D9D9D9]  bg-[#FEEDB]">
            <div className="mx-auto max-w-[1140px] px-6 py-20 md:py-28">
                <div className="w-full max-w-[520px]">
                    <h2 className="w-[350px] text-[23px] font-semibold leading-[1.35] text-[#2B2B2B] md:w-[620px] md:text-[36px]">
                        How It Works To Find
                        <span className="md:hidden"> Your</span>
                        <br />
                        <span className="md:hidden">Relationship</span>
                        <span className="hidden md:inline">Your Relationship</span>
                    </h2>

                    <div className="mt-10 space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-5 md:gap-7">
                                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#FFE3DC] text-[22px] text-[#FF725E] md:h-[56px] md:w-[56px]">
                                    {step.icon}
                                </div>

                                <p className="w-[350px] text-[14px] leading-[1.5] text-[#727272] md:text-[16px]">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;