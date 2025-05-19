import { useGetSingleShowQuery } from '../../store/api';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Button,
  Container,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const ShowDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: tvShow = {} } = useGetSingleShowQuery(id);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="lg">
      <Card>
        <CardContent>
          <Button
            variant="outlined"
            onClick={handleBackClick}
            sx={{ mb: 3 }}
            aria-label="Go back to shows list"
          >
            ← Back to Shows
          </Button>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Typography variant="h4" gutterBottom>
                {tvShow.name}
              </Typography>
              {tvShow.image && (
                <CardMedia
                  component="img"
                  image={tvShow.image.medium}
                  alt={`${tvShow.name} poster`}
                  sx={{ borderRadius: 1 }}
                />
              )}
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  Status: {tvShow.status} • {tvShow.averageRuntime} minutes per
                  episode
                </Typography>
                {tvShow.genres && (
                  <Box sx={{ mb: 2 }}>
                    {tvShow.genres.map((genre) => (
                      <Chip
                        key={genre}
                        label={genre}
                        sx={{ mr: 1, mb: 1 }}
                        size="small"
                      />
                    ))}
                  </Box>
                )}
              </Box>

              <Typography
                variant="body1"
                sx={{ mb: 3 }}
                dangerouslySetInnerHTML={{ __html: tvShow.summary }}
              />

              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Language
                  </Typography>
                  <Typography variant="body1">{tvShow.language}</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Premiered
                  </Typography>
                  <Typography variant="body1">{tvShow.premiered}</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Rating
                  </Typography>
                  <Typography variant="body1">
                    {tvShow.rating?.average || 'N/A'}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ShowDetailsPage;
