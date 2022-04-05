import { Box } from "@mui/system";

export const Loading = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: 0,
        color: "#1976d2",
      }}
    >
      Loading
    </Box>
  );
};

export default Loading;
