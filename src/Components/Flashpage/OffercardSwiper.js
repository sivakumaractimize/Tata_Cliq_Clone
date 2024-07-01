import React  from 'react';
import Imports from '../Imports';
const OfferCard = () => {
  const [activeIndex, setActiveIndex] = Imports.useState(0);
  const images = [
    "https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/50040038359070.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/50063519580190.jpg"
  ];

  // Auto play functionality
  Imports.useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Imports.ImageList variant="standard" cols={1} gap={0} sx={{ maxWidth: 600, margin: 'auto' }}>
      <Imports.ImageListItem key={activeIndex}>
        <Imports.Paper>
          <img
            src={images[activeIndex]}
            alt={`card ${activeIndex + 1}`}
            style={{ width: '100%' }}
          />
        </Imports.Paper>
      </Imports.ImageListItem>
    </Imports.ImageList>
  );
};

export default OfferCard;
