import { useState } from "react";
// import useSendGrid from "../../../../../../hooks/useSendGrid";

type TContactFormData = {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
};

type TEmailPayload = {
  to_name: string;
  from_name: string;
  message: string;
  contact_number: string;
};

const transformEmailPayload = (data: TContactFormData): TEmailPayload => ({
  from_name: data.name,
  to_name: data.email,
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
      // const response = await sendEmail({
      //   from: contactFormData.email,
      //   to: "rohitkadam.v2stech@gmail.com",
      //   subject: "This is for testing",
      //   text: contactFormData.message,
      // });
      // console.log("Email success response: ", response);
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
