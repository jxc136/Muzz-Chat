import { Box, Typography} from '@mui/material/';



export interface UserChatBubbleProps {
  message: string;
}
export const UserChatBubble = ({message}: UserChatBubbleProps) => {

  return (
  
  <Box className="user-chat-bubble" sx={{
    alignSelf: 'flex-end',
    backgroundColor: '#FB3F6B',
    minHeight: '50px',
    maxWidth: '600px',
    margin: '20px',
    borderRadius: '10px'
    }} >
    <Typography sx={{
      padding: '10px'
    }}> 
     {message}
    </Typography>
  </Box>
  )
}

export default UserChatBubble;