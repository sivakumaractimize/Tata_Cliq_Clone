import React from "react";
import Imports from "./Imports";

const Wishlist = () => {
  const dispatch = Imports.useDispatch();
  const wishlist = Imports.useSelector((state) => state.wishlist);
  const [filteredWishlist, setFilteredWishlist] = Imports.useState([]);
  const [category, setCategory] = Imports.useState("all");
  const navigator = Imports.useNavigate();

  Imports.useEffect(() => {
    fetchApiData();
  }, [dispatch]);

  Imports.useEffect(() => {
    filterWishlist(category);
  }, [wishlist, category]);
//function for get wishlist products
  const fetchApiData = async () => {
    dispatch(Imports.getWishlistStart());
    try {
      const wishlistData = await Imports.getwishlistProducts();
      console.log('iam wishlist data', wishlistData)
      dispatch(Imports.getWishlistSuccess(wishlistData));
    } catch (error) {
      dispatch(Imports.getWishlistError(error.message));
    }
  };

  const filterWishlist = (category) => {
    if (category === "all") {
      setFilteredWishlist(wishlist);
    } else {
      setFilteredWishlist(wishlist.filter((product) => product.status === category));
    }
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };
//function for delete the wishlist products
  const handleDeleteWishlist = async (status, wishid, mainid, product) => {
    // Mapping function to correct endpoint
    const mapStatus = (status) => {
      switch (status) {
        case 'Men':
          return 'men';
        case 'Kids':
          return 'kids';
        case 'womens':
          return 'womens';
        case 'Home & Kitchen':
          return 'Home';
        default:
          return status.toLowerCase().replace(/\s+/g, ''); // Remove spaces and convert to lowercase
      }
    };
    
  
    const updatedStatus = mapStatus(status);
    const updatedProduct = { ...product, inwishlist: !product.inwishlist };
  
    try {
      // Log the status and mapped status for end point 
      console.log(`Original Status: ${status}, Mapped Status: ${updatedStatus}`);
  
      // Update the product in the wishlist
      await Imports.updateWishlist(updatedStatus, mainid, updatedProduct);
  
  
      // Delete the product from the wishlist using the wishid
      await Imports.deleteWishlist(wishid);
      const updatedwishlist = wishlist.filter(wishlist => wishlist.wishid !== wishid);
        dispatch(Imports.getWishlistSuccess(updatedwishlist));
  
      
      Imports.toast.error('Product Deleted From Wishlist', {
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
  
      
     
    } catch (error) {
      console.error('Error deleting wishlist item:', error);
    }
  };
  
  
//functon for Add the products into bag
  const handleAddToBag = async (product) => {
    try {
      await Imports.addTobagproduct(product);
      Imports.toast.success('Product Added to Bag', {
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
    } catch (error) {
      console.error('Error adding product to bag:', error);
    }
  };

  return (
    <>
      <Imports.Grid container xs={12} sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', mb: 5 }}>
        <Imports.Grid item xs={10}>
          <Imports.Typography sx={{ fontSize: '20px', fontWeight: '900', textAlign: 'start', mt: 3, mb: 2 }}>
            My Wishlist
          </Imports.Typography>
        </Imports.Grid>

        <Imports.Grid item xs={12}>
          <Imports.Divider sx={{ color: 'black', my: 2 }} />
        </Imports.Grid>

        {wishlist.length > 0 ? (
          <>
            <Imports.Grid item xs={12} sm={10}>
              <Imports.Grid container gap={2} sx={{ justifyContent: "start" }}>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("all")}
                    sx={{
                      backgroundColor: category === "all" ? "#DA1C5C" : "transparent",
                      color: category === "all" ? "white" : "black"
                    }}
                  >
                    All
                  </Imports.Button>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("womens")}
                    sx={{
                      backgroundColor: category === "womens" ? "#DA1C5C" : "transparent",
                      color: category === "womens" ? "white" : "black"
                    }}
                  >
                    Womens
                  </Imports.Button>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("Men")}
                    sx={{
                      backgroundColor: category === "Men" ? "#DA1C5C" : "transparent",
                      color: category === "Men" ? "white" : "black"
                    }}
                  >
                    Mens
                  </Imports.Button>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("Kids ")}
                    sx={{
                      backgroundColor: category === "Kids " ? "#DA1C5C" : "transparent",
                      color: category === "Kids " ? "white" : "black"
                    }}
                  >
                    Kids
                  </Imports.Button>
                </Imports.Grid>
                <Imports.Grid item>
                  <Imports.Button
                    variant="outlined"
                    onClick={() => handleCategoryChange("Home & Kitchen")}
                    sx={{
                      backgroundColor: category === "Home & Kitchen" ? "#DA1C5C" : "transparent",
                      color: category === "Home & Kitchen" ? "white" : "black"
                    }}
                  >
                    Home and Kitchen
                  </Imports.Button>
                </Imports.Grid>
              </Imports.Grid>
            </Imports.Grid>

            <Imports.Grid container xs={12} sm={10} md={10} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {filteredWishlist.map((product) => (
                <Imports.Card key={product.id} sx={{ width: { xs: '65%', sm: '30%', md: '30%' , lg:"17%"}, margin: '1%', overflow: 'hidden', ml:{xs:'20%', sm:0} }}>
                  <Imports.Box sx={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
                    <Imports.CardMedia
                      component="img"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      image={product.image1}
                      alt="img"
                    />
                    <Imports.IconButton
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 13,
                        color: 'white',
                        backgroundColor: 'grey',
                      }}
                      onClick={() => handleDeleteWishlist(product.status, product.wishid, product.mainid, product)}
                    >
                      <Imports.DeleteIcon />
                    </Imports.IconButton>
                  </Imports.Box>
                  <Imports.CardContent sx={{ textAlign: "left" }}>
                    <Imports.Button
                      variant="contained"
                      sx={{ backgroundColor: "#DA1C5C", color: "white", fontWeight: "bold", width: "100%", textAlign: 'center', fontSize: { xs: "10px", md: "15px" } }}
                      onClick={() => handleAddToBag(product)}
                    >
                      Add To Bag
                    </Imports.Button>
                    <Imports.Typography sx={{ fontWeight: "bold", fontSize: { xs: "10px", md: "15px" }, mt:2 }}>
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
                  </Imports.CardContent>
                </Imports.Card>
              ))}
            </Imports.Grid>
          </>
        ) : (
          <Imports.Grid item xs={12} sx={{ textAlign: 'center', mt: 5 , mb:30}}>
            <img src="https://www.tatacliq.com/src/account/components/img/emptyWishlist.svg" alt="svg"></img>
            <Imports.Typography variant="h6" color="textSecondary" sx={{mt:2}}>You have not added any products to your wishlist</Imports.Typography>
            <Imports.Button variant="outlined" onClick={() => navigator('/')} sx={{ color: "#DA1C5C", borderColor: "#DA1C5C", fontWeight: "bold", fontSize:"10px", width: {xs:"50%",sm:"20%", lg:"12%"}, mt:2 }}>Continue Shopping</Imports.Button>
          </Imports.Grid>
        )}
      </Imports.Grid>
    </>
  );
};

export default Wishlist;
