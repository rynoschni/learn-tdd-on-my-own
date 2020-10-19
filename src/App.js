import React, {useState} from 'react';
import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';
function App() {
  const [messages, setMessage] = useState([]);

  const _handleSend = (newMessage) => {
    setMessage([newMessage, ...messages]);
  };

  return (
    <div className="App">
      <NewMessageForm onSend={_handleSend} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
