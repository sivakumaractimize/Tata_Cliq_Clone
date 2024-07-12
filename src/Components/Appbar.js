import React, { useState, useEffect, useCallback } from 'react';
import Imports from './Imports';
import TemporaryDrawer from './SideDrawer';

const Navbar = React.memo(() => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [hoverEffect, setHoverEffect] = useState(false);
  const [hoverEffectBrands, setHoverEffectBrands] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const [count, setCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [open, setOpen] = useState(false);

  const name = localStorage.getItem('firstName');
  const token = localStorage.getItem('token');

  const isMobileView = Imports.useMediaQuery((theme) => theme.breakpoints.down('md'));
  const navigate = Imports.useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const handleCategoriesClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
    setHoverEffect(true);
  }, []);

  const handleCategoriesClose = useCallback(() => {
    setAnchorEl(null);
    setHoverEffect(false);
  }, []);

  const handleBrandsClick = useCallback((event) => {
    setAnchorE2(event.currentTarget);
    setHoverEffectBrands(true);
  }, []);

  const handleBrandsClose = useCallback(() => {
    setAnchorE2(null);
    setHoverEffectBrands(false);
  }, []);

  const handlePopoverOpen = useCallback((event) => {
    setPopoverAnchorEl(event.currentTarget);
  }, []);

  const handlePopoverClose = useCallback(() => {
    setPopoverAnchorEl(null);
  }, []);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const [wishlistData, productsData] = await Promise.all([
          Imports.getwishlistProducts(),
          Imports.getAddtobagproducts(),
        ]);

        setCount(wishlistData.length);
        setProductCount(productsData.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApiData();
  }, []);

  const handleLoginClick = useCallback(() => {
    setOpen(true);
    setPopoverAnchorEl(null);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    setPopoverAnchorEl(null);
  }, []);

  const renderMenuItems = useCallback(() => (
    <>
      {!token ? (
        <Imports.Button
          variant="contained"
          sx={{ backgroundColor: 'red', borderRadius: '100px', ml: 2 }}
          onClick={handleLoginClick}
        >
          login/signup
        </Imports.Button>
      ) : null}

      <Imports.MenuItem onClick={() => token && navigate('/myaccount')}>
        <Imports.AccountCircleOutlinedIcon />
        <Imports.Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>My account</Imports.Typography>
      </Imports.MenuItem>

      <Imports.MenuItem>
        <Imports.LocalMallOutlinedIcon />
        <Imports.Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>Order History</Imports.Typography>
      </Imports.MenuItem>
      <Imports.MenuItem>
        <Imports.FavoriteBorderTwoToneIcon />
        <Imports.Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>My WishList</Imports.Typography>
      </Imports.MenuItem>
      <Imports.MenuItem>
        <Imports.NotificationsNoneOutlinedIcon />
        <Imports.Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>Alerts & Coupons</Imports.Typography>
      </Imports.MenuItem>
      <Imports.MenuItem>
        <Imports.CardGiftcardOutlinedIcon />
        <Imports.Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>Gift card</Imports.Typography>
      </Imports.MenuItem>
      <Imports.MenuItem>
        <Imports.AccountBalanceWalletTwoToneIcon />
        <Imports.Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>CLIQ Cash</Imports.Typography>
      </Imports.MenuItem>
      {token && (
        <Imports.MenuItem onClick={handleLogout}>
          <Imports.LogoutIcon />
          <Imports.Typography sx={{ ml: 2, fontSize: '13px', fontWeight: '300' }}>Logout</Imports.Typography>
        </Imports.MenuItem>
      )}
    </>
  ), [token, handleLoginClick, navigate, handleLogout]);

  return (
    <Imports.AppBar position="sticky">
      <Imports.Grid container sx={{ justifyContent: 'center', backgroundColor: 'black', m: 0, p: 0 }}>
        <Imports.Grid item xs={12} sm={10} sx={{ display: 'flex', p: 0 }}>
          <Imports.Grid item xs={2} sx={{ display: { xs: 'none', md: 'flex' }, mt: 3, ml: 5 }}>
            <Imports.Link to="/">
              <img src="/Assets/Images/logo.png" alt="Tata Cliq Logo" style={{ height: '40px' }} />
            </Imports.Link>
          </Imports.Grid>
          <Imports.Grid item xs={10} sx={{ display: 'block', justifyContent: 'center', mt: 3 }}>
            <Imports.Grid sx={{ display: 'flex' }}>
              {!isMobileView && (
                <>
                  <Imports.Grid>
                    <Imports.Typography
                      sx={{
                        color: 'white',
                        mx: 2,
                        fontSize: { md: '12px', lg: '14px', xl: '12px' },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Tata CLIQ Luxury
                    </Imports.Typography>
                  </Imports.Grid>
                  <Imports.Grid sx={{ display: 'flex', ml: { md: 20, lg: 55 } }}>
                    <Imports.Typography
                      sx={{
                        color: 'white',
                        mx: 2,
                        fontSize: { md: '12px', lg: '14px', xl: '12px' },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      CLIQ Cash
                    </Imports.Typography>
                    <Imports.Typography
                      sx={{
                        color: 'white',
                        mx: 2,
                        fontSize: { md: '12px', lg: '14px', xl: '12px' },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Gift Card
                    </Imports.Typography>
                    <Imports.Typography
                      sx={{
                        color: 'white',
                        mx: 2,
                        fontSize: { md: '12px', lg: '14px', xl: '12px' },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      CLIQ Care
                    </Imports.Typography>
                    <Imports.Typography
                      sx={{
                        color: 'white',
                        mx: 2,
                        fontSize: { md: '12px', lg: '14px', xl: '12px' },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Track Orders
                    </Imports.Typography>
                    {!token ? (
                      <Imports.Typography
                        sx={{
                          color: 'white',
                          mx: 2,
                          fontSize: { md: '12px', lg: '14px', xl: '12px' },
                          whiteSpace: 'nowrap',
                          cursor: 'pointer',
                        }}
                        onClick={handlePopoverOpen}
                      >
                        Sign in / Sign Up
                      </Imports.Typography>
                    ) : (
                      <>
                        <Imports.AccountCircleOutlinedIcon sx={{ fontSize: { md: '15px', lg: '17px', xl: '19px' } }} />
                        <Imports.Typography
                          onClick={handlePopoverOpen}
                          sx={{ cursor: 'pointer', ml: 2, fontSize: { md: '12px', lg: '14px', xl: '12px' }, whiteSpace: 'nowrap' }}
                        >
                          {name}
                        </Imports.Typography>
                        <Imports.KeyboardArrowDownOutlinedIcon />
                      </>
                    )}
                    <Imports.Popover
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
                      <Imports.Paper>
                        <Imports.MenuList>
                          {renderMenuItems()}
                        </Imports.MenuList>
                      </Imports.Paper>
                    </Imports.Popover>
                  </Imports.Grid>
                </>
              )}
            </Imports.Grid>
            <Imports.Grid sx={{ display: 'flex' }}>
              {isMobileView && (
                <Imports.IconButton size="large" aria-label="menu" color="inherit">
                  <Imports.MenuIcon onClick={toggleDrawer(true)} />
                </Imports.IconButton>
              )}
              {isMobileView ? (
                <TemporaryDrawer
                  token={token}
                  handleLoginClick={handleLoginClick}
                  handleLogout={handleLogout}
                  open={drawerOpen}
                  toggleDrawer={toggleDrawer}
                />
              ) : (
                <>
                  <Imports.Typography
                    sx={{
                      color: hoverEffect ? 'black' : 'white',
                      mx: 2,
                      ml: 2,
                      fontSize: { md: '12px', lg: '14px', xl: '12px' },
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0px 10px',
                      cursor: 'pointer',
                      backgroundColor: hoverEffect ? 'white' : 'black',
                      fontWeight: 'bold',
                    }}
                    onMouseEnter={handleCategoriesClick}
                  >
                    Categories
                    <Imports.ArrowDropDownIcon sx={{ color: 'white' }} />
                  </Imports.Typography>
                  <Imports.Menu
                    id="categories-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCategoriesClose}
                    MenuListProps={{ onMouseLeave: handleCategoriesClose }}
                  >
                    <Imports.Grid container>
                      <Imports.VerticalTabs />
                    </Imports.Grid>
                  </Imports.Menu>
                  <Imports.Typography
                    sx={{
                      color: hoverEffectBrands ? 'black' : 'white',
                      mx: 2,
                      fontSize: { md: '12px', lg: '14px', xl: '12px' },
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0px 10px',
                      cursor: 'pointer',
                      backgroundColor: hoverEffectBrands ? 'white' : 'black',
                      fontWeight: 'bold',
                    }}
                    onMouseEnter={handleBrandsClick}
                  >
                    Brands
                    <Imports.ArrowDropDownIcon sx={{ color: 'white' }} />
                  </Imports.Typography>
                  <Imports.Menu
                    id="brands-menu"
                    anchorEl={anchorE2}
                    open={Boolean(anchorE2)}
                    onClose={handleBrandsClose}
                    MenuListProps={{ onMouseLeave: handleBrandsClose }}
                    sx={{ position: 'absolute', left: '-135px' }}
                  >
                    <Imports.Grid container>
                      <Imports.BrandTabs />
                    </Imports.Grid>
                  </Imports.Menu>
                </>
              )}
              <Imports.SearchComponent />
              <Imports.Grid item xs={12} sm={4} xl={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Imports.IconButton size="large" aria-label="wishlist" color="inherit">
                  <Imports.Badge color="error" badgeContent={count}>
                    <Imports.FavoriteBorderTwoToneIcon onClick={() => navigate('/wishlistpage')} />
                  </Imports.Badge>
                </Imports.IconButton>
                <Imports.IconButton
                  size="large"
                  aria-label="shopping cart"
                  color="inherit"
                  onClick={() => navigate('/addtobagpage')}
                >
                  <Imports.Badge color="error" badgeContent={productCount}>
                    <Imports.LocalMallOutlinedIcon />
                  </Imports.Badge>
                </Imports.IconButton>
              </Imports.Grid>
            </Imports.Grid>
          </Imports.Grid>
        </Imports.Grid>
      </Imports.Grid>
      <Imports.LoginDialog open={open} onClose={handleCloseDialog} />
    </Imports.AppBar>
  );
});

export default Navbar;
