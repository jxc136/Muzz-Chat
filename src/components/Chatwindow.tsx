import { Paper } from '@mui/material';
import OtherUserChatBubble from './Otheruserchatbubble';
import TopBar from './Topbar';
import UserChatBubble from './Userchatbubble';
import MessageInput from './MessageInput';
const ChatWindow = () =>  {

  // gets the chat history from the store and renders it 
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
      <UserChatBubble />
      <OtherUserChatBubble />
      <UserChatBubble />
      <MessageInput />
    </Paper></>
  )
}

export default ChatWindow;