import React from 'react';
import clsx from 'clsx';
import { Card, CardContent, CardActions, CardActionArea, CardMedia, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
    return {
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
        card: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    };
});

/**
 * Creates the chat message based
 * @param {array} props.chatHistory
 * 
 */
const Chat = (props) => {
    const classes = useStyles();
    const chat = props.chatHistory.map((message) => {
        //own mesages on the left bot messages on the right
        const side = (message.from === 'bot') ? clsx(classes.message, classes.right, message.from) : clsx(classes.message, classes.left, message.from);
        if (message.isText) {
            return (
                <Button
                    variant="outlined"
                    className={side}
                >
                    {message.message}
                </Button>
            );
        } else {
            //cards are a structure from the dialogflow agent
            const cards = message.message.map(({ card }) => {
                return (
                        <Card 
                            className={clsx(classes.card, classes.left, message.from)}
                        >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={card.imageUri}
                                />
                                <CardContent>
                                    <Typography 
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography
                                        variant="body2" 
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {card.subtitle}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={card.buttons[0].postback}>
                                    Link
                                </Button>
                            </CardActions>
                        </Card>
                    );
            });
            return cards;
        }
    });
   return chat; 
}
/*
*/
export default Chat;