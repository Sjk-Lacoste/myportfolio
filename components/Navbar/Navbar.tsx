import { FunctionComponent, useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";
import Image from "next/image";
import { MenuItems } from "./MenuItems";
import { generateId } from "../../lib/helpers/generateId";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar: FunctionComponent = () => {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (pageUrl: string) => {
    router.push(pageUrl);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          className="header_area"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <div className="grad-bar" />
          <Toolbar className="main_menu">
            <Typography variant="h6" className={classes.title}>
              SjkFolio
            </Typography>

            <div>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                    style={{ marginTop: "40px" }}
                  >
                    {MenuItems.map((item) => {
                      return (
                        <MenuItem
                          key={generateId()}
                          onClick={() => handleMenuClick(item.url)}
                          className={
                            router.route === item.url ? `${item.cName} active` : item.cName
                          }
                        >
                          {item.title}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </>
              ) : (
                <>
                  <div className="nav">
                    {MenuItems.map((item) => {
                      return (
                        <Button
                          key={generateId()}
                          color="inherit"
                          onClick={() => handleMenuClick(item.url)}
                          className={
                            router.route === item.url ? `${item.cName} active` : item.cName
                          }
                        >
                          {item.title}
                        </Button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;