export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Aadhar Card",
  "Driver's License",
  "Passport",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Fernandes",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Liza Dias",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Cruz",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Rahul Singh",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jatin Patil",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Ankit Sharma",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Kumar",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alena Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
