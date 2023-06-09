import { Box, Typography} from '@mui/material/';


const OtherUserChatBubble = () => {

  return (
  
  <Box className="user-chat-bubble" sx={{
    alignSelf: 'flex-start',
    backgroundColor: '#F0F4FC',
    minHeight: '50px',
    maxWidth: '600px',
    margin: '20px',
    borderRadius: '10px'
    }} >
    <Typography sx={{
      padding: '10px'
    }}> 
     
      Hi this is to see what a much longer message might look like compared to my first standard one
    </Typography>
  </Box>
  )
}

export default OtherUserChatBubble;