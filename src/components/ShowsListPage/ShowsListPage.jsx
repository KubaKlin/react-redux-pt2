import { useGetShowsQuery } from '../../store/api';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ShowsListPage = () => {
  const { data: tvShows = [] } = useGetShowsQuery();

  return (
    <Container maxWidth="md">
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
    </Container>
  );
};

export default ShowsListPage;
