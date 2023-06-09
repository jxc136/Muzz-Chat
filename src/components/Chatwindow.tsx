import { Paper } from '@mui/material';

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
      <p>Hi</p>
    </Paper></>
  )
}

export default ChatWindow;