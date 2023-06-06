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
          date="08-03-2023"
          dateClassName={"timeline"}
          icon={<LooksOneOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            LAST DATE TO REGISTER
          </h3>
          <h4>
            Registration details: Eligibility: All undergraduate students,
            pursuing a full-time degree in any branch <br />
            Team size: 1-2 <br />
            Registration fee: FREE for Round-1, Rs 100 for Round-2 <br />
            Registration for online round will close on 8th March 12 AM <br />
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
          date="11-03-2023"
          dateClassName={"timeline"}
          icon={<LooksTwoOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">ROUND-1</h3>
          <h4>
            The qualifier round 1 for the Turing Cup 2023 coding contest. <br />
            Date: 11/03/2023 - Saturday <br />
            Time: 19:30 - 22:00 <br />
            Platform: HackerRank <br />
            Location: Online <br />
            Duration: 2h 30m <br />
            Contest format: IOI format <br />
            (No penalty for wrong submissions and tie breaks are based on time
            of submission(Last AC)) <br />
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
          date="25-03-2023"
          dateClassName={"timeline"}
          icon={<Looks3OutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">ROUND-2</h3>
          <h4>
            The onsite round for the Turing Cup 2023 for the qualified teams of
            Round-1. <br />
            Date: 25/03/2023 - Saturday <br />
            Time: 10:15 - 13:00 <br />
            Platform: HackerRank <br />
            Location: VNR VJIET Campus, Bachupally, Hyderabad <br />
            Duration: 2h 45m <br />
            Contest format: ACM format <br />
            (Penalty of 1 for wrong submissions and the leaderboard will be
            freezed during the final 30 minutes) <br />
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
          date="25-03-2022"
          dateClassName={"timeline"}
          icon={<Looks4OutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">ROUND-3</h3>
          <h4>
            The third and final round (Onsite) of Turing Cup 2023 coding contest{" "}
            <br />
            Date: 25/03/2023 - Saturday <br />
            Time: 13:45 - 16:30 <br />
            Platform: TBD <br />
            Location: VNR VJIET Campus, Bachupally, Hyderabad <br />
            Duration: 2h 45m <br />
            Contest format: TBD <br />
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timelinee;
