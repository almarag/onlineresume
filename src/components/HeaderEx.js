import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { isWidthUp } from "@material-ui/core/withWidth"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import SearchIcon from '@material-ui/icons/Search'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PhoneIcon from '@material-ui/icons/Phone'
import CameraIcon from '@material-ui/icons/Camera'


const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    "&:hover": {
      background: palette.grey[300]
    },
    marginLeft: 0,
    width: "100%",
    [breakpoints.up("sm")]: {
      marginLeft: spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create("width"),
    width: "100%",
    [breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

const HeaderEx = ({ classes, screen }) => (
  <>
    <Typography noWrap color={"textSecondary"} className={classes.header}>
      Alejandro Martinez Aguirre - Senior Web Developer and Tech Lead
    </Typography>
    <div className={classes.grow} />
    {screen === "xs" && (
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    )}
    {screen === "sm" && (
      <>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </>
    )}
    {isWidthUp("md", screen) && (
      <>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
        <IconButton>
          <CameraIcon />
        </IconButton>
      </>
    )}
  </>
);

HeaderEx.propTypes = {
  screen: PropTypes.string,
  classes: PropTypes.shape({}).isRequired
};
HeaderEx.defaultProps = {
  screen: null
};

export default withStyles(styles)(HeaderEx);
