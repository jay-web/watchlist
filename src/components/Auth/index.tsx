import { SiGnuprivacyguard } from "react-icons/si";
import Button from "../../ui/Button";

import StyledForm, { StyledFormDiv } from "./style";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";


const Auth = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email !== "") {
      setUser(email);
      navigate("/");
    }
  };

  return (
    <StyledFormDiv>
      <StyledForm onSubmit={handleSubmit}>
        <SiGnuprivacyguard />
        <label>Please signup/login using your email address</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button>Signup / Login</Button>
      </StyledForm>
    </StyledFormDiv>
  );
};

export default Auth;
