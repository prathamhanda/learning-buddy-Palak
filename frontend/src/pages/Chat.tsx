import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import axios from 'axios';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
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
      const resp = await axios.post<{ message?: string; taskID?: string; response?: string}>(
        'http://localhost:8000/add-task/',
        { task: userMessage.text }
      );
      const { message, taskID, response} = resp.data || {};
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: message && taskID
          ? `✅ ${message} (Task ID: ${taskID}).\n ${response}`
          : "Task saved!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error: any) {
      const botMessage: Message = {
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center space-x-3">
              <Bot className="h-6 w-6 animate-pulse" />
              <div>
                <h1 className="text-xl font-semibold gradient-text">Learning Buddy</h1>
                <p className="text-sm text-blue-100">Your AI Learning Assistant</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div 
            ref={chatContainerRef}
            className="h-[600px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white"
          >
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      message.sender === 'user' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg' : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:shadow-lg'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white animate-pulse" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none hover:from-blue-700 hover:to-purple-600'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span
                      className={`text-xs mt-1 block transition-opacity duration-300 hover:opacity-80 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fadeInUp">
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-md animate-pulse">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                  <span className="text-sm text-gray-600">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-gradient-to-r from-white to-gray-50 border-t">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-105"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className={`px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg
                  ${(isLoading || !inputMessage.trim()) ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-600'}`}
              >
                <Send className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>

        {/* Quick Tips */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-500">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 gradient-text">Quick Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <p className="text-sm text-blue-800">
                💡 Ask about specific topics you want to learn
              </p>
            </div>
            <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <p className="text-sm text-blue-800">
                📚 Request learning resources and materials
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                🎯 Get help with your learning goals
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                ❓ Ask questions about any subject
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat; 