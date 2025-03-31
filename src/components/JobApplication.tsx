import React, { useState } from "react";
import Select from "react-select";

function JobApplication() {
  // Define the type for formData
  type FormData = {
    fullName: string;
    phone: string;
    email: string;
    gender: string;
    qualification: string;
    experience: string;
    englishProficiency: string;
    musicCertification: string[]; // Explicitly define as string[]
    homeSetup: string;
  };

  // Use the defined type for formData
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    qualification: "",
    experience: "",
    englishProficiency: "",
    musicCertification: [], // Initialize as an empty array of strings
    homeSetup: "",
  });

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const qualificationOptions = [
    { value: "highschool", label: "High School" },
    { value: "bachelor", label: "Bachelor's Degree" },
    { value: "master", label: "Master's Degree" },
    { value: "phd", label: "PhD" },
  ];

  const experienceOptions = [
    { value: "0-1", label: "0-1 years" },
    { value: "2-3", label: "2-3 years" },
    { value: "4-5", label: "4-5 years" },
    { value: "5+", label: "5+ years" },
  ];

  const englishProficiencyOptions = [
    { value: "basic", label: "Basic" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "native", label: "Native" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption: any, action: any) => {
    setFormData({ ...formData, [action.name]: selectedOption.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      <section className="bg-[#1A022D] w-full h-[50vh] md:h-[60vh] bg-no-repeat bg-top bg-cover flex flex-col items-start justify-center py-10 px-4">
        <div className="md:px-[10%] py-5 md:p-[10%] px-1 md:w-[67%]">
          <h1
            className="text-[32px] w-full text-left md:text-[48px] text-white mb-6 mt-12 md:mt-28"
            style={{
              fontFamily: "var(--font-vidaloka)",
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            Job Application
          </h1>
        </div>
      </section>

      <section className="px-4 md:px-[10%] py-10">
        <h3 className="text-lg md:text-2xl text-[#7A7A7A] font-bold">
          You Are Applying For
        </h3>
        <h2
          className="text-xl md:text-4xl text-[#1A022D] mt-2"
          style={{
            fontFamily: "var(--font-vidaloka)",
            fontWeight: 500,
          }}
        >
          Gandharva&apos;s Online Teacher
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Personal Information */}
          <div>
            <h4 className="text-2xl font-semibold text-[#1A022D] mb-4">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="border border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-orange-500 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <div className="flex items-center focus-within:ring-orange-500 focus-within:ring-2 transition-all duration-300 rounded-md w-full h-fit overflow-hidden border border-gray-300">
                  <Select
                    id="phone"
                    name="phone"
                    options={genderOptions} // Replace with country code options if needed
                    onChange={handleSelectChange}
                    placeholder="Enter Phone Number"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@mail.com"
                  className="border border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-orange-500 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Gender*
                </label>
                <div className="flex items-center focus-within:ring-orange-500 focus-within:ring-2 transition-all duration-300 rounded-md w-full h-fit overflow-hidden border border-gray-300">
                  <Select
                    name="gender"
                    options={genderOptions}
                    onChange={handleSelectChange}
                    placeholder="Choose One"
                    className="w-full h-full rounded-md"
                    styles={{
                      control: (base) => ({
                        ...base,
                        boxShadow: "none",
                        "&:hover": { borderColor: "#e26200" },
                      }),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Qualification & Experience */}
          <div>
            <h4 className="text-2xl font-semibold text-[#1A022D] mb-4">Qualification & Experience</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
                  Highest level of qualification*
                </label>
                <div className="flex items-center focus-within:ring-orange-500 focus-within:ring-2 transition-all duration-300 rounded-md w-full h-fit overflow-hidden border border-gray-300">
                  <Select
                    name="qualification"
                    options={qualificationOptions}
                    onChange={handleSelectChange}
                    placeholder="Select"
                    className="w-full"
                    styles={{
                      control: (base) => ({
                        ...base,
                        boxShadow: "none",
                        "&:hover": { borderColor: "#e26200" },
                      }),
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="englishProficiency" className="block text-sm font-medium text-gray-700 mb-1">
                  Please rate your English proficiency*
                </label>
                <div className="flex items-center focus-within:ring-orange-500 focus-within:ring-2 transition-all duration-300 rounded-md w-full h-fit overflow-hidden border border-gray-300">
                  <Select
                    name="englishProficiency"
                    options={englishProficiencyOptions}
                    onChange={handleSelectChange}
                    placeholder="Select"
                    className="w-full"
                    styles={{
                      control: (base) => ({
                        ...base,
                        boxShadow: "none",
                        "&:hover": { borderColor: "#e26200" },
                      }),
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Year of experience in teaching*
                </label>
                <div className="flex items-center focus-within:ring-orange-500 focus-within:ring-2 transition-all duration-300 rounded-md w-full h-fit overflow-hidden border border-gray-300">
                  <Select
                    name="experience"
                    options={experienceOptions}
                    onChange={handleSelectChange}
                    placeholder="Select"
                    className="w-full"
                    styles={{
                      control: (base) => ({
                        ...base,
                        boxShadow: "none",
                        "&:hover": { borderColor: "#e26200" },
                      }),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Music Certification */}
          <div>
            <h4 className="text-2xl font-semibold text-[#1A022D] mb-4">Do You Have Any Music Certification</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Rockschool", "Trinity", "LCME", "ABRSM", "Others"].map((certification) => (
                <label key={certification} className="flex items-center">
                  <input
                    type="checkbox"
                    name="musicCertification"
                    value={certification}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        musicCertification: prev.musicCertification.includes(value)
                          ? prev.musicCertification.filter((item) => item !== value)
                          : [...prev.musicCertification, value],
                      }));
                    }}
                    className="mr-2 focus:ring-orange-500 text-orange-500"
                  />
                  {certification}
                </label>
              ))}
            </div>
          </div>

          {/* Home Setup */}
          <div>
            <h4 className="text-2xl font-semibold text-[#1A022D] mb-4">Home Setup</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="homeSetup"
                  value="Yes"
                  onChange={handleChange}
                  className="mr-2 focus:ring-orange-500 text-orange-500"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="homeSetup"
                  value="No, but I can arrange"
                  onChange={handleChange}
                  className="mr-2 focus:ring-orange-500 text-orange-500"
                />
                No, but I can arrange
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#e26200] text-white py-2 px-4 rounded-md hover:bg-[#c75000] focus:outline-none focus:ring-orange-500 focus:ring-2 transition-all duration-300 md:w-auto"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}

export default JobApplication;
