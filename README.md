# Muzz Chat for Web

This is a simple front-end implementation of a web version of muzz-chat. It demonstrates a conversation between two users, showing the interactivity of the chat system. For demonstration purposes, an initial conversation has been hardcoded into the app.

Please note that per the exercise instructions, this app only provides frontend functionality for the chat feature.

## Features

- Showcases a chat conversation between two predefined users.
- Messages are encased in chat bubbles
- Chat bubbles are styled depending on the user type and the state of a message.
- Messages that are delivered are marked with a single tick, read messages with two ticks.
- Messages are be grouped using the following logic:
  - Messages separated by more than an hour should be sectioned with the date and time - “{day} {timestamp}”
  - Messages from the same user sent within 20s of each other should have a smaller vertical spacing between them. Making them look grouped together.
- Presents a series of initial posts to illustrate the chat interface.
- A control panel component to simulate two way communication, allowing users to send messages or view messages as the other user.

## Technologies Used

- React: The app is built with React, which allows for effective component-based architecture and efficient rendering of updates.
- Zustand: Zustand is used for simplified state management within the app, keeping the global conversation state accessible.
- TypeScript: The app uses TypeScript to ensure type safety and improve the development experience.
- Material UI: MUI is used to enable rapid visual prototyping for UI elements.
- Jest & React Testing Library: These testing frameworks are used for unit testing components and ensuring the app behaves as expected.

## Installation

To run the Muzz App locally, follow these steps:

- Clone the repository to your local machine.
- Install the necessary dependencies by running the following commands:

```
npm install
```

- Start the development server:

```
npm start
```

Open your browser and navigate to http://localhost:3000 to view the app.

## Usage

Upon opening the app, you'll be presented with a series of preloaded posts between two users, illustrating a conversation.
Each post displays the author, message content, and timestamp.

## Testing

To run tests, navigate to the project root in your terminal and enter `npm run test`. A total of 13 tests should be present.

Unit tests were written for the Zustand store MessageInput and ChatWindow components, however the store was not mocked for component testing owing to time constraints.

## Next Steps

If I were to further develop this app, the priority actions would be:

### Testing

- Improve test coverage to ensure that critical functionality is thoroughly tested, including tests to cover error handling, user interactions, and edge cases.
- More visual testing of display elements, including for if a timestamp is displayed or not and for message spacing
- More in-depth unit tests for the components functions.
- Implement end-to-end testing for each of the main features.

### Refactoring

Implement error handling in the Zustand store and within components.

### Features

- Add a blur/unblur feature to mimic the app functionality
- Implement an emoji picker
- Allow users to add photos and videos, along with functionality to control how they are displayed
- Implement a block feaure that ends conversations and UI to handle blocking and being blocked
- Mobile responsives for smaller screen sizes

## Screenshot

![Screenshot](/public/muzz-chat-screenshot.png)

## Planning

The initial planning document can be found [here](Muzz/muzz-chat/design/design.md.
Additionally, here is the initial app diagram

![App Diagram](/public/app-diagram.png)
