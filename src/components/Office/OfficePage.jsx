import React, {useState} from 'react';
import OfficeCanvas from './OfficeCanvas'
import {Grid, makeStyles, TextField, useMediaQuery} from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: '50px 30px',
        marginTop: '30px',
        background: '#ECECEC'
    }
})

const OfficePage = () => {
    const classes = useStyles();
    const [chat, setChat] = useState('');
    //const isMobile = useMediaQuery('(max-width:768px)');
    const isMobile = false;

    return (
        <div className={classes.root}>
            { 
                !isMobile ? (
                        <Fade in={true} timeout={500}>
                            <Grid container direction='column' alignContent='center' alignItems='stretch'>
                                    <Grid item>
                                        <OfficeCanvas/>
                                    </Grid>
                                <Grid item>
                                    <TextField 
                                        fullWidth
                                        value={chat}
                                        onChange={(e)=>setChat(e.target.value)}
                                        />
                                </Grid>
                            </Grid>
                        </Fade>
                ) : (
                    <Redirect to='/'/>
                )
            }
        </div>
    )
}

export default OfficePage;