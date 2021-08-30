import React, {useContext} from 'react';
import { makeStyles, Button} from '@material-ui/core';
import VisitorSelectionCarousel from '../VisitorSelection/VisitorSelectionCarousel';
import OfficePageContext from '../../context/OfficePageContext';

const useStyles = makeStyles ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        background: '#EEEEEE',
        borderRadius: '20px',
        overflow: 'hidden'
    },
    header: {
        width: '100%',
        height: '10%',
        textAlign: 'center',
        paddingTop: '25px',
        paddingBottom: '15px',
        background: '#FFFFFF'
    },
    headerTitle: {
        fontSize: '25px',
    },
    headerSubTitle: {
        fontSize: '14px',
        color: '#424242'
    },
    footer: {
        width: '100%',
        height: '10%',
        background: '#FFFFFF',
        textAlign: 'center',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

const VisitorWelcomePage = () => {
    const classes = useStyles();
    const {officeDispatch} = useContext(OfficePageContext); 

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.headerTitle}>Welcome to the Office!</div>
                <div className={classes.headerSubTitle}>may we ask who's visiting today?</div>
            </div>

            <VisitorSelectionCarousel
                characters = {['jiro', 'bonna']}
            />

            <div className={classes.footer}>
                <Button 
                    variant='contained' 
                    onClick={() => officeDispatch({type: 'CLOSE_WELCOME_MODAL'}) }
                    color='primary'
                >
                    VISIT
                </Button>
            </div>
        </div>
    )
}

export default VisitorWelcomePage;