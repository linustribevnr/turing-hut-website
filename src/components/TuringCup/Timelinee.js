import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';

function Timelinee() {
  return (

    
    <div m={5}>

      <h2
        style={{textAlign:'center', color: '#F2AA4CFF' }}>
        EVENT TIMELINE
      </h2>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border : '2px solid #F2AA4CFF', background:'none', color: '#F2AA4CFF' }}
    contentArrowStyle={{ borderRight: '7px solid  #F2AA4CFF' }}
    iconStyle={{ background: '#F2AA4CFF', color: '#101820FF' }}
    date="08-03-2022"
    icon ={<LooksOneOutlinedIcon/>}
  >
    <h3 className="vertical-timeline-element-title">LAST DATE TO REGISTER</h3>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border : '2px solid #F2AA4CFF', background:'none', color: '#F2AA4CFF' }}
    contentArrowStyle={{ borderRight: '7px solid  #F2AA4CFF' }}
    iconStyle={{ background: '#F2AA4CFF', color: '#101820FF' }}
    date="11-03-2022"
    icon ={<LooksTwoOutlinedIcon/>}
  >
    <h3 className="vertical-timeline-element-title">ROUND-1</h3>
    <p>
    The qualifier round 1 for the Turing Cup 2023 coding contest. This round will be held virtually through HackerRank. Short-listed candidates will be notified for the further rounds. Platform: HackerRank Rules: Default HackerRank leaderboard will be used where last AC time will be considered.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ border : '2px solid #F2AA4CFF', background:'none', color: '#F2AA4CFF' }}
    contentArrowStyle={{ borderRight: '7px solid  #F2AA4CFF' }}
    iconStyle={{ background: '#F2AA4CFF', color: '#101820FF' }}
    date="25-03-2022"
    icon ={<Looks3OutlinedIcon/>}
  >
    <h3 className="vertical-timeline-element-title">ROUND-2</h3>
    <p>
    The onsite round for the Turing Cup 2023 for the qualified teams of Round-1.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    contentStyle={{ border : '2px solid #F2AA4CFF', background:'none', color: '#F2AA4CFF' }}
    contentArrowStyle={{ borderRight: '7px solid  #F2AA4CFF' }}
    iconStyle={{ background: '#F2AA4CFF', color: '#101820FF' }}
    date="25-03-2022"
    icon ={<Looks4OutlinedIcon/>}
  >
    <h3 className="vertical-timeline-element-title">ROUND-3</h3>
    <p>
    The third and final round (Onsite) of Turing Cup 2023 coding contest
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
        
        
    </div>
  )
}

export default Timelinee