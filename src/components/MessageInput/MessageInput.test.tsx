import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MessageInput from "./MessageInput";
import { useChatStore } from "../../store/chatstore";

test("renders correctly", () => {
  render(<MessageInput />);
  expect(screen.getByPlaceholderText("Type Your Message")).toBeInTheDocument();
});

test("text in input field changes correctly when typing", () => {
  render(<MessageInput />);
  const inputElement = screen.getByPlaceholderText(
    "Type Your Message"
  ) as HTMLInputElement;

  fireEvent.change(inputElement, { target: { value: "Hello" } });
  expect(inputElement.value).toBe("Hello");

  fireEvent.change(inputElement, { target: { value: "World" } });
  expect(inputElement.value).toBe("World");
});

// test("message gets correctly added to the chat history when form is submitted", () => {
//   const addPostMock = jest.fn();
//   jest.spyOn(useChatStore, "useChatStore").mockReturnValue({
//     conversation: {
//       posts: [],
//       activeUserName: "user1", // Replace with your expected active user name
//     },
//     addPost: addPostMock,
//   });

//   render(<MessageInput />);
//   const inputElement = screen.getByPlaceholderText(
//     "Type Your Message"
//   ) as HTMLInputElement;
//   const formElement = screen.getByRole("form");

//   fireEvent.change(inputElement, { target: { value: "Test message" } });
//   fireEvent.submit(formElement);

//   expect(addPostMock).toHaveBeenCalledWith({
//     message: "Test message",
//     read: false,
//     timestamp: expect.any(Date),
//     author: "user1", // Replace with your expected active user name
//   });
// });

test("input field gets cleared after a message is submitted", () => {
  const originalUseChatStore = useChatStore;
  const originalAddPost = useChatStore.getState().addPost;

  render(<MessageInput />);
  const inputElement = screen.getByPlaceholderText(
    "Type Your Message"
  ) as HTMLInputElement;

  fireEvent.change(inputElement, { target: { value: "Hello" } });
  fireEvent.submit(inputElement);
  expect(inputElement.value).toBe("");

  // Restore original functions
  useChatStore.getState = originalUseChatStore.getState;
  useChatStore.getState().addPost = originalAddPost;
});

test("form doesn't submit when input field is empty", () => {
  render(<MessageInput />);
  const PostsAtStart = useChatStore.getState().conversation.posts;
  const inputElement = screen.getByPlaceholderText(
    "Type Your Message"
  ) as HTMLInputElement;

  fireEvent.submit(inputElement);

  const store = useChatStore.getState();
  expect(store.conversation.posts).toHaveLength(PostsAtStart.length);
});
