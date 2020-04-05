/* eslint-disable */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import Link from '@material-ui/core/Link'
import ContactForm from './ContactForm'
import Box from '@material-ui/core/Box'

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
    <Typography indent={"small"} style={{ textAlign: "justify"}}>
      I'm a technology passionate and web developer with more than 20 years
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
      Main Technologies & Skills
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/dotnet-icon.svg" 
            width="100"
            />
        </Icon>
      </Grid>
      <Grid item xs={9} style={{margin: 'auto'}}>
        3+ years of experience with .NET Core (C#)<br />
        6+ years of experience with .NET Framework (v3.5 to v4.7)<br />
        Technologies: Entity Framework, Windows Communication Foundation (WCF),
        WebForms, ASP.NET MVC, WebApi
      </Grid>
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/javascript.svg" 
            width="100"
            />
        </Icon>
      </Grid>
      <Grid item xs={9} style={{margin: 'auto'}}>
        20+ years of experience with Javascript programming<br />
        Technologies: NodeJS, Prototype, JQuery, React, AngularJS
      </Grid>
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/Amazon_Web_Services_Logo.svg" 
            width="100"
            />
        </Icon>
      </Grid>
      <Grid item xs={9} style={{margin: 'auto'}}>
        1+ years of experience with AWS<br />
        Technologies: Lambda, API Gateway, SQS, SNS, S3
      </Grid>
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/PHP-logo.svg" 
            width="100"
            />
        </Icon>
      </Grid>
      <Grid item xs={9} style={{margin: 'auto'}}>
        11+ years of experience with PHP<br />
        Technologies: Laravel, Wordpress, Yii Framework, Zend
      </Grid>      
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/mysql.svg" 
            width="100"
            />
        </Icon>
      </Grid>
      <Grid item xs={9} style={{margin: 'auto'}}>
        20+ years of experience with MySQL database server<br />
      </Grid>      
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/microsoft-sql-server.svg" 
            width="100"
            />
        </Icon>
      </Grid>
      <Grid item xs={9} style={{margin: 'auto'}}>
        10+ years of experience with SQL Server database server<br />
      </Grid> 
    </Grid>
    <br />
    <br />
    <Typography weight={"bold"} variant={"h5"} gutterBottom>
      Other Technologies I worked on
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/Oracle_logo.svg" 
            width="100"
            />
        </Icon>
      </Grid>
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/react.svg" 
            width="100"
            />
        </Icon>
      </Grid>      
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/macromedia-colffusion-mx.svg" 
            width="100"
            />
        </Icon>
      </Grid>  
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/laravel.svg" 
            width="100"
            />
        </Icon>
      </Grid>           
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/wordpress-blue.svg" 
            width="100"
            />
        </Icon>
      </Grid>  
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/python-5.svg" 
            width="100"
            />
        </Icon>
      </Grid>  
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/html5.svg" 
            width="100"
            />
        </Icon>
      </Grid>                      
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/angular-icon-1.svg" 
            width="100"
            />
        </Icon>
      </Grid>     
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/azure-1.svg" 
            width="100"
            />
        </Icon>
      </Grid>   
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/postgresql.svg" 
            width="100"
            />
        </Icon>
      </Grid> 
      <Grid item xs={3} style={{margin: 'auto'}}>
        <Icon classes={{root: classes.iconRoot}}>
          <img 
            className={classes.imageIcon} 
            src="/static/svg/yii.svg" 
            width="100"
            />
        </Icon>
      </Grid>                                    
    </Grid>
    <br />
    <br />
    <br />
    {/* <Typography weight={"bold"} variant={"h5"} gutterBottom>
      Contact
    </Typography>   
    <Typography indent={"small"} style={{ textAlign: "justify"}}>
      If you are interested on get in contact, please fill the form and I'll get in touch as soon as possible
    </Typography>
    <br />
    <Box boxShadow={3} style={{ padding: "30px" }}>
      <ContactForm />
    </Box>        */}
  </div>
);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default withStyles(styles)(ContentEx);
