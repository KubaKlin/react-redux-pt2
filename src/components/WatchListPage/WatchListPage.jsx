import { useNavigate } from "react-router-dom";
import { Box, Typography, Container, Button, Paper } from '@mui/material';
import { useSelector } from "react-redux";
import { useGetShowsQuery } from '../../store/api';

const WatchListPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const watchedEpisodes = useSelector((state) => state.watchedEpisodes.watchedEpisodes);
  const { data: shows = [] } = useGetShowsQuery();

  // Build a map of showId -> Set of episodeIds
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
        aria-label="Go back to shows list"
      >
        ← Back to Shows
      </Button>
      <Box>
        <Typography variant="h4" sx={{ mb: 2 }}>Your watch list</Typography>
        {watchedShows.length === 0 ? (
          <Typography>No watched shows yet.</Typography>
        ) : (
          watchedShows.map((show) => (
            <Paper key={show.id} sx={{ p: 2, mb: 2, px: 3 }} elevation={2}>
              <Typography variant="h5">{show.name}</Typography>
              <Typography variant="body2">
                Watched episodes: {watchedMap[show.id.toString()].size}
              </Typography>
            </Paper>
          ))
        )}
      </Box>
    </Container>
  );
};

export default WatchListPage;