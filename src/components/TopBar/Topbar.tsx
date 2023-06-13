import { Box, Typography, Avatar, Button } from "@mui/material/";
import { useChatStore } from "../../store/chatstore";
import { useState } from "react";
import ControlPanel from "../ControlPanel/ControlPanel";

/**
 * This module defines the TopBar component which is a part of the application's layout.
 *
 * The TopBar contains an admin panel button for toggling the control panel visibility,
 * a user avatar, and user name for the matched user taken the global conversation state.
 * Additionally, it includes placeholders for Chat and Profile functionalities.
 *
 * Note that at present, the avatar and profile are there for
 * display purposes. If a profile feature is added in the future, it would link from here.
 *
 * It also manages the state for showing and hiding the control panel, which is initially set to false.
 */

const TopBar = () => {
  const [showControlPanel, setShowControlPanel] = useState(false);
  const otherUserName = useChatStore(
    (state) => state.conversation.otherUserName
  );

  return (
    <>
      <Box
        className="matched-user-wrapper"
        sx={{
          display: "flex",
          backgroundColor: "white",
          alignSelf: "flex-start",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px",
        }}>
        <Button
          variant="contained"
          onClick={() => setShowControlPanel(!showControlPanel)}
          sx={{ backgroundColor: "#FB406B", fontWeight: "bold" }}>
          Admin Panel
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Avatar
            alt="Maya"
            src="/profilepic.png"
            sx={{ width: 80, height: 80 }}
          />
          <Typography variant="h6" sx={{ padding: 2, fontWeight: "bold" }}>
            {otherUserName}
          </Typography>
        </Box>
        <Box sx={{ flexShrink: 0, flexGrow: 0, maxWidth: "100px" }} />
      </Box>
      {showControlPanel && (
        <ControlPanel
          open={showControlPanel}
          onClose={() => setShowControlPanel(false)}
        />
      )}
      {/* Wrapper for Chat and Profile placeholders */}
      <Box
        className="topBar"
        sx={{
          display: "flex",
          backgroundColor: "white",
          alignSelf: "center",
          justifyContent: "space-evenly",
          minWidth: "900px",
          minHeight: "50px",
          boxShadow: "0px 5px 15px 0px rgba(235,235,235,0.25)",
        }}>
        {/* Placeholder for chat tab to link back from profile */}
        <Typography
          sx={{
            display: "flex",
            padding: "10px",
            width: "50%",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            borderBottom: "3px solid #FB3F6B",
          }}
          variant="h6">
          Chat
        </Typography>
        {/* Placeholder for profile tab to link to from chat window */}
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            padding: "10px",
            width: "50%",
            alignItems: "flex-end",
            alignSelf: "flex-end",
            justifyContent: "center",
          }}>
          Profile
        </Typography>
      </Box>
    </>
  );
};

export default TopBar;
