import React from "react"
import PropTypes from "prop-types"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import EmailIcon from "@material-ui/icons/EmailOutlined"

const NavHeaderEx = ({ collapsed }) => (
  <>
    <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s", textAlign: "center" }}>
      <Avatar
        style={{
          width: collapsed ? 48 : 60,
          height: collapsed ? 48 : 60,
          transition: "0.3s",
          margin: "auto"
        }}
        src="static/avatar.jpg"
      />
      <div style={{ paddingBottom: 16 }} />
      <Typography variant={"h6"} noWrap>
        Alejandro Martinez
      </Typography>
      <Typography color={"textSecondary"} noWrap gutterBottom>
        <EmailIcon style={{ verticalAlign: "middle" }} /> <a href="mailto:almarag@gmail.com">almarag@gmail.com</a>
      </Typography>
    </div>
    <Divider />
  </>
);

NavHeaderEx.propTypes = {
  collapsed: PropTypes.bool
};
NavHeaderEx.defaultProps = {
  collapsed: false
};

export default NavHeaderEx;
