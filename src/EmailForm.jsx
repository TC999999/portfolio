import { useState } from "react";
import {
  Container,
  Button,
  TextField,
  FormLabel,
  FormGroup,
  Box,
  Typography,
  FormControl,
  Grid2,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { validate } from "email-validator";
import { EmptyInputsError, InvalidEmailError } from "../ErrorMessage.js";
import LoadingScreen from "./LoadingScreen.jsx";
import Success from "./Success";
import "./EmailForm.css";

const EmailForm = () => {
  const initialState = { message: "", from_email: "" };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageHelperText, setMessageHelperText] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [emailInputFocus, setEmailInputFocus] = useState(false);
  const [messInputFocus, setMessInputFocus] = useState(false);
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;

  //For front-end empty input errors only. For request errors, throw custom errors. Changes input div color when respective input is empty and checks if email is valid
  function inputErrorHandler(name, value) {
    if (!value) {
      if (name === "message") {
        setMessageHelperText("Please enter message");
        setMessageError(true);
      } else {
        setIsValidEmail(validate(value));
        setEmailHelperText("Please enter email address");
        setEmailError(true);
      }
    } else {
      if (name === "message") {
        setMessageHelperText("");
        setMessageError(false);
      } else {
        setEmailHelperText("");
        setEmailError(false);
        setIsValidEmail(validate(value));
      }
    }
  }

  //To change the background color of the div of the input when the input is in focus. Without this, only a small part of the front-end input is highlighted
  const handleFocus = (e) => {
    console.log(e.target.id);
    if (e.target.id === "message") {
      setMessInputFocus(true);
    } else if (e.target.id === "from_email") {
      setEmailInputFocus(true);
    }
  };

  //For when the inputs are out of focus, remove the colors of their divs
  const handleBlur = () => {
    setEmailInputFocus(false);
    setMessInputFocus(false);
  };

  //To set the state of tbe form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
    inputErrorHandler(name, value);
  };

  //To submit the data and send the message, if inputs are empty
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!formData.message || !formData.from_email) {
        throw new EmptyInputsError();
      } else {
        if (isValidEmail) {
          console.log(formData);
          const keys = { publicKey, privateKey };
          const templateParams = formData;
          await emailjs.send(serviceID, templateID, templateParams, keys);
          setMessageSent(true);
          setIsLoading(false);
        } else {
          throw new InvalidEmailError();
        }
      }
    } catch (err) {
      setIsLoading(false);
      setSubmitErrorMessage(err.message);
      setTimeout(function () {
        setSubmitErrorMessage("");
      }, 2000);
    }
  };

  if (isLoading && !messageSent) {
    return <LoadingScreen message="Sending" />;
  }

  if (!isLoading && messageSent) {
    return <Success />;
  }

  return (
    <Container className="message-form" sx={{ margin: 2 }}>
      <Typography variant="h2">Send Me A Message!</Typography>
      <Box component="form">
        <FormLabel sx={{ fontSize: "2rem" }}>
          {" "}
          Enter your Email Address and Message in the inputs below!
        </FormLabel>
        <FormGroup>
          <FormControl sx={{ margin: 2 }} id="from_email_div">
            <Grid2 container spacing={2}>
              <Grid2 size={10}>
                <Box
                  id="from_email_input"
                  className={emailInputFocus ? "div-focus" : "div-unfocus"}
                >
                  <TextField
                    id="from_email"
                    name="from_email"
                    label="Type Your Email Address Here"
                    variant="outlined"
                    type="email"
                    value={formData.from_email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    error={emailError}
                    helperText={emailHelperText}
                    fullWidth
                    multiline
                  ></TextField>
                </Box>
              </Grid2>
              <Grid2 size="grow">
                <Typography
                  variant="subtitle2"
                  id="invalidEmailError"
                  hidden={formData.from_email ? false : true}
                  color={isValidEmail ? "green" : "red"}
                >
                  {isValidEmail ? "Valid Address" : "Invalid Address"}
                </Typography>
              </Grid2>
            </Grid2>
          </FormControl>
          <FormControl
            sx={{ margin: 2 }}
            id="message_div"
            className={messInputFocus ? "div-focus" : "div-unfocus"}
          >
            <TextField
              id="message"
              name="message"
              label="Type Your Message Here"
              multiline
              rows={4}
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              error={messageError}
              helperText={messageHelperText}
            ></TextField>
          </FormControl>
          <Button id="submit-btn" onClick={handleSubmit}>
            Send Message
          </Button>
          <Box textAlign="center">
            <Typography id="error-message" variant="subtitle1" color="error">
              {submitErrorMessage}
            </Typography>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default EmailForm;
