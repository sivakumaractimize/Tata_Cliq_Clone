import React from "react";



import Imports from "./Imports";

const MenuGrid = () => {
    const navigate = Imports.useNavigate();

    return (
        <Imports.Grid container xs={12} textAlign="start" sx={{ display: { xs: 'block', md: 'none', backgroundColor: "#ECECEC" } }}>
            <Imports.Grid container xs={12} sx={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", ml:{sm:2} }}>
                <Imports.MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Imports.FavoriteBorderTwoToneIcon />
                    <Imports.Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>My WishList</Imports.Typography>
                </Imports.MenuItem>
                <Imports.MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => navigate('/myaccount')}>
                    <Imports.LocalMallOutlinedIcon />
                    <Imports.Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Order History</Imports.Typography>
                </Imports.MenuItem>
                <Imports.MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }} onClick={() => navigate('/myaccount/address')}>
                    <Imports.LibraryBooksSharpIcon />
                    <Imports.Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Address Book</Imports.Typography>
                </Imports.MenuItem>
            </Imports.Grid>
            <Imports.Grid container xs={12} sx={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", ml: {  sm: 2 }, mt: 2 }}>
                <Imports.MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Imports.LocalOfferSharpIcon />
                    <Imports.Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Brands</Imports.Typography>
                </Imports.MenuItem>
                <Imports.MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Imports.PaymentOutlinedIcon />
                    <Imports.Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Saved Payments</Imports.Typography>
                </Imports.MenuItem>
                <Imports.MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Imports.NotificationsNoneOutlinedIcon />
                    <Imports.Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Alerts & Coupons</Imports.Typography>
                </Imports.MenuItem>
            </Imports.Grid>
            <Imports.Grid container xs={12} sx={{ display: 'flex', justifyContent: "space-evenly", alignItems: "center", mt: 2 }}>
                <Imports.MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center', ml: { sm: 5 } }} onClick={() => navigate('/myaccount/giftcard')}>
                    <Imports.CardGiftcardOutlinedIcon />
                    <Imports.Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Gift card</Imports.Typography>
                </Imports.MenuItem>
                <Imports.MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center', ml: { xs: 2, sm: 4 } }}>
                    <Imports.AccountBalanceWalletTwoToneIcon />
                    <Imports.Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>CLIQ Cash</Imports.Typography>
                </Imports.MenuItem>
                <Imports.MenuItem sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'center', ml: { xs: 1, sm: 2 } }} onClick={() => navigate('/myaccount/manage-Notification')}>
                    <Imports.LibraryBooksSharpIcon />
                    <Imports.Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>Manage Notifications</Imports.Typography>
                </Imports.MenuItem>
            </Imports.Grid>
        </Imports.Grid>
    );
};

export default MenuGrid;
