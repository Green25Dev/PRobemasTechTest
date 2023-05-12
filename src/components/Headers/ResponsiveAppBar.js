import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { useDispatch } from "react-redux"
import { storeCurrency } from "../../store/actions/customerAction"
import CloseIcon from "@mui/icons-material/Close"
import Paper from "@mui/material/Paper"
import MenuList from "@mui/material/MenuList"

const pages = [
  "OSRS Gold",
  "RS3 Gold",
  "Sell RS Gold",
  "OSRS Accounts",
  "Reward Chests",
]

const useStyles = makeStyles((theme) =>
  createStyles({
    select: {
      color: "#FFFFFF !important",
      "&:before": {
        color: "#FFFFFF !important",
        borderBottom: "none !important",
      },
    },
    cus_header_item: {
      color: "#FFFFFF",
    },
    cus_header_btn: {
      my: 2,
      color: "#FFFFFF !important",
      display: "block",
      fontWeight: "14px",
      fontFamily: "Gilroy",
      fontStyle: "normal",
      lineHeight: "17px",
      "&:hover": {
        color: "#E9B109 !important",
      },
    },
    cus_header_back: {
      backgroundImage: "none",
      backgroundColor: "#142241 !important",
      color: "#FAFAFA !important",
      borderBottom: "1px solid rgba(233, 177, 9, 0.75) !important",
      boxShadow: "0px 4px 3px rgba(23, 34, 39, 0.25) !important",
      "&>div": {
        paddingLeft: "70px",
        paddingRight: "70px",
        "@media (max-width: 1204px)": {
          paddingLeft: "20px",
          paddingRight: "20px",
        },
      },
    },
    cus_currency_select: {
      display: "flex",
      marginTop: "8px",
    },
    cus_mobile_header: {
      width: "100%",
      backgroundColor: "#142241 !important",
      color: "#ffffff !important",
      position: "fixed",
      zIndex: 1000,
      top: 0,
      left: 0,
    },
    cus_mobile_menu: {
      "& li": {
        borderTop: "1px solid #ffffff33",
        marginLeft: "20px !important",
        marginRight: "20px !important",
        padding: "10px 0 !important",
        "&:hover": {
          color: "#E9B109 !important",
        },
      },
    },
    cus_mobile_currency_select: {
      "& li": {
        width: "100%",
      },
    },
  }),
)

function ResponsiveAppBar() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [currencySelect, setCurrencySelect] = React.useState(false)
  const [mobileMenu, setMobileMenu] = React.useState([
    "/images/usd.png",
    "USD",
    1,
  ])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const toggleCurrencySelect = () => {
    setCurrencySelect(!currencySelect)
  }

  const handleChangeCurrency = (img, name, value) => {
    setMobileMenu([img, name, value])
    dispatch(storeCurrency(value))
  }

  const handlePCChangeCurrency = (event) => {
    const value = event.target.value
    const arr = value.split("-")
    handleChangeCurrency(
      `/images/${arr[0].toLowerCase()}.png`,
      arr[0],
      parseFloat(arr[1]),
    )
  }

  return (
    <AppBar position="static" className={classes.cus_header_back}>
      <Container maxWidth="xl">
        <Toolbar sx={{ position: "static" }} disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {anchorElNav && (
              <Paper className={classes.cus_mobile_header}>
                <MenuList className={classes.cus_mobile_menu} dense>
                  <MenuItem sx={{ borderTop: "none !important" }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleCloseNavMenu}
                      color="inherit"
                    >
                      <CloseIcon />
                    </IconButton>
                  </MenuItem>
                  {pages.map((page) => (
                    <MenuItem>{page}</MenuItem>
                  ))}
                  <MenuItem onClick={toggleCurrencySelect} value={1}>
                    <div style={{ width: "100%" }}>
                      <div
                        className={classes.cus_currency_select}
                        value={mobileMenu[2]}
                      >
                        <img src={mobileMenu[0]} width="20" height="20" />
                        <Typography
                          sx={{ ml: "8px" }}
                          variant="span"
                          component="span"
                        >
                          {mobileMenu[1]}
                        </Typography>
                      </div>
                      {currencySelect && (
                        <MenuList
                          className={classes.cus_mobile_currency_select}
                        >
                          <MenuItem
                            onClick={() =>
                              handleChangeCurrency("/images/usd.png", "USD", 1)
                            }
                          >
                            <div
                              className={classes.cus_currency_select}
                              value={1}
                            >
                              <img
                                src="/images/usd.png"
                                width="20"
                                height="20"
                              />
                              <Typography
                                sx={{ ml: "8px" }}
                                variant="span"
                                component="span"
                              >
                                USD
                              </Typography>
                            </div>
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              handleChangeCurrency(
                                "/images/eur.png",
                                "EUR",
                                1.2,
                              )
                            }
                          >
                            <div className={classes.cus_currency_select}>
                              <img
                                src="/images/eur.png"
                                width="20"
                                height="20"
                              />
                              <Typography
                                sx={{ ml: "8px" }}
                                variant="span"
                                component="span"
                              >
                                EUR
                              </Typography>
                            </div>
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              handleChangeCurrency(
                                "/images/gbp.png",
                                "GBP",
                                1.5,
                              )
                            }
                          >
                            <div
                              className={classes.cus_currency_select}
                              value={1.5}
                            >
                              <img
                                src="/images/gbp.png"
                                width="20"
                                height="20"
                              />
                              <Typography
                                sx={{ ml: "8px" }}
                                variant="span"
                                component="span"
                              >
                                GBP
                              </Typography>
                            </div>
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              handleChangeCurrency(
                                "/images/aud.png",
                                "AUD",
                                1.8,
                              )
                            }
                          >
                            <div
                              className={classes.cus_currency_select}
                              value={1.8}
                            >
                              <img
                                src="/images/aud.png"
                                width="20"
                                height="20"
                              />
                              <Typography
                                sx={{ ml: "8px" }}
                                variant="span"
                                component="span"
                              >
                                AUD
                              </Typography>
                            </div>
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              handleChangeCurrency(
                                "/images/cad.png",
                                "CAD",
                                2.3,
                              )
                            }
                          >
                            <div
                              className={classes.cus_currency_select}
                              value={2.3}
                            >
                              <img
                                src="/images/cad.png"
                                width="20"
                                height="20"
                              />
                              <Typography
                                sx={{ ml: "8px" }}
                                variant="span"
                                component="span"
                              >
                                CAD
                              </Typography>
                            </div>
                          </MenuItem>
                        </MenuList>
                      )}
                    </div>
                  </MenuItem>
                </MenuList>
              </Paper>
            )}
          </Box>

          <Box sx={{ display: { xs: "flex", lg: "none" }, mr: 5 }}>
            <img src="/images/logo.png" />
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, mr: 5 }}>
            <img src="/images/logo.png" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                className={classes.cus_header_btn}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <FormControl
              variant="standard"
              sx={{ my: 1, mr: 3, minWidth: 120 }}
            >
              <Select
                value={mobileMenu[1] + "-" + mobileMenu[2]}
                onChange={handlePCChangeCurrency}
                className={classes.select}
              >
                <MenuItem value={"USD-1"}>
                  <div className={classes.cus_currency_select}>
                    <img src="/images/usd.png" width="20" height="20" />
                    <Typography
                      sx={{ ml: "8px" }}
                      variant="span"
                      component="span"
                    >
                      USD
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem value={"EUR-1.2"}>
                  <div className={classes.cus_currency_select}>
                    <img src="/images/eur.png" width="20" height="20" />
                    <Typography
                      sx={{ ml: "8px" }}
                      variant="span"
                      component="span"
                    >
                      EUR
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem value={"GBP-1.5"}>
                  <div className={classes.cus_currency_select}>
                    <img src="/images/gbp.png" width="20" height="20" />
                    <Typography
                      sx={{ ml: "8px" }}
                      variant="span"
                      component="span"
                    >
                      GBP
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem value={"AUD-1.8"}>
                  <div className={classes.cus_currency_select}>
                    <img src="/images/aud.png" width="20" height="20" />
                    <Typography
                      sx={{ ml: "8px" }}
                      variant="span"
                      component="span"
                    >
                      AUD
                    </Typography>
                  </div>
                </MenuItem>
                <MenuItem value={"CAD-2.3"}>
                  <div className={classes.cus_currency_select}>
                    <img src="/images/cad.png" width="20" height="20" />
                    <Typography
                      sx={{ ml: "8px" }}
                      variant="span"
                      component="span"
                    >
                      CAD
                    </Typography>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{
                my: 2,
                mr: 2,
                color: "#FAFAFA",
                display: "block",
                fontWeight: "14px",
                fontFamily: "Gilroy",
                fontStyle: "normal",
                lineHeight: "17px",
              }}
            >
              Sign Up
            </Button>
          </Box>

          <Box>
            <Button
              variant="contained"
              color="warning"
              sx={{ backgroundColor: "#E9B109", color: "#142241" }}
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
