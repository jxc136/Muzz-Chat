import { Box, Typography} from '@mui/material/';

export interface OtherUserChatBubbleProps {
  message: string;
  timestamp: string;
  showTimeStamp: boolean;
}
export const OtherUserChatBubble = ({message, timestamp, showTimeStamp}: OtherUserChatBubbleProps) => {

  return (
  <>{showTimeStamp ? <Typography variant="body2" color="textSecondary" sx={{alignSelf: 'center'}}>{`${timestamp}`}</Typography> : null}
  
 <Box className="user-chat-bubble" sx={{
      alignSelf: 'flex-start',
      backgroundColor: '#F0F4FC',
      minHeight: '50px',
      maxWidth: '600px',
      margin: '20px',
      borderRadius: '10px'
    }}>
      <Typography sx={{
        padding: '10px'
      }}>

        {message}
      </Typography>
    </Box></>
  )
}

export default OtherUserChatBubble;