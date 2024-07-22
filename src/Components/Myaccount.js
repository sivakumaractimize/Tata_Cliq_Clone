import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Imports from './Imports';

const MyaccountMenu = lazy(() => import('./Myaccountmenu'));
const Profile = lazy(() => import('./Profile'));
const Address = lazy(() => import('./Address'));
const Giftcard = lazy(() => import('./Giftcard'));
const Notification = lazy(() => import('./Notifications'));

const Myaccount = () => {
    const navigate = Imports.useNavigate();
    const location = useLocation();
//getting local storage data
    const firstname = localStorage.getItem('firstName');
    const lastname = localStorage.getItem('lastName');
    const fullName = `${firstname} ${lastname}`;
    const mail = localStorage.getItem('mail');

    return (
        <Imports.Grid container sx={{ display: 'flex', backgroundColor: location.pathname === '/myaccount' ? 'white' : '#ECECEC' , mt:5,}}>
            <Imports.MenuGrid  />
            <Imports.Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: "end", mt: { xs: 0, md: 5 } }}>
                <Imports.Grid item xs={12} md={10} lg={8} textAlign="start" sx={{ display: { xs: 'none', md: 'block' }, borderRadius: '10px', backgroundColor: 'white' }}>
                    <Imports.Typography sx={{ fontSize: '15px', fontWeight: 'bold', ml: 2, mb: 2, mt:2 }}>Menu</Imports.Typography>
                    <Imports.MenuItem sx={{ color: 'grey' }} onClick={() => navigate('/wishlistpage')}>
                        <Imports.FavoriteBorderTwoToneIcon />
                        <Imports.Typography sx={{ ml: 2, fontSize: "13px", color: location.pathname === '/wishlistpage' ? 'red' : 'grey' }}>My WishList</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount')}>
                        <Imports.LocalMallOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2,fontSize: "13px", color: location.pathname === '/myaccount' ? 'red' : 'grey' }}>Order History</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount/address')}>
                        <Imports.LibraryBooksSharpIcon />
                        <Imports.Typography sx={{ ml: 2,fontSize: "13px", color: location.pathname === '/myaccount/address' ? 'red' : 'grey' }}>Address Book</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }}>
                        <Imports.LocalOfferSharpIcon />
                        <Imports.Typography sx={{ ml: 2,fontSize: "13px" }}>Brands</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }}>
                        <Imports.PaymentOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2,fontSize: "13px" }}>Saved Payments</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount')}>
                        <Imports.NotificationsNoneOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2,fontSize: "13px" }}>Alerts & Coupons</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount/giftcard')}>
                        <Imports.CardGiftcardOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2,fontSize: "13px", color: location.pathname === '/myaccount/giftcard' ? 'red' : 'grey' }}>Gift card</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }}>
                        <Imports.AccountBalanceWalletTwoToneIcon />
                        <Imports.Typography sx={{ ml: 2 ,fontSize: "13px"}}>CLIQ Cash</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2 }} onClick={() => navigate('/myaccount/manage-Notification')}>
                        <Imports.LibraryBooksSharpIcon />
                        <Imports.Typography sx={{ ml: 2,fontSize: "13px", color: location.pathname === '/myaccount/manage-Notification' ? 'red' : 'grey' }}>Manage Notifications</Imports.Typography>
                    </Imports.MenuItem>
                    <Imports.MenuItem sx={{ color: 'grey', mt: 2, mb: 2 }} onClick={() => navigate('/myaccount/profile')}>
                        <Imports.SettingsOutlinedIcon />
                        <Imports.Typography sx={{ ml: 2,fontSize: "13px", color: location.pathname === '/myaccount/profile' ? 'red' : 'grey' }}>Profile</Imports.Typography>
                    </Imports.MenuItem>
                </Imports.Grid>
            </Imports.Grid>
            <Imports.Grid item xs={12} md={6} lg={7} sx={{ mt: 5 }}>
                <Suspense fallback={<>loading</>}>
                    <Routes>
                        <Route path="/" element={<MyaccountMenu />} />
                        <Route path="address" element={<Address />} />
                        <Route path="giftcard" element={<Giftcard />} />
                        <Route path="manage-Notification" element={<Notification />} />
                        <Route path="profile" element={<Profile />} />
                    </Routes>
                </Suspense>
            </Imports.Grid>
            <Imports.Grid item xs={12} md={3} lg={2} sx={{ display: { xs: 'none', md: 'block' }, mt: 10 }}>
                <Imports.Paper sx={{ width: "80%", ml:2 }}>
                    <Imports.Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: "center" }}>
                        <Imports.Avatar sx={{ bgcolor: "purple", width: "60px", height: '60px', mt:2 }}>S</Imports.Avatar>
                        <Imports.Typography sx={{ fontSize: '15px', fontWeight: 'bold', mt:2 }}>{fullName}</Imports.Typography>
                        <Imports.Typography sx={{ fontSize: '12px', mb: 5 }}>{mail}</Imports.Typography>
                    </Imports.Grid>
                </Imports.Paper>
            </Imports.Grid>
        </Imports.Grid>
    );
};

export default Myaccount;
