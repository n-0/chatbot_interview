import axios from 'axios';

/**
 * Retrieves answer and sessionId from dialogflow via backend
 * @param {string} text 
 * @param {number} sessionId 
 */
export async function sendToBot(text, sessionId) {
    let request;
    //http://localhost:8080/dialogflow
    request = await axios.post('https://monash-agent-cayctx.appspot.com/dialogflow', {
        text: text,
        sessionId: sessionId
    });
    return request;
}