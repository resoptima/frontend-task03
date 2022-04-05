import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface ToggleProps {
  searchMovies: any;
}

export const Header: React.FunctionComponent<ToggleProps> = ({
  searchMovies,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = () => {
    searchInput && searchMovies(searchInput);
  };

  const handleClear = () => {
    searchMovies("");
    setSearchInput("");
  };

  const onEnterKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ecf0f1",
        }}
      >
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#1976d2",
            fontSize: 16,
            paddingRight: 2,
            "@media (max-width:780px)": {
              display: "none",
            },
          }}
        >
          Movie Catalog Explorer
        </Typography>

        <Box
          sx={{
            width: 200,
          }}
        >
          <TextField
            label="Search"
            variant="standard"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={onEnterKeyDown}
          />
        </Box>
        <Box
          sx={{
            width: 310,
          }}
        >
          {searchInput && (
            <Button
              onClick={() => handleClear()}
              sx={{
                color: "#1976d2",
                border: "none",
                marginLeft: 5,
                background: "none",
              }}
            >
              <ClearIcon />
            </Button>
          )}
          <Button
            onClick={() => handleSubmit()}
            sx={{
              color: "#1976d2",
              border: "none",
              marginLeft: 5,
              background: "none",
            }}
          >
            <SearchIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
