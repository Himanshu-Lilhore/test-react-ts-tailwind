import React, { useState } from "react";
import Select from "react-select";

// Country options for the dropdown
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

export default function AffiliatePartner() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: { value: "+91", label: "India (+91)" },
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCountryChange = (selectedOption: any) => {
        setFormData({ ...formData, countryCode: selectedOption });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", {
            ...formData,
            countryCode: formData.countryCode.value,
        });
        setSubmitted(true);
        setFormData({
            name: "",
            email: "",
            countryCode: { value: "+91", label: "India (+91)" },
            phone: "",
            message: "",
        });
    };

    return (
        <div>
            <section className="bg-[url(/teach-us-2.avif)] w-full h-[60vh] md:h-[90vh] bg-no-repeat bg-top bg-cover flex flex-col items-center justify-center py-10 px-4">
                <div className="md:px-[10%] py-5 md:p-[10%] px-1">
                    <h1
                        className="text-[32px] w-full md:w-1/2 text-left md:text-[64px] text-white mb-6 mt-12 md:mt-28"
                        style={{
                            fontFamily: "var(--font-vidaloka)",
                            fontWeight: 500,
                            lineHeight: 1,
                        }}
                    >
                        Earn a <strong style={{ fontWeight: 700 }}>Flat 25%</strong>{" "}
                        commission on every successful referral
                    </h1>
                    <div className="mt-8">
                        <a
                            href="https://gandharvaschoolofmusic.com/become-our-affiliate/affiliate-partner/"
                            className="inline-block bg-[#9506EE] hover:bg-[#e26200] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                        >
                            <span className="font-bold">Join Now</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="px-4 md:px-[10%] py-5 md:py-[10%]">
                <h3
                    className="text-xl md:text-2xl text-[#7A7A7A] text-left"
                    style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700 }}
                >
                    You Are Applying For
                </h3>
                <h2
                    className="text-3xl md:text-4xl text-[#1A022D] text-left mt-2"
                    style={{
                        fontFamily: "var(--font-vidaloka)",
                        fontWeight: 500,
                    }}
                >
                    Gandharva&apos;s Affiliate Partner
                </h2>
                <form onSubmit={handleSubmit} className="mt-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="border border-gray-300 rounded-sm p-2 mt-1 w-full focus:outline-none focus:ring-[#8506D5] focus:ring-2 transition-all duration-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            WhatsApp Number <sup className="text-red-500">*</sup>
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-sm focus-within:ring-[#8506D5] focus-within:ring-2 transition-all duration-300">
                            <div className="relative">
                                <Select
                                    id="countryCode"
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleCountryChange}
                                    options={countryOptions}
                                    placeholder=""
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            border: "none",
                                            boxShadow: "none",
                                            padding: "0",
                                            minWidth: "150px",
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
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your WhatsApp Number"
                                className="flex-1 p-2 focus:outline-none"
                            />
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                            You&apos;ll receive your Unique Referral Code and other marketing materials over WhatsApp.
                        </p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Id <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="example@mail.com"
                            className="border border-gray-300 rounded-sm p-2 mt-1 w-full focus:outline-none focus:ring-[#8506D5] focus:ring-2 transition-all duration-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            How are you planning to promote Gandharva? <sup className="text-red-500">*</sup>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Be as descriptive as possible. This will let us verify & approve you better."
                            className="border border-gray-300 rounded-sm p-2 mt-1 w-full focus:outline-none focus:ring-[#8506D5] focus:ring-2 transition-all duration-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#9506EE] text-white py-2 px-4 rounded-md hover:bg-purple-900 focus:outline-none focus:ring-[#8506D5] focus:ring-2 transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
                {submitted && (
                    <p className="mt-4 text-green-600 text-center md:text-left">
                        Thank you for applying! We'll get back to you soon.
                    </p>
                )}
            </section>
        </div>
    );
}