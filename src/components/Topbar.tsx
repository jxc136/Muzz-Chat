import { Box, Typography, Avatar } from '@mui/material/';
import { useChatStore } from "../store/chatstore"


const TopBar = () => {

const otherUserName = useChatStore(state => state.conversation.otherUserName)

return(

  <><Box className="matched-user-wrapper"
    sx={{
      display: "flex",
      backgroundColor: 'white',
      alignSelf: 'flex-start',
      justifySelf: "center",
      justifyContent: "center",
      alignItems: 'center',
      margin: "20px"
      
    }}>
     <Avatar alt="Maya" src="/profilepic.png" sx={{ width: 80, height: 80 }}/>
    <Typography variant="h6" sx={{ padding: 2, fontWeight: "bold" }}>
      {otherUserName}
    </Typography>
  </Box><Box className="topBar" sx={{
    display: "flex",
    backgroundColor: 'white',
    alignSelf: 'center',
    justifySelf: "flex-start",
    justifyContent: "space-evenly",
    minWidth: "900px",
    minHeight: "50px",
    boxShadow: "0px 5px 15px 0px rgba(235,235,235,0.25)"
  }}>

      <Typography sx={{
        display: 'flex',
        padding: '10px',
        width: "50%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center',
        borderBottom: '3px solid #FB3F6B'
      }} variant="h6">
        Chat
      </Typography>

      <Typography variant="h6" sx={{
        display: 'flex',
        padding: '10px',
        width: "50%",
        alignItems: "flex-end",
        alignSelf: "flex-end",
        justifyContent: 'center'
      }} >
        Profile
      </Typography>
    </Box></>
)
}

export default TopBar