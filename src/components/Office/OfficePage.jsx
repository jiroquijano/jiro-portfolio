import React, {useState} from 'react';
import OfficeCanvas from './OfficeCanvas'
import {Grid, makeStyles, Drawer} from '@material-ui/core';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: '50px 30px',
        background: '#ECECEC'
    },
    paper: {
        width: '50vw'
    }
})

const OfficePage = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={500}>
                <Grid container direction='column' alignContent='center' alignItems='stretch'>
                    <Grid container item direction='row' alignItems='center' justify='center'>
                        <Grid item>
                            <OfficeCanvas setDrawerOpen={setOpen}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>
            <Drawer open={open} variant='persistent' anchor='right' classes={{ paper: classes.paper }}>
                <div onClick={()=>setOpen(!open)}>hi</div>
            </Drawer>
        </div>
    )
}

export default OfficePage;