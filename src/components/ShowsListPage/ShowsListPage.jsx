import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from "../SearchBar/SearchBar";
import useShowsList from "../../hooks/useShowSearch";

const ShowsListPage = () => {

  const { tvShows } = useShowsList();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        TvShows
      </Typography>
      <SearchBar />
      {tvShows.map((show) => (
        <Box 
          key={show.id}
          sx={{ 
            p: 3, 
            px: 2, 
            borderBottom: '1px solid #e3e3e3', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            transition: 'background-color 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              cursor: 'pointer'
            }
          }}
        >
          <Box>
            <Typography variant="h5">
              {show.name}
            </Typography>
            <Typography variant="subtitle2">
              {show.premiered}
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
        </Box>
      ))}
    </Container>
  );
};

export default ShowsListPage;
