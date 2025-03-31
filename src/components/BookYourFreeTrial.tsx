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