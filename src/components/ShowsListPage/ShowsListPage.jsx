import { useGetShowsQuery } from '../../store/api';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ShowsListPage = () => {
  const { data: tvShows = [] } = useGetShowsQuery();

  return (
    <Box sx={{ p: 3 }}>
      {tvShows.map((show) => (
        <Card key={show.id} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {show.name}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Average runtime: {show.averageRuntime} minutes
            </Typography>
            <Button
              component={Link}
              to={`/show/${show.id}`}
              variant="contained"
              color="primary"
              aria-label={`View details for ${show.name}`}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ShowsListPage;
