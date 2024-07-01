import React from 'react';
import Imports from '../Imports';

const categories = [
  {
    title: 'Westside',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869107945502.jpg',
    category: 'womens'
  },
  {
    title: 'Womenswear',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108011038.jpg',
    category: 'womens'
  },
  {
    title: 'Menswear',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108076574.jpg',
    category: 'men'
  },
  {
    title: 'Home',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108535326.jpg',
    category: 'Home'
  },
  {
    title: 'Footwear',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108142110.jpg',
    category: 'footwear'
  },
  {
    title: 'Beauty',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108207646.jpg',
    category: 'beauty'
  },
  {
    title: 'Watches',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108273182.jpg',
    category: 'watches'
  },
  {
    title: 'Jewellery',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108338718.jpg',
    category: 'jewellery'
  },
  {
    title: 'Kids',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108404254.jpg',
    category: 'kids'
  },
  {
    title: 'Gadgets',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108469790.jpg',
    category: 'gadgets'
  },
  {
    title: 'Bags',
    image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108600862.jpg',
    category: 'bags'
  },
];

const navigableCategories = ['Westside', 'Womenswear', 'Menswear', 'Kids', 'Home'];

const CategoryCards = () => {
  const navigate = Imports.useNavigate();

  const handleClick = (category) => {
    if (navigableCategories.includes(category.title)) {
      navigate(`/productpage?category=${category.category}`);
    }
  };

  return (
    <Imports.Grid container gap={2} justifyContent="center" sx={{ mt: 2 }}>
      {categories.map((category, index) => (
        <Imports.Grid key={index}>
          <Imports.Card 
            sx={{ width: { xs: 40, md: 120 }, height: { xs: 40, md: 120 }, borderRadius: 3 }}
            onClick={() => handleClick(category)}
          >
            <Imports.CardMedia
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              image={category.image}
              alt={category.title}
            />
          </Imports.Card>
        </Imports.Grid>
      ))}
      <Imports.Grid sx={{ display: { xs: 'block', md: 'none' }, mt: 2 }}>
        <Imports.OfferCard />
      </Imports.Grid>
      <Imports.Grid item xs={12} container sx={{ display: { xs: 'none', md: 'flex', marginTop: '20px', justifyContent: 'center' } }}>
        <Imports.Grid item xs={11} gap={2} sx={{ display: 'flex' }}>
          <Imports.Grid item xs={4}>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg' alt='offer' style={{ maxWidth: '100%', height: 'auto' }} />
          </Imports.Grid>
          <Imports.Grid item xs={4}>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/50040038359070.jpg' alt='offer' style={{ maxWidth: '100%', height: 'auto' }} />
          </Imports.Grid>
          <Imports.Grid item xs={4}>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/50063519580190.jpg' alt='offer' style={{ maxWidth: '100%', height: 'auto' }} />
          </Imports.Grid>
        </Imports.Grid>
      </Imports.Grid>
    </Imports.Grid>
  );
};

export default CategoryCards;
