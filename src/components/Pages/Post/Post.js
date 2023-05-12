import React from "react"
import { Box, TextField } from "@mui/material"
import MainLayout from "../../MainLayout"
import { useSelector } from "react-redux"

function Post() {
  const [amount, setAmount] = React.useState(0)
  const { currency } = useSelector(({ customerStore }) => customerStore)

  return (
    <MainLayout>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          pt: "50px",
          display: "flex",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value)
          }}
          variant="outlined"
          label="Amount"
        />
        <TextField
          value={currency * Number(amount)}
          label="Price"
          variant="outlined"
          disabled
        />
      </Box>
    </MainLayout>
  )
}

export default Post
