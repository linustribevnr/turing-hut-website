import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { collection, query, where, getDocs, addDoc } from "@firebase/firestore";
import DB from "../../.firebase/ConfigFirebase";
import { useForm } from "react-hook-form";
import { Seo } from "../components/Seo";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { border } from "@mui/system";
// import Layout from "../components/Layout";
import { format } from "date-fns";
export const Head = () => <Seo routename={"Register"} />;

// STYLES

const goldColor = "#F2AA4CFF";

const textFieldStyle = {
  mt: 2,
  width: "300px",
  "& input": {
    color: goldColor,
    fontFamily: ['"Gruppo"', "cursive"].join(",")
  },
  "& label": {
    color: goldColor,
    fontFamily: ['"Gruppo"', "cursive"].join(",")
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: goldColor
    },
    "&:hover fieldset": {
      borderColor: goldColor,
      borderWidth: "1.75px"
    },
    "&.Mui-focused fieldset": {
      borderColor: goldColor
    }
  },
  "& .MuiInputLabel-outlined": {
    color: goldColor,
    fontFamily: ['"Gruppo"', "cursive"].join(",")
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: goldColor
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #101820FF inset",
    WebkitTextFillColor: goldColor
  }
};

const RegisterForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState();
  const shortlistsCollectionRef = collection(DB, "shortlists");
  const paymentsCollectionRef = collection(DB, "payments");
  const [noticePoints, setNoticePoints] = useState([
    "Verify your team leader's email  and proceed to the payment",
    "Don't fill the form multiple times",
    "Please provide the details of the Team Leader that match the information provided in Round-1 Registration",
    "The registration fee for each team is Rs 300 , Make sure to pay within a single transaction.",
    "We will not issue any kind of refund",
    "You can pay using PhonePay, Google Pay, PayTM (Net Banking is not available)",
    "If you have any queries, reach out to Sreekar : 8121170046 , Nisritha : 7337492327",
    "Make sure the transaction ID you give is valid"
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const getDocByEmail = async (collectionRef, email) => {
    try {
      const shortlistedDocs = [];
      const q = query(collectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        shortlistedDocs.push({ id: doc.id, ...doc.data() });
      });
      // console.log('Shortlisted Documents :', shortlistedDocs)
      return shortlistedDocs;
    } catch (error) {
      console.error("Error getting document:", error);
    }
    return [];
  };

  const getPaymentByEmail = async (collectionRef, email) => {
    try {
      const paymentsDocs = [];
      const q = query(collectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        paymentsDocs.push({ id: doc.id, ...doc.data() });
      });
      console.log("Payments Documents :", paymentsDocs);
      return paymentsDocs;
    } catch (e) {
      console.error("Error in getting document : ", e);
    }
    return [];
  };

  const addNewDoc = async (collectionRef, data) => {
    try {
      console.log("Adding document with data:", data);
      const docRef = await addDoc(collectionRef, data);
      console.log("New Document ID:", docRef.id);
    } catch (e) {
      console.log("Error occurred:", e);
    }
  };

  const onSubmit = async data => {
    data.verified = false;
    const currentDate = new Date();
    const formattedDateTime = await format(
      currentDate,
      "dd/MM/yyyy, HH:mm:ss 'IST'"
    );
    data.timestamp = formattedDateTime;
    console.log("New Data to be submitted : ", data);

    if (verified === false) {
      setFormStep(1);
      toast.error(
        "Your email id is not yet verified! Please verify your email id"
      );
    } else {
      try {
        await addNewDoc(paymentsCollectionRef, data);

        const ackwnloedggement = await getPaymentByEmail(
          paymentsCollectionRef,
          data.email
        );
        if (ackwnloedggement.length !== 0)
          toast.success(
            `Form submitted successfully!\nTeam Name : ${ackwnloedggement[0]["teamName"]}\nEmail : ${ackwnloedggement[0]["email"]}`
          );
        else toast.error("An error occured. please contact the admin");
      } catch (error) {
        console.log("Error occured : ", error);
      }
    }
  };

  const handleNext = async () => {
    if (formStep === 1) {
      const shortlistedDocs = await getDocByEmail(
        shortlistsCollectionRef,
        email
      );

      if (shortlistedDocs.length !== 0) {
        setVerified(true);
        setFormStep(formStep + 1);
      } else {
        setVerified(false);
        setFormStep(1);
        toast.error(
          "your team is not shortlisted. please provide the correct email of team leader"
        );
        // window.location.href = "/register";
      }
    }
  };

  return (
    <div
      // className="fullpage"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#101820FF",
        // minHeight: "110vh",
        borderRadius: "5px",
        margin: "auto",
        width: "100%",
        paddingBottom: "150px"
      }}
    >
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%"
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          marginTop="50px"
          textAlign={"center"}
          sx={{
            pb: 2,
            fontFamily: ['"Gruppo"', "cursive"].join(","),
            color: goldColor,
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%"
          }}
        >
          REGISTRATION FOR ROUND-2
        </Typography>
        {/* Displaying notice points */}
        <div style={{ marginBottom: "20px" }}>
          {noticePoints.map((point, index) => (
            <Typography
              key={index}
              variant="h4"
              sx={{
                fontFamily: ['"Gruppo"', "cursive"].join(","),
                color: goldColor,
                fontSize: "1.1rem"
              }}
            >
              <li style={{ textAlign: "justify", marginTop: "5px" }}>
                {point}
              </li>
            </Typography>
          ))}
        </div>
        {formStep === 1 && (
          <>
            <TextField
              label="Email"
              type="email"
              {...register("email", { required: true })}
              error={errors.email ? true : false}
              helperText={errors.email ? "Email is required" : ""}
              sx={textFieldStyle}
              variant="outlined"
              autoComplete="new-email"
              onChange={e => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                fontFamily: ['"Gruppo"', "cursive"].join(","),
                backgroundColor: "#101820FF",
                color: goldColor,
                border: `1px solid ${goldColor}`,
                "&:hover": {
                  backgroundColor: goldColor,
                  color: "#fff"
                },
                mt: 2
              }}
            >
              Verify
            </Button>
          </>
        )}
        {formStep === 2 && verified && (
          <>
            <Typography
              variant="h4"
              fontWeight="bold"
              marginTop="50px"
              sx={{
                pb: 2,
                fontFamily: ['"Gruppo"', "cursive"].join(","),
                color: goldColor,
                fontSize: "1.5rem"
              }}
            >
              Make payment to : 8121170046 <br /> (Kurudi Sreekarvyas)
            </Typography>
            <TextField
              label="Team Name"
              {...register("teamName", { required: true })}
              error={errors.teamName ? true : false}
              helperText={errors.teamName ? "Team Name is required" : ""}
              sx={textFieldStyle}
              variant="outlined"
              autoComplete="new-name"
            />
            <TextField
              label="Team Leader Name"
              {...register("leaderName", { required: true })}
              error={errors.leaderName ? true : false}
              helperText={
                errors.leaderName ? "Team Leader Name is required" : ""
              }
              sx={textFieldStyle}
              variant="outlined"
              autoComplete="new-clg"
            />
            <TextField
              label="Team Leader Mobile Number"
              type="tel"
              {...register("phoneNumber", {
                required: true,
                pattern: /^[0-9]{10}$/
              })}
              error={errors.phoneNumber ? true : false}
              helperText={
                errors.phoneNumber ? "Phone Number must be 10 digits" : ""
              }
              sx={textFieldStyle}
              variant="outlined"
            />
            <TextField
              label="College Name"
              {...register("collegeName", { required: true })}
              error={errors.collegeName ? true : false}
              helperText={errors.collegeName ? "College Name is required" : ""}
              sx={textFieldStyle}
              variant="outlined"
              autoComplete="new-clg"
            />
            <TextField
              label="Transaction Id"
              {...register("transactionId", { required: true })}
              error={errors.transactionId ? true : false}
              helperText={
                errors.transactionId ? "Transaction ID is required" : ""
              }
              sx={textFieldStyle}
              variant="outlined"
              autoComplete="new-id"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontFamily: ['"Gruppo"', "cursive"].join(","),
                backgroundColor: "#101820FF",
                color: goldColor,
                border: `1px solid ${goldColor}`,
                "&:hover": {
                  backgroundColor: goldColor,
                  color: "#fff"
                },
                mt: 2
              }}
            >
              Submit
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
