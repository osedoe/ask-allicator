import { useEffect } from 'react';

export const AlligatorChat = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
        script.async = true;
        const dfMessenger = document.createElement('df-messenger');
        dfMessenger.setAttribute('project-id', 'hackathon-team-1-402512');
        dfMessenger.setAttribute('agent-id', '13882cc5-ee42-4fc3-b4a4-0692a57e81f6');
        dfMessenger.setAttribute('language-code', 'en');
        const chatBubble = document.createElement('df-messenger-chat-bubble');
        chatBubble.setAttribute('chat-title', 'Alligator');
        const style = document.createElement('style');
        style.innerHTML = `       df-messenger {         z-index: 999;         position: fixed;         bottom: 16px;         right: 16px;       }     `;
        document.body.appendChild(script);
        document.body.appendChild(dfMessenger);
        document.body.appendChild(chatBubble);
        document.body.appendChild(style);
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(dfMessenger);
            document.body.removeChild(chatBubble);
            document.body.removeChild(style);
        };
    }, []);
    return null;