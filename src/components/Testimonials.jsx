import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        name: "Tasha Wijayanti",
        role: "Curug",
        text: "This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here",
    },
    {
        name: "Sizuka engkol",
        role: "Indonesia",
        text: "Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.",
    },
    {
        name: "Gundam gandim"   ,
        role: "Bulgarian",
        text: "It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax.",
    },
];

function Testimonials() {
    return (
        <section className="bg-[#FEEDB] px-6 py-20 md:py-28">
            <div className="mx-auto max-w-[1140px]">

                <h2 className="text-center text-[28px] font-semibold leading-[1.3] text-[#2B2B2B] md:text-[42px]">
                    What Our Customers
                    <br />
                    Have To Say
                </h2>

                <p className="mx-auto mt-4 max-w-[420px] text-center text-[14px] font-thin leading-7 text-[#727272] md:text-[16px]">
                    Here's what our customers say with Bucheen
                </p>

                <div className="mt-14 hidden justify-center gap-6 md:flex">
                    {testimonials.map((item, index) => (
                        <TestimonialCard
                            key={index}
                            name={item.name}
                            role={item.role}
                            text={item.text}
                        />
                    ))}
                </div>

                <div className="mt-12 overflow-x-auto pb-4 scrollbar-hide md:hidden">
                    <div className="flex w-max gap-4">
                        {testimonials.map((item, index) => (
                            <TestimonialCard
                                key={index}
                                name={item.name}
                                role={item.role}
                                text={item.text}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex justify-center gap-3 md:hidden">

                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FFD8D1] text-[#FF725E]">
                        ←
                    </button>

                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF725E] text-white">
                        →
                    </button>

                </div>

            </div>
        </section>
    );
}

export default Testimonials;