import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import Looks4OutlinedIcon from "@mui/icons-material/Looks4Outlined";
import "./turingcup.css";

function Timelinee() {
  return (
    <div m={5}>
      <h2 style={{ textAlign: "center", color: "#F2AA4CFF" }}>
        EVENT TIMELINE
      </h2>
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
          date="09-03-2024"
          dateClassName={"timeline"}
          icon={<LooksOneOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            LAST DATE TO REGISTER
          </h3>
          <h4
            style={{
              opacity: 0.8,
              lineHeight: "20px"
            }}
          >
            Registration details: Eligibility: All undergraduate students,
            pursuing a full-time degree in any branch <br />
            Team size : 1-2 <br />
            Registration fee: FREE for Round-1, Rs 300 for Round-2 <br />
            Registration for online round will close on 9th March 2 PM <br />
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
          date="09-03-2024"
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
            The qualifier round 1 for the Turing Cup 2024 coding contest. <br />
            <br />
            Date : 09/03/2024 - Saturday <br />
            Time : 06:00 PM - 08:00 PM (IST)
            <br />
            Platform : TBD <br />
            Location : Online <br />
            Duration : 02h 00m <br />
            Contest format : TBD <br />
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
          date="28-03-2024"
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
            The onsite round for the Turing Cup 2024 for the qualified teams of
            Round-1. <br />
            <br />
            Date : 28/03/2024 - Thursday <br />
            Time : 10:30 AM - 12:30 PM (IST)
            <br />
            Platform : TBD <br />
            Location : VNR VJIET Campus, Bachupally, Hyderabad <br />
            Duration : 02h 00m <br />
            Contest format : TBD <br />
            {/* (Penalty of 1 for wrong submissions and the leaderboard will be
            freezed during the final 30 minutes) <br /> */}
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
          date="28-03-2024"
          dateClassName={"timeline"}
          icon={<Looks4OutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">ROUND-3</h3>
          <h4
            style={{
              opacity: 0.8,
              lineHeight: "20px"
            }}
          >
            The third and final round (Onsite) of Turing Cup 2024 coding contest{" "}
            <br />
            <br />
            Date : 28/03/2024 - Thursday
            <br />
            Time : 2:00 PM - 4:30 PM (IST)
            <br />
            Platform : TBD <br />
            Location : VNR VJIET Campus, Bachupally, Hyderabad <br />
            Duration : 02h 30m <br />
            Contest format : TBD <br />
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timelinee;
