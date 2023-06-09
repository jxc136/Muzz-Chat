import { TextField , Box} from '@mui/material';

const MessageInput = () => {

  return(
    <Box className ="text-input-wrapper" sx={{
      display: "flex",
      backgroundColor: 'white',
      alignSelf: 'center',
      justifySelf: "flex-end",
      justifyContent: "center", 
      minWidth: "900px",
      minHeight: "100px",
      boxShadow: "0px -5px 15px 0px rgba(235,235,235,0.25)"
     
    }}>
      <TextField sx={{
      
      backgroundColor: 'white',
      maxWidth: '80%',
      borderRadius: '30px',
      minWidth: '400px',
      alignSelf: 'center',
      
    }} value='hello'>Type your message</TextField>
    </Box>
    

  )
}
export default MessageInput