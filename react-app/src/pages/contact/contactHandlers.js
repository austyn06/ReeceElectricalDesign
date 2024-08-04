export const handleChange = (e, formData, setFormData) => {
  const { id, value } = e.target;
  if (id === "phone") {
    const formattedPhoneNumber = formatPhoneNumber(value);
    setFormData({ ...formData, [id]: formattedPhoneNumber });
  } else {
    setFormData({ ...formData, [id]: value });
  }
};

export const formatPhoneNumber = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export const validateForm = (formData, setErrors) => {
  const newErrors = {};
  if (!formData.firstName) newErrors.firstName = "This field is required";
  if (!formData.lastName) newErrors.lastName = "This field is required";
  if (!formData.email) {
    newErrors.email = "This field is required";
  } else if (!formData.email.includes('@')) {
    newErrors.email = "Email must contain '@' symbol";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email format. Expected format: example@yourdomain.com";
  }
  if (!formData.phone) {
    newErrors.phone = "This field is required";
  } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
    newErrors.phone = "Invalid phone number format. Expected format: (123) 456-7890";
  }
  if (!formData.message) newErrors.message = "This field is required";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
