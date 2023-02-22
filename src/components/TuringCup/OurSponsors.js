import React,{useState} from 'react'
import { Button, Box } from "@mui/material";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from "gatsby-plugin-image";
import './Sponsors.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#101820FF',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function OurSponsors({ name, img, desc, link }) {
    // const [isFlipped, setIsFlipped] = useState(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button
                sx={{ 
                    background: '#101820FF',
                    '&:hover': {
                        backgroundColor: '#F2AA4CFF',
                        color: '#fff'
                    }
                }}
                // ENABLE THIS FOR MODAL
                // onClick={handleOpen}
                href={link}
                target="_blank"
            >
                <GatsbyImage
                    alt={name}
                    image={img}
                    style={{
                        maxWidth: "65%",
                        // maxHeight: "50%",
                        borderRadius: "15px 30px",
                        border: "2px solid #F2AA4CFF",
                        padding : "5px"
                    }}
                />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>{name}</h1>
                    <Button id = "x" onClick={handleClose}>
                        X
                    </Button>
                    <p>
                        {desc}
                    </p>
                    <Button sx={{ 
                    backgroundColor: '#fff', 
                    color: '#F2AA4CFF',
                    '&:hover': {
                        backgroundColor: '#F2AA4CFF',
                        color: '#fff'
                        },
                    }} 
                    variant='contained' 
                    href={link}
                    target='__blank'>
                        Know more!
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default OurSponsors