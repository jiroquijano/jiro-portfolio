import React, {useReducer, useState} from 'react';
import OfficeCanvas from './OfficeCanvas'
import {Grid, makeStyles, Drawer, Modal} from '@material-ui/core';
import { Fade } from '@material-ui/core';
import drawerStateReducer from '../../reducers/drawerStateReducer';
import OfficeDrawerContext from '../../context/OfficeDrawerContext';

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
        background: '#6a88a2',
        boxShadow: '-5px 2px 20px #3c5c67'
    },
    paperContainer: {
        width: '55vw',
        background: 'white',
        boxShadow: '-20px 0px 15px #0000000f',
        justifyContent: 'center'
    },
    content: {
        background: 'white'
    },
    officePageModalContent: {
        position: 'absolute',
        top: '20px',
        left: '300px',
        width: '30vw',
        background: 'white',
        outline: 'none'
    }
})

const OfficePage = () => {
    const classes = useStyles();
    const [drawerState, dispatch] = useReducer(drawerStateReducer, {open: false})
    const [modalOpen, setModalOpen] = useState(true)

    const Content = <div className={classes.content}>{drawerState.room}</div>;

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={500}>
                <OfficeDrawerContext.Provider value={{drawerState, dispatch}}>
                    <Grid container direction='column' alignContent='center' alignItems='stretch'>
                        <Grid container item direction='row' alignItems='center' justify='center'>
                            <Grid item>
                                <OfficeCanvas/>
                            </Grid>
                        </Grid>
                        <Grid item>
                            {/* Instructions go here */}
                        </Grid>
                    </Grid>
                </OfficeDrawerContext.Provider>
            </Fade>
            <Drawer open={drawerState.open} variant='persistent' anchor='right' classes={{ paper: classes.transparentPaper }}/>
            <Drawer open={drawerState.open} variant='persistent' anchor='right' classes={{ paper: classes.paperContainer }}>
                <div children={Content}/>
            </Drawer>

            <Modal 
                open={modalOpen}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div 
                    className={classes.officePageModalContent}
                    onClick = {()=>setModalOpen(!modalOpen)}
                >
                    HELLO
                </div>
            </Modal>
            
        </div>
    )
}

export default OfficePage;