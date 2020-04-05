import React, { useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon
} from "@mui-treasury/layout"
import {
  defaultLayoutPreset,
  standardLayoutPreset,
  fixedLayoutPreset,
  contentBasedLayoutPreset,
  cozyLayoutPreset,
  muiTreasuryPreset
} from "@mui-treasury/layout/presets"
import './App.css'

import Loading from './pages/Loading'
import FooterEx from './components/FooterEx'
import HeaderEx from './components/HeaderEx'
import NavHeaderEx from  './components/NavHeaderEx'
import NavContentEx from  './components/NavContentEx'
import ContentEx from './components/ContentEx'

const presets = {
  createDefaultLayout: defaultLayoutPreset,
  createStandardLayout: standardLayoutPreset,
  createFixedLayout: fixedLayoutPreset,
  createContentBasedLayout: contentBasedLayoutPreset,
  createCozyLayout: cozyLayoutPreset,
  createMuiTreasuryLayout: muiTreasuryPreset
}


function App() {
  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("createStandardLayout");
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });

  return loading ? (
    <Loading />
  ) : (
    <Root config={presets[preset]}>
      {({ headerStyles, sidebarStyles }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <CollapseBtn
                component={IconButton}
                className={headerStyles.leftTrigger}
              >
                <CollapseIcon />
              </CollapseBtn>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              {data.header && <HeaderEx />}
            </Toolbar>
          </Header>
          <Content>      
            {data.content && <ContentEx />}
          </Content>
          <Sidebar>
            {({ collapsed }) => (
              <>
                <NavHeaderEx collapsed={collapsed} />
                <div className={sidebarStyles.container}>
                  {data.nav && <NavContentEx />}
                </div>
                <CollapseBtn className={sidebarStyles.collapseBtn}>
                  <CollapseIcon />
                </CollapseBtn>
              </>
            )}
          </Sidebar>          
          <Footer>{data.footer && <FooterEx />}</Footer>
        </>
      )}
    </Root>
  )
}

export default App
