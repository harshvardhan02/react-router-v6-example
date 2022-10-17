import React, { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const chatWindow = useRef(null);
  const [input, setInput] = useState("");
  const [chatData, setChatData] = useState([
    {
      user: "some user",
      message: "Somewhere stored deep, deep in my memory banks is the phrase It really whips the llama's ass.",
      userType: "sender"
    }
  ])

  const chatInputHandler = (e) => {
    setInput(e.target.value)
  }

  const submitChat = (e) => {
    e.preventDefault();
    const data = {
      user: "some user",
      message: input,
      sender: true
    }
    setChatData(chatData => [...chatData, data]);
    setInput("")
  }

  const scrollToBottom = () => {
    const scrollHeight = chatWindow.current.scrollHeight;
    const height = chatWindow.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    chatWindow.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatData])

  return (
    <div id="detail">
      <div className="--dark-theme" id="chat">
        <div className="chat__conversation-board" ref={chatWindow}>
          {chatData.map((chat, idx) => (
            <div key={idx} className={`${chat.sender ? `chat__conversation-board__message-container reversed` : `chat__conversation-board__message-container`}`}>
              <div className="chat__conversation-board__message__person">
                <div className="chat__conversation-board__message__person__avatar"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Monika Figi" /></div><span className="chat__conversation-board__message__person__nickname">Monika Figi</span>
              </div>
              <div className="chat__conversation-board__message__context">
                <div className="chat__conversation-board__message__bubble"> <span>{chat.message}</span></div>
              </div>
              <div className="chat__conversation-board__message__options">
                <button className="btn-icon chat__conversation-board__message__option-button option-item emoji-button">
                  <svg className="feather feather-smile sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </button>
                <button className="btn-icon chat__conversation-board__message__option-button option-item more-button">
                  <svg className="feather feather-more-horizontal sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={(e) => submitChat(e)}>
          <div className="chat__conversation-panel">
            <div className="chat__conversation-panel__container">
              <button className="chat__conversation-panel__button panel-item btn-icon add-file-button">
                <svg className="feather feather-plus sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <button className="chat__conversation-panel__button panel-item btn-icon emoji-button">
                <svg className="feather feather-smile sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </button>
              <input
                className="chat__conversation-panel__input panel-item"
                placeholder="Type a message..."
                onChange={(e) => chatInputHandler(e)}
                value={input}
              />
              <button type='submit' onClick={() => submitChat()} className="chat__conversation-panel__button panel-item btn-icon send-message-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-reactid="1036">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
