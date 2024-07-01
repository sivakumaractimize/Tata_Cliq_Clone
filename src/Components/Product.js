import React, { useEffect, useState, useCallback } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Imports from './Imports';

const Product = React.memo(({ category }) => {
  const dispatch = Imports.useDispatch();
  const navigate = Imports.useNavigate();
  const products = Imports.useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);
  const [categorytype, setCategorytype] = useState({ type: "", innertype: "" });
  const token = localStorage.getItem('token');
//Function for get products from api
  const fetchApiData = useCallback(async () => {
    setLoading(true);
    dispatch(Imports.getProductsStart());
    try {
      const productData = await Imports.getProducts(category);
      console.log("i am product data", productData);
      dispatch(Imports.getProductsSuccess(productData));
      if (productData && productData.length > 0) {
        setCategorytype({
          type: productData[0].status,
          innertype: productData[0].innerstatus
        });
      }
      setLoading(false);
    } catch (error) {
      dispatch(Imports.getProductsError(error.message));
      setLoading(false);
    }
  }, [category, dispatch]);

  useEffect(() => {
    fetchApiData();
  }, []);
//function for update the wishlist and add wishlist
  const handleWishlistToggle = useCallback(async (product, inwishlist, event) => {
    event.stopPropagation();
    const updatedProduct = { ...product, inwishlist: !product.inwishlist };
    try {
        if(token)
          {
            await Imports.updateWishlist(category, product.mainid, updatedProduct);
          }
     
             
     
      

      if (!inwishlist&&token ) {
        await Imports.addToWishlist(updatedProduct);
        Imports.toast('Product Added to Wishlist..!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Imports.Bounce,
        });
      } 
      else if(!token)
      {
        Imports.toast.error('Need User Sign in to add wishlist', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Imports.Bounce,
        });
      }
      

      fetchApiData();
    } catch (error) {
      console.error('Error updating wishlist', error);
    }
  }, [category, fetchApiData]);

  const TabContainer = Imports.styled('div')({
    position: 'sticky',
    top: 120,
    backgroundColor: 'white',
  });

  const Filtermenu = Imports.styled('div')({
    position: 'sticky',
    top: 70,
    zIndex: 1300,
  });

  const innerProducthandler = useCallback((product) => {
    console.log("inner product", product);
    navigate('/Innerproductspage', { state: { product } });
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Imports.Grid sx={{ mt: { xs: 1, sm: 2, md: 5 } }}>
        <Imports.Typography sx={{ fontSize: { xs: "15px", md: "30px" }, fontWeight: "bold" }}>
          {categorytype.innertype} for {categorytype.type}&nbsp;
          Online
        </Imports.Typography>
        <Imports.Typography>27700 Products</Imports.Typography>
      </Imports.Grid>
      <Filtermenu>
        <Imports.Grid sx={{ display: { xs: "block", sm: "none" } }}>
          <Imports.SortIconMenu />
        </Imports.Grid>
      </Filtermenu>
      <Imports.Grid container xs={11} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Imports.Grid sx={{ display: "flex", mt: 6, ml: { xs: 1, md: 12, lg: 18 }, fontSize: "12px" }}>
          <Imports.Typography sx={{ fontSize: "12px" }}>Home &gt; &nbsp;</Imports.Typography>
          <Imports.Typography sx={{ fontSize: "12px" }}>{category} &gt; &nbsp;</Imports.Typography>
          <Imports.Typography sx={{ fontSize: "12px" }}>Ethenic Wear &gt; &nbsp;</Imports.Typography>{categorytype.type}
        </Imports.Grid>
        <Imports.Grid item xs={3} sm={4} md={3} sx={{ mb: 2, display: { xs: 'none', sm: 'block' } }}>
          <Imports.SortingDropdown />
        </Imports.Grid>
      </Imports.Grid>

      <Imports.Grid xs={12} sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <Imports.Grid container sm={12} md={10} display="flex" flexDirection="row" justifyContent="center" alignContent="center">
          <Imports.Grid item xs={3} sx={{ display: { xs: 'none', sm: 'block' }, position: "sticky", top: "20vh" }}>
            <TabContainer>
              <Imports.ListItemButton sx={{ border: '1px solid #eeeeee', width: '100%' }}>
                <Imports.ListItemText
                  primary={
                    <Imports.Typography sx={{ fontWeight: 'bold' }}>
                      Filters
                    </Imports.Typography>
                  }
                />
                <Imports.ListItemText
                  primary={
                    <Imports.Typography sx={{ textAlign: 'right', fontWeight: "bold", color: "gray", fontSize: "14px" }}>
                      Clear All
                    </Imports.Typography>
                  }
                />
              </Imports.ListItemButton>
              <Imports.ListItemButton sx={{ display: "flex", flexDirection: "column", alignItems: "start", border: '1px solid #eeeeee', width: '100%' }}>
                <Imports.ListItemText
                  primary={
                    <Imports.Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                      Department
                    </Imports.Typography>
                  }
                />
                <Imports.Chip sx={{ ml: 2, fontSize: "12px" }} label={categorytype.type} />
              </Imports.ListItemButton>
              <Imports.ListItemButton sx={{ display: "flex", flexDirection: "column", alignItems: "start", border: '1px solid #eeeeee', width: '100%' }}>
                <Imports.ListItemText
                  primary={
                    <Imports.Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                      Category
                    </Imports.Typography>
                  }
                />
                <Imports.Chip sx={{ ml: 2, fontSize: "12px" }} label="Ethnic Wear" />
              </Imports.ListItemButton>
              <Imports.ListItemButton sx={{ border: '1px solid #eeeeee', display: "flex", flexDirection: "column", alignItems: "start", width: '100%' }}>
                <Imports.ListItemText
                  primary={
                    <Imports.Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                      Product Type
                    </Imports.Typography>
                  }
                />
                <Imports.Chip sx={{ ml: 2, fontSize: "12px" }} label={categorytype.innertype} />
              </Imports.ListItemButton>
              <Imports.AccordionExpand />
            </TabContainer>
          </Imports.Grid>

          <Imports.Grid item container xs={12} sm={9} md={9} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {products && products.map((product, index) => (
              <Imports.Card  onClick={() => innerProducthandler(product)} key={product.id} sx={{ width: { xs: '48%', sm: '30%', md: '23%' }, margin: '1%', overflow: 'hidden' }}>
                <Imports.Box sx={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
                  <Imports.CardMedia
                    component="img"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.8s ease-in-out' }}
                    image={product.image1}
                    alt="img"
                  />
                  <Imports.CardMedia
                    component="img"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      opacity: 0,
                      transition: 'opacity 1.5s ease-in-out',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                    image={product.image2}
                    alt="hover img"
                  />
                  <Imports.IconButton
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      zIndex: 13,
                      color: product.inwishlist ? 'red' : 'black',
                      backgroundColor: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: product.inwishlist ? 'red' : 'white',
                      },
                    }}
                    onClick={(event) => handleWishlistToggle(product, product.inwishlist, event)}
                  >
                    {product.inwishlist ? <Imports.FavoriteIcon /> : <Imports.FavoriteBorderIcon />}
                  </Imports.IconButton>
                </Imports.Box>
                <Imports.CardContent sx={{ textAlign: "left" }}>
                  <Imports.Typography sx={{ fontWeight: "bold", fontSize: { xs: "10px", md: "15px" } }}>
                    {product.brand}
                  </Imports.Typography>
                  <Imports.Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: { xs: "9px", md: "12px" } }}>
                    {product.name}
                  </Imports.Typography>
                  <Imports.Typography variant="body1" color="text.primary" sx={{ mb: 1, fontSize: { xs: "9px", md: "12px" } }}>
                    <span style={{ color: 'black', marginRight: '8px' }}>₹{product.price}</span>
                    <span style={{ textDecoration: 'line-through', color: 'grey', marginRight: '8px' }}>{product.originalPrice}</span>
                    <span style={{ color: 'green' }}>{product.discount}</span>
                  </Imports.Typography>
                  <Imports.Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {product.ratingvalue >= 1 ? <Imports.Rating name="read-only" value={1} max={1} readOnly size="small" style={{ color: 'green' }} /> : null}
                    <Imports.Typography variant="body2" color="text.secondary" sx={{ ml: 0.5, fontSize: { xs: "9px", md: "12px" } }}>
                      {product.rating}
                    </Imports.Typography>
                    <Imports.Typography variant="body2" color="text.secondary" sx={{ ml: 0.5, fontSize: { xs: "9px", md: "12px" } }}>
                      {product.reviews}
                    </Imports.Typography>
                  </Imports.Box>
                  <Imports.Typography variant="body1" color="text.primary" sx={{ fontSize: { xs: "9px", md: "12px" } }}>
                    <span style={{ color: 'red', marginRight: '8px' }}>{product.stockStatus}</span>
                  </Imports.Typography>
                </Imports.CardContent>
              </Imports.Card>
            ))}
          </Imports.Grid>

          <Imports.Grid xs={12} md={11} sx={{ display: "flex", justifyContent: "center", alignContent: "center", ml: { xs: 0, md: 4, lg: 38 }, mt: 2 }}>
            <Imports.Grid sx={{ display: "flex", mt: 4 }}>
              <Imports.Grid>
                <Imports.Grid sx={{ display: 'flex' }}>
                  <Imports.ThumbUpOffAltIcon />
                  <Imports.Typography sx={{ fontWeight: "bold", fontSize: { xs: "10px", md: "13px", lg: "15px" } }}>We'd love to hear from you</Imports.Typography>
                </Imports.Grid>
                <Imports.Typography sx={{ fontSize: { xs: "10px", md: "13px", lg: "15px" } }}>This will Take 2 Minutes of Your Time</Imports.Typography>
              </Imports.Grid>
            </Imports.Grid>
            <Imports.Grid sx={{ ml: { xs: 3, md: 5 }, display: { xs: "none", sm: "block" } }}>
              <img src='https://www.tatacliq.com/src/experience-score-feedback/images/banner.svg' alt='feedback banner' />
            </Imports.Grid>
            <Imports.Typography sx={{ color: "#EB84A7", fontWeight: "bold", mt: 6, ml: { xs: 4, md: 2 }, fontSize: { xs: "10px", md: "12px", lg: "15px" } }}>Give Feedback</Imports.Typography>
          </Imports.Grid>
          <Imports.Grid xs={10} md={11} sx={{ display: "flex", justifyContent: "space-between", alignContent: "center", ml: { xs: 0, md: 0, lg: 45 }, mt: 2, border: "1px solid #f3e5f5", padding: "10px" }}>
            <Imports.Typography sx={{ borderBottom: "3px solid #bdbdbd", fontSize: { xs: "10px", md: "12px", lg: "15px" } }}>You've viewed 12/27763 products</Imports.Typography>
            <Imports.Typography sx={{ borderLeft: "1px solid #f3e5f5", mr: { xs: 2, md: 2 }, paddingLeft: "2px", fontSize: { xs: "10px", md: "15px" } }}> Show More products</Imports.Typography>
          </Imports.Grid>
        </Imports.Grid>
      </Imports.Grid>
    </>
  );
});

export default Product;
