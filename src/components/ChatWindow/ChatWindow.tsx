/**
 * This module defines the ChatWindow component which is responsible for displaying the chat conversation between two users.
 * It retrieves the conversation data from the ChatStore and formats it for display.
 *
 * This component also handles timestamp formatting and message grouping.
 * It uses the UserChatBubble and OtherUserChatBubble components to display each post in the conversation.
 *
 * A MessageInput component is rendered to allow the user to input new messages.
 */

import { Paper, Typography } from "@mui/material";
import OtherUserChatBubble from "../OtherUserChatBubble/OtherUserChatBubble";
import TopBar from "../TopBar/Topbar";
import UserChatBubble from "../UserChatBubble/UserChatBubble";
import MessageInput from "../MessageInput/MessageInput";
import { ChatStore, useChatStore } from "../../store/chatstore";
import { Post } from "../../interfaces/types";

const ChatWindow = () => {
  // gets the chat history from the store and renders it
  const selectConversation = (state: ChatStore) => state.conversation;

  const {
    posts: chatHistory,
    matchTime,
    activeUserName,
  } = useChatStore(selectConversation);

  const formatTimestamp = (date: Date) => {
    const today = new Date();
    const isToday = date.getDate() === today.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours > 12 ? hours - 12 : hours}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${hours >= 12 ? "pm" : "am"}`;

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (isToday) {
      return `Today ${formattedTime}`;
    } else {
      return `${
        monthNames[date.getMonth()]
      } ${date.getDate()} ${date.getFullYear()} ${formattedTime}`;
    }
  };

  return (
    <>
      <TopBar />
      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "800px",
          backgroundColor: "white",
        }}>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ alignSelf: "center", marginTop: "50px" }}>
          {`${formatTimestamp(matchTime)}`}
        </Typography>
        <Typography
          variant="h4"
          color="textPrimary"
          sx={{ alignSelf: "center", margin: "10px 50px 50px" }}>
          {"You matched \uD83C\uDF88"}
        </Typography>

        {chatHistory.map((post: Post, index: number) => {
          const previousPost = index > 0 ? chatHistory[index - 1] : null;
          const timeDifference = previousPost
            ? post.timestamp.getTime() - previousPost.timestamp.getTime()
            : null;
          const showTimeStamp: boolean =
            !previousPost ||
            (timeDifference !== null && timeDifference > 3600000);

          const sameAuthor = previousPost
            ? post.author === previousPost.author
            : false;
          const margin =
            sameAuthor && timeDifference !== null && timeDifference < 20000
              ? "0"
              : "20px";
          return post.author === activeUserName ? (
            <UserChatBubble
              message={post.message}
              key={post.message}
              margin={margin}
              showTimeStamp={showTimeStamp}
              read={post.read}
              timestamp={formatTimestamp(post.timestamp)}
            />
          ) : (
            <OtherUserChatBubble
              message={post.message}
              key={post.message}
              showTimeStamp={showTimeStamp}
              margin={margin}
              timestamp={formatTimestamp(post.timestamp)}
            />
          );
        })}
        <MessageInput />
      </Paper>
    </>
  );
};

export default ChatWindow;
