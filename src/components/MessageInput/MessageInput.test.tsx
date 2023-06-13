/**
 * Unit tests for the MessageInput component.
 * These tests aim to validate the behavior of the message input field,
 * including typing, form submission, and clearing of the input field.
 *
 * Note: In a more comprehensive testing strategy, mocking Zustand store should be
 * considered for isolation of the state management. Additionally, browser-based testing tools
 * like Cypress could be employed to ensure visual rendering correctness and end-to-end interactions.
 */

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MessageInput from "./MessageInput";
import { useChatStore } from "../../store/chatstore";
import { Post } from "../../interfaces/types";

describe("MessageInput", () => {
  const initialPosts: Post[] = [
    {
      message: "Hello, Maya. Nice to meet you My name is Zain.",
      read: true,
      timestamp: new Date("2023-06-10T10:00:00Z"),
      author: "Zain",
    },
    {
      message: "Hi Zain! Nice to meet you. How are you doing today?",
      read: false,
      timestamp: new Date("2023-06-10T11:01:00Z"),
      author: "Maya",
    },

    {
      message:
        "Good thanks! Today is my first day on Muzz. Thought I might see what all of the fuss is about!",
      read: false,
      timestamp: new Date("2023-06-10T12:01:00Z"),
      author: "Zain",
    },
  ];

  beforeEach(() => {
    // Reset the conversation state of the store to its initial state
    useChatStore.setState({
      conversation: {
        activeUserName: "Zain",
        otherUserName: "Maya",
        posts: initialPosts,
        matchTime: new Date("2023-06-10T10:50:00"),
      },
    });
  });

  test("renders correctly", () => {
    render(<MessageInput />);
    expect(
      screen.getByPlaceholderText("Type Your Message")
    ).toBeInTheDocument();
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

  test("form successfully submit when input field is populated", async () => {
    render(<MessageInput />);
    const PostsAtStart = useChatStore.getState().conversation.posts;

    const mockMessage = "Mock Message";

    const inputElement = screen.getByPlaceholderText(
      "Type Your Message"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: mockMessage } });

    fireEvent.submit(screen.getByTestId("message-form"));

    await waitFor(() => {
      const store = useChatStore.getState();
      expect(store.conversation.posts).toHaveLength(PostsAtStart.length + 1);
    });
  });

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
});
