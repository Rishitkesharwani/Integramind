const resume = {
  _id: "p1",
  fullName: "Rishit",
  aboutMe: "I am a software developer",
  dob: "",
  email: "rishitkesharwani@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishit-kesharwani-9a9992252/",
  github: "https://github.com/Rishitkesharwani",
  contactNumber: [
    {
      type: "mobile",
      label: "Primary Contact Number",
      value: "+91 7651974842",
    },
    {
      type: "mobile",
      label: "secondary contact Number",
      value: "+91 7651982823",
    },
  ],
  education: [
    {
      institution: "GLA University Mathura",
      Degree: " Bachelor of Technology - Computer Science Engineering",
      CGPA: "7.5",
      Duration: "July 2022 to July 2026",
      Cources: [
        "Operating System",
        "Data Structure",
        "Software testing",
        "Datavases",
      ],
    },
    {
      institution: "Bhavan's Mehta Vidyasharam Bharwari,India",
      Degree: "Class 12",
      Percentage: "72.6",
      Duration: "July 2020 to July 2022",
    },
    {
      institution: "Bhavan's Mehta Vidyasharam Bharwari,India",
      Degree: "Class 12",
      Percentage: "72.6",
      Duration: "July 2020 to July 2022",
    },
  ],
};

console.log(resume);

console.log(resume.contactNumber);
console.log(resume.education);
console.log("resume.contactNumber[1].label:", resume.contactNumber[1].label);
