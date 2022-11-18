import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Box } from "@mui/material";
import { useCallback, useEffect } from "react";
//import { API_URL_PUBLIC } from "../constant/gists";
import { useDispatch, useSelector } from 'react-redux';
import { selectGists, selectGistsError, selectGistsLoading } from "../store/gists/selectors";
import { getAllGists } from '../store/gists/actions';

const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const isLoading = useSelector(selectGistsLoading);
    const error = useSelector(selectGistsError);

    const getGists = useCallback(async () => {
        
        dispatch(getAllGists());
    },[dispatch]);

    useEffect(() => {
        getGists();
    }, [getGists]);

    const renderGist = useCallback((gist) => (
        <ListItem key={gist.id}>
            <ListItemText primary={gist.description || 'No description'}
                secondary={gist.owner.login || ''} />
        </ListItem>

    ), []);
    const logGists = () => {
        console.log(gists);
    }
    if (isLoading) {
        return <CircularProgress />;
    }

    if (error) {
        console.log(error);
        return (<Box>
            <h3>Error</h3>
            <Button onClick={getGists} variant="outlined">Reload</Button>
        </Box>
        )
    }

    return (
        <Box>
            <List>
                {gists.map(renderGist)}
            </List>
            <Button onClick={logGists} variant="outlined">Log</Button>
        </Box>

    );
}

export default Gists