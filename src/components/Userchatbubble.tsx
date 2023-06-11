import { Box, Typography} from '@mui/material/';



export interface UserChatBubbleProps {
  message: string;
  timestamp: string;
  showTimeStamp:Boolean;
  margin: string
}
export const UserChatBubble = ({message, timestamp, showTimeStamp, margin}: UserChatBubbleProps) => {

  return (
  <>{showTimeStamp ? <Typography variant="body2" color="textSecondary" sx={{alignSelf: 'center'}}>{`${timestamp}`}</Typography> : null}
  
  <Box className="user-chat-bubble" sx={{
      alignSelf: 'flex-end',
      backgroundColor: '#FB3F6B',
      minHeight: '50px',
      maxWidth: '600px',
      marginTop: margin,
      marginBottom: "20px",
      marginRight: "20px",
      marginLeft: "20px",
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

export default UserChatBubble;