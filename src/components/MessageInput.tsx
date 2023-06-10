import { TextField , Box} from '@mui/material';
import { useChatStore} from '../store/chatstore';
import { useState } from 'react'

export interface Post {
  message: string;
  read: boolean;
  timestamp: Date;
  author: String
} 

const MessageInput = () => {
  const [messageInput, setMessageInput] = useState<string>('')
  const { addPost, conversation } = useChatStore();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const post:Post = {
      message: messageInput,
      read: false,
      timestamp: new Date(),
      author: conversation.activeUserName
    }
    addPost(post)
    console.log('submit')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
    console.log(messageInput)
  }

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
      <form onSubmit ={handleSubmit}>
        <TextField sx={{
      
      backgroundColor: 'white',
      maxWidth: '80%',
      borderRadius: '30px',
      minWidth: '400px',
      alignSelf: 'center',
      
    }} value={messageInput} placeholder="Type Your Message" onChange={handleChange} >Type your message</TextField>
      </form>
      
    </Box>
    

  )
}
export default MessageInput