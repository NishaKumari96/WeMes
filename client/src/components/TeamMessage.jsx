
import React from 'react';
import { MessageText, useMessageContext } from 'stream-chat-react';

const TeamMessage = () => {
    const { handleOpenThread, message } = useMessageContext();

    return (
        <MessageText
            message={{ ...message, user: {}}}
            
        />
    )
}

export default TeamMessage