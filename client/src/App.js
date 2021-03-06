
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Grid, Grow, Typography } from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const App = () => {
    const [currId, setCurrId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Souvenir</Typography>
                <img className={classes.image} src={memories} alt="souvenir" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrId={setCurrId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currId={currId} setCurrId={setCurrId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};

export default App;
