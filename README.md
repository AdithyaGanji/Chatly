# Chatly

Chatly is a full-stack chat application that allows users to exchange messages and images in real time. It utilizes Socket.io to enable seamless bidirectional communication.

---

### Technology Stack
* **Frontend**: React, Tailwind CSS, Zustand, Lucide React, React Hot Toast.
* **Backend**: Node.js, Express.js.
* **Database**: MongoDB (via Mongoose).
* **Real-Time Communication**: Socket.io for instant message delivery and live online status synchronization.
* **Media Storage**: Cloudinary for profile picture and chat image uploads.

---

### Key Features
1. **Real-Time Messaging**:
   - Send and receive messages instantly powered by **Socket.io**.
   - Supports both text messaging and image uploads within chats.
2. **Live Online Status Indicator**:
   - Real-time online/offline indicators let users see which users are currently active on the platform.
3. **Secure Authentication & Authorization**:
   - Secure user signup and login with JWT stored in HTTP-only cookies.
   - Route protection middleware to ensure only authenticated users can access the chat screen and profile dashboard.
4. **Interactive Profile Customization**:
   - Users can update their profile pictures, which are instantly uploaded and hosted via **Cloudinary**.

---

### Live Demo
[Visit Chatly Here!](https://chatly-n3mf.onrender.com/)
