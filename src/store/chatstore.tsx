  import { create } from "zustand";
  import { Post } from '../interfaces/types'

  export interface ChatStore {
    conversation: Conversation;
    addPost: (post:Post) => void
    markAllAsRead: () => void
  }

  export interface Conversation {
    activeUserName: string;
    otherUserName: string;
    posts: Post[];
    matchTime: Date;
  }

  const initialPosts: Post[] = [
    {
      message: 'Hello, Maya. My name is Zain.',
      read: true,
      timestamp: new Date('2023-06-10T10:00:00Z'),
      author: "Zain"
    },
    {
      message: 'Hi Zain! Nice to meet you.',
      read: false,
      timestamp: new Date('2023-06-10T11:01:00Z'),
      author: "Maya"
    },

    {
      message: 'Lets test a long message to make sure that still displays well for us ',
      read: false,
      timestamp: new Date('2023-06-10T12:01:00Z'),
      author: "Maya"
    },
  ];

  export const useChatStore = create<ChatStore>((set, get) => ({
    conversation: {
      activeUserName: 'Zain',
      otherUserName: 'Maya',
      posts: initialPosts,
      matchTime: new Date('2023-06-10T10:50:00'),

    },
    addPost: (post: Post) => {
      const updatedPosts = [...get().conversation.posts, post];
      set(() => ({
        conversation: {
          ...get().conversation, 
          posts: updatedPosts
        }
      }));
    },

    markAllAsRead: () => {
      const updatedPosts = get().conversation.posts.map(post => ({ ...post, read: true }));
      set(() => ({
        conversation: {
          ...get().conversation, 
          posts: updatedPosts
        }
      }));
    }
  }));


