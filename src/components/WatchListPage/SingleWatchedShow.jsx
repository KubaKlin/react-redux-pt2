import { useGetSingleShowEpisodesQuery } from '../../store/api';
import { Box, Button, LinearProgress, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectShowRating } from "../../store/showRatingSlice";

const SingleWatchedShow = ({ show, watchedCount }) => {
  const { data: episodes = [] } = useGetSingleShowEpisodesQuery(show.id);
  const totalEpisodes = episodes.length;
  const progress = (watchedCount / totalEpisodes) * 100;
  const userRating = useSelector((state) => selectShowRating(state, show.id));

  return (
    <Paper
      key={show.id}
      sx={{
        p: 2,
        mb: 2,
        px: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      elevation={4}
    >
      <Box sx={{ flex: 1, mr: 2 }}>
        <Typography variant="h5">{show.name}</Typography>
      </Box>
      {userRating && (
        <Typography variant="body2" color="text.secondary">
          ({userRating}/10)
        </Typography>
      )}
      <Box sx={{ mr: 4, mt: 0.5 }}>
        <LinearProgress
          variant="buffer"
          value={progress}
          sx={{ height: 12, borderRadius: 1, mb: 0.5 }}
        />
        <Typography variant="caption">
          {watchedCount} of {totalEpisodes} episodes watched
        </Typography>
      </Box>
      <Button
        component={Link}
        to={`/show/${show.id}`}
        variant="contained"
        color="primary"
        aria-label={`View details for ${show.name}`}
      >
        View Details
      </Button>
    </Paper>
  );
};

export default SingleWatchedShow;
