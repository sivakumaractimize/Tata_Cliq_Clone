import * as React from 'react';
import { useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tabs from '@mui/material/Tabs';

import { createTheme } from '@mui/material/styles';
import { Paper, MenuList, ListItemIcon, ListItemText, Popover, Button, List, ListItem, ListItemButton, Divider } from '@mui/material';
import ContentCut from '@mui/icons-material/ContentCut';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import VerticalTabs from './BasicTabs';
const theme = createTheme();
const SearchIconWrapper = styled('div')(({ theme }) => ({
    width: theme.spacing(7),
    height: '90%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    height: '40px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const customTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            '320': 320,
            '375': 375,
            '425': 425,
        },
    },
});

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [customTheme.breakpoints.up('320')]: {
            width: '17ch', // Custom width for 320px
        },
        [customTheme.breakpoints.up('375')]: {
            width: '25ch',
        },
        [customTheme.breakpoints.up('425')]: {
            width: '30ch',
        },
        [theme.breakpoints.up('sm')]: {
            width: '53ch',
        },
        [theme.breakpoints.up('md')]: {
            width: '42ch',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50ch',
        },
        [theme.breakpoints.up('xl')]: {
            width: '50ch',
        },
    },
}));
const Appbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const anchorRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
    const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);

    const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const handleToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setMobileMenuOpen(false);
    };

    const handleCategoriesClick = (event) => {
        setAnchorEl(event.currentTarget);
        setCategoriesMenuOpen(true);
    };

    const handleCategoriesClose = () => {
        setAnchorEl(null);
        setCategoriesMenuOpen(false);
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handlePopoverOpen = (event) => {
        setPopoverAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setPopoverAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={10} sx={{ display: 'flex' }}>
                    <Grid xs={2} sx={{ display: { xs: "none", md: "flex" }, mt: 2 }}>
                        <img src="/Assets/Images/logo.png" alt="Tata Cliq Logo" style={{ height: '50px' }} />
                    </Grid>
                    <Grid item xs={10} sx={{ display: 'block', justifyContent: "center", mt: 3 }}>
                        <Grid sx={{ display: "flex" }}>
                            {!isMobileView && (
                                <Grid>
                                    <Typography sx={{ color: "white", mx: 2, fontSize: { md: "12px", lg: '15px', xl: '15px' }, whiteSpace: "nowrap" }}>Tata CLIQ Luxury</Typography>
                                </Grid>
                            )}
                            {!isMobileView && (
                                <Grid sx={{ display: "flex", ml: { md: 20, lg: 40 } }}>
                                    <Typography sx={{ color: "white", mx: 2, fontSize: { md: "12px", lg: '15px', xl: '15 px' }, whiteSpace: "nowrap" }}>CLIQ Cash</Typography>
                                    <Typography sx={{ color: "white", mx: 2, fontSize: { md: "12px", lg: '15px', xl: '15 px' }, whiteSpace: "nowrap" }}>Gift Card</Typography>
                                    <Typography sx={{ color: "white", mx: 2, fontSize: { md: "12px", lg: '15px', xl: '15 px' }, whiteSpace: "nowrap" }}>CLIQ Care</Typography>
                                    <Typography sx={{ color: "white", mx: 2, fontSize: { md: "12px", lg: '15px', xl: '15px' }, whiteSpace: "nowrap" }}>Track Orders</Typography>
                                    <Typography
                                        sx={{ color: "white", mx: 2, fontSize: { md: "12px", lg: '15px', xl: '15px' }, whiteSpace: "nowrap", cursor: 'pointer' }}
                                        onClick={handlePopoverOpen}
                                    >
                                        Sign in / Sign Up
                                    </Typography>
                                    <Popover
                                        open={Boolean(popoverAnchorEl)}
                                        anchorEl={popoverAnchorEl}
                                        onClose={handlePopoverClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Paper>
                                            <MenuList>
                                                <MenuItem>
                                                    <Button variant="contained" sx={{ backgroundColor: "red" }} >login/signup</Button>
                                                </MenuItem>
                                                <MenuItem>
                                                    <AccountCircleOutlinedIcon>
                                                        <ContentCut fontSize="small" />
                                                    </AccountCircleOutlinedIcon>

                                                    <ListItemText sx={{ ml: 2 }}>My account</ListItemText>
                                                </MenuItem>
                                                <MenuItem>
                                                    <LocalMallOutlinedIcon></LocalMallOutlinedIcon>

                                                    <ListItemText sx={{ ml: 2 }}>Order History</ListItemText>
                                                </MenuItem>
                                                <MenuItem>
                                                    <FavoriteBorderTwoToneIcon></FavoriteBorderTwoToneIcon>

                                                    <ListItemText sx={{ ml: 2 }}>My WishList</ListItemText>
                                                </MenuItem>
                                                <MenuItem>
                                                    <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>

                                                    <ListItemText sx={{ ml: 2 }}>Alerts & Coupons</ListItemText>
                                                </MenuItem>
                                                <MenuItem>
                                                    <CardGiftcardOutlinedIcon></CardGiftcardOutlinedIcon>

                                                    <ListItemText sx={{ ml: 2 }}>Gift card</ListItemText>
                                                </MenuItem>
                                                <MenuItem>
                                                    <AccountBalanceWalletTwoToneIcon></AccountBalanceWalletTwoToneIcon>

                                                    <ListItemText sx={{ ml: 2 }}>CLIQ Cash</ListItemText>
                                                </MenuItem>

                                            </MenuList>
                                        </Paper>
                                    </Popover>
                                </Grid>
                            )}
                        </Grid>
                        <Grid sx={{ display: "flex" }}>
                            {isMobileView && (
                                <IconButton
                                    size="large"
                                    aria-label="menu"
                                    color="inherit"
                                    onClick={handleToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                            {isMobileView ? (
                                <Menu
                                    id="mobile-menu"
                                    anchorEl={anchorEl}
                                    open={mobileMenuOpen}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Categories</MenuItem>
                                    <MenuItem onClick={handleClose}>Brands</MenuItem>
                                </Menu>
                            ) : (
                                <>
                                    <Typography

                                        sx={{
                                            color: "white", mx: 2, fontSize: { md: "12px", lg: '15px', xl: '15 px' }, display: 'flex', alignItems: 'center', cursor: 'pointer',

                                            cursor: 'pointer',
                                            '&:hover': {
                                                backgroundColor: 'white', 
                                                color: 'black', 
                                            }



                                        }}
                                        onMouseEnter={handleCategoriesClick}



                                    >
                                        Categories
                                        <ArrowDropDownIcon sx={{ color: "white" }} />
                                    </Typography>
                                    <Menu
                                        id="categories-menu"
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleCategoriesClose}
                                        MenuListProps={{ onMouseLeave: handleCategoriesClose }}
                                    >
                                        <Grid container>
                                            <VerticalTabs />
                                        </Grid>
                                    </Menu>
                                    <Typography
                                        sx={{ color: "white", mx: 2, fontSize: '0.875rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}

                                    >
                                        Brands
                                        <ArrowDropDownIcon sx={{ color: "white" }} />
                                    </Typography>
                                </>
                            )}
                            <Search sx={{ mx: 2 }}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search for Products"
                                    inputProps={{ 'aria-label': 'search' }}
                                    sx={{ fontSize: { xs: "8px", sm: "15px", md: "15px", lg: '20px', xl: '17 px' } }}


                                />
                            </Search>
                            <Grid item xs={12} sm={4} xl={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <IconButton
                                    size="large"
                                    aria-label="wishlist"
                                    color="inherit"
                                >
                                    <FavoriteBorderTwoToneIcon />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="shopping cart"
                                    color="inherit"
                                >
                                    <ShoppingCartIcon />
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Appbar;
