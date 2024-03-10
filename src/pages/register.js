import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs, updateDoc, doc, addDoc,deleteDoc } from '@firebase/firestore';
import { useForm } from "react-hook-form";
import { Seo } from "../components/Seo";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { border } from "@mui/system";
import { Firestore } from "../../.firebase/ConfigFirebase";
import { format } from 'date-fns'; 
export const Head = () => <Seo routename={"Register"} />;

// const goldColor = "#F2AA4CFF";
const goldColor = 'white'

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
  
  // FIREBASE ACTIONS
  const shortlistsCollectionRef = collection(Firestore,"shortlists")
  const paymentsCollectionRef = collection(Firestore,"payments")
  const [shortlistedList, setShortlistedList] = useState([])
  const [paymentsList, setPaymentList] = useState([])
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const  [noticePoints, setNoticePoints] = useState([
    "Pay the 300/- rupees per team in a single payment",
    "Once paid money will not be refunded",
    "prefer phonePay, google Pay, PayTM (Net Banking is not allowed)",
    "If you have any quries reach out Sreekar : 8121170046 , Nisritha : 7337492327"
  ]);

  // ADD DOC
  const addDocFun = async(collectionRef,data)=>{
    try{
      await addDoc(collectionRef, {...data});
      alert("Payment is registered succesully")
    }catch(e){
      alert("Something went wrong!")
      console.log("Error :",e)
    }
    console.log(data);
  }

  // READ DOCS
  const readDocsFun = async()=>{
    // get shortlisted emails
    // try{
    //   const querySnapshot = await getDocs(shortlistsCollectionRef);
    //   const shortlistedDocs = []
    //   querySnapshot.forEach((doc)=>{
    //     shortlistedDocs.push({id:doc.id, ...doc.data()});
    //   })
    //   setShortlistedList(shortlistedDocs)
    // } catch(e){
    //   alert("Something went wrong!")
    //   console.log("Error :",e)
    // }
    // get payments details
    // try{
    //   const querySnapshot = await getDocs(paymentsCollectionRef);
    //   const paymentsDocs = []
    //   querySnapshot.forEach((doc)=>{
    //     paymentsDocs.push({id:doc.id, ...doc.data()});
    //   })
    //   setPaymentList(paymentsDocs)
    // } catch(e){
    //   alert("Something went wrong!")
    //   console.log("Error :",e)
    // }
  }

  // UPDATE DOC
  const updateDocFun = async(collectionRef,data)=>{
    const q = query(collectionRef, where('email', '==', email));
  
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        await updateDoc(doc.ref, {email,name, status:true});
        alert(`Document with email ${email} updated successfully!`);
      });
    } catch (error) {
      alert('Error updating document: ', error);
    }
  }

  // DELETE DOC
  const deleteDocFun = async(collectionRef,data)=>{
    const q = query(collectionRef, where('email', '==', email));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        alert(`Document with email ${email} deleted successfully!`);
      });
    } catch (error) {
      alert('Error deleting document: ', error);
    }
  }



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async(data) => {
    data.verified = false;
    const currentDate = new Date();
    const formattedDateTime = await format(currentDate, "dd/MM/yyyy, HH:mm:ss 'IST'");
    data.timestamp = formattedDateTime;
    console.log(data);
    if(verified == false){
      setFormStep(1);
      reset();
      window.alert('Your email id is not yet verified! Please verify your email id')
    }
    else{
      await addDocFun(paymentsCollectionRef,data)
      reset();
    }
    window.location.href = "/turingcup";
    // window.alert("Form submitted successfully!");
  };

  const handleNext = async() => {
    if (formStep === 1 && Object.keys(errors).length === 0) {
      const shortlistedDocs = [];
      try{
        const q = query(shortlistsCollectionRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          shortlistedDocs.push({ id: doc.id, ...doc.data() });
        });
      } catch(e){
        alert("Something went wrong!");
        console.log("Error :", e);
      }

      if(shortlistedDocs.length === 1 ) {
        setVerified(true);
        setFormStep(formStep+1)
      }
      else{
        setVerified(false);
        setFormStep(1);
        window.alert("your team is not shortlisted. please provide the correct email of team leader")
        reset();  
        window.location.href = "/turingcup";
      }
    }
  };

  useEffect(()=>{
    readDocsFun();
  },[]);

  return (
    <div
      className="fullpage"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        backgroundColor: "#101820FF",
        minHeight: "110vh",
        borderRadius:"5px",
        margin:"auto",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          marginTop="50px"
          sx={{
            pb: 2,
            fontFamily: ['"Gruppo"', "cursive"].join(","),
            color: goldColor,
            fontSize: "2.5rem"
          }}
        >
          REGISTRATION FOR ROUND-2
          {/* Displaying notice points */}
          <div style={{ marginBottom: "20px" }}>
            {noticePoints.map((point, index) => (
                <Typography key={index} sx={{ marginBottom: "10px" }}
                  style={{
                    color:'#F2AA4CFF',
                    marginTop:'10px'
                  }}
                >
                    <li>{point}</li>
                </Typography>
            ))}
          </div>
        </Typography>
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
              onChange={(e)=>setEmail(e.target.value)}
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
                Make payment to : 8121170046 (Kurudi Sreekarvyas)
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
              helperText={errors.leaderName ? "Team Leader Name is required" : ""}
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
