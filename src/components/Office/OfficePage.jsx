import React from 'react';
import OfficeCanvas from './OfficeCanvas'
import {Grid, makeStyles, TextField, useMediaQuery} from '@material-ui/core';
import {Redirect} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        padding: '50px 30px',
        marginTop: '30px',
        background: '#FFFFFF'
    }
})

const OfficePage = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:768px)');
    return (
        <div className={classes.root}>
            { 
                !isMobile ? (
                    <Grid container direction='row'>
                        <Grid item xs={4}>
                            Chat
                            <TextField fullWidth/>
                        </Grid>
                        <Grid item xs={8}>
                            <OfficeCanvas/>
                        </Grid>
                    </Grid>
                ) : (
                    <Redirect to='/'/>
                )
            }
        </div>
    )
}

export default OfficePage;