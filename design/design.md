### UI

- Tech: Material UI

Chat Interface Elements:

- Message Frame
- Timestamps
- User chat bubble (person using the app)
- Matched user chat bubble (the other person)
- Text input
- Add emojis
- Avatar
- Topbar

Features:

- Displaying Messages

* Case 1: Current user's sent message is not sent
* Case 2: Current user's message is sent but not read
* Case 3: Current user's message is sent and read

- Messaging grouping

* Case 1: Messages seperated by more than an hour
* Case 2: Messages seperated by 20s or less
* Case 3: Messages sent more than 20s after eachother but less than an hour

- Messaging sending
- Case 1: Message sent successfully
- Case 2: Message unssuccessful (could be multiple cases within this )
- 'Interacting with the other user'
- Other user responds to current user
- Other user initiates conversation (not going to be used for this implementation)

Components:

Conversation / Chat Instance
Message Input

Information flow:

1 - The match happens

A conversation is created and encapsulated within a chat interface.
It is then populated witha timestamped message informing the user they have matched with someone
A state object is created to track messages, which should include information about who sent the message, the contents, whether the object is delivered or read and at what time

2 - The user posts the first message (probable limitation - user will have to post first)

A user enters their message into the chat input field, the contents of that message is tracked in state. When the user presses enter in the chat, the message is "sent", which will add a new message to the state object. This will force a rerender of the app.

This will also send an API request to ChatGPT

3 - The message is sent

At this point, the message will display a single tick to show that it is read

4 - The message is read:

The message object will be updated to show that the message is read, and the message will now display two ticks.

Note - this might have to make an assumption that the other user only reads the app when the chatGPT reponse is sent

5 - A reply is recieved

This will add a message to the state object

Functionality for the active user seeing or not seeing the object and updating the state could be implemented here, but may be ignored for time constraints.

NB - it could be handled when the active user replies as a workaround
