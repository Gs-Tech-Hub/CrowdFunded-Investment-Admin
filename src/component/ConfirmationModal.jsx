import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AiOutlineDelete } from 'react-icons/ai';
import { PiWarningOctagonDuotone } from 'react-icons/pi';
import { PiWarningFill } from 'react-icons/pi';
export default function ConfirmationModal({ deleteCampaign }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        deleteCampaign()
    };

    return (
        <React.Fragment>
            {/*  */}
            <div className='cursor-pointer' onClick={handleClickOpen}><AiOutlineDelete size={20} /></div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <PiWarningFill className='mx-[auto]' size={66} color='#f62222' />
                    <div className='font-bold text-[1.5rem] text-center'>{"Confirm Your action"}</div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <p className='text-black'>Your about to delete this campaign please confirm your action</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <div className='cursor-pointer pb-[1rem] mr-[1rem] text-black font-bold' onClick={() => setOpen(false)}>Cancel</div>
                    <div className='cursor-pointer pb-[1rem] mr-[1rem] text-black font-bold' onClick={handleClose}>Delete</div>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
