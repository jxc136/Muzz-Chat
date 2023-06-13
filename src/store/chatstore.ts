/**
 *
 * The ChatStore is responsible for maintaining the global conversation state of the application.
 * It exports a Zustand store hook called 'useChatStore'.
 *
 * It includes the current conversation and methods for adding a new post to the conversation and marking all posts as read.
 *
 * The Conversation interface represents a conversation between two users, including the posts
 * in the conversation and a timestamp indicating when the match occurred.
 *
 * The initialPosts object is a list of initial posts used to initialize the conversation in the store
 *
 * For the purposes of demoing functionality, an initial conversation with initial posts has been added to display on render
 * This also represents a single conversation instance, and a full webchat app would need to hold multiple conversation objects
 */

import { create } from "zustand";
import { Post } from "../interfaces/types";

export interface ChatStore {
  conversation: Conversation;
  addPost: (post: Post) => void;
  markAllAsRead: () => void;
}

export interface Conversation {
  activeUserName: string;
  otherUserName: string;
  posts: Post[];
  matchTime: Date;
}
// For demo purposes. Usually a conversation would start with zero posts
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
// The useChatStore hook is created using Zustand's create method.
// The app assumes a single conversation so values are hardcoded in.
// A complete chat functionality would generate a conversation with the correct values for each use on match.
export const useChatStore = create<ChatStore>((set, get) => ({
  conversation: {
    activeUserName: "Zain",
    otherUserName: "Maya",
    posts: initialPosts,
    matchTime: new Date("2023-06-10T10:50:00"),
  },
  addPost: (post: Post) => {
    const updatedPosts = [...get().conversation.posts, post];
    set(() => ({
      conversation: {
        ...get().conversation,
        posts: updatedPosts,
      },
    }));
  },

  markAllAsRead: () => {
    const updatedPosts = get().conversation.posts.map((post) => ({
      ...post,
      read: true,
    }));
    set(() => ({
      conversation: {
        ...get().conversation,
        posts: updatedPosts,
      },
    }));
  },
}));
