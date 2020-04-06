import React from 'react'
import Typography from "@material-ui/core/Typography"

const Loading = () => (
    <div
        style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
        }}
    >
    <Typography variant={"h2"}>Changing Preset...</Typography>
  </div>
)

export default Loading