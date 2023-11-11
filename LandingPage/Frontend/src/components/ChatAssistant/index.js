import { useCallback, useState, forwardRef } from "react";
import "./style.css";

function ChatAssistant() {
  return (
    <div className={`chat-helper1`}>
      <p className={`chat-assistant-title`}>Привет, я ваш </p>
      <p className={`chat-assistant`}>чат-помощник!</p>
    </div>
  );
}

export default ChatAssistant;
