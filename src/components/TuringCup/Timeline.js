import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';

const TimelineItems = [
    {
        title: "Registration deadline",
        subtitle: "Be a part of Turing Cup",
        icon: <HowToRegIcon style={{ backgroundColor: "#F2AA4CFF" }}/>,
        dateTime: "8/3/23 00:00"
    },
    {
        title: "Round-1",
        subtitle: "Virtual round",
        icon: <LaptopMacIcon />,
        dateTime: "11/3/23 19:30"
    },
    {
        title: "Round-2",
        subtitle: "Onsite round",
        icon: <GroupsIcon />,
        dateTime: "25/3/23 10:00"
    },
]

export default function CustomizedTimeline() {
    return (
        <div>
            <h2
                style={{textAlign:'center', color: '#F2AA4CFF' }}>
                TIMELINE
            </h2>
            <Timeline position="right">
                {
                    TimelineItems.map(item=>(
                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            color="#F2AA4CFF"
                            >
                                {item.dateTime}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot style={{ backgroundColor: "#F2AA4CFF" }}>
                                    {item.icon}
                                </TimelineDot>
                                {/* <TimelineConnector /> */}
                                {
                                    item.title==="Round-2"?<></>:<TimelineConnector />
                                }
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" color="#F2AA4CFF">
                                {item.title}
                            </Typography>
                            <Typography color="#F2AA4CFF">{item.subtitle}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    );
}