import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ChatWindow from "./ChatWindow";
import { useChatStore } from "../../store/chatstore";

// The test file does not have access to the chatWindows formatTimestamp function so it is re-defined here
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
afterEach(() => {
  cleanup();
});

test("renders correctly", () => {
  render(<ChatWindow />);
  expect(screen.getByText(/You matched/)).toBeInTheDocument();
});

test("displays all posts from the chat history", () => {
  const { container } = render(<ChatWindow />);
  const posts = useChatStore.getState().conversation.posts;

  for (let post of posts) {
    // Some of the text we are searching for is broken up across multiple elements so substring is needed.
    const substring = post.message.substring(0, 20);
    expect(container.innerHTML).toContain(substring);
  }
});

test("formats timestamps correctly", () => {
  const { container } = render(<ChatWindow />);
  const posts = useChatStore.getState().conversation.posts;

  posts.forEach((post) => {
    const timestamp = formatTimestamp(post.timestamp);
    const substring = timestamp.substring(0, 10);
    expect(container.innerHTML).toContain(substring);
  });
});
