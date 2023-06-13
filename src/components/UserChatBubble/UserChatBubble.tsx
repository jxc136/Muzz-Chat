/**
 * This module defines the UserChatBubble component which is used for displaying a message post from the active user.
 *
 * This component displays the message text and a timestamp indicating when the message was posted.
 *
 * It uses Box and Typography components from Material UI to style the chat bubble and message text.
 */

import { Box, Typography } from "@mui/material/";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { UserChatBubbleProps } from "../../interfaces/types";

export const UserChatBubble = ({
  message,
  timestamp,
  showTimeStamp,
  margin,
  read,
}: UserChatBubbleProps) => {
  return (
    <>
      {showTimeStamp ? (
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ alignSelf: "center" }}>
          {`${timestamp}`}
        </Typography>
      ) : null}

      <Box
        className="user-chat-bubble"
        sx={{
          alignSelf: "flex-end",
          backgroundColor: "#FB3F6B",
          minHeight: "50px",
          maxWidth: "600px",
          marginTop: margin,
          marginBottom: "20px",
          marginRight: "20px",
          marginLeft: "20px",
          borderRadius: "10px",
          position: "relative",
        }}>
        <Typography sx={{ padding: "10px 25px 10px 10px" }}>
          {message}
        </Typography>
        {read ? (
          <DoneAllIcon
            sx={{
              fontSize: "12px",
              color: "white",
              position: "absolute",
              bottom: "4px",
              right: "6px",
            }}
          />
        ) : (
          <DoneIcon
            sx={{
              fontSize: "12px",
              color: "white",
              position: "absolute",
              bottom: "4px",
              right: "6px",
            }}
          />
        )}
      </Box>
    </>
  );
};

export default UserChatBubble;
