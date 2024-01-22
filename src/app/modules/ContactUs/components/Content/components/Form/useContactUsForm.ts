import { useState } from "react";
// import useSendGrid from "../../../../../../hooks/useSendGrid";

type TContactFormData = {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
};

type TEmailPayload = {
  name: string;
  email: string;
  message: string;
  contact_number: string;
};

const transformEmailPayload = (data: TContactFormData): TEmailPayload => ({
  name: data.name,
  email: data.email,
  contact_number: data.contactNumber,
  message: data.message,
});

const initialState = {
  name: "",
  email: "",
  contactNumber: "",
  message: "",
};

const useContactUsForm = () => {
  const [contactFormData, setContactFormData] =
    useState<TContactFormData>(initialState);
  // const { loading, sendEmail, error } = useSendGrid();

  const handleFormChange = (event: any) => {
    setContactFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/contact-us", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(transformEmailPayload(contactFormData)),
      });
      console.log("Email success response: ", res);
    } catch (error) {
      console.log("Error response", error);
    }
  };

  return {
    contactFormData,
    handleFormChange,
    handleFormSubmit,
  };
};

export default useContactUsForm;
