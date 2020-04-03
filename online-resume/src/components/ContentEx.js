/* eslint-disable */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/styles';

const styles = ({ breakpoints }) => ({
  root: {
    padding: 16,
    [breakpoints.up("sm")]: {
      padding: 24,
      maxWidth: 500,
      margin: "auto"
    },
    [breakpoints.up("md")]: {
      maxWidth: 700
    },
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }    
  }
});

const ContentEx = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant={"overline"}>ABOUT ME</Typography>
    <Typography weight={"bold"} variant={"h4"} gutterBottom>
      Who I am
    </Typography>
    <Typography indent={"small"}>
      I'm a technology passionate and experienced web developer with more than 20 years
      of experience in analysis, design, development and maintenance for web applications 
      and enterprise systems. I've participated in many different projects during my career
      from creating Backends, Frontends, CI/CD, Deployment, Server maintenance, project management
      and planning, and design for diverse solutions, trying to innovate and help business
      to reach the goals they require and giving my best to generate value on every project I get
      involved.      
    </Typography>
    <br />
    <br />
    <br />
    <Typography weight={"bold"} variant={"h5"} gutterBottom>
      Technologies & Skills
    </Typography>
    <Typography component={"div"}>
      <Icon classes={{root: classes.iconRoot}}>
        <img className={classes.imageIcon} src="/static/svg/dotnet-icon.svg" width="150" />
      </Icon>
    </Typography>
  </div>
);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default withStyles(styles)(ContentEx);
