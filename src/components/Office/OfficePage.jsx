import React, {useReducer, useState} from 'react';
import OfficeCanvas from './OfficeCanvas'
import {Grid, makeStyles, Drawer, Modal, useMediaQuery} from '@material-ui/core';
import { Fade } from '@material-ui/core';
import drawerStateReducer from '../../reducers/drawerStateReducer';
import OfficePageContext from '../../context/OfficePageContext';
import VisitorWelcomePage from '../Content/VisitorWelcomePage';

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

const OfficePage = () => {
    const [drawerState, drawerDispatch] = useReducer(drawerStateReducer, {open: false})
    const [modalOpen, setModalOpen] = useState(true)
    const isMobileScreen = useMediaQuery('(max-width:768px)')
    const classes = useStyles({isMobileScreen});

    const Content = <div className={classes.content}>{drawerState.room}</div>;

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={500}>
                <OfficePageContext.Provider value={{drawerState, drawerDispatch, welcomeModalOpen: modalOpen}}>
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
                </OfficePageContext.Provider>
            </Fade>

            <Drawer open={drawerState.open} variant='persistent' anchor='right' classes={{ paper: classes.transparentPaper }}/>
            <Drawer open={drawerState.open} variant='persistent' anchor='right' classes={{ paper: classes.paperContainer }}>
                <div children={Content}/>
            </Drawer>

            <Modal 
                open={modalOpen}
                className={classes.modal}
            >
                <div className={classes.officePageModalContentContainer}>
                    <VisitorWelcomePage handleClick={()=>setModalOpen(!modalOpen)}/>
                </div>
            </Modal>

        </div>
    )
}

export default OfficePage;