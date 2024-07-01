import React from 'react';
import Imports from '../Imports';



const categories = [
    {
        title: "Girls Clothing",
        items: [
            { name: "T-shirts & Tops", link: "/productpage?category=kids" },
            { name: "Jeans & Pants" },
            { name: "Dresses & Skirts" },
            { name: "Sets & Outfits" },
            { name: "Sportswear" },
            { name: "Sleepwear" },
            { name: "School Uniforms" },
        ],
    },
    {
      title: "Western Wear",
      items: [
          { name: "Tops & Tees" },
          { name: "Dresses" },
          { name: "Jeans & Trousers" },
          { name: "Skirts" },
          { name: "Jackets & Coats" },
          { name: "Jumpsuits " },
      ],
  },
  {
      title: "Sports Wear",
      items: [
          { name: "Kurtis & Kurtas" },
          { name: "Suits" },
          { name: "Sarees" },
          { name: "Lehengas" },
          { name: "Bottoms" },
          { name: "Blouses & Fabrics" },
      ],
  },
  {
      title: "Night Wear",
      items: [
          { name: "Kurtis & Kurtas" },
          { name: "Suits" },
          { name: "Sarees" },
          { name: "Lehengas" },
          { name: "Bottoms" },
          { name: "Blouses & Fabrics" },
      ],
  },
  {
      title: "Jewellery",
      items: [
          { name: "Kurtis & Kurtas" },
          { name: "Suits" },
          { name: "Sarees" },
          { name: "Lehengas" },
          { name: "Bottoms" },
          { name: "Blouses & Fabrics" },
          { name: "Dupattas" },
      ],
  },
  {
      title: "Party Wear",
      items: [
          { name: "Kurtis & Kurtas" },
          { name: "Suits" },
          { name: "Sarees" },
          { name: "Lehengas" },
          { name: "Bottoms" },
          { name: "Blouses & Fabrics" },
          { name: "Dupattas" },
      ],
  },
  {
      title: "Winter Wear",
      items: [
          { name: "Kurtis & Kurtas" },
          { name: "Suits" },
          { name: "Sarees" },
          { name: "Lehengas" },
          { name: "Bottoms" },
          { name: "Blouses & Fabrics" },
      ],
  },
];

const KidsFashionMenu = () => {
    const navigate =Imports.useNavigate();

    return (
    
          <Imports.Grid container spacing={4}>
                {categories.map((category, index) => (
                    <Imports.Grid item xs={3} key={index}>
                        <Imports.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Imports.Typography>
                        {category.items.map((item, idx) => (
                            <Imports.Typography
                                key={idx}
                                onClick={() => item.link && navigate(item.link)}
                                sx={{
                                    mb: 0.5,
                                    cursor: item.link ? "pointer" : "default",
                                    '&:hover': item.link ? { color: 'red' } : {},
                                }}
                            >
                                {item.name}
                            </Imports.Typography>
                        ))}
                    </Imports.Grid>
                ))}
            </Imports.Grid>
    
    );
};

export default KidsFashionMenu;
