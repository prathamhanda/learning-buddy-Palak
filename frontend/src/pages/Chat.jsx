const _jsxFileName = "src\\pages\\Chat.tsx"; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import axios from 'axios';








const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hello! I'm your Learning Buddy. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    _optionalChain([messagesEndRef, 'access', _ => _.current, 'optionalAccess', _2 => _2.scrollIntoView, 'call', _3 => _3({ behavior: "smooth" })]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Send user message to FastAPI backend
      const resp = await axios.post(
        'http://localhost:8000/add-task/',
        { task: userMessage.text }
      );
      const { message, taskID, response} = resp.data || {};
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: message && taskID
          ? `✅ ${message} (Task ID: ${taskID}).\n ${response}`
          : "Task saved!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const botMessage = {
        id: (Date.now() + 2).toString(),
        text: `❌ Sorry, there was an error saving your task. Please try again.`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
      , React.createElement('div', { className: "max-w-4xl mx-auto px-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
        , React.createElement('div', { className: "bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}
          /* Chat Header */
          , React.createElement('div', { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
            , React.createElement('div', { className: "flex items-center space-x-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}
              , React.createElement(Bot, { className: "h-6 w-6 animate-pulse"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}} )
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
                , React.createElement('h1', { className: "text-xl font-semibold gradient-text"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, "Learning Buddy" )
                , React.createElement('p', { className: "text-sm text-blue-100" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}, "Your AI Learning Assistant"   )
              )
            )
          )

          /* Chat Messages */
          , React.createElement('div', { 
            ref: chatContainerRef,
            className: "h-[600px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}}

            , messages.map((message, index) => (
              React.createElement('div', {
                key: message.id,
                className: `flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`,
                style: { animationDelay: `${index * 100}ms` }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}

                , React.createElement('div', {
                  className: `flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}

                  , React.createElement('div', {
                    className: `flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      message.sender === 'user' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg' : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:shadow-lg'
                    }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}

                    , message.sender === 'user' ? (
                      React.createElement(User, { className: "h-4 w-4 text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}} )
                    ) : (
                      React.createElement(Bot, { className: "h-4 w-4 text-white animate-pulse"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}} )
                    )
                  )
                  , React.createElement('div', {
                    className: `rounded-lg px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none hover:from-blue-700 hover:to-purple-600'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200'
                    }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}}

                    , React.createElement('p', { className: "text-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}}, message.text)
                    , React.createElement('span', {
                      className: `text-xs mt-1 block transition-opacity duration-300 hover:opacity-80 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}}

                      , formatTime(message.timestamp)
                    )
                  )
                )
              )
            ))
            , isLoading && (
              React.createElement('div', { className: "flex justify-start animate-fadeInUp"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}}
                , React.createElement('div', { className: "flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-md animate-pulse"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}
                  , React.createElement(Loader2, { className: "h-4 w-4 animate-spin text-blue-600"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}} )
                  , React.createElement('span', { className: "text-sm text-gray-600" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 150}}, "Thinking...")
                )
              )
            )
            , React.createElement('div', { ref: messagesEndRef, __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}} )
          )

          /* Chat Input */
          , React.createElement('form', { onSubmit: handleSubmit, className: "p-4 bg-gradient-to-r from-white to-gray-50 border-t"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}}
            , React.createElement('div', { className: "flex space-x-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}
              , React.createElement('input', {
                type: "text",
                value: inputMessage,
                onChange: (e) => setInputMessage(e.target.value),
                placeholder: "Type your message here..."   ,
                className: "flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-105"             ,
                disabled: isLoading, __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}}
              )
              , React.createElement('button', {
                type: "submit",
                disabled: isLoading || !inputMessage.trim(),
                className: `px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg
                  ${(isLoading || !inputMessage.trim()) ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-600'}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 168}}

                , React.createElement(Send, { className: "h-5 w-5 transition-transform duration-300 hover:rotate-12"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 174}} )
                , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 175}}, "Send")
              )
            )
          )
        )

        /* Quick Tips */
        , React.createElement('div', { className: "mt-6 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-500"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 182}}
          , React.createElement('h2', { className: "text-lg font-semibold text-gray-800 mb-3 gradient-text"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 183}}, "Quick Tips" )
          , React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 184}}
            , React.createElement('div', { className: "p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 185}}
              , React.createElement('p', { className: "text-sm text-blue-800" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}, "💡 Ask about specific topics you want to learn"

              )
            )
            , React.createElement('div', { className: "p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 190}}
              , React.createElement('p', { className: "text-sm text-blue-800" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 191}}, "📚 Request learning resources and materials"

              )
            )
            , React.createElement('div', { className: "p-3 bg-blue-50 rounded-lg"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 195}}
              , React.createElement('p', { className: "text-sm text-blue-800" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 196}}, "🎯 Get help with your learning goals"

              )
            )
            , React.createElement('div', { className: "p-3 bg-blue-50 rounded-lg"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 200}}
              , React.createElement('p', { className: "text-sm text-blue-800" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 201}}, "❓ Ask questions about any subject"

              )
            )
          )
        )
      )
    )
  );
};

export default Chat; 