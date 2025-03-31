import Select from "react-select";

export default function BookYourFreeTrial() {
    const data = {
        instruments: ["piano", "acoustic guitar", "electric guitar", "violin", "tabla"],
        singing: ["hindustani vocals", "western vocals", "carnatic vocals", "bollywood vocals", "malayalam vocals"],
        dancing: ["bharatanatyam", "kathak", "bollywood dance"],
    };

    const categoryOptions = Object.entries(data).map(([category, subcategories]) => ({
        label: category.charAt(0).toUpperCase() + category.slice(1),
        options: subcategories.map((subcategory) => ({
            value: subcategory,
            label: subcategory.charAt(0).toUpperCase() + subcategory.slice(1),
        })),
    }));

    const countryOptions = [
        { value: "+1", label: "+1 (USA)" },
        { value: "+91", label: "+91 (India)" },
        { value: "+44", label: "+44 (UK)" },
        { value: "+61", label: "+61 (Australia)" },
        { value: "+81", label: "+81 (Japan)" },
        { value: "+86", label: "+86 (China)" },
        { value: "+49", label: "+49 (Germany)" },
        { value: "+33", label: "+33 (France)" },
        { value: "+39", label: "+39 (Italy)" },
        { value: "+7", label: "+7 (Russia)" },
        { value: "+55", label: "+55 (Brazil)" },
        { value: "+27", label: "+27 (South Africa)" },
        { value: "+34", label: "+34 (Spain)" },
        { value: "+82", label: "+82 (South Korea)" },
        { value: "+62", label: "+62 (Indonesia)" },
        { value: "+63", label: "+63 (Philippines)" },
        { value: "+64", label: "+64 (New Zealand)" },
        { value: "+20", label: "+20 (Egypt)" },
        { value: "+234", label: "+234 (Nigeria)" },
        { value: "+92", label: "+92 (Pakistan)" },
        { value: "+880", label: "+880 (Bangladesh)" },
        { value: "+971", label: "+971 (UAE)" },
        { value: "+966", label: "+966 (Saudi Arabia)" },
        { value: "+98", label: "+98 (Iran)" },
        { value: "+972", label: "+972 (Israel)" },
        { value: "+351", label: "+351 (Portugal)" },
        { value: "+46", label: "+46 (Sweden)" },
        { value: "+31", label: "+31 (Netherlands)" },
        { value: "+32", label: "+32 (Belgium)" },
        { value: "+41", label: "+41 (Switzerland)" },
        { value: "+48", label: "+48 (Poland)" },
        { value: "+90", label: "+90 (Turkey)" },
        { value: "+94", label: "+94 (Sri Lanka)" },
        { value: "+60", label: "+60 (Malaysia)" },
        { value: "+65", label: "+65 (Singapore)" },
        { value: "+66", label: "+66 (Thailand)" },
        { value: "+52", label: "+52 (Mexico)" },
        { value: "+54", label: "+54 (Argentina)" },
        { value: "+56", label: "+56 (Chile)" },
        { value: "+57", label: "+57 (Colombia)" },
        { value: "+58", label: "+58 (Venezuela)" },
        { value: "+593", label: "+593 (Ecuador)" },
        { value: "+51", label: "+51 (Peru)" },
        { value: "+53", label: "+53 (Cuba)" },
        { value: "+505", label: "+505 (Nicaragua)" },
        { value: "+507", label: "+507 (Panama)" },
        { value: "+502", label: "+502 (Guatemala)" },
        { value: "+503", label: "+503 (El Salvador)" },
        { value: "+504", label: "+504 (Honduras)" },
        { value: "+591", label: "+591 (Bolivia)" },
        { value: "+592", label: "+592 (Guyana)" },
        { value: "+94", label: "+94 (Sri Lanka)" },
        { value: "+93", label: "+93 (Afghanistan)" },
        { value: "+964", label: "+964 (Iraq)" },
        { value: "+960", label: "+960 (Maldives)" },
        { value: "+977", label: "+977 (Nepal)" },
        { value: "+95", label: "+95 (Myanmar)" },
        { value: "+856", label: "+856 (Laos)" },
        { value: "+855", label: "+855 (Cambodia)" },
        { value: "+84", label: "+84 (Vietnam)" },
        { value: "+673", label: "+673 (Brunei)" },
        { value: "+679", label: "+679 (Fiji)" },
        { value: "+682", label: "+682 (Cook Islands)" },
        { value: "+685", label: "+685 (Samoa)" },
        { value: "+686", label: "+686 (Kiribati)" },
        { value: "+687", label: "+687 (New Caledonia)" },
        { value: "+689", label: "+689 (French Polynesia)" },
        { value: "+691", label: "+691 (Micronesia)" },
        { value: "+692", label: "+692 (Marshall Islands)" },
        { value: "+850", label: "+850 (North Korea)" },
        { value: "+852", label: "+852 (Hong Kong)" },
        { value: "+853", label: "+853 (Macau)" },
        { value: "+855", label: "+855 (Cambodia)" },
        { value: "+856", label: "+856 (Laos)" },
        { value: "+880", label: "+880 (Bangladesh)" },
        { value: "+960", label: "+960 (Maldives)" },
        { value: "+961", label: "+961 (Lebanon)" },
        { value: "+962", label: "+962 (Jordan)" },
        { value: "+963", label: "+963 (Syria)" },
        { value: "+964", label: "+964 (Iraq)" },
        { value: "+965", label: "+965 (Kuwait)" },
        { value: "+966", label: "+966 (Saudi Arabia)" },
        { value: "+967", label: "+967 (Yemen)" },
        { value: "+968", label: "+968 (Oman)" },
        { value: "+971", label: "+971 (UAE)" },
        { value: "+972", label: "+972 (Israel)" },
        { value: "+973", label: "+973 (Bahrain)" },
        { value: "+974", label: "+974 (Qatar)" },
        { value: "+975", label: "+975 (Bhutan)" },
        { value: "+976", label: "+976 (Mongolia)" },
        { value: "+977", label: "+977 (Nepal)" },
        { value: "+992", label: "+992 (Tajikistan)" },
        { value: "+993", label: "+993 (Turkmenistan)" },
        { value: "+994", label: "+994 (Azerbaijan)" },
        { value: "+995", label: "+995 (Georgia)" },
        { value: "+996", label: "+996 (Kyrgyzstan)" },
        { value: "+998", label: "+998 (Uzbekistan)" },
    ];

    const handleCountryChange = (selectedOption: any) => {
        console.log("Selected Country Code:", selectedOption);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input Value:", event.target.value);
    };

    const handleCategoryChange = (selectedOption: any) => {
        console.log("Selected Category:", selectedOption);
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <form className="w-full max-w-3xl sm:max-w-4xl bg-white p-8 sm:px-4">
                <h1 className="text-3xl font-bold text-center sm:text-left text-gray-800 mb-4">
                    Let's Book Your FREE Trial
                </h1>
                <p className="text-center sm:text-left text-gray-600 mb-8">
                    Let us know who is attending the trial
                </p>

                {/* Phone Number */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2 sm:text-left">
                        Phone Number* <span className="text-sm text-gray-500">(with country code)</span>
                    </label>
                    <div className="flex flex-row items-center border border-gray-300 rounded-md focus-within:ring-orange-500 focus-within:ring-2 transition-all duration-300">
                        <div className="relative w-auto">
                            <Select
                                id="countryCode"
                                name="countryCode"
                                options={countryOptions}
                                onChange={handleCountryChange}
                                placeholder="Select"
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        border: "none",
                                        boxShadow: "none",
                                        padding: "0",
                                        minWidth: "120px",
                                        cursor: "pointer",
                                    }),
                                    valueContainer: (base) => ({
                                        ...base,
                                        padding: "0",
                                        justifyContent: "center",
                                    }),
                                    dropdownIndicator: (base, state) => ({
                                        ...base,
                                        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.2s",
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        zIndex: 10,
                                        width: "auto",
                                    }),
                                }}
                                components={{
                                    IndicatorSeparator: () => null,
                                }}
                                getOptionLabel={(e) => `${e.label}`}
                            />
                        </div>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            onChange={handleChange}
                            required
                            placeholder="Enter your Number"
                            className="flex-1 p-2 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Student Name */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2 sm:text-left">
                        Student Name*
                    </label>
                    <input
                        type="text"
                        placeholder="Enter full name of student"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-500"
                    />
                </div>

                {/* Select Gender */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2 sm:text-left">
                        Select Gender*
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                className="mr-2 focus:ring-orange-500"
                            />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                className="mr-2 focus:ring-orange-500"
                            />
                            Female
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                className="mr-2 focus:ring-orange-500"
                            />
                            I don't want to tell
                        </label>
                    </div>
                </div>

                {/* Choose Your Category */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2 sm:text-left">
                        Choose Your Category*
                    </label>
                    <Select
                        options={categoryOptions}
                        onChange={handleCategoryChange}
                        placeholder="Select a category"
                        styles={{
                            control: (base) => ({
                                ...base,
                                borderColor: "gray",
                                boxShadow: "none",
                                "&:hover": { borderColor: "orange" },
                            }),
                            menu: (base) => ({
                                ...base,
                                zIndex: 10,
                            }),
                        }}
                    />
                </div>

                {/* Referral Code */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2 sm:text-left">
                        Referral Code
                    </label>
                    <input
                        type="text"
                        placeholder="Enter referral code if you have"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-500"
                    />
                </div>

                {/* How Did You Hear About Us */}
                <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-2 sm:text-left">
                        How Did You Hear About Us?
                    </label>
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-500"
                    >
                        <option>Please select one</option>
                        <option>Social Media</option>
                        <option>Friend</option>
                        <option>Advertisement</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="sm:text-right text-center">
                    <button
                        type="submit"
                        className="w-full sm:w-fit bg-orange-500 text-white font-medium px-10 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}