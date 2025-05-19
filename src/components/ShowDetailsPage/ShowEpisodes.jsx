import { Box, CardContent, Typography } from '@mui/material';
import { useGetSingleShowEpisodesQuery } from "../../store/api";
import { useParams } from "react-router-dom";

const ShowEpisodes = () => {
  const { id } = useParams();
  const { data: showEpisodes = [] } = useGetSingleShowEpisodesQuery(id);
  
  return (
    <Box>
      {showEpisodes.map((episode) => (
        <Box style={{ borderBottom: '1px solid #e3e3e3' }} key={episode.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {episode.name}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 1 }}>
              Season {episode.season}, Episode {episode.number}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {episode.summary?.replace(/<[^>]*>/g, '')}
            </Typography>
          </CardContent>
        </Box>
      ))}
    </Box>
  );
};

export default ShowEpisodes;