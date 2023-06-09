import { Paper } from '@mui/material';
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
    </Paper></>
  )
}

export default ChatWindow;