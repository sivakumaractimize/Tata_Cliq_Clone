import React from 'react';

import Imports from '../Components/Imports';



const  Productspage=()=> {
  const [loading, setLoading] = Imports.useState(true)

  Imports.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1200);
  })
  const location = Imports.useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  console.log(category)




  return (
    <>
     {loading ? (
      <Imports.Spinner  />
    ) : (
    
 <>
    <Imports.Navbar/>
    
    <Imports.Product category={category} />
    <Imports.Footer/>
      
  
    
    </>
    
    )}
    </>
  )
}

export default Productspage
