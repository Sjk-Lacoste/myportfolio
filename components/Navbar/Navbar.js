import { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";
import Image from "next/image";
import HideOnScroll from "./HideOnScroll";
import { MenuItems } from "./MenuItems";
import { generateId } from "../../lib/helpers/generateId";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sectionDesktop: {
    color: "white",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    color: "white",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const router = useRouter();

  const mobileMenuId = "menu-mobile";

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    router.push(pageUrl);
  };

  const renderMobileMenu = (
    <>
      <Menu
        id={mobileMenuId}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        anchorEl={anchorEl}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={() => setAnchorEl(null)}
        style={{ marginTop: "40px" }}
      >
        {MenuItems.map((item) => {
          return (
            <MenuItem
              key={generateId()}
              className={item.cName}
              onClick={() => handleMenuClick(item.url)}
            >
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );

  return (
    <div className="nav-wrapper">
      <div className="grad-bar"></div>
      <>
        <HideOnScroll>
          <AppBar position="fixed">
            <Toolbar>
              <Link href="/">
                <IconButton color="inherit">
                  <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    quality="100"
                    alt="Tshepo Mohlatlole"
                  />
                </IconButton>
              </Link>

              <div className={classes.sectionDesktop}>
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
                  onClose={() => setAnchorEl(null)}
                  style={{ marginTop: "40px" }}
                >
                  {MenuItems.map((item) => {
                    return (
                      <MenuItem
                        key={generateId()}
                        className={item.cName}
                        onClick={() => handleMenuClick(item.url)}
                      >
                        {item.title}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>

              <div className={classes.sectionMobile}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </>

      {renderMobileMenu}
      <Toolbar />
    </div>
  );
};

export default Navbar;
// import React, { Component } from "react";
// import { Container, Link, Typography } from "@material-ui/core";

// class Navbar extends Component {
//   render() {
//     return (
//       <>
//         <div className="nav-wrapper">
//           <div className="grad-bar"></div>
//           <nav className="navbar">
//             <Container maxWidth="lg">
//               <img className="logo" src="/logo.png" alt="Tshepo Mohlatlole" />

//               <div className="menu-toggle">
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//               </div>

//               <ul className="nav no-search">
//                 {MenuItems.map((item) => {
//                   return (
//                     <li key={generateId()} className={item.cName}>
//                       <Link href={item.url}>{item.title}</Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </Container>
//           </nav>
//         </div>
//       </>
//     );
//   }
// }

// export default Navbar;
