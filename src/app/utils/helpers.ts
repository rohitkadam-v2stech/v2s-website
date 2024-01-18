import { SALES_EMAIL, WHATSAPP_NUMBER } from "../config/constants";

export const removeAsterisk = (inputString: string): string => {
  return inputString.replace(/\/\*/g, "");
};

export const formatAmount = (value: number) => {
  if (value < 1000) {
    return value.toString();
  } else if (value < 1000000) {
    const formattedNumber = (value / 1000).toFixed(1);
    return formattedNumber.endsWith(".0")
      ? `${(value / 1000).toFixed(0)}K`
      : `${formattedNumber}K`;
  } else if (value < 1000000000) {
    const formattedNumber = (value / 1000000).toFixed(1);
    return formattedNumber.endsWith(".0")
      ? `${(value / 1000000).toFixed(0)}M`
      : `${formattedNumber}M`;
  } else {
    const formattedNumber = (value / 1000000000).toFixed(1);
    return formattedNumber.endsWith(".0")
      ? `${(value / 1000000000).toFixed(0)}B`
      : `${formattedNumber}B`;
  }
};

export const navigateToWhatsAppContact = () => {
  // Create the WhatsApp link
  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
  // Open the WhatsApp link in a new tab
  window.open(whatsappLink, "_blank");
};

export const navigateToMail = () => {
  // Replace the following values with your actual email and subject
  const email = SALES_EMAIL;
  const subject = "";

  // Create the mailto link
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  // Open the default email client
  window.location.href = mailtoLink;
};

export const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
  alert("Copied text to clipboard.");
};
