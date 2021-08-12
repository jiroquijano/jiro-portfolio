import React, {useState} from 'react';
import { makeStyles, Slide, Button} from '@material-ui/core';

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
        fontSize: '20px',
        width: '100%',
        height: '10%',
        textAlign: 'center',
        padding: '20px',
        background: '#FFFFFF'
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
    }
})

const VisitorWelcomePage = ({handleClick}) => {
    const classes = useStyles();
    const [select, setSelect] = useState(true);
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                Welcome to the Office!
            </div>
            <Slide in={select} direction={select ? 'left':'right'} timeout={1000}>
                <div>
                    character select
                </div>
            </Slide>
            <div className={classes.footer}>
                <Button 
                    variant='contained' 
                    onClick={()=>{handleClick()}}
                    color='primary'
                >
                    VISIT
                </Button>
                <Button
                    variant='contained'
                     onClick={()=>setSelect(!select)}
                >
                    RIGHT
                </Button>
            </div>
        </div>
    )
}

export default VisitorWelcomePage;