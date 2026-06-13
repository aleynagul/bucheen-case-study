function ProfileCard({ image, name, description, bgColor,imageHeight }) {
    return (
        <div
            className={`w-[270px] overflow-hidden rounded-[20px] shadow-sm md:w-[280px] ${name === "Javar Saripun"
                ? "bg-white md:bg-[#FFF8F7]"
                : "bg-white"
                }`}
        >
            <div
                className="flex h-[180px] items-end justify-center"
                style={{ backgroundColor: bgColor }}
            >
                <img
                    src={image}
                    alt={name}
                    className={`${imageHeight} object-contain`}
                />
            </div>

            <div className="p-6">
                <h3 className="text-[24px] font-bold text-[#2B2B2B]">{name}</h3>
                <div className="min-h-[170px] md:min-h-[130px]">
                    <p className="mt-4 text-[15px] leading-6 text-[#727272] md:text-[14px] md:leading-6  font-light">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;