import { useEffect, useRef } from "react"
import { useChatStore } from "../store/useChatStore"
import { useAuthStore } from "../store/useAuthStore"
import { formatMessageTime } from "../lib/utils"
import ChatContainerSkeleton from "./skeletons/ChatContainerSkeleton"
import ChatHeader from "./ChatHeader"
import MessageInput from "./MessageInput"
import { MessageCircleDashed } from "lucide-react"

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unsubscribeFromMessages } = useChatStore();
  const { authUser } = useAuthStore();

  const messageEndRef = useRef();

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => { unsubscribeFromMessages() };
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages)
      messageEndRef.current.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <ChatHeader />
      
      {(isMessagesLoading ? (
        <ChatContainerSkeleton />
      ) : (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {(messages.length) ? (
            messages.map((message) => (
              <div
                key={message._id}
                className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                ref={messageEndRef}  
              >
                <div className="chat-image avatar">
                  <div className="size-10 rounded-full border">
                    <img
                      src={
                        message.senderId === authUser._id
                          ? authUser.profilePic || "/avatar.png"
                          : selectedUser.profilePic || "/avatar.png"
                      }
                      alt="profile pic"
                    />
                  </div>
                </div>

                <div className="chat-bubble flex flex-col">
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[150px] rounded-md mb-2"
                    />
                  )}
                  {message.text && <p>{message.text}</p>}
                </div>

                <div className="chat-footer mt-1">
                  <time className="text-xs opacity-50 ml-1">
                    {formatMessageTime(message.createdAt)}
                  </time>
                </div>
              </div>
          ))
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col items-center
               justify-center"
              >
                <MessageCircleDashed size={30} className="animate-pulse" />
                <p className="font-normal text-lg mt-2">Chat is empty!</p>
                <p className="text-base-content/60">Be the one to break the ice</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <MessageInput />
    </div>
  );
}

export default ChatContainer;
