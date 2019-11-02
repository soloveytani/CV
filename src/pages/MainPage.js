import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

const MainPage = () => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <div className={ classes.content }>
                <header className={ classes.header }>
                    <div className={ classNames(classes.firstColumn, classes.bigMark) } />
                    <div className={ classNames(classes.firstColumn, classes.smallMark) } />
                    <h1 className={ classes.nameTitle }>Solovey Tatiana</h1>
                    <h4 className={ classes.jobTitle }>Frontend developer</h4>
                </header>
                <div className={ classes.body }>
                    <div className={ classNames(classes.firstColumn, classes.mainInfo) }></div>
                    <div className={ classNames(classes.secondColumn) } />
                </div>
            </div>
        </div>
    )
};

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        width: 1000,
        maxWidth: 'calc(100% - 20px)',
        position: 'relative'
    },
    firstColumn: {
        width: 300
    },
    bigMark: {
        height: 70,
        backgroundColor: '#790a1e'
    },
    smallMark: {
        marginTop: 6,
        height: 5,
        backgroundColor: '#790a1e'
    },
    nameTitle: {
        marginTop: 10,
        marginBottom: 10,
        fontFamily: '"Raleway", sans-serif',
        fontSize: 70,
        fontWeight: 300,
        textTransform: 'uppercase',
        marginLeft: 5
    },
    jobTitle: {
        fontFamily: '"Raleway", sans-serif',
        fontSize: 20,
        marginBottom: 10,
        fontStyle: 'italic',
        fontWeight: 500,
        color: '#586c84',
        marginLeft: 5
    },
    body: {
        display: 'flex'
    },
    mainInfo: {
        backgroundColor: '#790a1e',
        height: 1000
    },
    secondColumn: {
        flex: 1
    }
});

export default MainPage;