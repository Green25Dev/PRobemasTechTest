import React from "react"
import {
  Stack,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
  CardMedia,
  CardContent,
} from "@mui/material"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack"
import MainLayout from "../../MainLayout"

function Post() {
  const [postStatus, setPostStatus] = React.useState("Public")

  return (
    <MainLayout>
      <Box
        sx={{
          pt: 10,
          pb: 10,
        }}
      >
        <Container maxWidth={"md"}></Container>
      </Box>
    </MainLayout>
  )
}

export default Post
