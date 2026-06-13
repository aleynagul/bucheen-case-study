import ProfileCard from "./ProfileCard";
import Profile1 from "../assets/images/Profile1.png";
import Profile2 from "../assets/images/Profile2.png";
import Profile3 from "../assets/images/Profile3.png";

function PopularProfiles() {
    const profiles = [
        {
            image: Profile1,
            name: "Javar Saripun",
            bgColor: "rgba(255,229,225,0.9)",
            imageHeight: "h-[180px]",
            description:
                "A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.",
        },
        {
            image: Profile2,
            name: "Fausiah Fera",
            bgColor: "rgba(185,167,255,0.9)",
            imageHeight: "h-[130px]",
            description:
                "Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.",
        },
        {
            image: Profile3,
            name: "Shreryl Olap",
            bgColor: "rgba(255,212,146,0.9)",
            imageHeight: "h-[180px]",
            description:
                "Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.",
        },
    ];

    return (
        <section className="bg-[#FFF8F7] py-20 md:py-28">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="mx-auto max-w-[700px] text-center">
                    <h2 className="text-[24px] whitespace-nowrap font-medium text-[#111133] md:text-[40px]">
                        Most Popular In This Week
                    </h2>
                    <p className="mt-5 text-[16px] max-w-[500px] mx-auto leading-6  text-[#727272]  md:leading-6 font-light">
                        There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
                    </p>
                </div>

                <div className="mt-14 overflow-x-auto pb-6 scrollbar-hide md:hidden">
                    <div className="flex w-max items-start gap-4 px-2">
                        {profiles.map((profile, index) => (
                            <ProfileCard
                                key={index}
                                image={profile.image}
                                name={profile.name}
                                description={profile.description}
                                bgColor={profile.bgColor}
                                imageHeight={profile.imageHeight}

                            />
                        ))}
                    </div>
                </div>

                <div className="mt-14 hidden pb-6 md:block">
                    <div className="flex items-start justify-center gap-6">
                        {profiles.map((profile, index) => {
                            let marginClass = "";

                            if (index === 1) marginClass = "mt-12";
                            if (index === 2) marginClass = "mt-24";

                            return (
                                <div key={index} className={marginClass}>
                                    <ProfileCard
                                        image={profile.image}
                                        name={profile.name}
                                        description={profile.description}
                                        bgColor={profile.bgColor}
                                        imageHeight={profile.imageHeight}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-3 md:hidden">
                    <div className="h-3 w-3 rounded-full bg-[#FF725E]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#FFD8D1]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#FFD8D1]"></div>
                </div>
            </div>
        </section>
    );
}

export default PopularProfiles;