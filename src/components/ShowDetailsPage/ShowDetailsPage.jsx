import { useGetSingleShowQuery } from '../../store/api';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Container,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ShowEpisodes from "./ShowEpisodes";

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
            ← Back
          </Button>
          <Box sx={{ mt: 1, display: 'flex', gap: 1}}>
            <Box sx={{ minWidth: '200px', marginRight: 3 }}>
              {tvShow.image && (
                <CardMedia
                  component="img"
                  image={tvShow.image.medium}
                  alt={`${tvShow.name} poster`}
                  sx={{ borderRadius: 1 }}
                />
              )}
            </Box>
            <Box sx={{ marginTop: 1 }}>
              <Typography variant="h4">
                {tvShow.name}
              </Typography>
              <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
              >
                Status: {tvShow.status}
              </Typography>
              <Box sx={{ mb: 2 }}>
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

              <Box sx={{ mt: 1, display: 'flex', gap: 4, alignItems: 'center'}}>
                <Box item xs={6} sm={3}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Language
                  </Typography>
                  <Typography variant="body1">{tvShow.language}</Typography>
                </Box>
                <Box item xs={6} sm={3}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Premiered
                  </Typography>
                  <Typography variant="body1">{tvShow.premiered}</Typography>
                </Box>
                <Box item xs={6} sm={3}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Rating
                  </Typography>
                  <Typography variant="body1">
                    {tvShow.rating?.average || 'N/A'}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h5" mt={4}>
                Episodes
              </Typography>
              <ShowEpisodes />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ShowDetailsPage;
