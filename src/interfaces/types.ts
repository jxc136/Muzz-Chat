export interface Post {
    message: string;
    read: boolean;
    timestamp: Date;
    author: String;
} 

export interface OtherUserChatBubbleProps {
  message: string;
  timestamp: string;
  showTimeStamp: boolean;
  margin: string;
}

export interface UserChatBubbleProps {
  message: string;
  timestamp: string;
  showTimeStamp: Boolean;
  margin: string;
  read: boolean;
}
