/**
 * This module defines the MessageInput component which is used for inputting new messages by the user.
 *
 * This component includes a text field for entering a message and handles the form submission
 * event to add the new post to the conversation.
 *
 * It uses the ChatStore to get the current conversation and the method for adding a post.
 */

import { TextField, Box } from "@mui/material";
import { useChatStore } from "../../store/chatstore";
import { useState } from "react";
import { Post } from "../../interfaces/types";

const MessageInput = () => {
  const [messageInput, setMessageInput] = useState<string>("");
  const { addPost, conversation } = useChatStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ensure that empty messages cannot be sent
    if (messageInput.length === 0) {
      return;
    }
    const post: Post = {
      message: messageInput,
      read: false,
      timestamp: new Date(),
      author: conversation.activeUserName,
    };
    addPost(post);
    setMessageInput("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
  };

  return (
    <Box
      className="text-input-wrapper"
      sx={{
        display: "flex",
        backgroundColor: "white",
        alignSelf: "center",
        justifySelf: "flex-end",
        justifyContent: "center",
        minWidth: "900px",
        minHeight: "100px",
        border: "50px",
        boxShadow: "0px -5px 15px 0px rgba(235,235,235,0.25)",
      }}>
      <form onSubmit={handleSubmit} data-testid="message-form">
        <TextField
          sx={{
            backgroundColor: "white",
            maxWidth: "80%",
            borderRadius: "30px",
            minWidth: "400px",
            alignSelf: "center",
          }}
          value={messageInput}
          placeholder="Type Your Message"
          onChange={handleChange}
        />
      </form>
    </Box>
  );
};
export default MessageInput;
