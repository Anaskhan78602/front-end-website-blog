import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CommunityPage.css"; // Custom CSS for styling
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000"); // Backend WebSocket server

function CommunityPage() {
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [newGroupName, setNewGroupName] = useState("");

  useEffect(() => {
    // Fetch groups from the backend
    fetch("/groups")
      .then((res) => res.json())
      .then((data) => setGroups(data));

    // Listen for real-time messages
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, []);

  const createGroup = () => {
    if (!newGroupName) return;
    const group = { name: newGroupName, description: "New group created by user." };
    fetch("/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(group),
    })
      .then((res) => res.json())
      .then((data) => {
        setGroups((prev) => [...prev, data]);
        setNewGroupName("");
      });
  };

  const joinGroup = (group) => {
    setCurrentGroup(group);
    setMessages([]);
    socket.emit("joinGroup", group.name);
  };

  const sendMessage = () => {
    if (!message) return;
    const msg = { group: currentGroup.name, content: message };
    socket.emit("message", msg);
    setMessage("");
  };

  return (
    <div className="community-page">
      {/* Group List Section */}
      <motion.div
        className="group-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Available Groups</h2>
        <input
          type="text"
          placeholder="Group name..."
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={createGroup}
        >
          Create Group
        </motion.button>
        <ul>
          {groups.map((group) => (
            <motion.li
              key={group.name}
              whileHover={{ scale: 1.05 }}
              onClick={() => joinGroup(group)}
            >
              {group.name}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Chat Section */}
      {currentGroup && (
        <motion.div
          className="chat-section"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{currentGroup.name}</h2>
          <div className="messages">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                className="message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                {msg.content}
              </motion.div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={sendMessage}
          >
            Send
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

export default CommunityPage;
