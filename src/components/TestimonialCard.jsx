function TestimonialCard({ name, role, text }) {
    return (
        <div className="flex h-[260px] w-[360px] flex-col rounded-[10px] border border-[#E9E9E9] bg-white p-8">
            <div className="mb-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#949494]"></div>
                <div>
                    <h4 className="text-[12px] font-medium text-[#2B2B2B]">
                        {name}
                    </h4>

                    <p className="text-[10px] text-[#A5A5A5]">
                        {role}
                    </p>
                </div>
            </div>

            <p className=" h-[100px] overflow-hidden text-[14px] font-thin leading-6 text-[#727272]">
                {text}
            </p>
            <div className="mt-auto flex gap-1 text-[#FFB800]">
                ★ ★ ★ ★ ★
            </div>
        </div>
    );
}

export default TestimonialCard;