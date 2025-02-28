import { Card, CardContent, Typography } from "@mui/material";

const DistributorCard = ({ name, lastMonth, forecastNextMonth, ytdAvg }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography>📦 Last Month: {lastMonth} units</Typography>
        <Typography>📊 Forecast: {forecastNextMonth} units</Typography>
        <Typography>📈 YTD Average: {ytdAvg} units</Typography>
      </CardContent>
    </Card>
  );
};

export default DistributorCard;
