import Select from "react-select";

export default function ContactUs() {
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

    return (
        <div className="flex flex-col items-center justify-center sm:p-8 min-h-screen">
            {/* Main Card */}
            <div className="bg-white shadow-lg rounded-4xl sm:rounded-2xl overflow-hidden w-full sm:max-w-4xl mb-8">
                <div className="flex flex-col md:flex-row">
                    {/* Left Section */}
                    <div className="bg-gray-200 px-6 py-16 sm:p-8 w-full md:w-1/2 text-base sm:text-lg flex flex-col justify-center">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-950">Visit Us</h2>
                        <p className="mb-4 sm:mb-6 text-gray-700">
                            <strong className="text-purple-950">INDIA:</strong> B-203, Shyam Enclave, Opposite Apex Towers, Maninagar, Ahmedabad, Gujarat, India – 380008
                        </p>
                        <p className="mb-4 sm:mb-6 text-gray-700">
                            <strong className="text-purple-950">GLOBAL:</strong> B-203, Shyam Enclave, Opposite Apex Towers, Maninagar, Ahmedabad, Gujarat, India – 380008
                        </p>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-950">Call Us</h2>
                        <p className="mb-2 sm:mb-4 text-gray-700">
                            <strong className="text-purple-950">INDIA:</strong> +91 8092621301
                        </p>
                        <p className="text-gray-700">
                            <strong className="text-purple-950">USA:</strong> +1 6469711794
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="bg-white p-6 sm:p-8 w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-center">Write to us</h2>
                        <form className="space-y-4">
                            {/* Name Input */}
                            <div className="mb-4 sm:mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-purple-500"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-4 sm:mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="example@mail.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-purple-500"
                                />
                            </div>

                            {/* Phone Number Input */}
                            <div className="mb-4 sm:mb-6">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Phone Number* <span className="text-sm text-gray-500">(with country code)</span>
                                </label>
                                <div className="flex flex-row items-center border border-gray-300 rounded-md focus-within:ring-purple-500 focus-within:ring-2 transition-all duration-300">
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

                            {/* Message Input */}
                            <div className="mb-4 sm:mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={2}
                                    placeholder="Write your message..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-purple-500"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <p className="text-sm text-gray-500 mt-4 text-center">
                            We’ll get back to you in 1-2 business days.
                        </p>
                    </div>
                </div>
            </div>

            {/* Additional Section */}
            <div className="px-5 sm:px-0 flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-5xl tracking-wide my-5 sm:mt-10 tracking-wide">
                {/* Email Us */}
                <div className="flex items-center gap-4 w-full sm:w-1/3">
                    <div className="bg-orange-500 text-white p-4 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5m0 0L2.25 6.75m9.75 6.5v6.5"
                            />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            For any queries regarding our services, kindly send an e-mail to: info@gandharvaschoolofmusic.com
                        </p>
                    </div>
                </div>

                {/* Customer Support */}
                <div className="flex items-center gap-4 w-full sm:w-1/3">
                    <div className="bg-orange-500 text-white p-4 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25V9m9 0v9.75a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25V9m13.5 0H4.5"
                            />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Customer Support</h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            For any issue/escalation regarding our services, kindly send an e-mail to: info@gandharvaschoolofmusic.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}