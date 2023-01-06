import React from 'react'
import classes from './ProgressStage.module.css';

function ProcessStage(props) {
    return (
        <div className={classes.ProgressStage}>
            <div >
                <h1 className={classes.columnName}>{props.columnName}</h1></div>
            <div className={classes.area}>
                <div className={classes.card}>
                    <h3>{props.taskName}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProcessStage;