import React from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { SocialIcon } from 'react-social-icons';

const FooterEx = () => (
  <div style={{ maxWidth: 700, margin: "auto", textAlign: "center" }}>
    <Divider style={{ margin: "24px auto", width: 60 }} />
    <Grid container justify={"center"} spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <SocialIcon url="https://www.linkedin.com/in/almarag/" target="_blank"/>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
           <Link href="https://www.linkedin.com/in/almarag/" target="_blank">LinkedIn</Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SocialIcon url="https://almarag.wordpress.com"  target="_blank" />
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <Link href="https://almarag.wordpress.com" target="_blank">Blog</Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SocialIcon url="https://www.youtube.com/channel/UCGIhhKtR90L71Sj_Y9HuKJQ" target="_blank" />
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <Link href="https://www.youtube.com/channel/UCGIhhKtR90L71Sj_Y9HuKJQ" target="_blank">Youtube</Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SocialIcon url="https://github.com/almarag/" target="_blank" />
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <Link href="https://github.com/almarag/" target="_blank">GitHub</Link>
        </Typography>
      </Grid>
    </Grid>
  </div>
);

FooterEx.propTypes = {};
FooterEx.defaultProps = {};

export default FooterEx;
