import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Divider from "@material-ui/core/Divider"
import SettingsIcon from "@material-ui/icons/Settings"
import FolderIcon from "@material-ui/icons/Folder"
import PeopleIcon from "@material-ui/icons/People"

const list = [
  {
    primaryText: "Download My Resume",
    icon: <FolderIcon />
  },
  {
    primaryText: "Skills",
    icon: <PeopleIcon />
  },
  // {
  //   primaryText: "Starred",
  //   icon: "star"
  // },
  // {
  //   primaryText: "Recent",
  //   icon: "schedule"
  // },
  // {
  //   primaryText: "Offline",
  //   icon: "offline_pin"
  // },
  // {
  //   primaryText: "Uploads",
  //   icon: "publish"
  // },
  // {
  //   primaryText: "Backups",
  //   icon: "backup"
  // },
  // {
  //   primaryText: "Trash",
  //   icon: "delete"
  // }
];

const NavContentEx = () => (
  <List>
    {list.map(({ primaryText, icon }, i) => (
      <ListItem key={primaryText} selected={i === 0} button>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={primaryText}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    ))}
    {/* <Divider style={{ margin: "12px 0" }} />
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText
        primary={"Settings & account"}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem> */}
  </List>
);

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
