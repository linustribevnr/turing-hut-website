import React from "react";
import Layout from "../components/Layout";
import { Typography, Grid, Box } from "@mui/material";
import { Seo } from "../components/Seo";
export const Head = () => <Seo routename={"Contact"} />;
export default function contactPage() {
  return (
    <Layout>
      <Box>
        <iframe
          title="VNRVJIET Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.280899151561!2d78.38460531470552!3d17.541807987986324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0ab28e0975%3A0x7b048b2858fdee94!2sVallurupalli%20Nageswara%20Rao%20Vignana%20Jyothi%20Institute%20of%20Engineering%20%26Technology!5e0!3m2!1sen!2sin!4v1591108891814!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
        ></iframe>
      </Box>
      <Box textAlign={"center"} sx={{ p: 2 }}>
        <Typography
          variant="h5"
          color="secondary"
          fontWeight={"bold"}
          sx={{ display: "inline" }}
        >
          Lets&nbsp;
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          fontWeight={"bold"}
          sx={{ display: "inline" }}
        >
          Talk.
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item xs={12} md={4} xl={3} justifyContent={"right"}>
          <Typography variant="body1" color="secondary">
            CSE Department, <br />
            VNR Vignana Jyothi Institute of Engineering and Technology, <br />
            Pragathi Nagar, Nizampet(S.O), <br />
            Hyderabad, Telangana, India. <br />
            500 090
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={3}>
          <Typography variant="body1" color="secondary" sx={{ p: 1 }}>
            Mail us at turinghut@vnrvjiet.in
          </Typography>
          <Typography variant="body1" color="secondary" sx={{ p: 1 }}>
            Or Call 91-040-23042758/59/60
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
