import { Dialog, DialogContent, Paper, Typography, TextField, Button } from "@mui/material"
import { useState } from 'react'
import { useChatStore } from '../store/chatstore';
import { Post } from '../interfaces/types'

const ControlPanel = ({ open, onClose }: { open: boolean, onClose: () => void }) => {

  const [messageInput, setMessageInput] = useState<string>('')
  const { addPost, conversation, markAllAsRead } = useChatStore(state => ({
    addPost: state.addPost,
    conversation: state.conversation,
    markAllAsRead: state.markAllAsRead,
  }));

  const { otherUserName, posts: chatHistory } = conversation;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const post:Post = {
        message: messageInput,
        read: false,
        timestamp: new Date(),
        author: otherUserName
      }
      addPost(post)
      setMessageInput("");
    }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
    console.log(messageInput)
  }

  const handleClick = () => {
    markAllAsRead()
    console.log('clicked')
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Paper variant="outlined" sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: '400px',
          maxWidth: '400px',
          backgroundColor: 'white',
        }}>
          <Typography variant="h5"
              color="textPrimary" sx={{margin: '20px 10px 10px', display: "flex", alignSelf: "center", textDecoration: 'underline'}}>Control Panel</Typography>
          <Typography variant="h6"
              color="textPrimary" sx={{margin: '20px 10px 10px', display: "flex", alignSelf: "center"}}>Post a message from {otherUserName}</Typography>
          <form onSubmit ={handleSubmit}>
              <TextField sx={{
            
            backgroundColor: 'white',
            maxWidth: '80%',
            borderRadius: '30px',
            margin: '10px',
            minWidth: '300px',
            overflow: "hiden",
            display: "flex", 
            alignSelf: "center"
            
          }} value={messageInput} placeholder="Type Your Message" onChange={handleChange} >Type your message</TextField>
            </form>

            <Typography variant="h6"
              color="textPrimary" sx={{margin: '20px 10px 10px', display: "flex", alignSelf: "center"}}>Mark Messages as Read</Typography>
          <Button variant="contained" onClick={handleClick} sx={{backgroundColor:"#FB406B", fontWeight: "bold", maxWidth: "200px", margin: '10px', display: "flex", alignSelf: "center" }}>Mark Read</Button>
          
        </Paper>
      </DialogContent>
    </Dialog>
  )
}

export default ControlPanel;
