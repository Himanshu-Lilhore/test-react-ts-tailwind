import React, { useState } from "react";
import Select from "react-select";

// Country options for the dropdown
const countryOptions = [
    { value: "+91", label: "India (+91)" },
    { value: "+1", label: "USA (+1)" },
    { value: "+44", label: "UK (+44)" },
    { value: "+61", label: "Australia (+61)" },
    { value: "+81", label: "Japan (+81)" },
    { value: "+54", label: "Argentina (+54)" },
    { value: "+387", label: "Bosnia and Herzegovina (+387)" },
    { value: "+226", label: "Burkina Faso (+226)" },
    { value: "+973", label: "Bahrain (+973)" },
    { value: "+229", label: "Benin (+229)" },
    { value: "+590", label: "Saint Barthélemy (+590)" },
    { value: "+591", label: "Bolivia (+591)" },
    { value: "+599", label: "Bonaire (+599)" },
    // ...
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