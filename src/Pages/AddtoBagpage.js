import React  from 'react';

import Imports from '../Components/Imports';

const AddTObagPage = () => {

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
      ) : (<>
       
          <Imports.Navbar  />
          <Imports.AddtoBag/>
          </>
         
         
     
      )}
    </>
  );
};

export default AddTObagPage;
