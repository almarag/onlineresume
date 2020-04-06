import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, Icon } from '@material-ui/core'
import getSkills from '../services/apiservices'

const Skills = ({ classes }) => {

    const dummyState = [
        {
            "skillName": ".NET Core",
            "icon": "dotnet-icon",
            "description": "3+ years of experience with .NET Core (C#)<br />6+ years of experience with .NET Framework (v3.5 to v4.7)<br />Technologies: Entity Framework, Windows Communication Foundation (WCF), WebForms, ASP.NET MVC, WebApi"
        }
    ]

    const [skillsList, setSkillList] = useState(dummyState)

    useEffect(() => {
        if (skillsList.length == 1) {
            updateState()
        }
    })

    const updateState = () => {
        getSkills()
        .then((data) => { setSkillList(data) })
    }

    return (
        <div>
            <Grid container spacing={3}>
                {skillsList.map((s) => 
                    <React.Fragment key={s.skillName}>
                    <Grid item xs={3} style={{margin: 'auto'}}>
                        <Icon classes={{root: classes.iconRoot}}>
                            <img 
                                className={classes.imageIcon} 
                                src={`/static/svg/${s.icon}.svg`}
                                width="100"
                                />
                        </Icon>
                    </Grid>
                    <Grid item xs={9} style={{margin: 'auto'}}>
                        <div dangerouslySetInnerHTML={ { __html: s.description } }></div>
                    </Grid> 
                    </React.Fragment>
                )}
            </Grid>
        </div>
    )
}

Skills.propTypes = {
    classes: PropTypes.object,
}

export default Skills;