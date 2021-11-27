import React from "react";
import "../styles/chat_widget.scss";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { createStore } from 'redux'


function ChatWidget() {
  
  return (
    <div className="chat_widget">
      <ChatWidgetHeader />
      <ChatWidgetBody />
      <ChatWidgetInput />
    </div>
  );
}

function ChatWidgetHeader() {
  return (
    <div className="chat_widget_header flex flex-column">
      <div className="flex flex-row">
        <input type="text" placeholder="Search" className="search_input" />
        <ToggleButton className="toggle_button" />
      </div>
      <div className="flex flex-column">
        <h2>Maria Antony</h2>
        <div className="online_status">
        <p><span><i className="fas fa-circle online_status"></i></span> online</p>
        </div>
      </div>
    </div>
  );
}

function ToggleButton() {
    return (
        <div className="toggle_button">
            <div className="toggle_button_icon">
                <i className="fas fa-plus"></i>
            </div>
        </div>
    );
}

function ChatWidgetBody() {
  

  const [allMessages, setAllMessages] = useState([
    {
        id: 1,
        user_id: 1,
        message: 'Hello',
        created_at: '2020-06-01T00:00:00.000Z',
    },
    {
        id: 2,
        user_id: 2,
        message: 'Hello Haha',
        created_at: '2020-06-01T00:00:00.000Z',
    },
  ])

  const addMessage = (message) => {
    setAllMessages([...allMessages, message])
  }


  return (
    <div className="chat_widget_body">
      {allMessages.map((message, index) => (
        <ChatWidgetMessage key={index} message={message} />
      ))}
    </div>
  );
}

function ChatWidgetMessage(props) {
  return (
    <div className="chat_widget_message">
      <div className={"message " + (props.message['user_id'] == 1 ? "sent":"")}>
        <p>{props.message['message']}</p>
        <h6>10:45 am</h6>
      </div>
      

    </div>
  );
}

function ChatWidgetInput() {
  const [message, setMessage] = useState("");
  function submitMessage(e) {
    console.log(e);
    // addMessage({

    //     id: 3,
    //     user_id: 1,
    //     message: message,
    //     created_at: '2020-06-01T00:00:00.000Z',
    // })
    // setMessage("");
  }
  return (
    <div className="chat_widget_input">
      <input value={message} onInput={e => setMessage(e.target.value)} type="text" placeholder="Type a message" className="chat_widget_input_text" />
      <button className="chat_widget_input_button" onSubmit={submitMessage(message)}>
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
}



// store > global state




// actions > functions that change the state

const addmessage = (message) => {
  return {
    type: 'ADD_MESSAGE',
    payload: message
  }
}

// reducer > function that takes in the current state and an action and returns a new state

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        allMessages: [...state.allMessages, action.payload]
      }
    default:
      return state
  }
}

let store = createStore(reducer)

store.subscribe(() => {

    console.log("store.getState()")
})

// dispatch > function that calls the reducer

// const dispatch = (action) => {
//   store = reducer(store, action)
// }

store.dispatch(addmessage({

    id: 3,
    user_id: 1,
    message: 'Hello',
    created_at: '2020-06-01T00:00:00.000Z',
}))









export default ChatWidget;
