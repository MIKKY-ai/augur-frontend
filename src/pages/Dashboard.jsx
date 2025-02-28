import { Grid, Container } from "@mui/material";
import DistributorCard from "../components/DistributorCard";
import { distributors } from "../data/mockData";

const Dashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {distributors.map((dist, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <DistributorCard {...dist} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
