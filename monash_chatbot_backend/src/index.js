const express = require('express');
const cors = require('cors');
const dialogflow = require('dialogflow');
const uuid = require('uuid');
const path = require('path');

const app = express();

const projectId = process.env.PROJECT_ID;
//const projectId = 'monash-agent-cayctx';
const port = process.env.PORT || 8080;


//retrieve data from request and allow loopback
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(path.join(__dirname, '../build'))));

//send api request to dialogflow and return result
app.post('/dialogflow', async (req, res) => {
    const sessionClient = new dialogflow.SessionsClient();
    let sessionId;
    let sessionPath;
    //if sessionId exists continue chat otherwise create a new one
    if (req.body.sessionId) {
        sessionId = req.body.sessionId;
        sessionPath = sessionClient.sessionPath(projectId, req.body.sessionId);
    } else {
        sessionId = uuid.v4();
        sessionPath = sessionClient.sessionPath(projectId, sessionId);
    }
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: req.body.text,
                languageCode: 'en-US',
            },
        },
    };
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    let response = Object.assign({}, result, { sessionId });
    res.json(response).status(200).end();
});

//serve chat website
app.get('/', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '../build', 'index.html')));
});

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});