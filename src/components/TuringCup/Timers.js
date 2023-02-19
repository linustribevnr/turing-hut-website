import React, { useEffect, useRef, useState } from 'react';
import { Container, Button, Grid, Paper, Stack } from '@mui/material';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import { styled } from '@mui/material/styles';

// npm install add-to-calendar-button to avail features of add to calendar.
import { atcb_action } from 'add-to-calendar-button';

const Item = styled (Paper) (({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    background: '#fff',
    height: 100,
    color: '#16654f',
    minWidth: '50px',
    border: '1px solid #16654f',
    borderRadius: '5px'
}));

function Timers() {
    const [daysLeft, setDaysLeft]= useState('00');
    const [hoursLeft, setHoursLeft]= useState('00');
    const [minutesLeft, setMinutesLeft]= useState('00');
    const [secondsLeft, setSecondsLeft]= useState('00');

    let interval= useRef();

    const startTimer = () => {
        const countdownDate= new Date('March 11, 2023 19:00:00').getTime();

        interval= setInterval(() => {
            const now= new Date().getTime();
            const distance= countdownDate - now;

            const days= Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours= Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds= Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDaysLeft(Math.floor(days/10).toString() + (days%10).toString());
                setHoursLeft(Math.floor(hours/10).toString() + (hours%10).toString());
                setMinutesLeft(Math.floor(minutes/10).toString() + (minutes%10).toString());
                setSecondsLeft(Math.floor(seconds/10).toString() + (seconds%10).toString());
            }

        }, 1000);
    };

    useEffect (() => {
        startTimer();

        return () => {
            const intervalId= interval.current;
            clearInterval(intervalId);
        }

        // return () => {
        //     clearInterval(interval.current);
        // }
    })

    const config = {
        name: '[Reminder] Turing Cup 2K23 Round - 1',
        description: 'Check your mail for the Contest Links',
        startDate: '2023-03-11',
        startTime: '18:45',
        endTime: '21:00',
        options: ['Google', 'Apple', 'Outlook.com'],
        timeZone: 'Asia/Calcutta',
      };
    
      const handleClick = () => {
        atcb_action(config, document.getElementById('add-to-calendar-btn'));
      };    

  return (
    <Container sx={{ 
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif', 
        width: '50vw',  
        minWidth: '350px', 
        color: 'primary', 
        margin: '0 auto', 
        textAlign: 'center', 
        background: '#f4f4f5',
        borderRadius: '5px',
        }}>
        <h2 style={{ paddingTop: '20px', color: '#16654f' }}>
            Round 1 starts in : 
        </h2>

        <Grid container justifyContent={ 'space-evenly' }>
            <Grid item xs={ 6 } md={ 3 } sx={{ p: 2 }}>
                <Item elevation={0} >
                    <h1>
                        { daysLeft }
                    </h1>
                    <h4>DAYS</h4>
                </Item>                 
            </Grid>  

            <Grid item xs={ 6 } md={ 3 } sx={{ p: 2 }}>
                <Item elevation={0} >
                    <h1>
                        { hoursLeft }
                    </h1>
                    <h4>HOURS</h4>
                </Item>                 
            </Grid>

            <Grid item xs={ 6 } md={ 3 } sx={{ p: 2 }}>
                <Item elevation={0} >
                    <h1>
                        { minutesLeft }
                    </h1>
                    <h4>MINUTES</h4>
                </Item>                 
            </Grid>

            <Grid item xs={ 6 } md={ 3 } sx={{ p: 2 }}>
                <Item elevation={0} >
                    <h1>
                        { secondsLeft }
                    </h1>
                    <h4>SECONDS</h4>
                </Item>                 
            </Grid>                                  
        </Grid>

        <Stack sx={{ py: '20px', justifyContent: 'center' }} direction={{ xs: 'column', md: 'row' }} spacing={2} >
            <Button sx={{ 
                backgroundColor: '#fff', 
                color: '#16654f',
                '&:hover': {
                    backgroundColor: '#16654f',
                    color: '#fff'
                },  }} 
                variant='contained' 
                href='https://docs.google.com/forms/d/e/1FAIpQLSd5huRp7I0Ecz2pgjQ_Sm4NtCq9-1U0w6CyhHbdA2DjTM3aPA/viewform'
                target='__blank'
                startIcon={ <HowToRegRoundedIcon /> }>
                Register Now
            </Button>

            <Button sx={{ 
                backgroundColor: '#fff', 
                color: '#16654f',
                '&:hover': {
                    backgroundColor: '#16654f',
                    color: '#fff'
                },  }} 
                id= 'add-to-calendar-btn'
                onClick= { handleClick }
                variant='contained' 
                endIcon={ <InsertInvitationRoundedIcon /> }>
                Add to Calendar
            </Button>
        </Stack>
    </Container>
  )
}

export default Timers