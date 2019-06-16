# chatbot_interview
A chatbot application built for an interview at Monash university.

### Dependencies
*   create-react-app
    * easy bootstrap react application
*   express
    * serve react app
    * backend for react app 
*   dialogflow 
    * use sdk to connect to google api
*   axios
    * to communicate between api backend and frontend
*   @material-ui
    * For design elements
*   jest
    * testing library
*   enzyme
    * testing of react components
*   yarn
    * package manager

### Remarks
The application is separated into frontend and backend. The backend is used
together with Dialogflow SDK and does the requests to the Google API. 
The frontend can query with the help of axios information from the backend that
serves data via express, and displays them with the help of 
react components that are styled in @material-ui.

The intents of the dialogflow agent in this case are just the default fallback and welcome intent
and a Google intent. The google intent works like this:
Google [...keywords]
The responses are the top 5 search results from Google search. The information is 
prepared by a CSE and collected by an firebase webhook.
[Project in Google App Engine](https://monash-agent-cayctx.appspot.com/)
