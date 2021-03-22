export const generateVerifyCode = () => {
  return Math.floor(Math.random() * 10000).toString();
};

export const sendVerificationCode = ({ firstname, phone }) => {
  const code = generateVerifyCode();
  // Twilio code....
  console.log(`Send Sms to ${firstname} to phone number: ${phone}`);
  return code;
};
