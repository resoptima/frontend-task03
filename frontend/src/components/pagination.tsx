import React from "react";
import { NavigateNext, NavigateBefore, FirstPage } from "@mui/icons-material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

interface ToggleProps {
  currentPage: number;
  previousPage: any;
  nextPage: any;
  firstPage: any;
}

export const Pagination: React.FunctionComponent<ToggleProps> = ({
  currentPage,
  previousPage,
  nextPage,
  firstPage,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {currentPage !== 0 && (
        <>
          <Button
            onClick={() => firstPage()}
            sx={{
              color: "#1976d2",
              border: "none",
              marginLeft: 2,
              background: "none",
              borderRadius: 20,
              height: 60,
              width: 60,
            }}
          >
            <FirstPage />
          </Button>
          <Button
            onClick={() => previousPage()}
            sx={{
              color: "#1976d2",
              border: "none",
              marginLeft: 5,
              background: "none",
              borderRadius: 20,
              height: 60,
              width: 60,
            }}
          >
            <NavigateBefore />
          </Button>
        </>
      )}
      <Box
        sx={{
          color: "#1976d2",
          marginLeft: 2,
        }}
      >
        {currentPage + 1}
      </Box>
      {currentPage <= 83 && (
        <Button
          onClick={() => nextPage()}
          sx={{
            color: "#1976d2",
            border: "none",
            marginLeft: 2,
            background: "none",
            borderRadius: 20,
            height: 60,
            width: 60,
          }}
        >
          <NavigateNext />
        </Button>
      )}
    </Box>
  );
};

export default Pagination;
