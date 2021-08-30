import React, {useReducer} from 'react';
import OfficeCanvas from '../Office/OfficeCanvas'
import {Grid, makeStyles, Drawer, Modal, useMediaQuery} from '@material-ui/core';
import { Fade } from '@material-ui/core';
import officeStateReducer from '../../reducers/officeStateReducer';
import OfficePageContext from '../../context/OfficePageContext';
import VisitorWelcomePage from './VisitorWelcomePage';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        background: '#ECECEC',
        height: '100vh',
        overflow: 'hidden'
    },
    transparentPaper: {
        width: '67vw',
        opacity: .7,
        background: '#6a88a2',
        boxShadow: '-5px 2px 20px #3c5c67'
    },
    paperContainer: {
        width: '62vw',
        background: 'white',
        boxShadow: '-20px 0px 15px #0000000f',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        background: 'white'
    },
    officePageModalContentContainer: (props) => ({
        width: props.isMobileScreen ? '90vw' : '50vw',
        height: '70vh',
        background: 'white',
        outline: 'none',
        borderRadius: '20px',
        boxShadow: '-5px 10px 20px #2d5884d1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '5px solid #333440'
    }),
    modal: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})

const initialOfficeState = {
    drawerOpen: false,
    currentRoom: null,
    welcomeModalOpen: true,
    currentCharacter: 'jiro'
}

const OfficePage = () => {
    const [officeState, officeDispatch] = useReducer(officeStateReducer, initialOfficeState);
    const isMobileScreen = useMediaQuery('(max-width:768px)');
    const classes = useStyles({isMobileScreen});

    const Content = <div className={classes.content}>{officeState.currentRoom}</div>;

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={500}>
                <OfficePageContext.Provider value={{officeState, officeDispatch}}>
                    <Grid container direction='column'>
                        <Grid container item direction='row' justify='center'>
                            <Grid item>
                                <OfficeCanvas/>
                            </Grid>
                        </Grid>
                        <Grid item>
                            {/* Instructions go here */}
                        </Grid>
                    </Grid>
                    <Modal open={officeState.welcomeModalOpen} className={classes.modal}>
                        <div className={classes.officePageModalContentContainer}>
                            <VisitorWelcomePage/>
                        </div>
                    </Modal>
                </OfficePageContext.Provider>
            </Fade>

            <Drawer open={officeState.drawerOpen} variant='persistent' anchor='right' classes={{ paper: classes.transparentPaper }}/>
            <Drawer open={officeState.drawerOpen} variant='persistent' anchor='right' classes={{ paper: classes.paperContainer }}>
                <div children={Content}/>
            </Drawer>


        </div>
    )
}

export default OfficePage;