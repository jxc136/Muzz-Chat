import { Paper } from '@mui/material';
import OtherUserChatBubble from './Otheruserchatbubble';
import TopBar from './Topbar';
import UserChatBubble from './Userchatbubble';
import MessageInput from './MessageInput';
import { useChatStore
 } from '../store/chatstore';

export interface Post {
  message: string;
  read: boolean;
  timestamp: Date;
  author: String
} 
const ChatWindow = () =>  {

  // gets the chat history from the store and renders it 

  const chatHistory = useChatStore(state => state.conversation.posts)
  const activeUserName = useChatStore(state => state.conversation.activeUserName)
  const otherUserName = useChatStore(state => state.conversation.otherUserName)
  
  return (
  <>
  <TopBar />
  <Paper variant="outlined" sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: '800px',
      backgroundColor: 'white',
    }}>
      <br />
      <br />
      <br />
      {chatHistory.map((post: Post) => {
        return post.author === activeUserName ? <UserChatBubble message={post.message} key={post.message} /> : <OtherUserChatBubble message={post.message} key={post.message}/>
      })}
     <MessageInput />
    </Paper></>
  )
}

export default ChatWindow;