import { act } from "react-dom/test-utils";
import { useChatStore } from "./chatstore";

/// Potential Future tests

/// MarkAllRead called on empty posts array
// Error handling - better tested through E2E or integration tests

/// Deliberately excluded
// Input handling - input validation is handled outside of the store

describe("Chatstore", () => {
  const mockPosts = [
    {
      message: "Mock message 1",
      read: false,
      timestamp: new Date("2023-06-10T10:00:00Z"),
      author: "user1",
    },
    {
      message: "Mock message 2",
      read: false,
      timestamp: new Date("2023-06-10T11:01:00Z"),
      author: "user2",
    },
    {
      message: "Mock message 3",
      read: false,
      timestamp: new Date("2023-06-10T12:01:00Z"),
      author: "user1",
    },
  ];

  const mockConversation = {
    activeUserName: "user1",
    otherUserName: "user2",
    posts: mockPosts,
    matchTime: new Date("2023-06-10T10:50:00"),
  };
  beforeEach(() => {
    act(() => {
      useChatStore.setState({ conversation: mockConversation });
    });
  });

  test("addpost should add a valid post object to the posts array", () => {
    const newPost = {
      message: "Test",
      read: false,
      timestamp: new Date(),
      author: "Zayn",
    };

    act(() => {
      useChatStore.getState().addPost(newPost);
    });

    const posts = useChatStore.getState().conversation.posts;
    expect(posts[posts.length - 1]).toEqual(newPost);
  });

  test("addPost correctly adds multiple posts in a row", () => {
    const newPost1 = {
      message: "Test 1",
      read: false,
      timestamp: new Date(),
      author: "Zayn",
    };

    const newPost2 = {
      message: "Test 2",
      read: false,
      timestamp: new Date(),
      author: "Zayn",
    };

    act(() => {
      useChatStore.getState().addPost(newPost1);
      useChatStore.getState().addPost(newPost2);
    });

    const posts = useChatStore.getState().conversation.posts;

    expect(posts[posts.length - 2]).toEqual(newPost1);
    expect(posts[posts.length - 1]).toEqual(newPost2);
  });

  test("addpost should generate a new state and not mututate the previous state", () => {
    const newPost = {
      message: "Immutabilityy Test",
      read: false,
      timestamp: new Date(),
      author: "Zayn",
    };

    const initialPosts = useChatStore.getState().conversation.posts;

    act(() => {
      useChatStore.getState().addPost(newPost);
    });

    const postsAtEnd = useChatStore.getState().conversation.posts;

    expect(initialPosts).toEqual(mockPosts);
    expect(postsAtEnd[postsAtEnd.length - 1]).toEqual(newPost);
  });

  test("markAllAsRead correctly changes the read value of all posts to true", () => {
    act(() => {
      useChatStore.getState().markAllAsRead();
    });

    const updatedPosts = useChatStore.getState().conversation.posts;
    const endingReadPosts = updatedPosts.filter((post) => post.read === true);

    expect(endingReadPosts.length).toEqual(updatedPosts.length);
  });

  test("markAllAsRead should generate a new state and not mututate the previous state", () => {
    // Make a deep copy of the initial posts array
    const initialPosts = JSON.parse(
      JSON.stringify(useChatStore.getState().conversation.posts)
    );

    act(() => {
      useChatStore.getState().markAllAsRead();
    });

    // Convert the dates to strings so they can be compared
    const formattedMockPosts = mockPosts.map((post) => ({
      ...post,
      timestamp: post.timestamp.toISOString(),
    }));

    expect(initialPosts).toEqual(formattedMockPosts);
  });
});
