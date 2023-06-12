import { Paper, Typography } from '@mui/material';
import OtherUserChatBubble from './Otheruserchatbubble';
import TopBar from './Topbar';
import UserChatBubble from './Userchatbubble';
import MessageInput from './MessageInput';
import { useChatStore
 } from '../store/chatstore';


export interface Post {
  message: string;
  read: boolean;
  timestamp: Date;
  author: String
} 
const ChatWindow = () =>  {

  // gets the chat history from the store and renders it 

  const chatHistory = useChatStore(state => state.conversation.posts)
  const matchTime = useChatStore(state => state.conversation.matchTime)
  const activeUserName = useChatStore(state => state.conversation.activeUserName)



  
  const formatTimestamp = (date: Date) => {
    const today = new Date();
    const isToday = (date.getDate() === today.getDate());
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'pm' : 'am'}`;
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    if (isToday) {
      return `Today ${formattedTime}`;
    } else {
      return `${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${formattedTime}`;
    }
  }


  return (
  <>
  <TopBar />
  <Paper variant="outlined" sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: '800px',
      backgroundColor: 'white',
    }}>
      <br />
      <br />
      <br />
       <Typography
          variant="body2"
          color="textSecondary"
          sx={{ alignSelf: 'center' }}
        >
          {`${formatTimestamp(matchTime)}`}
        </Typography>
      <Typography
          variant="h4"
          color="textPrimary"
          sx={{ alignSelf: 'center',
        margin: "10px 50px 50px" }}
        >
         {"You matched \uD83C\uDF88"}
        </Typography> 

      
      {chatHistory.map((post: Post, index:number) => {
         const previousPost = index > 0 ? chatHistory[index - 1] : null;
         const timeDifference = previousPost ? post.timestamp.getTime() - previousPost.timestamp.getTime() : null
         const showTimeStamp: boolean = !previousPost || (timeDifference !== null && timeDifference > 3600000);

         const sameAuthor = previousPost ? post.author === previousPost.author : false;
         const margin = (sameAuthor && timeDifference !== null && timeDifference < 20000) ? '0' : '20px';
        return post.author === activeUserName ? <UserChatBubble message={post.message} key={post.message} margin={margin} showTimeStamp={showTimeStamp} read={post.read} timestamp={formatTimestamp(post.timestamp)} /> : <OtherUserChatBubble message={post.message} key={post.message} showTimeStamp={showTimeStamp} margin={margin} timestamp={formatTimestamp(post.timestamp)}/>
      })}
     <MessageInput />
    </Paper></>
  )
}

export default ChatWindow;