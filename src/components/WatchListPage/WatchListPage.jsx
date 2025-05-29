import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Button,
  CircularProgress,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetShowsQuery } from '../../store/api';
import SingleWatchedShow from './SingleWatchedShow';

const WatchListPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const watchedEpisodes = useSelector(
    (state) => state.watchedEpisodes.watchedEpisodes,
  );
  const { data: shows = [], isLoading } = useGetShowsQuery();

  const watchedMap = watchedEpisodes.reduce((accumulator, entry) => {
    const [showId, episodeId] = entry.split('-');
    if (!accumulator[showId]) accumulator[showId] = new Set();
    accumulator[showId].add(episodeId);
    return accumulator;
  }, {});

  // Filter shows that have watched episodes
  const watchedShows = shows.filter((show) => watchedMap[show.id?.toString()]);

  return (
    <Container maxWidth="md">
      <Button
        variant="outlined"
        onClick={handleBackClick}
        sx={{ mb: 3, mt: 3 }}
      >
        ← Back
      </Button>
      <Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Your watch list
        </Typography>
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="200px"
          >
            <CircularProgress />
          </Box>
        ) : watchedShows.length === 0 ? (
          <Typography>No watched shows yet.</Typography>
        ) : (
          watchedShows.map((show) => (
            <SingleWatchedShow
              key={show.id}
              show={show}
              watchedCount={watchedMap[show.id.toString()].size}
            />
          ))
        )}
      </Box>
    </Container>
  );
};

export default WatchListPage;
