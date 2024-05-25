import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

function App() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleUrlSubmission = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.get(url);
      setStatus(response.data.status);
    } catch (error) {
      setStatus("Error checking URL");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        width: "60%",
      }}
    >
      <Typography variant="h1" textAlign="center">
        Enter a website URL to check the current status
      </Typography>

      <Box
        component="form"
        onSubmit={handleUrlSubmission}
        sx={{ display: "flex", flexDirection: "column", width: "30%" }}
      >
        <TextField
          id="url-input-field"
          label="Enter URL"
          placeholder="www.mywebsite.com"
          autoFocus
          value={url}
          onChange={handleUrlChange}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
        >
          Check Status
        </Button>
      </Box>

      {status && (
        <Typography variant="h6" textAlign="center" sx={{ marginTop: "1rem" }}>
          Status: {status}
        </Typography>
      )}
    </Box>
  );
}

export default App;
