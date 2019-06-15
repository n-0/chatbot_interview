import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, CardActions, TextField, Fab, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { sendToBot } from './chatbot';
import Chat from './chat';

const useStyles = makeStyles((theme) => {
    return {
        send: {
            marginRight: '0',
            marginLeft: 'auto',
        },
        sendMessage: {
            marginLeft: '0',
            paddingLeft: '0',
            width: '95%',
        },
        message: {
            textTransform: 'none',
            marginTop: '10px',
        },
        right: {
           marginRight: '80%',
           borderColor: 'blue',
        },
        left: {
            marginLeft: '80%',
            borderColor: 'red'
        },
        chatContainer: {
            height: '400px',
            overflowY: 'auto',
        },
        card: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    };
});

const addHistory = (response, fromBot) => {
    if (!fromBot) {
        return {
            message: response, 
            time: Date.now(),
            from: 'user',
            isText: true
        };
    }
    let message;
    if (response.data.fulfillmentText) {
        message = response.data.fulfillmentText;
        response.isText = true;
    } else {
        message = response.data.fulfillmentMessages;
        response.isText = false;
    }
    return {
        message: message,
        time: Date.now(),
        from: 'bot',
        isText: (response.isText)
    }
}

let sessionId = null;
let sessionError = false;

const ChatWindow = (props) => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [sending, setSending] = useState(false);
    const [chatHistory, setChatHistory] = useState([{
        message: 'Hello I am a chatbot',
        time: Date.now(),
        from: 'bot',
        isText: true,
    }]);

    useEffect(() => {
        if (text !== '' && sending === true) {
            sendToBot(text, sessionId).then((response) => {
            const history = addHistory(response, true);
            if (response.data.sessionId) {
                sessionId = response.data.sessionId;
            }
            const updatedChat = [...chatHistory, history];
            setSending(false);
            setText('');
            setChatHistory(updatedChat);
            }).catch(e => {
                sessionError = true;
            });
        } else {
            setSending(false);
        }
    }, [sending, text, chatHistory]);

    const sendMessage = () => {
        if (
            chatHistory.length > 0 &&
            chatHistory[chatHistory.length - 1].from === 'bot'
            && sessionError === false
        ) {
            const history = addHistory(text, false);
            setChatHistory([...chatHistory, history]);
            setSending(true); 
        }

    }

    return (
        <Card>
            <CardContent>
                <Container className={classes.chatContainer}>
                    <Chat chatHistory={chatHistory} />
                </Container>
            </CardContent>
            <CardActions>
                <TextField
                    id="chat-textfield"
                    className={classes.sendMessage}
                    value={text}
                    margin="normal"
                    label="chat"
                    variant="outlined"
                    placeholder="Send message"
                    classes={{
                        input: {
                            'borderBottom': false
                        }
                    }}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') sendMessage()
                    }}
                />
                <Fab 
                disabled={((sessionError || sending))}
                color="primary" 
                aria-label="Send" 
                className={classes.send}
                onClick={() => sendMessage()}
                >
                    <Icon>send</Icon>
                </Fab>
            </CardActions>
        </Card>
    );
}

export default ChatWindow;