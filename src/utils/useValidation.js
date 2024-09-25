import isEmail from "validator/lib/isEmail";

export default function useValidation(formInputs) {
  const isEmpty = !Object.values(formInputs).every((input) => input !== null && input !== "");
  const isValidEmail = formInputs.email ? isEmail(formInputs.email) : false;

  return { isEmpty, isValidEmail };
}
