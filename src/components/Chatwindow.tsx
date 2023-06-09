import { Paper } from '@mui/material';
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
    </Paper></>
  )
}

export default ChatWindow;