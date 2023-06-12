import { TextField, Box } from "@mui/material";
import { useChatStore } from "../store/chatstore";
import { useState } from "react";
import { Post } from "../interfaces/types";

const MessageInput = () => {
  const [messageInput, setMessageInput] = useState<string>("");
  const { addPost, conversation } = useChatStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        boxShadow: "0px -5px 15px 0px rgba(235,235,235,0.25)",
      }}>
      <form onSubmit={handleSubmit}>
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
