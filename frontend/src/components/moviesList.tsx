import Grid from "@mui/material/Grid";
import { MoviesItem } from "./moviesItem";
import { Movie } from "../types";
import { Box } from "@mui/system";

export const MoviesList = ({ data = [] }: { data: Movie[] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 1160,
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto",
          columnGap: "25px",
        }}
      >
        <Grid container>
          {data.map((dat) => (
            <MoviesItem data={dat} key={dat.id} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MoviesList;
