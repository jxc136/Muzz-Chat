import { Box, Typography} from '@mui/material/';

export interface OtherUserChatBubbleProps {
  message: string;
  timestamp: string;
  showTimeStamp: boolean;
  margin: string;
}
export const OtherUserChatBubble = ({message, timestamp, showTimeStamp, margin}: OtherUserChatBubbleProps) => {

  return (
  <>{showTimeStamp ? <Typography variant="body2" color="textSecondary" sx={{alignSelf: 'center'}}>{`${timestamp}`}</Typography> : null}
  
 <Box className="user-chat-bubble" sx={{
      alignSelf: 'flex-start',
      backgroundColor: '#F0F4FC',
      minHeight: '50px',
      maxWidth: '600px',
      marginTop: margin,
      marginBottom: "20px",
      marginRight: "20px",
      marginLeft: "20px",
      borderRadius: '10px'
    }}>
      <Typography sx={{ padding: '10px 25px 10px 10px' }}>{message}</Typography>
    </Box></>
  )
}

export default OtherUserChatBubble;