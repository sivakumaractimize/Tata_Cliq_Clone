import React  from 'react';

import Imports from '../Components/Imports';


const WishlistPage = () => {

  const [loading, setLoading] = Imports.useState(true);

  

  Imports.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {loading ? (
        <Imports.Spinner />
      ) : (
       <>
          <Imports.Navbar  />
          <Imports.Wishlist  />
          <Imports.Footer/>
          </>
         
        
      )}
    </>
  );
};

export default WishlistPage;
