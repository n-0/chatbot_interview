import axios from 'axios';

export async function sendToBot(text, sessionId) {
    let request;
    request = await axios.post('http://localhost:8080/dialogflow', {
        text: text,
        sessionId: sessionId
    });
    return request;
}