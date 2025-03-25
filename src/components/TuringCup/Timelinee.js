import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import "./turingcup.css";
import { Typography } from "@mui/material";

function Timelinee() {
  return (
    <div m={6}>
      <Typography
        variant="h3"
        mt={10}
        mb={3}
        sx={{
          textAlign: "center",
          fontFamily: "'Gruppo', cursive",
          fontWeight: "bold",
          letterSpacing: "1px",
          textShadow: "0 0 15px rgba(242, 170, 76, 0.8)"
        }}
      >
        EVENT TIMELINE
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "2px solid #F2AA4CFF",
            background: "none",
            color: "#F2AA4CFF"
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F2AA4CFF" }}
          iconStyle={{ background: "#F2AA4CFF", color: "#101820FF" }}
          date="05-04-2025"
          dateClassName={"timeline"}
          icon={<LooksOneOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            LAST DATE TO REGISTER
          </h3>
          <h4
            style={{
              opacity: 0.9,
              lineHeight: "20px"
            }}
          >
            Registration details:
            <br />
            Eligibility: All undergraduate students, pursuing a full-time degree
            in any branch <br />
            Team size : 1-2 <br />
            Registration fee: FREE for Round-1 ; Rs 300/- per team for Round-2
            (Lunch and goodies will be provided)
            <br />
            Registration for online round will close on 5th April 2:00 PM <br />
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "2px solid #F2AA4CFF",
            background: "none",
            color: "#F2AA4CFF"
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F2AA4CFF" }}
          iconStyle={{ background: "#F2AA4CFF", color: "#101820FF" }}
          date="07-04-2025"
          dateClassName={"timeline"}
          icon={<LooksTwoOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">ROUND-1</h3>
          <h4
            style={{
              opacity: 0.8,
              lineHeight: "20px"
            }}
          >
            The qualifier round for the Turing Cup 2K25 coding contest. <br />
            <br />
            Date : 07/04/2025 - Monday <br />
            Time : 08:00 PM - 10:00 PM (IST)
            <br />
            Platform : Hackerrank <br />
            Mode : Online <br />
            Duration : 02h 00m <br />
            {/* (No penalty for wrong submissions and tie breaks are based on time
            of submission(Last AC)) <br /> */}
            Ranklist will be finalized after plagiarism check. <br />
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "2px solid #F2AA4CFF",
            background: "none",
            color: "#F2AA4CFF"
          }}
          contentArrowStyle={{ borderRight: "7px solid  #F2AA4CFF" }}
          iconStyle={{ background: "#F2AA4CFF", color: "#101820FF" }}
          date="19-04-2025"
          dateClassName={"timeline"}
          icon={<Looks3OutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">ROUND-2</h3>
          <h4
            style={{
              opacity: 0.8,
              lineHeight: "20px"
            }}
          >
            The onsite round for the Turing Cup 2K25 for the qualified teams of
            Round-1. <br />
            <br />
            Date : 19/04/2025 - Saturday <br />
            Time : 10:00 AM - 1:00 PM (IST)
            <br />
            Platform : CodeForces <br />
            Mode : Offline <br />
            Location : VNR VJIET Campus, Bachupally, Hyderabad <br />
            Duration : 03h 00m <br />
            {/* (Penalty of 1 for wrong submissions and the leaderboard will be
            freezed during the final 30 minutes) <br /> */}
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timelinee;
