import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import { ShowsList } from './ShowsList';

export const ShowsListPage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          py: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3">TvShows</Typography>
        <Button
          component={Link}
          to={`/watch-list`}
          variant="contained"
          color="success"
        >
          View my watch list
        </Button>
      </Box>
      <SearchBar />
      <ShowsList />
    </Container>
  );
};
