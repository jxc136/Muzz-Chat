import { Paper } from '@mui/material';
import MessageInput from './MessageInput';
import OtherUserChatBubble from './Otheruserchatbubble';
import UserChatBubble from './Userchatbubble';

const ChatWindow = () =>  {

  // gets the chat history from the store and renders it 
  return (
  <>
 
  <Paper variant="outlined" sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: '800px',
      backgroundColor: 'white',
    }}>
      <UserChatBubble />
      <OtherUserChatBubble />
      <MessageInput />
    </Paper></>
  )
}

export default ChatWindow;