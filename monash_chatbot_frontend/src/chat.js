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

const Chat = (props) => {
    const classes = useStyles();
    const chat = props.chatHistory.map((message) => {
        const side = (message.from === 'bot') ? clsx(classes.message, classes.left) : clsx(classes.message, classes.right);
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
            const cards = message.message.map(({ card }) => {
                console.log(card.imageUri);
                return (
                        <Card className={clsx(classes.card, classes.left)}>
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
                                <Button size="small" color="primary">
                                    {console.log(card.buttons)}
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

export default Chat;