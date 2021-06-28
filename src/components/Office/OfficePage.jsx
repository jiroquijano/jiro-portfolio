import React, {useState} from 'react';
import OfficeCanvas from './OfficeCanvas'
import {Grid, makeStyles, Drawer} from '@material-ui/core';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        background: '#ECECEC',
        height: '100vh',
        overflow: 'hidden'
    },
    transparentPaper: {
        width: '60vw',
        opacity: .7,
        background: '#6a88a2'
    },
    paperContainer: {
        width: '55vw',
        background: 'white'
    },
    content: {
        background: 'white'
    }
})

const OfficePage = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const Content = <div className={classes.content}>CONTENT</div>;

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={500}>
                <Grid container direction='column' alignContent='center' alignItems='stretch'>
                    <Grid container item direction='row' alignItems='center' justify='center'>
                        <Grid item>
                            <OfficeCanvas setDrawerOpen={setOpen}/>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {/* Instructions go here */}
                    </Grid>
                </Grid>
            </Fade>
            <Drawer open={open} variant='persistent' anchor='right' classes={{ paper: classes.transparentPaper }}/>
            <Drawer open={open} variant='persistent' anchor='right' classes={{ paper: classes.paperContainer }}>
                <div onClick={()=>setOpen(!open)} children={Content}/>
            </Drawer>
        </div>
    )
}

export default OfficePage;