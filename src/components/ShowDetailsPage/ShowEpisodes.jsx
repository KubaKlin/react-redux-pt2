import { Box, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import { useGetSingleShowEpisodesQuery } from "../../store/api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toggleWatched } from '../../store/episodeWatchedSlice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ShowEpisodes = () => {
  const { id } = useParams();
  const { data: showEpisodes = [] } = useGetSingleShowEpisodesQuery(id);
  const dispatch = useDispatch();
  const watchedEpisodes = useSelector((state) => state.watchedEpisodes.watchedEpisodes);

  const handleToggleWatched = (episodeId) => {
    dispatch(toggleWatched({ showId: id, episodeId }));
  };

  const isEpisodeWatched = (episodeId) => {
    return watchedEpisodes.includes(`${id}-${episodeId}`);
  };

  console.log(watchedEpisodes);

  return (
    <Box>
      {showEpisodes.map((episode) => (
        <Box style={{ borderBottom: '1px solid #e3e3e3' }} key={episode.id} sx={{ mb: 2 }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                {episode.name}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>
                Season {episode.season}, Episode {episode.number}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {episode.summary?.replace(/<[^>]*>/g, '')}
              </Typography>
            </Box>
            <Tooltip title={isEpisodeWatched(episode.id) ? "Mark as unwatched" : "Mark as watched"}>
              <IconButton 
                onClick={() => handleToggleWatched(episode.id)}
                color={isEpisodeWatched(episode.id) ? "primary" : "default"}
                aria-label={isEpisodeWatched(episode.id) ? "Mark as unwatched" : "Mark as watched"}
              >
                {isEpisodeWatched(episode.id) ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
              </IconButton>
            </Tooltip>
          </CardContent>
        </Box>
      ))}
    </Box>
  );
};

export default ShowEpisodes;