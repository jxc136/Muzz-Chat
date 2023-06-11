import { create } from "zustand";

export interface ChatStore {
  conversation: Conversation;
  addPost: (post:Post) => void
}

export interface Conversation {
  activeUserName: string;
  otherUserName: string;
  posts: Post[];
  matchTime: Date;
}

export interface Post {
  message: string;
  read: boolean;
  timestamp: Date;
  author: String
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
  }
}));

// import { create } from "zustand";

// const createPokemonStore = (set) => ({
//   pokemon: [],
//   fetchPokemon: async () => {
//     await fetch("https://pokeapi.co/api/v2/pokemon")
//       .then((response) => response.json())
//       .then((data) => set({ pokemon: data.results }));
//   },
// });

// const createCounterStore = (set, get) => ({
//   number: 123,
//   increaseCounterNumber: () => set((state) => ({ number: state.number + 1 })),
//   decreaseCounterNumber: () => set((state) => ({ number: state.number - 1 })),
//   logNumber: () => {
//     console.log(` Current number value equals ${get().number}`);
//   },
// });

// export const useCombinedStore = create((...params) => ({
//   ...createPokemonStore(...params),
//   ...createCounterStore(...params),
// }));
