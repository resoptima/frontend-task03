import Grid from "@mui/material/Grid";
import { Movie } from "../types";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";

export const MoviesItem = ({ data }: { data: Movie }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      lg={3}
      key={data.id}
      sx={{
        padding: 4,
      }}
    >
      <Paper
        sx={{
          width: 213,
          height: 255,
          backgroundColor: "#fff",
          margin: "auto",
        }}
      >
        <Grid>
          <Box
            sx={{
              width: 213,
              height: 160,
              alignSelf: "center",
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                width: 213,
                height: 160,
                backgroundColor: "#ebecee",
                textAlign: "center",
                display: "block",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px 10px 0 0",
              }}
              src={data.coverImage}
              alt={data.title}
            />
          </Box>
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            padding: 1,
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: 12,
              display: "block",
            }}
          >
            {data.title.length > 80
              ? data.title.substring(0, 80) + "..."
              : data.title}
          </Box>
          <Box
            sx={{
              fontSize: 12,
              textAlign: "left",
            }}
          >
            {data.description.length > 80
              ? data.description.substring(0, 80) + "..."
              : data.description}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 1,
              fontSize: 12,
            }}
          >
            <Box
              sx={{
                fontSize: 12,
              }}
            >
              Dir.
              {data.director.length > 23
                ? data.director.substring(0, 23) + "..."
                : data.director}
            </Box>
            <Box>{data.year}</Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default MoviesItem;
