import { FormControl, FormLabel, Input, Button, FormErrorMessage } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import useValidation from "../utils/useValidation";

export default function Login() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const handleInputChange = (event, type) => setInputs((prevInputs) => ({ ...prevInputs, [type]: event.target.value }));

  const { isEmpty, isValidEmail } = useValidation(inputs);

  function handleLogin() {
    if (!isEmpty && isValidEmail) {
      console.log("HandleLog");
    }
  }
  return (
    <div className="h-screen flex items-center bg-slate-200">
      <div className="container w-5/12 mx-auto p-4 shadow-md rounded-md bg-white">
        <h2 className="text-lg font-semibold">Login</h2>
        <form className="mt-6" action="#">
          <FormControl isRequired>
            <span className="text-red-500 mb-2 block">{isEmpty ? "Please fill the credentials" : ""}</span>
            <span className="text-red-500 mb-2 block">{inputs.email && !isValidEmail ? "Please enter a valid email" : ""}</span>

            <FormLabel>Email address</FormLabel>
            <Input value={inputs.email} onChange={(e) => handleInputChange(e, "email")} type="email" />
          </FormControl>
          <FormControl className="mt-3" isRequired>
            <FormLabel>Password</FormLabel>
            <Input value={inputs.password} onChange={(e) => handleInputChange(e, "password")} type="password" />
          </FormControl>
          <Button onClick={handleLogin} fontSize="14px" fontWeight="medium" className="mt-4">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
