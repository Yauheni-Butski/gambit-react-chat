# gambit-react-chat
Simple test application "Chat" that allows:
- Login/logout to chat instance, using username. (For test, you can use 5 pre-defined users. Creating new user and using password for authentication disabled due to limitation of the Chatkit server)
- Join to available rooms.
- Create new room.
- Send/receive messages to/from currently active room.
- Track online/offline users.

# Technical information
In current test application are used:
- React js
- React Redux
- React Router
- Redux Saga
- Redux Actions
- Connected React Router
- CSS Modules
- Enzyme + Jest for tests
- API calls through fetch()
- Persisting state between page refreshing using localStorage (didn't want to use 'redux-persist' for avoid 'wrapper hell'. And for this test application localStorage is enough)
- Pusher ChatKit as server side (https://pusher.com/chatkit)

# Start

- npm install
- npm start

# Launch tests

- npm test
