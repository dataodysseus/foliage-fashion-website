// src/data/productsData.js

// Sample products organized by subcategory
export const productsData = {
  // Men's Apparel
  'mens-shirts': [
    { 
      id: "MST-DN-001", 
      name: "Denim Shirt", 
      image: "/images/products/mens-shirts/mst-dn-001.jpg",
      images: [
        "/images/products/mens-shirts/mst-dn-001.jpg",
        "/images/products/mens-shirts/mst-dn-001-back.jpg",
        "/images/products/mens-shirts/mst-dn-001-detail.jpg"
      ],
      description: "Classic denim shirt perfect for casual wear. Made from premium cotton denim with excellent durability and comfort.",
      materials: [
        { name: "100% Cotton Denim", price: 0 },
        { name: "Cotton-Poly Blend", price: -2 },
        { name: "Organic Cotton Denim", price: 5 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["Classic Blue", "Light Wash", "Dark Indigo", "Black"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-200": "2-3 weeks",
        "201-500": "3-4 weeks", 
        "501-1000": "4-5 weeks",
        "1000+": "5-6 weeks"
      },
      pricing: {
        "50-200": 24.50,
        "201-500": 22.00,
        "501-1000": 19.50,
        "1000+": 17.00
      },
      features: ["Button-front closure", "Chest pockets", "Classic fit", "Pre-shrunk"],
      category: "mens-shirts"
    },
    { 
      id: "MST-DS-001", 
      name: "Dress Shirt", 
      image: "/images/products/mens-shirts/mst-ds-001.jpg",
      images: [
        "/images/products/mens-shirts/mst-ds-001.jpg",
        "/images/products/mens-shirts/mst-ds-001-back.jpg",
        "/images/products/mens-shirts/mst-ds-001-cuff.jpg"
      ],
      description: "Professional dress shirt ideal for business and formal occasions. Crafted from premium cotton for a crisp, polished look.",
      materials: [
        { name: "100% Cotton Poplin", price: 0 },
        { name: "Cotton-Polyester Blend", price: -3 },
        { name: "Premium Egyptian Cotton", price: 8 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["White", "Light Blue", "Navy", "Pink", "Gray"],
      minOrderQuantity: 25,
      leadTimes: {
        "25-100": "2-3 weeks",
        "101-300": "3-4 weeks",
        "301-500": "4-5 weeks",
        "500+": "5-6 weeks"
      },
      pricing: {
        "25-100": 32.00,
        "101-300": 28.50,
        "301-500": 25.00,
        "500+": 22.50
      },
      features: ["French seams", "Button-down collar", "Adjustable cuffs", "Wrinkle-resistant"],
      category: "mens-shirts"
    },
    { 
      id: "MST-FS-001", 
      name: "Flannel Shirt", 
      image: "/images/products/mens-shirts/mst-fs-001.jpg",
      images: [
        "/images/products/mens-shirts/mst-fs-001.jpg",
        "/images/products/mens-shirts/mst-fs-001-pattern.jpg"
      ],
      description: "Cozy flannel shirt perfect for cooler weather. Features classic plaid patterns and soft brushed cotton.",
      materials: [
        { name: "100% Cotton Flannel", price: 0 },
        { name: "Cotton-Rayon Blend", price: 2 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["Red Plaid", "Blue Plaid", "Green Plaid", "Gray Plaid"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-150": "2-3 weeks",
        "151-400": "3-4 weeks",
        "400+": "4-5 weeks"
      },
      pricing: {
        "36-150": 28.00,
        "151-400": 25.50,
        "400+": 23.00
      },
      features: ["Button-front", "Chest pockets", "Brushed interior", "Regular fit"],
      category: "mens-shirts"
    },
    { 
      id: "MST-LS-001", 
      name: "Linen Shirt", 
      image: "/images/products/mens-shirts/mst-ls-001.jpg",
      images: [
        "/images/products/mens-shirts/mst-ls-001.jpg",
        "/images/products/mens-shirts/mst-ls-001-texture.jpg"
      ],
      description: "Lightweight linen shirt ideal for warm weather. Breathable and comfortable with a relaxed fit.",
      materials: [
        { name: "100% Linen", price: 0 },
        { name: "Linen-Cotton Blend", price: -4 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Natural", "White", "Light Blue", "Sage Green"],
      minOrderQuantity: 30,
      leadTimes: {
        "30-120": "3-4 weeks",
        "121-300": "4-5 weeks",
        "300+": "5-6 weeks"
      },
      pricing: {
        "30-120": 35.00,
        "121-300": 32.00,
        "300+": 29.00
      },
      features: ["Relaxed fit", "Breathable fabric", "Natural texture", "Easy care"],
      category: "mens-shirts"
    }
  ],
  'mens-tshirts': [
    { 
      id: "MST-TS-001", 
      name: "Crewneck", 
      image: "/images/products/mens-tshirts/mst-ts-001.jpg",
      images: [
        "/images/products/mens-tshirts/mst-ts-001.jpg",
        "/images/products/mens-tshirts/mst-ts-001-back.jpg"
      ],
      description: "Comfortable everyday t-shirt made from soft, breathable cotton. Perfect for casual wear and custom printing.",
      materials: [
        { name: "100% Cotton", price: 0 },
        { name: "Cotton-Poly Blend", price: -1.5 },
        { name: "Organic Cotton", price: 3 },
        { name: "Tri-Blend", price: 2 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["White", "Black", "Gray", "Navy", "Red", "Royal Blue", "Forest Green"],
      minOrderQuantity: 12,
      leadTimes: {
        "12-50": "1-2 weeks",
        "51-200": "2-3 weeks",
        "201-500": "3-4 weeks",
        "500+": "4-5 weeks"
      },
      pricing: {
        "12-50": 12.50,
        "51-200": 10.00,
        "201-500": 8.50,
        "500+": 7.00
      },
      features: ["Crew neck", "Short sleeves", "Side seams", "Tear-away label"],
      category: "mens-tshirts"
    },
    { 
      id: "MST-TS-002", 
      name: "Long Sleeve", 
      image: "/images/products/mens-tshirts/mst-ts-002.jpg",
      images: [
        "/images/products/mens-tshirts/mst-ts-002.jpg",
        "/images/products/mens-tshirts/mst-ts-002-back.jpg"
      ],
      description: "Comfortable everyday long sleeve t-shirt made from soft, breathable cotton. Perfect for casual wear and custom printing.",
      materials: [
        { name: "100% Cotton", price: 0 },
        { name: "Cotton-Poly Blend", price: -1.5 },
        { name: "Organic Cotton", price: 3 },
        { name: "Tri-Blend", price: 2 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["White", "Black", "Gray", "Navy", "Red", "Royal Blue", "Forest Green"],
      minOrderQuantity: 12,
      leadTimes: {
        "12-50": "1-2 weeks",
        "51-200": "2-3 weeks",
        "201-500": "3-4 weeks",
        "500+": "4-5 weeks"
      },
      pricing: {
        "12-50": 12.50,
        "51-200": 10.00,
        "201-500": 8.50,
        "500+": 7.00
      },
      features: ["Crew neck", "Long sleeves", "Side seams", "Tear-away label"],
      category: "mens-tshirts"
    }
  ],
  'mens-outerwear': [
    { 
      id: "MJK-CJ-001", 
      name: "Denim Jacket", 
      image: "/images/products/mens-outerwear/mjk-cj-001.jpg",
      images: [
        "/images/products/mens-outerwear/mjk-cj-001.jpg",
        "/images/products/mens-outerwear/mjk-cj-001-back.jpg"
      ],
      description: "Classic denim jacket with timeless style. Perfect for layering and casual wear.",
      materials: [
        { name: "100% Cotton Denim", price: 0 },
        { name: "Stretch Denim", price: 6 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["Classic Blue", "Light Wash", "Dark Indigo"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-100": "3-4 weeks",
        "101-250": "4-5 weeks",
        "250+": "5-6 weeks"
      },
      pricing: {
        "24-100": 45.00,
        "101-250": 42.00,
        "250+": 38.50
      },
      features: ["Button closure", "Chest pockets", "Classic fit", "Durable construction"],
      category: "mens-outerwear"
    },
    { 
      id: "MJK-CJ-002", 
      name: "Bomber Jacket", 
      image: "/images/products/mens-outerwear/mjk-cj-002.jpg",
      images: [
        "/images/products/mens-outerwear/mjk-cj-002.jpg",
        "/images/products/mens-outerwear/mjk-cj-002-inside.jpg"
      ],
      description: "Stylish bomber jacket with ribbed collar, cuffs and hem. Features a lightweight construction with water-resistant finish.",
      materials: [
        { name: "Nylon Shell with Polyester Lining", price: 0 },
        { name: "Premium Leather", price: 40 },
        { name: "Suede", price: 35 }
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Olive Green", "Burgundy"],
      minOrderQuantity: 25,
      leadTimes: {
        "25-100": "3-4 weeks",
        "101-250": "4-5 weeks",
        "250+": "5-6 weeks"
      },
      pricing: {
        "25-100": 55.00,
        "101-250": 52.00,
        "250+": 48.00
      },
      features: ["Zipper closure", "Elastic waistband", "Multiple pockets", "Lightweight"],
      category: "mens-outerwear"
    },
    { 
      id: "MJK-CJ-003", 
      name: "Windbreaker", 
      image: "/images/products/mens-jackets/mjk-cj-003.jpg",
      images: [
        "/images/products/mens-jackets/mjk-cj-003.jpg",
        "/images/products/mens-jackets/mjk-cj-003-back.jpg",
        "/images/products/mens-jackets/mjk-cj-003-detail.jpg"
      ],
      description: "Lightweight windbreaker with water-resistant finish. Perfect for outdoor activities with elastic cuffs and adjustable hood.",
      materials: [
        { name: "100% Nylon", price: 0 },
        { name: "Polyester Blend (85% Polyester, 15% Spandex)", price: 2 },
        { name: "Recycled Polyester", price: 4 }
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Red", "Olive Green"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "2-3 weeks",
        "151-300": "3-4 weeks", 
        "301-500": "4-5 weeks",
        "500+": "5-6 weeks"
      },
      pricing: {
        "50-150": 38.00,
        "151-300": 35.00,
        "301-500": 32.00,
        "500+": 29.00
      },
      features: ["Water-resistant", "Adjustable hood", "Zippered pockets", "Packable design"],
      category: "mens-jackets"
    },  
    { 
      id: "MJK-CJ-004", 
      name: "Track Jacket", 
      image: "/images/products/mens-jackets/mjk-cj-004.jpg",
      images: [
        "/images/products/mens-jackets/mjk-cj-004.jpg",
        "/images/products/mens-jackets/mjk-cj-004-back.jpg",
        "/images/products/mens-jackets/mjk-cj-004-detail.jpg"
      ],
      description: "Sporty track jacket with breathable fabric and contrast color stripes. Features a zip-front closure and ribbed cuffs.",
      materials: [
        { name: "100% Polyester", price: 0 },
        { name: "Cotton-Poly Blend (65% Cotton, 35% Polyester)", price: 3 },
        { name: "Moisture-Wicking Performance Fabric", price: 5 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black/White", "Navy/Red", "Grey/Black", "Royal Blue/White"],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "3-4 weeks",
        "121-250": "4-5 weeks", 
        "251-400": "5-6 weeks",
        "400+": "6-7 weeks"
      },
      pricing: {
        "40-120": 32.00,
        "121-250": 29.00,
        "251-400": 26.00,
        "400+": 23.00
      },
      features: ["Breathable fabric", "Contrast stripes", "Zip-front closure", "Ribbed cuffs and hem"],
      category: "mens-jackets"
    },
    { 
      id: "MJK-OW-001", 
      name: "Parka", 
      image: "/images/products/mens-jackets/mjk-ow-001.jpg",
      images: [
        "/images/products/mens-jackets/mjk-ow-001.jpg",
        "/images/products/mens-jackets/mjk-ow-001-back.jpg",
        "/images/products/mens-jackets/mjk-ow-001-detail.jpg"
      ],
      description: "Winter parka with insulated lining and fur-trimmed hood. Designed for extreme cold weather with multiple pockets.",
      materials: [
        { name: "Nylon Shell with Polyester Insulation", price: 0 },
        { name: "Waterproof Tech Shell with Down Insulation", price: 25 },
        { name: "Eco-Friendly Waterproof Shell with Synthetic Insulation", price: 15 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Dark Green", "Charcoal Grey", "Camel"],
      minOrderQuantity: 25,
      leadTimes: {
        "25-75": "4-5 weeks",
        "76-150": "5-6 weeks", 
        "151-250": "6-7 weeks",
        "250+": "7-8 weeks"
      },
      pricing: {
        "25-75": 85.00,
        "76-150": 79.00,
        "151-250": 73.00,
        "250+": 68.00
      },
      features: ["Insulated lining", "Fur-trimmed hood", "Storm flap", "Multiple pockets", "Adjustable waist"],
      category: "mens-jackets"
    },
    { 
      id: "MJK-OW-002", 
      name: "Puffer Jacket", 
      image: "/images/products/mens-jackets/mjk-ow-002.jpg",
      images: [
        "/images/products/mens-jackets/mjk-ow-002.jpg",
        "/images/products/mens-jackets/mjk-ow-002-back.jpg",
        "/images/products/mens-jackets/mjk-ow-002-detail.jpg"
      ],
      description: "Quilted puffer jacket with lightweight warmth. Features a stand-up collar and zippered pockets for security.",
      materials: [
        { name: "Polyester Shell with Synthetic Fill", price: 0 },
        { name: "Nylon Shell with Duck Down Fill", price: 20 },
        { name: "Recycled Polyester Shell with Eco-Friendly Fill", price: 15 }
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Burgundy", "Olive"],
      minOrderQuantity: 30,
      leadTimes: {
        "30-100": "3-4 weeks",
        "101-200": "4-5 weeks", 
        "201-300": "5-6 weeks",
        "300+": "6-7 weeks"
      },
      pricing: {
        "30-100": 65.00,
        "101-200": 60.00,
        "201-300": 55.00,
        "300+": 50.00
      },
      features: ["Quilted design", "Stand-up collar", "Zippered pockets", "Lightweight warmth", "Packable"],
      category: "mens-jackets"
    },
    { 
      id: "MJK-OW-003", 
      name: "Rain Jacket", 
      image: "/images/products/mens-jackets/mjk-ow-003.jpg",
      images: [
        "/images/products/mens-jackets/mjk-ow-003.jpg",
        "/images/products/mens-jackets/mjk-ow-003-back.jpg",
        "/images/products/mens-jackets/mjk-ow-003-detail.jpg"
      ],
      description: "Fully waterproof rain jacket with sealed seams. Features adjustable cuffs and vented back panel for breathability.",
      materials: [
        { name: "100% Polyester with PU Coating", price: 0 },
        { name: "Gore-Tex Fabric", price: 30 },
        { name: "Eco-Friendly Waterproof Membrane", price: 20 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Yellow", "Blue", "Black", "Grey"],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "3-4 weeks",
        "121-250": "4-5 weeks", 
        "251-400": "5-6 weeks",
        "400+": "6-7 weeks"
      },
      pricing: {
        "40-120": 55.00,
        "121-250": 50.00,
        "251-400": 46.00,
        "400+": 42.00
      },
      features: ["Fully waterproof", "Sealed seams", "Adjustable hood", "Vented back panel", "Multiple pockets"],
      category: "mens-jackets"
    },
    { 
      id: "MJK-OW-004", 
      name: "Trench Coat", 
      image: "/images/products/mens-jackets/mjk-ow-004.jpg",
      images: [
        "/images/products/mens-jackets/mjk-ow-004.jpg",
        "/images/products/mens-jackets/mjk-ow-004-back.jpg",
        "/images/products/mens-jackets/mjk-ow-004-detail.jpg"
      ],
      description: "Classic trench coat with double-breasted front and belted waist. Made from water-repellent fabric for all-weather wear.",
      materials: [
        { name: "Cotton-Poly Blend Twill", price: 0 },
        { name: "100% Wool Gabardine", price: 45 },
        { name: "Organic Cotton with Water-Repellent Finish", price: 30 }
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Beige", "Black", "Navy", "Dark Grey"],
      minOrderQuantity: 20,
      leadTimes: {
        "20-50": "5-6 weeks",
        "51-100": "6-7 weeks", 
        "101-200": "7-8 weeks",
        "200+": "8-9 weeks"
      },
      pricing: {
        "20-50": 95.00,
        "51-100": 88.00,
        "101-200": 82.00,
        "200+": 75.00
      },
      features: ["Double-breasted front", "Belted waist", "Storm flap", "Gun flap", "Deep pockets"],
      category: "mens-jackets"
    }
  ],
  'mens-polos': [
    { 
      id: "MPO-CP-001", 
      name: "Cotton Piqué Polo", 
      image: "/images/products/mens-polos/mpo-cp-001.jpg",
      images: [
        "/images/products/mens-polos/mpo-cp-001.jpg",
        "/images/products/mens-polos/mpo-cp-001-back.jpg"
      ],
      description: "Classic piqué polo shirt with a refined look. Perfect for business casual or weekend wear.",
      materials: [
        { name: "100% Cotton Piqué", price: 0 },
        { name: "Cotton-Poly Blend", price: -2 },
        { name: "Performance Moisture-Wicking", price: 3 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Navy", "Royal Blue", "Red", "Gray"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-100": "2-3 weeks",
        "101-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      pricing: {
        "24-100": 22.00,
        "101-300": 19.50,
        "300+": 17.00
      },
      features: ["Three-button placket", "Rib-knit collar", "Side vents", "Tear-away label"],
      category: "mens-polos"
    },
    {
      id: "MPO-CP-002",
      name: "Slim Fit Polo",
      image: "/images/products/mens-polos/mpo-cp-002.jpg",
      images: [
        "/images/products/mens-polos/mpo-cp-002.jpg",
        "/images/products/mens-polos/mpo-cp-002-back.jpg",
        "/images/products/mens-polos/mpo-cp-002-detail.jpg"
      ],
      description: "Tailored slim fit polo with structured collar and stretch-enhanced fabric for professional comfort.",
      materials: [
        { name: "100% Cotton Piqué", price: 0 },
        { name: "Cotton-Spandex Blend (95% Cotton, 5% Spandex)", price: 2 },
        { name: "Organic Cotton", price: 4 }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Navy", "Black", "Heather Grey", "Burgundy"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "2-3 weeks",
        "151-300": "3-4 weeks",
        "301-500": "4-5 weeks",
        "500+": "5-6 weeks"
      },
      pricing: {
        "50-150": 28.00,
        "151-300": 25.00,
        "301-500": 22.00,
        "500+": 19.00
      },
      features: ["3-button placket", "Contrast collar piping", "Side vents", "Reinforced collar"],
      category: "mens-polos"
    },
    {
      id: "MPO-CP-003",
      name: "Striped Polo",
      image: "/images/products/mens-polos/mpo-cp-003.jpg",
      images: [
        "/images/products/mens-polos/mpo-cp-003.jpg",
        "/images/products/mens-polos/mpo-cp-003-back.jpg",
        "/images/products/mens-polos/mpo-cp-003-detail.jpg"
      ],
      description: "Classic horizontal stripe polo with breathable fabric and comfortable fit for casual elegance.",
      materials: [
        { name: "100% Cotton Jersey", price: 0 },
        { name: "Cotton-Polyester Blend (65% Cotton, 35% Polyester)", price: 1 },
        { name: "Sea Island Cotton", price: 6 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Navy/White", "Black/Grey", "Red/White", "Royal/White"],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "3-4 weeks",
        "121-250": "4-5 weeks",
        "251-400": "5-6 weeks",
        "400+": "6-7 weeks"
      },
      pricing: {
        "40-120": 26.00,
        "121-250": 23.00,
        "251-400": 20.00,
        "400+": 17.00
      },
      features: ["Signature stripe pattern", "Soft collar lining", "Taped neckline", "Double-stitched seams"],
      category: "mens-polos"
    },
    {
      id: "MPO-CP-004",
      name: "Logo Polo",
      image: "/images/products/mens-polos/mpo-cp-004.jpg",
      images: [
        "/images/products/mens-polos/mpo-cp-004.jpg",
        "/images/products/mens-polos/mpo-cp-004-back.jpg",
        "/images/products/mens-polos/mpo-cp-004-detail.jpg"
      ],
      description: "Customizable logo polo with premium fabric and left chest embroidery area for branding.",
      materials: [
        { name: "Performance Piqué (100% Polyester)", price: 0 },
        { name: "Moisture-Wicking Blend (90% Polyester, 10% Spandex)", price: 3 },
        { name: "Luxury Cotton Piqué", price: 5 }
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Charcoal", "Deep Green", "Midnight Blue", "Antique White"],
      minOrderQuantity: 30,
      leadTimes: {
        "30-100": "3-4 weeks",
        "101-250": "4-5 weeks",
        "251-500": "5-6 weeks",
        "500+": "6-7 weeks"
      },
      pricing: {
        "30-100": 32.00,
        "101-250": 29.00,
        "251-500": 26.00,
        "500+": 23.00
      },
      features: ["Embroidery-ready chest panel", "No-roll collar", "Tagless neck label", "Wrinkle-resistant"],
      category: "mens-polos",
      customization: {
        "Embroidery": "Up to 3 colors",
        "Print Area": "Left chest (4\" max width)",
        "Thread Colors": "50+ options available"
      }
    },
    {
      id: "MPO-PP-001",
      name: "Moisture-Wicking Polo",
      image: "/images/products/mens-polos/mpo-pp-001.jpg",
      images: [
        "/images/products/mens-polos/mpo-pp-001.jpg",
        "/images/products/mens-polos/mpo-pp-001-back.jpg",
        "/images/products/mens-polos/mpo-pp-001-detail.jpg"
      ],
      description: "High-performance polo with advanced moisture management technology for active professionals.",
      materials: [
        { name: "Quick-Dry Polyester", price: 0 },
        { name: "Coolmax® Performance Blend", price: 4 },
        { name: "Eco-Friendly Recycled Polyester", price: 3 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Royal Blue", "Forest Green", "Ash Grey", "Maroon"],
      minOrderQuantity: 60,
      leadTimes: {
        "60-150": "2-3 weeks",
        "151-300": "3-4 weeks",
        "301-600": "4-5 weeks",
        "600+": "5-6 weeks"
      },
      pricing: {
        "60-150": 34.00,
        "151-300": 31.00,
        "301-600": 28.00,
        "600+": 25.00
      },
      features: ["UPF 30+ protection", "4-way stretch", "Laser-cut ventilation zones", "Anti-odor treatment"],
      category: "mens-polos"
    },
    {
      id: "MPO-PP-002",
      name: "Golf Polo",
      image: "/images/products/mens-polos/mpo-pp-002.jpg",
      images: [
        "/images/products/mens-polos/mpo-pp-002.jpg",
        "/images/products/mens-polos/mpo-pp-002-back.jpg",
        "/images/products/mens-polos/mpo-pp-002-detail.jpg"
      ],
      description: "Technical golf polo with UV protection and stretch fabric for full range of motion on the course.",
      materials: [
        { name: "Polyester-Spandex Performance Fabric", price: 0 },
        { name: "Micro-Piqué with UV Block", price: 5 },
        { name: "Eco-Performance Blend", price: 4 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Bright White", "Turquoise", "Sunset Orange", "Lime Green", "Violet"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-125": "3-4 weeks",
        "126-250": "4-5 weeks",
        "251-500": "5-6 weeks",
        "500+": "6-7 weeks"
      },
      pricing: {
        "50-125": 38.00,
        "126-250": 35.00,
        "251-500": 32.00,
        "500+": 29.00
      },
      features: ["UV protection (UPF 50+)", "Stretch shoulder panels", "Drop tail hem", "Ball marker holder"],
      category: "mens-polos"
    },
    {
      id: "MPO-PP-003",
      name: "Stretch Fabric Polo",
      image: "/images/products/mens-polos/mpo-pp-003.jpg",
      images: [
        "/images/products/mens-polos/mpo-pp-003.jpg",
        "/images/products/mens-polos/mpo-pp-003-back.jpg",
        "/images/products/mens-polos/mpo-pp-003-detail.jpg"
      ],
      description: "Ultra-comfortable polo with exceptional stretch and recovery for all-day mobility.",
      materials: [
        { name: "4-Way Stretch Piqué (92% Polyester, 8% Spandex)", price: 0 },
        { name: "Luxury Stretch Cotton (97% Cotton, 3% Elastane)", price: 6 },
        { name: "Performance Stretch Blend", price: 4 }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Deep Teal", "Slate Grey", "Racing Red", "Classic Khaki"],
      minOrderQuantity: 45,
      leadTimes: {
        "45-135": "3-4 weeks",
        "136-270": "4-5 weeks",
        "271-540": "5-6 weeks",
        "540+": "6-7 weeks"
      },
      pricing: {
        "45-135": 36.00,
        "136-270": 33.00,
        "271-540": 30.00,
        "540+": 27.00
      },
      features: ["360° stretch technology", "Wrinkle-free", "Breathable mesh back panel", "No-slip collar stays"],
      category: "mens-polos"
    },
    {
      id: "MPO-PP-004",
      name: "Long Sleeve Polo",
      image: "/images/products/mens-polos/mpo-pp-004.jpg",
      images: [
        "/images/products/mens-polos/mpo-pp-004.jpg",
        "/images/products/mens-polos/mpo-pp-004-back.jpg",
        "/images/products/mens-polos/mpo-pp-004-detail.jpg"
      ],
      description: "Versatile long sleeve polo with ribbed cuffs and sophisticated styling for transitional weather.",
      materials: [
        { name: "Heavyweight Cotton Jersey", price: 0 },
        { name: "Cotton-Cashmere Blend", price: 8 },
        { name: "Thermal-Regulating Wool Blend", price: 12 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Midnight Navy", "Charcoal", "Camel", "Racing Green"],
      minOrderQuantity: 35,
      leadTimes: {
        "35-105": "4-5 weeks",
        "106-210": "5-6 weeks",
        "211-420": "6-7 weeks",
        "420+": "7-8 weeks"
      },
      pricing: {
        "35-105": 42.00,
        "106-210": 39.00,
        "211-420": 36.00,
        "420+": 33.00
      },
      features: ["Button cuff sleeves", "Extended collar stand", "Subtle side vents", "Structured shoulders"],
      category: "mens-polos",
      seasonal: ["Fall", "Winter", "Spring"]
    }
  ], 
  'mens-sweatshirts': [
    { 
      id: "MSS-CN-001", 
      name: "Basic Crew Sweatshirt", 
      image: "/images/products/mens-sweatshirts/mss-cn-001.jpg",
      images: [
        "/images/products/mens-sweatshirts/mss-cn-001.jpg",
        "/images/products/mens-sweatshirts/mss-cn-001-detail.jpg"
      ],
      description: "Classic crewneck sweatshirt made from premium cotton fleece. Soft, comfortable and perfect for layering.",
      materials: [
        { name: "80% Cotton, 20% Polyester Fleece", price: 0 },
        { name: "100% Organic Cotton", price: 4 },
        { name: "Heavyweight French Terry", price: 3 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Charcoal", "Navy", "Heather Gray", "Burgundy"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-150": "2-3 weeks",
        "151-400": "3-4 weeks",
        "400+": "4-5 weeks"
      },
      pricing: {
        "36-150": 28.00,
        "151-400": 25.00,
        "400+": 22.00
      },
      features: ["Ribbed crewneck", "Kangaroo pocket", "Double-needle stitching", "Pre-shrunk"],
      category: "mens-sweatshirts"
    },
    {
      id: "MSS-CN-002",
      name: "Graphic Sweatshirt",
      image: "/images/products/mens-sweatshirts/mss-cn-002.jpg",
      images: [
        "/images/products/mens-sweatshirts/mss-cn-002.jpg",
        "/images/products/mens-sweatshirts/mss-cn-002-back.jpg",
        "/images/products/mens-sweatshirts/mss-cn-002-detail.jpg"
      ],
      description: "Streetwear-inspired sweatshirt featuring premium screen-printed graphics with distressed detailing for urban appeal.",
      materials: [
        { name: "80% Cotton / 20% Polyester Fleece", price: 0 },
        { name: "Organic Cotton French Terry", price: 5 },
        { name: "Recycled Poly-Cotton Blend", price: 3 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Heather Grey", "Oatmeal", "Dark Olive"],
      graphicOptions: [
        "Abstract Geometric",
        "Vintage Band Print",
        "Minimalist Typography",
        "Custom Design (+$4)"
      ],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "3-4 weeks",
        "121-240": "4-5 weeks",
        "241-480": "5-6 weeks",
        "480+": "6-7 weeks"
      },
      pricing: {
        "40-120": 35.00,
        "121-240": 32.00,
        "241-480": 29.00,
        "480+": 26.00
      },
      features: [
        "Screen-printed graphics",
        "Reinforced shoulder seams",
        "Kangaroo pocket",
        "Pre-washed for softness"
      ],
      category: "mens-sweatshirts",
      printing: {
        "Technique": "Water-based ink printing",
        "Color Limits": "6-color maximum",
        "Placement": "Center chest (12\"x12\" max)"
      }
    },
    {
      id: "MSS-CN-003",
      name: "Fleece Sweatshirt",
      image: "/images/products/mens-sweatshirts/mss-cn-003.jpg",
      images: [
        "/images/products/mens-sweatshirts/mss-cn-003.jpg",
        "/images/products/mens-sweatshirts/mss-cn-003-back.jpg",
        "/images/products/mens-sweatshirts/mss-cn-003-detail.jpg"
      ],
      description: "Premium heavyweight fleece with brushed interior for exceptional warmth and comfort in cold weather conditions.",
      materials: [
        { name: "300gsm Poly-Cotton Fleece", price: 0 },
        { name: "Sherpa-Lined Thermal Fleece", price: 8 },
        { name: "Biodegradable Micro-Fleece", price: 6 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
      colors: ["Charcoal", "Navy", "Bottle Green", "Camel", "True Black"],
      minOrderQuantity: 35,
      leadTimes: {
        "35-105": "4-5 weeks",
        "106-210": "5-6 weeks",
        "211-420": "6-7 weeks",
        "420+": "7-8 weeks"
      },
      pricing: {
        "35-105": 42.00,
        "106-210": 38.00,
        "211-420": 35.00,
        "420+": 32.00
      },
      features: [
        "Double-needle stitching",
        "Ribbed cuffs and hem",
        "Three-panel hood",
        "Anti-pill treatment"
      ],
      thermalProperties: {
        "Warmth Rating": "Medium-Heavy (0°C to 10°C)",
        "Moisture Wicking": "Medium",
        "Breathability": "Medium"
      },
      category: "mens-sweatshirts"
    },
    {
      id: "MSS-CN-004",
      name: "Vintage Wash Sweatshirt",
      image: "/images/products/mens-sweatshirts/mss-cn-004.jpg",
      images: [
        "/images/products/mens-sweatshirts/mss-cn-004.jpg",
        "/images/products/mens-sweatshirts/mss-cn-004-back.jpg",
        "/images/products/mens-sweatshirts/mss-cn-004-detail.jpg"
      ],
      description: "Artfully distressed sweatshirt with authentic vintage wash treatment for lived-in comfort and retro aesthetic.",
      materials: [
        { name: "100% Ring-Spun Cotton", price: 0 },
        { name: "Organic Washed Cotton", price: 7 },
        { name: "Upcycled Cotton Blend", price: 4 }
      ],
      sizes: ["S", "M", "L", "XL"],
      washEffects: [
        "Light Stone Wash",
        "Heavy Abrasion (+$3)",
        "Tie-Dye Overdye (+$5)",
        "Custom Bleach Pattern (+$6)"
      ],
      colors: [
        "Faded Black",
        "Vintage White",
        "Sunbleached Red",
        "Distressed Indigo"
      ],
      minOrderQuantity: 25,
      leadTimes: {
        "25-75": "5-6 weeks",
        "76-150": "6-7 weeks",
        "151-300": "7-8 weeks",
        "300+": "8-9 weeks"
      },
      pricing: {
        "25-75": 48.00,
        "76-150": 44.00,
        "151-300": 40.00,
        "300+": 36.00
      },
      features: [
        "Garment-dyed finish",
        "Authentic wear patterns",
        "Reinforced elbow patches",
        "Yarn-dyed ribbing"
      ],
      distressingOptions: {
        "Neckline": "Light fraying available",
        "Hem": "Raw edge option",
        "Sleeves": "Custom hole placement"
      },
      category: "mens-sweatshirts"
    }                        
  ],  
  'mens-sweaters': [
    { 
      id: "MSW-CD-001", 
      name: "Button-Up Cardigan", 
      image: "/images/products/mens-sweaters/msw-cd-001.jpg",
      images: [
        "/images/products/mens-sweaters/msw-cd-001.jpg",
        "/images/products/mens-sweaters/msw-cd-001-open.jpg"
      ],
      description: "Versatile button-up cardigan perfect for layering. Features a classic fit and premium knit construction.",
      materials: [
        { name: "100% Merino Wool", price: 0 },
        { name: "Cotton-Cashmere Blend", price: 15 },
        { name: "Acrylic Blend", price: -10 }
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Charcoal", "Navy", "Camel", "Black"],
      minOrderQuantity: 20,
      leadTimes: {
        "20-75": "4-5 weeks",
        "76-200": "5-6 weeks",
        "200+": "6-7 weeks"
      },
      pricing: {
        "20-75": 65.00,
        "76-200": 60.00,
        "200+": 55.00
      },
      features: ["Full button front", "Ribbed trim", "Patch pockets", "Machine washable"],
      category: "mens-sweaters"
    },  
    {
      id: "MSW-PO-001",
      name: "Crew Neck Pullover",
      image: "/images/products/mens-sweaters/msw-po-001.jpg",
      images: [
        "/images/products/mens-sweaters/msw-po-001.jpg",
        "/images/products/mens-sweaters/msw-po-001-back.jpg",
        "/images/products/mens-sweaters/msw-po-001-detail.jpg"
      ],
      description: "Timeless crew neck sweater with a medium-weight knit for year-round versatility. Perfect for layering over collared shirts or wearing solo.",
      materials: [
        { name: "100% Merino Wool (18.5 micron)", price: 0, properties: ["Temperature-regulating", "Anti-odor"] },
        { name: "Cashmere Blend (70% Wool, 30% Cashmere)", price: 35, properties: ["Luxuriously soft", "Enhanced warmth"] },
        { name: "Organic Cotton Loopback Knit", price: 12, properties: ["Breathable", "Vegan-friendly"] }
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Charcoal", "Camel", "Navy", "Bottle Green", "Cream"],
      knitDetails: {
        "Gauge": "12-cut",
        "Weight": "Medium (310gsm)",
        "Construction": "Fully fashioned"
      },
      minOrderQuantity: 20,
      leadTimes: {
        "20-50": "6-8 weeks",
        "51-100": "8-10 weeks",
        "101-200": "10-12 weeks",
        "200+": "12-14 weeks"
      },
      pricing: {
        "20-50": 89.00,
        "51-100": 82.00,
        "101-200": 76.00,
        "200+": 70.00
      },
      features: [
        "Set-in sleeves",
        "Self-fabric ribbing",
        "Shoulder-to-shoulder taping",
        "Reinforced neckline"
      ],
      careInstructions: "Dry clean only. Store folded to maintain shape.",
      category: "mens-sweaters",
      stylingTips: [
        "Pair with Oxford shirt for business casual",
        "Layer under overcoat in winter",
        "Wear with denim for smart casual"
      ]
    },  
    {
      id: "MSW-PO-003",
      name: "Turtleneck Sweater",
      image: "/images/products/mens-sweaters/msw-po-003.jpg",
      images: [
        "/images/products/mens-sweaters/msw-po-003.jpg",
        "/images/products/mens-sweaters/msw-po-003-back.jpg",
        "/images/products/mens-sweaters/msw-po-003-detail.jpg"
      ],
      description: "Sophisticated turtleneck with a refined silhouette, featuring a fold-over collar and tailored fit for polished winter ensembles.",
      materials: [
        { name: "100% Extra-Fine Lambswool", price: 0, properties: ["Lightweight warmth", "Natural elasticity"] },
        { name: "Alpaca-Wool Blend (50/50)", price: 45, properties: ["Hypoallergenic", "Superior heat retention"] },
        { name: "Recycled Cashmere", price: 60, properties: ["Eco-luxury", "Cloud-like softness"] }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Camel", "Charcoal Marl", "Burgundy", "Midnight Blue"],
      knitDetails: {
        "Gauge": "7-cut",
        "Weight": "Heavy (420gsm)",
        "Construction": "Seamless tubular knit"
      },
      minOrderQuantity: 15,
      leadTimes: {
        "15-45": "8-10 weeks",
        "46-90": "10-12 weeks",
        "91-180": "12-14 weeks",
        "180+": "14-16 weeks"
      },
      pricing: {
        "15-45": 115.00,
        "46-90": 105.00,
        "91-180": 95.00,
        "180+": 85.00
      },
      features: [
        "Double-layered collar",
        "Extended ribbed cuffs",
        "Shape-retentive knitting",
        "Anti-static treatment"
      ],
      thermalProperties: {
        "Warmth Rating": "High (-10°C to 5°C)",
        "Breathability": "Medium",
        "Wind Resistance": "Moderate"
      },
      category: "mens-sweaters",
      occasion: ["Business formal", "Evening wear", "Winter sports"]
    }, 
    {
      id: "MSW-PO-004",
      name: "Cable Knit Sweater",
      image: "/images/products/mens-sweaters/msw-po-004.jpg",
      images: [
        "/images/products/mens-sweaters/msw-po-004.jpg",
        "/images/products/mens-sweaters/msw-po-004-back.jpg",
        "/images/products/mens-sweaters/msw-po-004-detail.jpg"
      ],
      description: "Traditional Aran-style cable knit with intricate patterns, crafted using centuries-old techniques for authentic texture and warmth.",
      materials: [
        { name: "100% Irish Wool", price: 0, properties: ["Water-resistant lanolin", "Durable"] },
        { name: "Shetland Wool", price: 25, properties: ["Natural color variations", "Rustic texture"] },
        { name: "Organic Merino-Cashmere (80/20)", price: 75, properties: ["Lighter weight", "Silky handfeel"] }
      ],
      sizes: ["S", "M", "L", "XL"],
      cablePatterns: [
        "Classic Aran (Diamond/Braid)",
        "Fisherman's Rib",
        "Honeycomb (+$8)",
        "Custom Clan Pattern (+$15)"
      ],
      colors: ["Natural Cream", "Donegal Tweed (Grey Mix)", "Forest Green", "Navy Marl"],
      minOrderQuantity: 10,
      leadTimes: {
        "10-30": "10-12 weeks",
        "31-60": "12-14 weeks",
        "61-120": "14-16 weeks",
        "120+": "16-18 weeks"
      },
      pricing: {
        "10-30": 145.00,
        "31-60": 135.00,
        "61-120": 125.00,
        "120+": 115.00
      },
      features: [
        "Hand-linked seams",
        "Rope-style cables",
        "Extended ribbed waistband",
        "Natural stretch memory"
      ],
      craftsmanship: {
        "Knit Technique": "Hand-framed on vintage looms",
        "Stitches per Inch": "8-10 SPI",
        "Finishing": "Hand-washed and blocked"
      },
      category: "mens-sweaters",
      heritage: "Inspired by traditional Irish fishing sweaters"
    }
  ],  
  'mens-hoodies': [
    { 
      id: "MHD-PO-001", 
      name: "Basic Pullover Hoodie", 
      image: "/images/products/mens-hoodies/mhd-po-001.jpg",
      images: [
        "/images/products/mens-hoodies/mhd-po-001.jpg",
        "/images/products/mens-hoodies/mhd-po-001-hood.jpg"
      ],
      description: "Essential pullover hoodie with classic fit. Made from soft cotton blend fleece for everyday comfort.",
      materials: [
        { name: "80% Cotton, 20% Polyester Fleece", price: 0 },
        { name: "Organic Cotton", price: 5 },
        { name: "Heavyweight French Terry", price: 3 }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Charcoal", "Navy", "Heather Gray", "Olive"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-100": "2-3 weeks",
        "101-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      pricing: {
        "24-100": 32.00,
        "101-300": 29.00,
        "300+": 26.00
      },
      features: ["Adjustable drawstring hood", "Kangaroo pocket", "Double-needle stitching", "Pre-shrunk"],
      category: "mens-hoodies"
    },
    {
      id: "MHD-PO-001",
      name: "Fleece Zip Hoodie",
      image: "/images/products/mens-hoodies/mhd-po-003.jpg",
      images: [
        "/images/products/mens-hoodies/mhd-po-003.jpg",
        "/images/products/mens-hoodies/mhd-po-003-back.jpg",
        "/images/products/mens-hoodies/mhd-po-003-detail.jpg",
        "/images/products/mens-hoodies/mhd-po-003-fit.jpg"
      ],
      description: "Heavyweight fleece hoodie with brushed interior for maximum warmth. Features a storm-proof front zip and articulated elbows for active wear.",
      materials: [
        { 
          name: "300GSM Poly-Cotton Fleece (80/20)", 
          price: 0,
          properties: ["Anti-pill treatment", "Quick-drying"]
        },
        { 
          name: "Tech Fleece (90% Recycled Polyester, 10% Spandex)", 
          price: 8,
          properties: ["4-way stretch", "Water-resistant"]
        },
        { 
          name: "Organic Cotton Sherpa", 
          price: 12,
          properties: ["GOTS certified", "Biodegradable"]
        }
      ],
      sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["Onyx Black", "Heather Graphite", "Military Green", "Burnt Orange"],
      thermalProperties: {
        "Warmth Rating": "High (0°F to 50°F)",
        "Moisture Wicking": "Medium",
        "Breathability": "200CFM"
      },
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "4-5 weeks",
        "151-300": "5-6 weeks", 
        "301-600": "6-7 weeks",
        "600+": "7-8 weeks"
      },
      pricing: {
        "50-150": 48.00,
        "151-300": 44.00,
        "301-600": 40.00,
        "600+": 36.00
      },
      features: [
        "YKK® anti-snag zipper",
        "Raglan sleeves",
        "Hidden phone pocket",
        "Gusseted underarms",
        "Adjustable drawcord hood"
      ],
      category: "mens-hoodies",
      techSpecs: {
        "Fabric Weight": "12oz/sq yd",
        "Seam Construction": "Flatlock stitching",
        "Care": "Machine wash cold, tumble dry low"
      }
    },
    {
      id: "MHD-ZU-002",
      name: "Lightweight Zip Hoodie",
      image: "/images/products/mens-hoodies/mhd-zu-002.jpg",
      images: [
        "/images/products/mens-hoodies/mhd-zu-002.jpg",
        "/images/products/mens-hoodies/mhd-zu-002-back.jpg",
        "/images/products/mens-hoodies/mhd-zu-002-detail.jpg",
        "/images/products/mens-hoodies/mhd-zu-002-layered.jpg"
      ],
      description: "Breathable microfiber hoodie with a streamlined fit. Ideal for athletic warm-ups or casual wear with moisture-wicking performance.",
      materials: [
        { 
          name: "92% Polyester / 8% Spandex Jersey", 
          price: 0,
          properties: ["UPF 30+", "Wrinkle-resistant"]
        },
        { 
          name: "Coolmax® Ecomade", 
          price: 6,
          properties: ["37% faster drying", "Oeko-Tex certified"]
        },
        { 
          name: "Tencel™ Modal Blend", 
          price: 9,
          properties: ["Antimicrobial", "Silk-like drape"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Slate Blue", "Carbon Grey", "White", "Racing Red", "Olive Drab"],
      weight: "7.2oz/sq yd (245GSM)",
      minOrderQuantity: 75,
      leadTimes: {
        "75-225": "3-4 weeks",
        "226-450": "4-5 weeks", 
        "451-900": "5-6 weeks",
        "900+": "6-7 weeks"
      },
      pricing: {
        "75-225": 39.00,
        "226-450": 35.00,
        "451-900": 32.00,
        "900+": 29.00
      },
      features: [
        "Laser-cut ventilation zones",
        "Reflective logo taping",
        "Zipper garage at collar",
        "Thumbhole cuffs",
        "Internal earbud cord loop"
      ],
      category: "mens-hoodies",
      performance: {
        "Moisture Management": "AATCC 195 rated",
        "Stretch Recovery": "85% after 50 washes",
        "Packability": "Folds to 8x6 inches"
      },
      idealFor: ["Gym workouts", "Travel", "Summer evenings", "Outdoor sports"]
    }              
  ],  
  'mens-bottoms': [
    { 
      id: "MJN-WJ-004", 
      name: "Straight Leg Jeans", 
      image: "/images/products/mens-bottoms/mjn-wj-004.jpg",
      images: [
        "/images/products/mens-bottoms/mjn-wj-004.jpg",
        "/images/products/mens-bottoms/mjn-wj-004-fit.jpg"
      ],
      description: "Classic straight leg jeans with traditional five-pocket styling. Comfortable fit through seat and thigh.",
      materials: [
        { name: "100% Cotton Denim", price: 0 },
        { name: "Stretch Denim (98% Cotton, 2% Spandex)", price: 3 },
        { name: "Selvedge Denim", price: 15 }
      ],
      sizes: ["28x30", "30x30", "32x30", "34x30", "36x30", "38x30", "30x32", "32x32", "34x32", "36x32"],
      colors: ["Dark Indigo", "Medium Wash", "Black", "Light Wash"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-200": "3-4 weeks",
        "201-500": "4-5 weeks",
        "500+": "5-6 weeks"
      },
      pricing: {
        "50-200": 42.00,
        "201-500": 39.00,
        "500+": 36.00
      },
      features: ["Zip fly with button closure", "Five-pocket styling", "Bar-tacked stress points", "Pre-washed"],
      category: "mens-bottoms"
    },      
    {
      id: "MJN-MJ-003",
      name: "Relaxed Fit Jeans",
      image: "/images/products/mens-bottoms/mjn-mj-003.jpg",
      images: [
        "/images/products/mens-bottoms/mjn-mj-003-front.jpg",
        "/images/products/mens-bottoms/mjn-mj-003-back.jpg",
        "/images/products/mens-bottoms/mjn-mj-003-detail.jpg",
        "/images/products/mens-bottoms/mjn-mj-003-fit.jpg"
      ],
      description: "Roomier thigh and seat construction with a straight leg opening. Designed for unrestricted movement with durable 14oz selvedge denim.",
      materials: [
        { 
          name: "14oz Raw Selvedge Denim (100% Cotton)", 
          price: 0,
          properties: ["Unwashed", "Shrink-to-fit", "Redline selvedge"]
        },
        { 
          name: "Stretch Denim (98% Cotton, 2% Elastane)", 
          price: 8,
          properties: ["Pre-washed", "2-way stretch", "Minimal shrinkage"]
        },
        { 
          name: "Organic Japanese Slub Denim", 
          price: 15,
          properties: ["Natural irregular texture", "GOTS certified"]
        }
      ],
      sizes: ["W28-W40", "L30-L36"],
      fits: {
        "Rise": "Mid-rise (10.5-11.5in)",
        "Thigh": "2-3in extra room vs. regular fit",
        "Leg Opening": "16.5-18in"
      },
      washes: ["Rigid Dark", "Medium Stonewash", "Light Vintage"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "5-6 weeks",
        "151-300": "6-7 weeks",
        "301-600": "7-8 weeks",
        "600+": "8-9 weeks"
      },
      pricing: {
        "50-150": 58.00,
        "151-300": 54.00,
        "301-600": 50.00,
        "600+": 46.00
      },
      features: [
        "Double-needle felled seams",
        "Copper rivet reinforcements",
        "Hidden coin pocket",
        "Belt loop gussets",
        "Tucked back yoke"
      ],
      category: "mens-bottoms",
      denimDetails: {
        "Weight": "14oz (mid-weight)",
        "Shrinkage": "5-7% lengthwise (raw only)",
        "Break-in Period": "30-50 wears for raw denim"
      }
    },
    {
      id: "MJN-MJ-004",
      name: "Distressed Jeans",
      image: "/images/products/mens-bottoms/mjn-mj-004.jpg",
      images: [
        "/images/products/mens-bottoms/mjn-mj-004-front.jpg",
        "/images/products/mens-bottoms/mjn-mj-004-back.jpg",
        "/images/products/mens-bottoms/mjn-mj-004-detail.jpg"
      ],
      description: "Artfully destroyed slim-straight jeans with authentic wear patterns and precision distressing for urban edge.",
      materials: [
        { 
          name: "12oz Stretch Denim (92% Cotton, 6% Poly, 2% Elastane)", 
          price: 0,
          properties: ["Pre-washed", "Comfort stretch"]
        },
        { 
          name: "Japanese Crinkle Denim", 
          price: 12,
          properties: ["3D textured surface", "Asymmetrical fading"]
        }
      ],
      sizes: ["W28-W38", "L30-L34"],
      distressing: {
        "Levels": [
          "Light whiskering + small knee holes",
          "Heavy knee destruction (+$6)",
          "Custom tear placement (+$8/jean)"
        ],
        "Techniques": [
          "Laser etching",
          "Hand sanding",
          "Ozone washing"
        ]
      },
      colors: ["Black Destroyed", "Medium Blue Ripped", "Grey Washed"],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "6-7 weeks",
        "121-240": "7-8 weeks",
        "241-480": "8-9 weeks",
        "480+": "9-10 weeks"
      },
      pricing: {
        "40-120": 65.00,
        "121-240": 60.00,
        "241-480": 55.00,
        "480+": 50.00
      },
      features: [
        "Reinforced hole edges",
        "Frayed hem detailing",
        "Hidden inner knee patches",
        "Vintage-inspired hardware"
      ],
      category: "mens-bottoms",
      styling: ["Streetwear", "Concert outfits", "Urban fashion"]
    },
    {
      id: "MJN-WJ-001",
      name: "Skinny Jeans",
      image: "/images/products/mens-bottoms/mjn-wj-001.jpg",
      images: [
        "/images/products/mens-bottoms/mjn-wj-001-front.jpg",
        "/images/products/mens-bottoms/mjn-wj-001-back.jpg",
        "/images/products/mens-bottoms/mjn-wj-001-stretch.jpg"
      ],
      description: "Ultra-slim fit through hip and thigh with a tapered leg opening. Built with 4-way stretch technology for active comfort.",
      materials: [
        { 
          name: "Super Stretch Denim (70% Cotton, 28% Polyester, 2% Elastane)", 
          price: 0,
          properties: ["360° flexibility", "Shape retention"]
        },
        { 
          name: "Performance Denim (88% Nylon, 12% Spandex)", 
          price: 18,
          properties: ["Water-repellent", "Abrasion-resistant"]
        }
      ],
      sizes: ["W28-W36", "L30-L32"],
      stretchTech: {
        "Recovery": "95% after 50 washes",
        "Stretch Direction": "4-way (horizontal/vertical)",
        "Elongation": "25-30%"
      },
      colors: ["Jet Black", "Indigo", "Acid Wash", "Olive Tinted"],
      minOrderQuantity: 60,
      leadTimes: {
        "60-180": "4-5 weeks",
        "181-360": "5-6 weeks",
        "361-720": "6-7 weeks",
        "720+": "7-8 weeks"
      },
      pricing: {
        "60-180": 62.00,
        "181-360": 58.00,
        "361-720": 54.00,
        "720+": 50.00
      },
      features: [
        "Gusseted crotch",
        "Ankle zippers (optional)",
        "No-topstitch seams",
        "Slimmer back yoke",
        "Teflon® stain shield"
      ],
      category: "mens-bottoms",
      fitGuide: {
        "Knee Width": "7-8in",
        "Leg Opening": "5.5-6.5in",
        "Inseam": "30-32in (unfinished)"
      }
    },
    {
      id: "MCP-CP-001",
      name: "Classic Chinos",
      image: "/images/products/mens-bottoms/mcp-cp-001.jpg",
      images: [
        "/images/products/mens-bottoms/mcp-cp-001-front.jpg",
        "/images/products/mens-bottoms/mcp-cp-001-back.jpg",
        "/images/products/mens-bottoms/mcp-cp-001-drape.jpg"
      ],
      description: "Tailored straight-leg chinos with military-inspired detailing. Made from durable 8oz twill that softens with wear.",
      materials: [
        { 
          name: "8oz Cotton Twill (100% Cotton)", 
          price: 0,
          properties: ["Structured drape", "Breathable"]
        },
        { 
          name: "Stretch Twill (97% Cotton, 3% Elastane)", 
          price: 7,
          properties: ["Ease of movement", "Wrinkle-resistant"]
        },
        { 
          name: "Tech Chino (65% Poly, 33% Cotton, 2% Carbon)", 
          price: 15,
          properties: ["Water-resistant", "Anti-static"]
        }
      ],
      sizes: ["W28-W42", "L30-L36"],
      fits: {
        "Rise": "Mid-rise (10-11in)",
        "Thigh": "Standard cut",
        "Leg Opening": "15-16in"
      },
      colors: ["Khaki", "Navy", "Charcoal", "Oatmeal", "British Tan"],
      minOrderQuantity: 45,
      leadTimes: {
        "45-135": "4-5 weeks",
        "136-270": "5-6 weeks",
        "271-540": "6-7 weeks",
        "540+": "7-8 weeks"
      },
      pricing: {
        "45-135": 52.00,
        "136-270": 48.00,
        "271-540": 44.00,
        "540+": 40.00
      },
      features: [
        "Military belt loops",
        "Coin pocket with button",
        "Bar-tacked stress points",
        "No-break hem option",
        "Durable matte buttons"
      ],
      category: "mens-bottoms",
      finishing: {
        "Wash": "Garment-dyed",
        "Pressing": "Crease-resistant finish",
        "Shrinkage": "<3% after wash"
      }
    }        
  ],  
  'mens-sportswear': [
    { 
      id: "MSP-AT-001", 
      name: "Performance Tee", 
      image: "/images/products/mens-sportswear/msp-at-001.jpg",
      images: [
        "/images/products/mens-sportswear/msp-at-001.jpg",
        "/images/products/mens-sportswear/msp-at-001-back.jpg"
      ],
      description: "High-performance athletic tee with moisture-wicking technology. Designed for maximum comfort during workouts.",
      materials: [
        { name: "100% Polyester Dri-FIT", price: 0 },
        { name: "Polyester-Spandex Blend", price: 2 },
        { name: "Bamboo Blend", price: 4 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Navy", "Royal Blue", "Red", "Gray"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-100": "2-3 weeks",
        "101-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      pricing: {
        "24-100": 18.00,
        "101-300": 16.00,
        "300+": 14.00
      },
      features: ["Moisture-wicking", "Ventilated mesh panels", "Tagless label", "Flatlock seams"],
      category: "mens-sportswear"
    },
    {
      "id": "MSP-AT-002",
      "name": "Training Tank",
      "image": "/images/products/mens-sportswear/msp-at-002.jpg",
      "images": [
        "/images/products/mens-sportswear/msp-at-002.jpg",
        "/images/products/mens-sportswear/msp-at-002-back.jpg"
      ],
      "description": "Lightweight training tank top with superior breathability. Perfect for intense gym sessions and outdoor activities.",
      "materials": [
        { "name": "100% Polyester Mesh", "price": 0 },
        { "name": "Cotton-Poly Blend", "price": 1.5 },
        { "name": "Merino Wool Blend", "price": 5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "White", "Charcoal", "Navy", "Forest Green", "Burgundy"],
      "minOrderQuantity": 24,
      "leadTimes": {
        "24-100": "2-3 weeks",
        "101-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      "pricing": {
        "24-100": 15.00,
        "101-300": 13.50,
        "300+": 12.00
      },
      "features": ["Quick-dry fabric", "Mesh ventilation", "Racerback design", "Anti-odor treatment"],
      "category": "mens-sportswear"
    },
    {
      "id": "MSP-AT-003",
      "name": "Long Sleeve Athletic Top",
      "image": "/images/products/mens-sportswear/msp-at-003.jpg",
      "images": [
        "/images/products/mens-sportswear/msp-at-003.jpg",
        "/images/products/mens-sportswear/msp-at-003-sleeve.jpg"
      ],
      "description": "Versatile long sleeve athletic top with thermal regulation. Ideal for layering and variable weather conditions.",
      "materials": [
        { "name": "Polyester-Elastane Blend", "price": 0 },
        { "name": "Merino Wool Base", "price": 6 },
        { "name": "Recycled Polyester", "price": 2.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "White", "Navy", "Heather Gray", "Dark Green", "Maroon"],
      "minOrderQuantity": 20,
      "leadTimes": {
        "20-100": "2-3 weeks",
        "101-250": "3-4 weeks",
        "250+": "4-5 weeks"
      },
      "pricing": {
        "20-100": 22.00,
        "101-250": 20.00,
        "250+": 18.00
      },
      "features": ["Thumbhole cuffs", "Moisture-wicking", "4-way stretch", "Reflective details"],
      "category": "mens-sportswear"
    },
    {
      "id": "MSP-AT-004",
      "name": "Compression Tank",
      "image": "/images/products/mens-sportswear/msp-at-004.jpg",
      "images": [
        "/images/products/mens-sportswear/msp-at-004.jpg",
        "/images/products/mens-sportswear/msp-at-004-fit.jpg"
      ],
      "description": "Performance compression tank with muscle support technology. Enhances blood circulation and reduces muscle fatigue.",
      "materials": [
        { "name": "Nylon-Spandex Compression", "price": 0 },
        { "name": "Premium Lycra Blend", "price": 3 },
        { "name": "Bamboo-Spandex Mix", "price": 4.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "White", "Navy", "Royal Blue", "Red", "Titanium Gray"],
      "minOrderQuantity": 36,
      "leadTimes": {
        "36-150": "3-4 weeks",
        "151-400": "4-5 weeks",
        "400+": "5-6 weeks"
      },
      "pricing": {
        "36-150": 25.00,
        "151-400": 22.50,
        "400+": 20.00
      },
      "features": ["Graduated compression", "Seamless construction", "UV protection", "Antibacterial treatment"],
      "category": "mens-sportswear"
    },
    {
      "id": "MSP-AB-001",
      "name": "Training Shorts",
      "image": "/images/products/mens-sportswear/msp-ab-001.jpg",
      "images": [
        "/images/products/mens-sportswear/msp-ab-001.jpg",
        "/images/products/mens-sportswear/msp-ab-001-pocket.jpg"
      ],
      "description": "Versatile training shorts with secure pockets and adjustable waistband. Built for high-intensity workouts and running.",
      "materials": [
        { "name": "Polyester Performance Fabric", "price": 0 },
        { "name": "Nylon-Spandex Blend", "price": 2 },
        { "name": "Recycled Polyester", "price": 1.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "Navy", "Charcoal", "Royal Blue", "Forest Green", "Burgundy"],
      "minOrderQuantity": 24,
      "leadTimes": {
        "24-100": "2-3 weeks",
        "101-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      "pricing": {
        "24-100": 20.00,
        "101-300": 18.00,
        "300+": 16.00
      },
      "features": ["Zippered pockets", "Mesh liner", "Drawstring waist", "Reflective trim"],
      "category": "mens-sportswear"
    },
    {
      "id": "MSP-AB-002",
      "name": "Boxer Pajama Shorts",
      "image": "/images/products/mens-sportswear/msp-ab-002.jpg",
      "images": [
        "/images/products/mens-sportswear/msp-ab-002.jpg",
        "/images/products/mens-sportswear/msp-ab-002-waistband.jpg"
      ],
      "description": "Comfortable boxer-style pajama shorts with relaxed fit. Perfect for lounging and sleep comfort.",
      "materials": [
        { "name": "100% Cotton Jersey", "price": 0 },
        { "name": "Cotton-Modal Blend", "price": 2.5 },
        { "name": "Organic Cotton", "price": 3.5 }
      ],
      "sizes": ["S", "M", "L", "XL", "XXL", "XXXL"],
      "colors": ["Navy", "Charcoal", "Black", "Heather Gray", "Olive", "Burgundy"],
      "minOrderQuantity": 36,
      "leadTimes": {
        "36-150": "2-3 weeks",
        "151-400": "3-4 weeks",
        "400+": "4-5 weeks"
      },
      "pricing": {
        "36-150": 12.00,
        "151-400": 10.50,
        "400+": 9.00
      },
      "features": ["Elastic waistband", "Button fly", "Side pockets", "Preshrunk fabric"],
      "category": "mens-sportswear"
    },
    {
      "id": "MSP-AB-003",
      "name": "Joggers",
      "image": "/images/products/mens-sportswear/msp-ab-003.jpg",
      "images": [
        "/images/products/mens-sportswear/msp-ab-003.jpg",
        "/images/products/mens-sportswear/msp-ab-003-cuff.jpg"
      ],
      "description": "Modern joggers with tapered fit and ribbed cuffs. Combines style and comfort for active lifestyle and casual wear.",
      "materials": [
        { "name": "Cotton-Polyester Fleece", "price": 0 },
        { "name": "French Terry Cotton", "price": 3 },
        { "name": "Organic Cotton Blend", "price": 4 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "Charcoal", "Navy", "Heather Gray", "Olive", "Maroon"],
      "minOrderQuantity": 20,
      "leadTimes": {
        "20-100": "2-3 weeks",
        "101-250": "3-4 weeks",
        "250+": "4-5 weeks"
      },
      "pricing": {
        "20-100": 28.00,
        "101-250": 25.00,
        "250+": 22.00
      },
      "features": ["Drawstring waist", "Side pockets", "Ribbed cuffs", "Tapered fit"],
      "category": "mens-sportswear"
    },
    {
      "id": "MSP-AB-004",
      "name": "Track Pants",
      "image": "/images/products/mens-sportswear/msp-ab-004.jpg",
      "images": [
        "/images/products/mens-sportswear/msp-ab-004.jpg",
        "/images/products/mens-sportswear/msp-ab-004-stripe.jpg"
      ],
      "description": "Classic track pants with side stripes and zip pockets. Designed for athletic performance and retro-inspired street style.",
      "materials": [
        { "name": "Polyester Tricot", "price": 0 },
        { "name": "Nylon-Spandex Blend", "price": 2.5 },
        { "name": "Recycled Polyester", "price": 2 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black/White", "Navy/White", "Charcoal/Gray", "Royal Blue/White", "Forest Green/White", "Burgundy/Gray"],
      "minOrderQuantity": 24,
      "leadTimes": {
        "24-100": "3-4 weeks",
        "101-300": "4-5 weeks",
        "300+": "5-6 weeks"
      },
      "pricing": {
        "24-100": 32.00,
        "101-300": 28.50,
        "300+": 25.00
      },
      "features": ["Side stripe design", "Zip pockets", "Elastic waistband", "Mesh lining"],
      "category": "mens-sportswear"
    },
    {
      "id": "MSP-AB-005",
      "name": "Knit Cotton Boxers",
      "image": "/images/products/mens-sportswear/msp-ab-005.jpg",
      "images": [
        "/images/products/mens-sportswear/msp-ab-005.jpg",
        "/images/products/mens-sportswear/msp-ab-005-pack.jpg"
      ],
      "description": "Premium knit cotton boxers with comfort waistband. Essential underwear with superior softness and durability.",
      "materials": [
        { "name": "100% Combed Cotton", "price": 0 },
        { "name": "Cotton-Modal Blend", "price": 1.5 },
        { "name": "Organic Cotton", "price": 2.5 }
      ],
      "sizes": ["S", "M", "L", "XL", "XXL", "XXXL"],
      "colors": ["White", "Black", "Navy", "Heather Gray", "Charcoal", "Assorted Pack"],
      "minOrderQuantity": 48,
      "leadTimes": {
        "48-200": "2-3 weeks",
        "201-500": "3-4 weeks",
        "500+": "4-5 weeks"
      },
      "pricing": {
        "48-200": 8.00,
        "201-500": 7.00,
        "500+": 6.00
      },
      "features": ["Comfort waistband", "Tagless design", "Reinforced seams", "Preshrunk cotton"],
      "category": "mens-sportswear"
    }        
  ],   

  // Women's Apparel
  'womens-tops': [
    { 
      id: "WT-CT-001", 
      name: "Basic Cotton Tee", 
      image: "/images/products/womens-tops/wt-ct-001.jpg",
      images: [
        "/images/products/womens-tops/wt-ct-001.jpg",
        "/images/products/womens-tops/wt-ct-001-back.jpg"
      ],
      description: "Essential women's t-shirt with a flattering feminine fit. Made from soft, breathable cotton.",
      materials: [
        { name: "100% Cotton Jersey", price: 0 },
        { name: "Cotton-Poly Blend", price: -1.5 },
        { name: "Organic Cotton", price: 3 }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Black", "Heather Gray", "Navy", "Burgundy", "Dusty Pink"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-100": "2-3 weeks",
        "101-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      pricing: {
        "24-100": 14.00,
        "101-300": 12.00,
        "300+": 10.00
      },
      features: ["Slightly tapered fit", "Double-needle stitching", "Tear-away label", "Pre-shrunk"],
      category: "womens-tops"
    },
    {
      "id": "WT-CT-002",
      "name": "V-Neck Blouse",
      "image": "/images/products/womens-tops/wt-ct-002.jpg",
      "images": [
        "/images/products/womens-tops/wt-ct-002.jpg",
        "/images/products/womens-tops/wt-ct-002-detail.jpg"
      ],
      "description": "Elegant V-neck blouse with flowing silhouette. Perfect for casual office wear and weekend outings with versatile styling options.",
      "materials": [
        { "name": "Polyester Chiffon", "price": 0 },
        { "name": "Viscose Crepe", "price": 2.5 },
        { "name": "Silk-Touch Polyester", "price": 3.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "White", "Navy", "Blush Pink", "Sage Green", "Dusty Rose"],
      "minOrderQuantity": 24,
      "leadTimes": {
        "24-100": "2-3 weeks",
        "101-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      "pricing": {
        "24-100": 22.00,
        "101-300": 19.50,
        "300+": 17.00
      },
      "features": ["V-neckline", "3/4 sleeves", "Relaxed fit", "Machine washable"],
      "category": "womens-tops"
    },
    {
      "id": "WT-CT-003",
      "name": "Button-Up Shirt",
      "image": "/images/products/womens-tops/wt-ct-003.jpg",
      "images": [
        "/images/products/womens-tops/wt-ct-003.jpg",
        "/images/products/womens-tops/wt-ct-003-cuff.jpg"
      ],
      "description": "Classic button-up shirt with modern feminine cut. Essential wardrobe staple that transitions seamlessly from work to weekend.",
      "materials": [
        { "name": "Cotton Poplin", "price": 0 },
        { "name": "Cotton-Polyester Blend", "price": 1.5 },
        { "name": "Organic Cotton", "price": 4.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["White", "Light Blue", "Navy", "Stripe White/Blue", "Pink", "Lavender"],
      "minOrderQuantity": 20,
      "leadTimes": {
        "20-100": "2-3 weeks",
        "101-250": "3-4 weeks",
        "250+": "4-5 weeks"
      },
      "pricing": {
        "20-100": 26.00,
        "101-250": 23.00,
        "250+": 20.00
      },
      "features": ["Classic collar", "Button front", "Chest pocket", "Tailored fit"],
      "category": "womens-tops"
    },
    {
      "id": "WT-CT-004",
      "name": "Sleeveless Top",
      "image": "/images/products/womens-tops/wt-ct-004.jpg",
      "images": [
        "/images/products/womens-tops/wt-ct-004.jpg",
        "/images/products/womens-tops/wt-ct-004-back.jpg"
      ],
      "description": "Versatile sleeveless top with clean lines and comfortable fit. Ideal for layering or wearing alone in warmer weather.",
      "materials": [
        { "name": "Cotton Jersey", "price": 0 },
        { "name": "Modal Blend", "price": 2.0 },
        { "name": "Bamboo-Cotton Mix", "price": 3.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "White", "Navy", "Coral", "Mint Green", "Heather Gray"],
      "minOrderQuantity": 30,
      "leadTimes": {
        "30-120": "2-3 weeks",
        "121-350": "3-4 weeks",
        "350+": "4-5 weeks"
      },
      "pricing": {
        "30-120": 16.00,
        "121-350": 14.00,
        "350+": 12.00
      },
      "features": ["Sleeveless design", "Scoop neckline", "Curved hem", "Breathable fabric"],
      "category": "womens-tops"
    },
    {
      "id": "WT-FT-001",
      "name": "Silk Blouse",
      "image": "/images/products/womens-tops/wt-ft-001.jpg",
      "images": [
        "/images/products/womens-tops/wt-ft-001.jpg",
        "/images/products/womens-tops/wt-ft-001-texture.jpg"
      ],
      "description": "Luxurious silk blouse with sophisticated drape and lustrous finish. Premium garment for executive wear and special occasions.",
      "materials": [
        { "name": "Mulberry Silk Crepe", "price": 0 },
        { "name": "Silk Charmeuse", "price": 8.0 },
        { "name": "Silk Georgette", "price": 6.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Ivory", "Black", "Navy", "Burgundy", "Emerald", "Champagne"],
      "minOrderQuantity": 12,
      "leadTimes": {
        "12-50": "3-4 weeks",
        "51-150": "4-5 weeks",
        "150+": "5-6 weeks"
      },
      "pricing": {
        "12-50": 65.00,
        "51-150": 58.00,
        "150+": 52.00
      },
      "features": ["100% silk construction", "French seams", "Mother-of-pearl buttons", "Dry clean only"],
      "category": "womens-tops"
    },
    {
      "id": "WT-FT-002",
      "name": "Tailored Shirt",
      "image": "/images/products/womens-tops/wt-ft-002.jpg",
      "images": [
        "/images/products/womens-tops/wt-ft-002.jpg",
        "/images/products/womens-tops/wt-ft-002-collar.jpg"
      ],
      "description": "Precision-tailored shirt with structured silhouette and professional finish. Designed for the modern businesswoman who demands quality.",
      "materials": [
        { "name": "Cotton Sateen", "price": 0 },
        { "name": "Cotton-Elastane Blend", "price": 3.0 },
        { "name": "Premium Cotton Twill", "price": 5.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["White", "Light Blue", "Navy", "Black", "Pinstripe", "Micro Check"],
      "minOrderQuantity": 18,
      "leadTimes": {
        "18-80": "3-4 weeks",
        "81-200": "4-5 weeks",
        "200+": "5-6 weeks"
      },
      "pricing": {
        "18-80": 42.00,
        "81-200": 38.00,
        "200+": 34.00
      },
      "features": ["Spread collar", "French cuffs", "Darts for fit", "Wrinkle-resistant"],
      "category": "womens-tops"
    },
    {
      "id": "WT-FT-003",
      "name": "Peplum Top",
      "image": "/images/products/womens-tops/wt-ft-003.jpg",
      "images": [
        "/images/products/womens-tops/wt-ft-003.jpg",
        "/images/products/womens-tops/wt-ft-003-waist.jpg"
      ],
      "description": "Flattering peplum top with fitted bodice and flared hem. Creates an elegant silhouette perfect for formal events and business meetings.",
      "materials": [
        { "name": "Ponte Knit", "price": 0 },
        { "name": "Stretch Crepe", "price": 4.0 },
        { "name": "Wool Blend", "price": 7.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "Navy", "Burgundy", "Royal Blue", "Forest Green", "Plum"],
      "minOrderQuantity": 20,
      "leadTimes": {
        "20-100": "3-4 weeks",
        "101-250": "4-5 weeks",
        "250+": "5-6 weeks"
      },
      "pricing": {
        "20-100": 38.00,
        "101-250": 34.00,
        "250+": 30.00
      },
      "features": ["Peplum waist", "Princess seams", "Back zip closure", "Lined bodice"],
      "category": "womens-tops"
    },
    {
      "id": "WT-FT-004",
      "name": "Ruffle Detail Top",
      "image": "/images/products/womens-tops/wt-ft-004.jpg",
      "images": [
        "/images/products/womens-tops/wt-ft-004.jpg",
        "/images/products/womens-tops/wt-ft-004-ruffle.jpg"
      ],
      "description": "Feminine top with delicate ruffle details and romantic appeal. Perfect for special occasions and sophisticated evening wear.",
      "materials": [
        { "name": "Chiffon Overlay", "price": 0 },
        { "name": "Silk Chiffon", "price": 6.0 },
        { "name": "Georgette Crepe", "price": 4.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Blush", "Ivory", "Black", "Dusty Blue", "Mauve", "Sage"],
      "minOrderQuantity": 16,
      "leadTimes": {
        "16-75": "3-4 weeks",
        "76-200": "4-5 weeks",
        "200+": "5-6 weeks"
      },
      "pricing": {
        "16-75": 45.00,
        "76-200": 40.00,
        "200+": 36.00
      },
      "features": ["Cascading ruffles", "Keyhole back", "3/4 sleeves", "Lined construction"],
      "category": "womens-tops"
    }
  ],
  'womens-dresses': [
    { 
      id: "WD-CD-001", 
      name: "T-Shirt Dress", 
      image: "/images/products/womens-dresses/wd-cd-001.jpg",
      images: [
        "/images/products/womens-dresses/wd-cd-001.jpg",
        "/images/products/womens-dresses/wd-cd-001-side.jpg"
      ],
      description: "Casual t-shirt dress with comfortable stretch and easy-care fabric. Perfect for everyday wear.",
      materials: [
        { name: "95% Cotton, 5% Spandex", price: 0 },
        { name: "Organic Cotton", price: 4 },
        { name: "Linen Blend", price: 5 }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Heather Gray", "Navy", "Burgundy", "Dusty Pink"],
      minOrderQuantity: 30,
      leadTimes: {
        "30-120": "3-4 weeks",
        "121-300": "4-5 weeks",
        "300+": "5-6 weeks"
      },
      pricing: {
        "30-120": 32.00,
        "121-300": 29.00,
        "300+": 26.00
      },
      features: ["Round neckline", "Short sleeves", "Side slits", "Machine washable"],
      category: "womens-dresses"
    },
    {
      id: "WD-CD-002",
      name: "Sundress",
      image: "/images/products/womens-dresses/wd-cd-002.jpg",
      images: [
        "/images/products/womens-dresses/wd-cd-002.jpg",
        "/images/products/womens-dresses/wd-cd-002-front.jpg",
        "/images/products/womens-dresses/wd-cd-002-back.jpg",
        "/images/products/womens-dresses/wd-cd-002-detail.jpg",
        "/images/products/womens-dresses/wd-cd-002-movement.jpg"
      ],
      description: "Flowy smocked sundress with adjustable spaghetti straps and tiered skirt. Features UPF 50+ protection for sun safety.",
      materials: [
        { 
          name: "100% Organic Cotton Voile", 
          price: 0,
          properties: ["Breathable", "GOTS Certified", "Pre-shrunk"]
        },
        { 
          name: "Tencel™ Linen Blend", 
          price: 12,
          properties: ["Wrinkle-resistant", "Moisture-wicking", "Biodegradable"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Sunflower Yellow", "Sea Glass Green", "Coral Pink", "White Eyelet"],
      length: {
        "Mini": "20in from shoulder",
        "Midi": "35in from shoulder",
        "Maxi": "55in from shoulder (+$8)"
      },
      minOrderQuantity: 60,
      leadTimes: {
        "60-180": "3-4 weeks",
        "181-360": "4-5 weeks",
        "361-720": "5-6 weeks",
        "720+": "6-7 weeks"
      },
      pricing: {
        "60-180": 45.00,
        "181-360": 42.00,
        "361-720": 39.00,
        "720+": 36.00
      },
      features: [
        "Adjustable tie straps",
        "Built-in shelf bra",
        "Hidden pocket in side seam",
        "French seams"
      ],
      category: "womens-dresses",
      sunProtection: {
        "UPF Rating": "50+",
        "Coverage": "Shoulders to mid-calf (maxi)"
      }
    },
    {
      id: "WD-CD-003",
      name: "Wrap Dress",
      image: "/images/products/womens-dresses/wd-cd-003.jpg",
      images: [
        "/images/products/womens-dresses/wd-cd-003.jpg",
        "/images/products/womens-dresses/wd-cd-003-front.jpg",
        "/images/products/womens-dresses/wd-cd-003-wrap.jpg",
        "/images/products/womens-dresses/wd-cd-003-detail.jpg"
      ],
      description: "Iconic wrap silhouette with self-tie waist belt and surplice neckline. Drapes beautifully for all body types.",
      materials: [
        { 
          name: "Stretch Jersey (95% Viscose, 5% Spandex)", 
          price: 0,
          properties: ["4-way stretch", "Drapes well"]
        },
        { 
          name: "Silk Crepe de Chine", 
          price: 35,
          properties: ["Luxury handfeel", "Temperature-regulating"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
      wrapSystem: {
        "Closure": "Inner tie + outer belt",
        "Adjustability": "Waist +/- 4 inches",
        "Security": "Hidden snap at bust"
      },
      colors: ["Leopard Print", "Emerald Green", "Black", "Dusty Rose"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "4-5 weeks",
        "151-300": "5-6 weeks",
        "301-600": "6-7 weeks",
        "600+": "7-8 weeks"
      },
      pricing: {
        "50-150": 65.00,
        "151-300": 60.00,
        "301-600": 55.00,
        "600+": 50.00
      },
      features: [
        "Convertible sleeves (roll-up tabs)",
        "Lined bodice",
        "A-line skirt",
        "Dress-weight lining"
      ],
      category: "womens-dresses",
      occasion: ["Office wear", "Date night", "Cocktail party"]
    },
    {
      id: "WD-CD-004",
      name: "Shirt Dress",
      image: "/images/products/womens-dresses/wd-cd-004.jpg",
      images: [
        "/images/products/womens-dresses/wd-cd-004.jpg",
        "/images/products/womens-dresses/wd-cd-004-front.jpg",
        "/images/products/womens-dresses/wd-cd-004-belted.jpg",
        "/images/products/womens-dresses/wd-cd-004-detail.jpg"
      ],
      description: "Structured shirt dress with premium mother-of-pearl buttons and back vent. Works as a dress or long jacket.",
      materials: [
        { 
          name: "100% Cotton Poplin", 
          price: 0,
          properties: ["Crisp handfeel", "Pre-washed"]
        },
        { 
          name: "Linen-Blend Chambray", 
          price: 10,
          properties: ["Breathable", "Wrinkles beautifully"]
        }
      ],
      sizes: ["00-18"],
      styling: {
        "Length": "Knee (35in) or Midi (45in)",
        "Belt": "Optional self-belt (+$5)",
        "Cuffs": "Functional button tabs"
      },
      colors: ["Classic White", "Denim Blue", "Black Stripe", "Olive"],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "5-6 weeks",
        "121-240": "6-7 weeks",
        "241-480": "7-8 weeks",
        "480+": "8-9 weeks"
      },
      pricing: {
        "40-120": 58.00,
        "121-240": 54.00,
        "241-480": 50.00,
        "480+": 46.00
      },
      features: [
        "Contrast inner facing",
        "Dual side slits",
        "Pen pocket on sleeve",
        "Yoke back"
      ],
      category: "womens-dresses",
      versatility: ["Layer over swimwear", "Wear as beach cover-up", "Belt for office wear"]
    },
    {
      id: "WD-FD-001",
      name: "Cocktail Dress",
      image: "/images/products/womens-dresses/wd-fd-001.jpg",
      images: [
        "/images/products/womens-dresses/wd-fd-001.jpg",
        "/images/products/womens-dresses/wd-fd-001-front.jpg",
        "/images/products/womens-dresses/wd-fd-001-back.jpg",
        "/images/products/womens-dresses/wd-fd-001-detail.jpg"
      ],
      description: "Bodycon silhouette with illusion neckline and stretch lace overlay. Boned bodice for structured support.",
      materials: [
        { 
          name: "Stretch Mesh + Lace", 
          price: 0,
          properties: ["20% stretch", "Opaque lining"]
        },
        { 
          name: "Italian Stretch Satin", 
          price: 45,
          properties: ["Luxury sheen", "4-way stretch"]
        }
      ],
      sizes: ["00-16"],
      construction: {
        "Boning": "Spiral steel in bodice",
        "Lining": "Moisture-wicking cupro",
        "Closure": "Hidden back zipper"
      },
      colors: ["Black", "Burgundy", "Navy", "Emerald"],
      minOrderQuantity: 30,
      leadTimes: {
        "30-90": "6-7 weeks",
        "91-180": "7-8 weeks",
        "181-360": "8-9 weeks",
        "360+": "9-10 weeks"
      },
      pricing: {
        "30-90": 125.00,
        "91-180": 115.00,
        "181-360": 105.00,
        "360+": 95.00
      },
      features: [
        "Built-in shapewear layer",
        "Removable spaghetti straps",
        "Hand-sewn lace appliqués",
        "Knee-length trumpet skirt"
      ],
      category: "womens-dresses",
      eventTypes: ["Wedding guest", "Gala", "Formal dinner"]
    },
    {
      id: "WD-FD-002",
      name: "Evening Gown",
      image: "/images/products/womens-dresses/wd-fd-002.jpg",
      images: [
        "/images/products/womens-dresses/wd-fd-002.jpg",
        "/images/products/womens-dresses/wd-fd-002-front.jpg",
        "/images/products/womens-dresses/wd-fd-002-back.jpg",
        "/images/products/womens-dresses/wd-fd-002-train.jpg"
      ],
      description: "Mermaid silhouette with hand-beaded bodice and silk chiffon train. Internal corset for hourglass shaping.",
      materials: [
        { 
          name: "Duchess Satin + Chiffon", 
          price: 0,
          properties: ["Structured drape", "Luxury handfeel"]
        },
        { 
          name: "Custom Silk Mikado", 
          price: 120,
          properties: ["Architectural drape", "Made-to-order"]
        }
      ],
      sizes: ["Custom Sizing Only"],
      embellishments: [
        "Swavorski crystal beading (+$85)",
        "Hand-embroidered floral motifs (+$150)",
        "Detachable train (+$65)"
      ],
      colors: ["Ivory", "Midnight Blue", "Ruby Red", "Champagne"],
      minOrderQuantity: 10,
      leadTimes: {
        "10-20": "10-12 weeks",
        "21-40": "12-14 weeks",
        "41-80": "14-16 weeks",
        "80+": "16-18 weeks"
      },
      pricing: {
        "10-20": 395.00,
        "21-40": 375.00,
        "41-80": 355.00,
        "80+": 335.00
      },
      features: [
        "Internal corset with 12 bones",
        "French seams throughout",
        "Convertible straps (halter/crossback)",
        "Weighted hem for perfect drape"
      ],
      category: "womens-dresses",
      luxuryDetails: {
        "Beading": "30 hours handwork per gown",
        "Lining": "Bemberg silk",
        "Closure": "Invisible back zipper + hook/eye"
      }
    },
    {
      id: "WD-FD-003",
      name: "A-Line Dress",
      image: "/images/products/womens-dresses/wd-fd-003.jpg",
      images: [
        "/images/products/womens-dresses/wd-fd-003.jpg",
        "/images/products/womens-dresses/wd-fd-003-front.jpg",
        "/images/products/womens-dresses/wd-fd-003-twirl.jpg",
        "/images/products/womens-dresses/wd-fd-003-detail.jpg"
      ],
      description: "Princess-seamed A-line with sweetheart neckline and full skirt. Lightweight structure holds shape without stiffness.",
      materials: [
        { 
          name: "Cotton Sateen", 
          price: 0,
          properties: ["Subtle sheen", "Easy-care"]
        },
        { 
          name: "Taffeta", 
          price: 25,
          properties: ["Crisp handfeel", "Slight rustle"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      structure: {
        "Skirt Volume": "3-yard circumference",
        "Bodice": "Fully lined",
        "Petticoat": "Optional (+$30)"
      },
      colors: ["Blush Pink", "Royal Blue", "Black", "Dusty Lavender"],
      minOrderQuantity: 35,
      leadTimes: {
        "35-105": "5-6 weeks",
        "106-210": "6-7 weeks",
        "211-420": "7-8 weeks",
        "420+": "8-9 weeks"
      },
      pricing: {
        "35-105": 88.00,
        "106-210": 82.00,
        "211-420": 76.00,
        "420+": 70.00
      },
      features: [
        "Concealed side zipper",
        "Belt loops for optional sash",
        "Pocket seams (add pockets +$5)",
        "Tea-length hem"
      ],
      category: "womens-dresses",
      eraInspired: ["1950s retro", "Modern minimalist"]
    },
    {
      id: "WD-FD-004",
      name: "Sheath Dress",
      image: "/images/products/womens-dresses/wd-fd-004.jpg",
      images: [
        "/images/products/womens-dresses/wd-fd-004.jpg",
        "/images/products/womens-dresses/wd-fd-004-front.jpg",
        "/images/products/womens-dresses/wd-fd-004-back.jpg",
        "/images/products/womens-dresses/wd-fd-004-detail.jpg"
      ],
      description: "Tailored sheath with princess seams and notched neckline. Stretch wool blend maintains sharp lines without restriction.",
      materials: [
        { 
          name: "Stretch Wool (85% Wool, 15% Nylon)", 
          price: 0,
          properties: ["Wrinkle-resistant", "Breathable"]
        },
        { 
          name: "Scuba Knit", 
          price: 18,
          properties: ["Recovery stretch", "Body-skimming"]
        }
      ],
      sizes: ["00-18"],
      tailoring: {
        "Darts": "Bust and back",
        "Seams": "Princess line construction",
        "Hem": "Weighted for clean fall"
      },
      colors: ["Navy", "Charcoal", "Camel", "Burgundy"],
      minOrderQuantity: 25,
      leadTimes: {
        "25-75": "6-7 weeks",
        "76-150": "7-8 weeks",
        "151-300": "8-9 weeks",
        "300+": "9-10 weeks"
      },
      pricing: {
        "25-75": 95.00,
        "76-150": 88.00,
        "151-300": 82.00,
        "300+": 75.00
      },
      features: [
        "Back vent for mobility",
        "Hidden bra strap holders",
        "Interfaced collar",
        "Lined to knee"
      ],
      category: "womens-dresses",
      transition: ["Day: Blazer + pumps", "Night: Statement jewelry + heels"]
    },              
  ],
  'womens-tshirts': [
    {
      "id": "TS-CN-001",
      "name": "Basic Cotton Tee",
      "image": "/images/products/womens-tshirts/ts-cn-001.jpg",
      "images": [
        "/images/products/womens-tshirts/ts-cn-001.jpg",
        "/images/products/womens-tshirts/ts-cn-001-fit.jpg"
      ],
      "description": "Essential everyday cotton tee with comfortable fit and durable construction. The perfect foundation piece for any wardrobe.",
      "materials": [
        { "name": "100% Cotton Jersey", "price": 0 },
        { "name": "Cotton-Polyester Blend", "price": 0.75 },
        { "name": "Organic Cotton", "price": 2.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      "colors": ["White", "Black", "Navy", "Gray", "Pink", "Light Blue", "Sage Green", "Burgundy"],
      "minOrderQuantity": 50,
      "leadTimes": {
        "50-200": "1-2 weeks",
        "201-500": "2-3 weeks",
        "500+": "3-4 weeks"
      },
      "pricing": {
        "50-200": 8.50,
        "201-500": 7.25,
        "500+": 6.00
      },
      "features": ["Crew neckline", "Short sleeves", "Relaxed fit", "Double-stitched hems"],
      "category": "womens-tshirts"
    },
    {
      "id": "TS-CN-002",
      "name": "Graphic Print Tee",
      "image": "/images/products/womens-tshirts/ts-cn-002.jpg",
      "images": [
        "/images/products/womens-tshirts/ts-cn-002.jpg",
        "/images/products/womens-tshirts/ts-cn-002-print.jpg"
      ],
      "description": "Trendy graphic print tee with custom design options. Perfect for brand promotion, events, and casual fashion statements.",
      "materials": [
        { "name": "Cotton-Polyester Blend", "price": 0 },
        { "name": "Tri-Blend (Cotton/Poly/Rayon)", "price": 1.5 },
        { "name": "100% Cotton Ring-Spun", "price": 1.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      "colors": ["White", "Black", "Heather Gray", "Navy", "Royal Blue", "Forest Green", "Maroon", "Vintage Colors"],
      "minOrderQuantity": 36,
      "leadTimes": {
        "36-150": "2-3 weeks",
        "151-400": "3-4 weeks",
        "400+": "4-5 weeks"
      },
      "pricing": {
        "36-150": 12.00,
        "151-400": 10.50,
        "400+": 9.00
      },
      "features": ["Custom print ready", "Screen print compatible", "Tear-away label", "Reinforced seams"],
      "category": "womens-tshirts"
    },
    {
      "id": "TS-CN-003",
      "name": "Striped Tee",
      "image": "/images/products/womens-tshirts/ts-cn-003.jpg",
      "images": [
        "/images/products/womens-tshirts/ts-cn-003.jpg",
        "/images/products/womens-tshirts/ts-cn-003-detail.jpg"
      ],
      "description": "Classic striped tee with timeless nautical-inspired design. Versatile piece that adds pattern and interest to any outfit.",
      "materials": [
        { "name": "Cotton Jersey Stripe", "price": 0 },
        { "name": "Cotton-Modal Blend", "price": 2.0 },
        { "name": "Organic Cotton Stripe", "price": 3.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Navy/White", "Black/White", "Red/White", "Gray/White", "Pink/White", "Green/White"],
      "minOrderQuantity": 30,
      "leadTimes": {
        "30-120": "2-3 weeks",
        "121-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      "pricing": {
        "30-120": 11.00,
        "121-300": 9.50,
        "300+": 8.50
      },
      "features": ["Horizontal stripes", "Crew neck", "Fitted silhouette", "Pattern matching at seams"],
      "category": "womens-tshirts"
    },
    {
      "id": "TS-CN-004",
      "name": "Long Sleeve Tee",
      "image": "/images/products/womens-tshirts/ts-cn-004.jpg",
      "images": [
        "/images/products/womens-tshirts/ts-cn-004.jpg",
        "/images/products/womens-tshirts/ts-cn-004-sleeve.jpg"
      ],
      "description": "Comfortable long sleeve tee perfect for layering or standalone wear. Ideal for cooler weather and year-round versatility.",
      "materials": [
        { "name": "Cotton Jersey", "price": 0 },
        { "name": "Cotton-Spandex Blend", "price": 1.5 },
        { "name": "Modal-Cotton Mix", "price": 2.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["White", "Black", "Navy", "Charcoal", "Olive", "Burgundy", "Dusty Pink", "Camel"],
      "minOrderQuantity": 24,
      "leadTimes": {
        "24-100": "2-3 weeks",
        "101-250": "3-4 weeks",
        "250+": "4-5 weeks"
      },
      "pricing": {
        "24-100": 14.00,
        "101-250": 12.50,
        "250+": 11.00
      },
      "features": ["Long sleeves", "Crew neckline", "Slightly fitted", "Ribbed cuffs"],
      "category": "womens-tshirts"
    },
    {
      "id": "TS-VN-001",
      "name": "Basic V-Neck",
      "image": "/images/products/womens-tshirts/ts-vn-001.jpg",
      "images": [
        "/images/products/womens-tshirts/ts-vn-001.jpg",
        "/images/products/womens-tshirts/ts-vn-001-neckline.jpg"
      ],
      "description": "Classic V-neck tee with flattering neckline and comfortable fit. Essential basic that complements any casual wardrobe.",
      "materials": [
        { "name": "Cotton Jersey", "price": 0 },
        { "name": "Cotton-Polyester Blend", "price": 0.75 },
        { "name": "Bamboo-Cotton Blend", "price": 2.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      "colors": ["White", "Black", "Navy", "Gray", "Light Pink", "Mint", "Lavender", "Coral"],
      "minOrderQuantity": 48,
      "leadTimes": {
        "48-200": "1-2 weeks",
        "201-500": "2-3 weeks",
        "500+": "3-4 weeks"
      },
      "pricing": {
        "48-200": 9.00,
        "201-500": 7.75,
        "500+": 6.50
      },
      "features": ["V-neckline", "Short sleeves", "Feminine fit", "Side seams"],
      "category": "womens-tshirts"
    },
    {
      "id": "TS-VN-002",
      "name": "Pocket V-Neck",
      "image": "/images/products/womens-tshirts/ts-vn-002.jpg",
      "images": [
        "/images/products/womens-tshirts/ts-vn-002.jpg",
        "/images/products/womens-tshirts/ts-vn-002-pocket.jpg"
      ],
      "description": "V-neck tee with functional chest pocket detail. Combines classic style with practical design for everyday wear.",
      "materials": [
        { "name": "Cotton-Polyester Blend", "price": 0 },
        { "name": "Slub Cotton", "price": 1.5 },
        { "name": "Organic Cotton", "price": 2.75 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["White", "Black", "Navy", "Heather Gray", "Sage", "Dusty Blue", "Mauve", "Khaki"],
      "minOrderQuantity": 36,
      "leadTimes": {
        "36-150": "2-3 weeks",
        "151-350": "3-4 weeks",
        "350+": "4-5 weeks"
      },
      "pricing": {
        "36-150": 11.50,
        "151-350": 10.00,
        "350+": 8.75
      },
      "features": ["V-neckline", "Chest pocket", "Relaxed fit", "Curved hem"],
      "category": "womens-tshirts"
    },
    {
      "id": "TS-VN-003",
      "name": "Distressed V-Neck",
      "image": "/images/products/womens-tshirts/ts-vn-003.jpg",
      "images": [
        "/images/products/womens-tshirts/ts-vn-003.jpg",
        "/images/products/womens-tshirts/ts-vn-003-distressed.jpg"
      ],
      "description": "Trendy distressed V-neck with vintage-inspired details. Perfect for achieving that effortless, lived-in look.",
      "materials": [
        { "name": "Vintage Cotton Blend", "price": 0 },
        { "name": "Tri-Blend Vintage", "price": 2.0 },
        { "name": "Slub Cotton", "price": 1.75 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Vintage White", "Faded Black", "Washed Navy", "Heather Gray", "Dusty Rose", "Olive Wash"],
      "minOrderQuantity": 24,
      "leadTimes": {
        "24-100": "2-3 weeks",
        "101-250": "3-4 weeks",
        "250+": "4-5 weeks"
      },
      "pricing": {
        "24-100": 15.50,
        "101-250": 13.75,
        "250+": 12.00
      },
      "features": ["Distressed edges", "Raw hem", "V-neckline", "Vintage wash"],
      "category": "womens-tshirts"
    },
    {
      "id": "TS-VN-004",
      "name": "Premium V-Neck",
      "image": "/images/products/womens-tshirts/ts-vn-004.jpg",
      "images": [
        "/images/products/womens-tshirts/ts-vn-004.jpg",
        "/images/products/womens-tshirts/ts-vn-004-fabric.jpg"
      ],
      "description": "Luxury V-neck tee crafted from premium materials. Superior comfort and durability for the discerning customer.",
      "materials": [
        { "name": "Pima Cotton", "price": 0 },
        { "name": "Modal-Cotton Luxury", "price": 3.5 },
        { "name": "Cashmere Blend", "price": 8.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Ivory", "Black", "Charcoal", "Navy", "Blush", "Sage", "Camel", "Wine"],
      "minOrderQuantity": 18,
      "leadTimes": {
        "18-75": "2-3 weeks",
        "76-200": "3-4 weeks",
        "200+": "4-5 weeks"
      },
      "pricing": {
        "18-75": 28.00,
        "76-200": 25.00,
        "200+": 22.00
      },
      "features": ["Premium fabric", "Tailored fit", "Reinforced seams", "Luxury feel"],
      "category": "womens-tshirts"
    }   
  ],
  'womens-polos': [
    {
      id: "PO-CP-001",
      name: "Cotton Piqué Polo",
      image: "/images/products/womens-polos/po-cp-001.jpg",
      images: [
        "/images/products/womens-polos/po-cp-001.jpg",
        "/images/products/womens-polos/po-cp-001-front.jpg",
        "/images/products/womens-polos/po-cp-001-back.jpg",
        "/images/products/womens-polos/po-cp-001-detail.jpg"
      ],
      description: "Traditional piqué polo with feminine curved hem and pearlized buttons. Breathable cotton structure maintains crisp polish.",
      materials: [
        { 
          name: "100% Organic Cotton Piqué", 
          price: 0,
          properties: ["GOTS Certified", "230GSM", "Pre-shrunk"]
        },
        { 
          name: "Sea Island Cotton", 
          price: 18,
          properties: ["Extra-long staple", "Silk-like handfeel"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      fit: {
        "Silhouette": "Semi-fitted",
        "Length": "24in back/22in front",
        "Sleeves": "3.5in banded"
      },
      colors: ["Classic White", "Navy", "Rose", "Mint"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "4-5 weeks",
        "151-300": "5-6 weeks",
        "301-600": "6-7 weeks",
        "600+": "7-8 weeks"
      },
      pricing: {
        "50-150": 42.00,
        "151-300": 38.00,
        "301-600": 35.00,
        "600+": 32.00
      },
      features: [
        "Mother-of-pearl buttons",
        "Side vents",
        "Contrast inner placket",
        "Tagless label"
      ],
      category: "womens-polos",
      collar: {
        "Height": "1.5in",
        "Structure": "Interfaced",
        "Style": "Modified tennis"
      }
    },
    {
      id: "PO-CP-002",
      name: "Slim Fit Polo",
      image: "/images/products/womens-polos/po-cp-002.jpg",
      images: [
        "/images/products/womens-polos/po-cp-002.jpg",
        "/images/products/womens-polos/po-cp-002-front.jpg",
        "/images/products/womens-polos/po-cp-002-back.jpg",
        "/images/products/womens-polos/po-cp-002-detail.jpg"
      ],
      description: "Body-skimming silhouette with princess seams and extended sleeve caps for professional polish without restriction.",
      materials: [
        { 
          name: "Stretch Piqué (95% Cotton, 5% Spandex)", 
          price: 0,
          properties: ["2-way stretch", "Wrinkle-resistant"]
        },
        { 
          name: "Linen-Cotton Blend", 
          price: 9,
          properties: ["Breathable", "Casual drape"]
        }
      ],
      sizes: ["00-18"],
      tailoring: {
        "Darts": "Bust and back",
        "Seams": "Princess construction",
        "Hem": "High-low (1.5in variance)"
      },
      colors: ["Black", "Chambray", "Dusty Lavender", "Ecru"],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "5-6 weeks",
        "121-240": "6-7 weeks",
        "241-480": "7-8 weeks",
        "480+": "8-9 weeks"
      },
      pricing: {
        "40-120": 48.00,
        "121-240": 44.00,
        "241-480": 40.00,
        "480+": 36.00
      },
      features: [
        "Hidden button placket",
        "Underarm eyelets",
        "Curved tail hem",
        "Sleeve slit detailing"
      ],
      category: "womens-polos",
      styling: ["Tucked with pencil skirt", "Untucked with jeans"]
    },
    {
      id: "PO-CP-003",
      name: "Striped Polo",
      image: "/images/products/womens-polos/po-cp-003.jpg",
      images: [
        "/images/products/womens-polos/po-cp-003.jpg",
        "/images/products/womens-polos/po-cp-003-front.jpg",
        "/images/products/womens-polos/po-cp-003-back.jpg",
        "/images/products/womens-polos/po-cp-003-detail.jpg"
      ],
      description: "Breton-inspired stripes with a refined polo collar. Features balanced horizontal bands that flatter all figures.",
      materials: [
        { 
          name: "Combed Cotton Jersey", 
          price: 0,
          properties: ["Single jersey knit", "Pre-shrunk"]
        },
        { 
          name: "Merino Wool Blend", 
          price: 15,
          properties: ["Temperature-regulating", "Naturally odor-resistant"]
        }
      ],
      sizes: ["XS-XXL"],
      stripeConfig: {
        "Width": "1/4in alternating",
        "Pattern": "Even 1:1 ratio",
        "Placement": "Shoulder-matched"
      },
      colors: ["Navy/White", "Black/Red", "Burgundy/Cream", "Royal/White"],
      minOrderQuantity: 60,
      leadTimes: {
        "60-180": "4-5 weeks",
        "181-360": "5-6 weeks",
        "361-720": "6-7 weeks",
        "720+": "7-8 weeks"
      },
      pricing: {
        "60-180": 45.00,
        "181-360": 42.00,
        "361-720": 39.00,
        "720+": 36.00
      },
      features: [
        "3-button placket",
        "Self-fabric collar",
        "Sleeve stripe alignment",
        "Reinforced shoulder seams"
      ],
      category: "womens-polos",
      heritage: "Inspired by French maritime uniforms"
    },
    {
      id: "PO-CP-004",
      name: "Logo Polo",
      image: "/images/products/womens-polos/po-cp-004.jpg",
      images: [
        "/images/products/womens-polos/po-cp-004.jpg",
        "/images/products/womens-polos/po-cp-004-front.jpg",
        "/images/products/womens-polos/po-cp-004-back.jpg",
        "/images/products/womens-polos/po-cp-004-detail.jpg"
      ],
      description: "Clean-lines polo with left chest embroidery zone. Optimal thread count fabric for crisp logo presentation.",
      materials: [
        { 
          name: "Performance Piqué (100% Polyester)", 
          price: 0,
          properties: ["Wrinkle-free", "Easy-care"]
        },
        { 
          name: "Luxury Cotton Mesh", 
          price: 12,
          properties: ["Structured drape", "Premium embroidery surface"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      branding: {
        "Embroidery Area": "3.5x3.5in max",
        "Thread Colors": "Pantone-matched",
        "Location Options": ["Left chest", "Sleeve", "Back yoke"]
      },
      colors: ["Heather Grey", "Navy", "Black", "White"],
      minOrderQuantity: 35,
      leadTimes: {
        "35-105": "5-6 weeks",
        "106-210": "6-7 weeks",
        "211-420": "7-8 weeks",
        "420+": "8-9 weeks"
      },
      pricing: {
        "35-105": 52.00,
        "106-210": 48.00,
        "211-420": 44.00,
        "420+": 40.00
      },
      features: [
        "No-roll collar",
        "Tagless neck label",
        "Double-needle topstitching",
        "Embroidery stabilizer backing"
      ],
      category: "womens-polos",
      minimums: {
        "Custom Logo": "50 pieces",
        "Thread Colors": "3-color maximum standard"
      }
    },
    {
      id: "PO-PP-001",
      name: "Moisture-Wicking Polo",
      image: "/images/products/womens-polos/po-pp-001.jpg",
      images: [
        "/images/products/womens-polos/po-pp-001.jpg",
        "/images/products/womens-polos/po-pp-001-front.jpg",
        "/images/products/womens-polos/po-pp-001-back.jpg",
        "/images/products/womens-polos/po-pp-001-sweat.jpg"
      ],
      description: "Technical polo with laser-perforated back panel and quick-dry fabric. UPF 30+ protection for outdoor performance.",
      materials: [
        { 
          name: "CoolVent™ Polyester", 
          price: 0,
          properties: ["UPF 30+", "0.8L/hr wicking rate"]
        },
        { 
          name: "Bamboo Viscose Blend", 
          price: 8,
          properties: ["Natural antimicrobial", "Softer handfeel"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      techSpecs: {
        "Breathability": "CFM 40+",
        "Dry Time": "<15min (AATCC 201)",
        "Ventilation": "20% perforated surface"
      },
      colors: ["Athletic Grey", "Royal", "Teal", "White"],
      minOrderQuantity: 55,
      leadTimes: {
        "55-165": "4-5 weeks",
        "166-330": "5-6 weeks",
        "331-660": "6-7 weeks",
        "660+": "7-8 weeks"
      },
      pricing: {
        "55-165": 58.00,
        "166-330": 54.00,
        "331-660": 50.00,
        "660+": 46.00
      },
      features: [
        "Raglan sleeves",
        "Thumbhole cuff option",
        "Reflective taping",
        "Anti-odor treatment"
      ],
      category: "womens-polos",
      activities: ["Golf", "Tennis", "Hiking", "Outdoor work"]
    },
    {
      id: "PO-PP-002",
      name: "Golf Polo",
      image: "/images/products/womens-polos/po-pp-002.jpg",
      images: [
        "/images/products/womens-polos/po-pp-002.jpg",
        "/images/products/womens-polos/po-pp-002-front.jpg",
        "/images/products/womens-polos/po-pp-002-back.jpg",
        "/images/products/womens-polos/po-pp-002-swing.jpg"
      ],
      description: "Tour-ready polo with UV-blocking fabric and articulated sleeves for full range of motion. Meets LPGA apparel guidelines.",
      materials: [
        { 
          name: "Micro-Piqué (93% Poly, 7% Spandex)", 
          price: 0,
          properties: ["UPF 50+", "4-way stretch"]
        },
        { 
          name: "Eco-Cool™ Fabric", 
          price: 14,
          properties: ["37% faster drying", "Made from recycled bottles"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      golfFeatures: {
        "Sun Protection": "UPF 50+",
        "Swing Mobility": "Gusseted underarms",
        "Club Wipe": "Integrated towel patch"
      },
      colors: ["Bright White", "Turquoise", "Pink", "Lime"],
      minOrderQuantity: 45,
      leadTimes: {
        "45-135": "5-6 weeks",
        "136-270": "6-7 weeks",
        "271-540": "7-8 weeks",
        "540+": "8-9 weeks"
      },
      pricing: {
        "45-135": 65.00,
        "136-270": 60.00,
        "271-540": 55.00,
        "540+": 50.00
      },
      features: [
        "Vented back yoke",
        "Ball marker holder",
        "No-glare matte buttons",
        "Stretch shoulder panels"
      ],
      category: "womens-polos",
      tournamentApproved: ["LPGA", "USGA", "PGA"]
    },
    {
      id: "PO-PP-003",
      name: "Stretch Fabric Polo",
      image: "/images/products/womens-polos/po-pp-003.jpg",
      images: [
        "/images/products/womens-polos/po-pp-003.jpg",
        "/images/products/womens-polos/po-pp-003-front.jpg",
        "/images/products/womens-polos/po-pp-003-back.jpg",
        "/images/products/womens-polos/po-pp-003-detail.jpg"
      ],
      description: "360° stretch fabric moves with your body while maintaining polished structure. Ideal for healthcare and service professionals.",
      materials: [
        { 
          name: "4-Way Flex Fabric (85% Poly, 15% Spandex)", 
          price: 0,
          properties: ["25% crosswise stretch", "Shape recovery"]
        },
        { 
          name: "Tencel™ Jersey Blend", 
          price: 11,
          properties: ["Biodegradable", "Wrinkle-resistant"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      stretchTech: {
        "Recovery": "95% after 50 washes",
        "Elongation": "30% tested (ASTM D2594)",
        "Compression": "Light support (8-15mmHg)"
      },
      colors: ["Navy", "Burgundy", "Light Blue", "White"],
      minOrderQuantity: 65,
      leadTimes: {
        "65-195": "4-5 weeks",
        "196-390": "5-6 weeks",
        "391-780": "6-7 weeks",
        "780+": "7-8 weeks"
      },
      pricing: {
        "65-195": 55.00,
        "196-390": 51.00,
        "391-780": 47.00,
        "780+": 43.00
      },
      features: [
        "Seamless shoulder construction",
        "Wrinkle-free finish",
        "Tagless neckline",
        "Hidden placket snaps"
      ],
      category: "womens-polos",
      professions: ["Nurses", "Waitstaff", "Teachers", "Retail"]
    },
    {
      id: "PO-PP-004",
      name: "Long Sleeve Polo",
      image: "/images/products/womens-polos/po-pp-004.jpg",
      images: [
        "/images/products/womens-polos/po-pp-004.jpg",
        "/images/products/womens-polos/po-pp-004-front.jpg",
        "/images/products/womens-polos/po-pp-004-back.jpg",
        "/images/products/womens-polos/po-pp-004-detail.jpg"
      ],
      description: "Ribbed cuff long sleeve version with extended collar stand. Brushed interior for warmth in cooler months.",
      materials: [
        { 
          name: "Heavyweight Piqué (100% Cotton)", 
          price: 0,
          properties: ["Brushed interior", "340GSM"]
        },
        { 
          name: "Cashmere-Blend Jersey", 
          price: 25,
          properties: ["Luxury handfeel", "Temperature-regulating"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      sleeveDetails: {
        "Cuff": "1x1 rib knit",
        "Length": "24in from shoulder",
        "Feature": "Button-tab adjustability"
      },
      colors: ["Charcoal", "Camel", "Bottle Green", "Cream"],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "6-7 weeks",
        "121-240": "7-8 weeks",
        "241-480": "8-9 weeks",
        "480+": "9-10 weeks"
      },
      pricing: {
        "40-120": 68.00,
        "121-240": 63.00,
        "241-480": 58.00,
        "480+": 54.00
      },
      features: [
        "Extended collar stand",
        "Interior storm placket",
        "Elbow dart shaping",
        "Dual side vents"
      ],
      category: "womens-polos",
      seasonal: ["Fall", "Winter", "Early Spring"]
    }
  ],
  'womens-sweatshirts': [
    {
      id: "SS-CN-001",
      name: "Basic Crew Sweatshirt",
      image: "/images/products/womens-sweatshirts/ss-cn-001.jpg",
      images: [
        "/images/products/womens-sweatshirts/ss-cn-001.jpg",
        "/images/products/womens-sweatshirts/ss-cn-001-front.jpg",
        "/images/products/womens-sweatshirts/ss-cn-001-back.jpg",
        "/images/products/womens-sweatshirts/ss-cn-001-detail.jpg"
      ],
      description: "Classic crewneck sweatshirt with ribbed trim and relaxed fit. Made from premium loopback cotton for year-round comfort.",
      materials: [
        { 
          name: "12oz Loopback Cotton", 
          price: 0,
          properties: ["Breathable", "Pre-shrunk", "Brushed interior"]
        },
        { 
          name: "Organic Cotton Fleece", 
          price: 8,
          properties: ["GOTS Certified", "Softer handfeel", "Eco-friendly dyes"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      fit: {
        "Silhouette": "Regular fit",
        "Length": "24in back/22in front",
        "Sleeves": "Raglan construction"
      },
      colors: ["Heather Grey", "Black", "Oatmeal", "Dusty Pink"],
      minOrderQuantity: 60,
      leadTimes: {
        "60-180": "4-5 weeks",
        "181-360": "5-6 weeks",
        "361-720": "6-7 weeks",
        "720+": "7-8 weeks"
      },
      pricing: {
        "60-180": 38.00,
        "181-360": 35.00,
        "361-720": 32.00,
        "720+": 29.00
      },
      features: [
        "Double-needle stitching",
        "Self-fabric ribbing",
        "Reinforced shoulder seams",
        "Tagless label"
      ],
      category: "womens-sweatshirts",
      weight: "Medium (320GSM)"
    },
    {
      id: "SS-CN-002",
      name: "Graphic Sweatshirt",
      image: "/images/products/womens-sweatshirts/ss-cn-002.jpg",
      images: [
        "/images/products/womens-sweatshirts/ss-cn-002.jpg",
        "/images/products/womens-sweatshirts/ss-cn-002-front.jpg",
        "/images/products/womens-sweatshirts/ss-cn-002-back.jpg",
        "/images/products/womens-sweatshirts/ss-cn-002-detail.jpg"
      ],
      description: "Oversized fit sweatshirt with distressed graphic print and dropped shoulders for urban edge.",
      materials: [
        { 
          name: "10oz Cotton/Poly Blend", 
          price: 0,
          properties: ["Pre-washed softness", "Anti-pill treatment"]
        },
        { 
          name: "Recycled French Terry", 
          price: 6,
          properties: ["30% post-consumer waste", "Eco-conscious"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      graphics: {
        "Print Method": "Water-based ink",
        "Placement": "Center chest (12x12in max)",
        "Options": ["Vintage band logos", "Abstract art", "Custom designs (+$5)"]
      },
      colors: ["Black", "Charcoal", "Cream", "Army Green"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "5-6 weeks",
        "151-300": "6-7 weeks",
        "301-600": "7-8 weeks",
        "600+": "8-9 weeks"
      },
      pricing: {
        "50-150": 45.00,
        "151-300": 42.00,
        "301-600": 39.00,
        "600+": 36.00
      },
      features: [
        "Distressed print effect",
        "Kangaroo pocket",
        "Raw edge hem",
        "Slightly cropped length"
      ],
      category: "womens-sweatshirts",
      style: ["Streetwear", "Skate culture", "90s retro"]
    },
    {
      id: "SS-CN-003",
      name: "Fleece Sweatshirt",
      image: "/images/products/womens-sweatshirts/ss-cn-003.jpg",
      images: [
        "/images/products/womens-sweatshirts/ss-cn-003.jpg",
        "/images/products/womens-sweatshirts/ss-cn-003-front.jpg",
        "/images/products/womens-sweatshirts/ss-cn-003-back.jpg",
        "/images/products/womens-sweatshirts/ss-cn-003-lining.jpg"
      ],
      description: "Brushed interior fleece with thermal properties for cold weather. Features thumbhole cuffs and adjustable drawcord hem.",
      materials: [
        { 
          name: "300GSM Polyester Fleece", 
          price: 0,
          properties: ["Wind-resistant", "Quick-drying"]
        },
        { 
          name: "Sherpa-Lined Fleece", 
          price: 12,
          properties: ["Ultra-plush interior", "Enhanced warmth"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      warmth: {
        "Rating": "0°C to 10°C comfort",
        "Technology": "Thermolite® insulation",
        "Breathability": "Medium (CFM 20)"
      },
      colors: ["Navy", "Burgundy", "Camel", "Black"],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "6-7 weeks",
        "121-240": "7-8 weeks",
        "241-480": "8-9 weeks",
        "480+": "9-10 weeks"
      },
      pricing: {
        "40-120": 58.00,
        "121-240": 54.00,
        "241-480": 50.00,
        "480+": 46.00
      },
      features: [
        "Raglan sleeves",
        "Hidden phone pocket",
        "Interior chin guard",
        "Anti-static treatment"
      ],
      category: "womens-sweatshirts",
      activities: ["Winter sports", "Outdoor workouts", "Casual wear"]
    },
    {
      id: "SS-CN-004",
      name: "Vintage Wash Sweatshirt",
      image: "/images/products/womens-sweatshirts/ss-cn-004.jpg",
      images: [
        "/images/products/womens-sweatshirts/ss-cn-004.jpg",
        "/images/products/womens-sweatshirts/ss-cn-004-front.jpg",
        "/images/products/womens-sweatshirts/ss-cn-004-back.jpg",
        "/images/products/womens-sweatshirts/ss-cn-004-detail.jpg"
      ],
      description: "Garment-dyed sweatshirt with authentic wear patterns and softened handfeel for instant vintage appeal.",
      materials: [
        { 
          name: "100% Ring-Spun Cotton", 
          price: 0,
          properties: ["Pre-shrunk", "Stone washed"]
        },
        { 
          name: "Upcycled Cotton Blend", 
          price: 7,
          properties: ["40% recycled content", "Lower environmental impact"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      washEffects: [
        "Light stone wash",
        "Heavy distressing (+$4)",
        "Overdyed (+$6)",
        "Custom bleach patterns (+$8)"
      ],
      colors: ["Faded Black", "Vintage White", "Sunbleached Blue", "Rose Wash"],
      minOrderQuantity: 35,
      leadTimes: {
        "35-105": "7-8 weeks",
        "106-210": "8-9 weeks",
        "211-420": "9-10 weeks",
        "420+": "10-11 weeks"
      },
      pricing: {
        "35-105": 52.00,
        "106-210": 48.00,
        "211-420": 44.00,
        "420+": 40.00
      },
      features: [
        "Reinforced elbow patches",
        "Frayed collar detailing",
        "Yarn-dyed ribbing",
        "Asymmetrical hem"
      ],
      category: "womens-sweatshirts",
      distressing: {
        "Techniques": ["Hand sanding", "Ozone washing", "Enzyme softening"]
      }
    },
    {
      id: "SS-QZ-001",
      name: "Classic Quarter-Zip",
      image: "/images/products/womens-sweatshirts/ss-qz-001.jpg",
      images: [
        "/images/products/womens-sweatshirts/ss-qz-001.jpg",
        "/images/products/womens-sweatshirts/ss-qz-001-front.jpg",
        "/images/products/womens-sweatshirts/ss-qz-001-back.jpg",
        "/images/products/womens-sweatshirts/ss-qz-001-detail.jpg"
      ],
      description: "Mid-weight quarter-zip with stand-up collar and raglan sleeves. Perfect for transitional weather layering.",
      materials: [
        { 
          name: "Cotton/Poly French Terry", 
          price: 0,
          properties: ["Breathable", "Durable"]
        },
        { 
          name: "Merino Wool Blend", 
          price: 18,
          properties: ["Natural odor resistance", "Temperature regulating"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      zipDetails: {
        "Type": "YKK Vislon zipper",
        "Cover": "Chin guard",
        "Length": "8in from neck"
      },
      colors: ["Charcoal", "Navy", "Burgundy", "Cream"],
      minOrderQuantity: 45,
      leadTimes: {
        "45-135": "5-6 weeks",
        "136-270": "6-7 weeks",
        "271-540": "7-8 weeks",
        "540+": "8-9 weeks"
      },
      pricing: {
        "45-135": 55.00,
        "136-270": 51.00,
        "271-540": 47.00,
        "540+": 43.00
      },
      features: [
        "Stand-up collar",
        "Thumbhole cuffs",
        "Hidden inner pocket",
        "Flatlock seams"
      ],
      category: "womens-sweatshirts",
      weight: "Mid-weight (280GSM)"
    },
    {
      id: "SS-QZ-002",
      name: "Fleece Quarter-Zip",
      image: "/images/products/womens-sweatshirts/ss-qz-002.jpg",
      images: [
        "/images/products/womens-sweatshirts/ss-qz-002.jpg",
        "/images/products/womens-sweatshirts/ss-qz-002-front.jpg",
        "/images/products/womens-sweatshirts/ss-qz-002-back.jpg",
        "/images/products/womens-sweatshirts/ss-qz-002-lining.jpg"
      ],
      description: "High-pile fleece interior with wind-resistant outer face. Articulated elbows for active movement.",
      materials: [
        { 
          name: "Polartec® Thermal Pro", 
          price: 0,
          properties: ["Retains warmth when wet", "Highly breathable"]
        },
        { 
          name: "Recycled Polar Fleece", 
          price: 10,
          properties: ["50% post-consumer materials", "Bluesign® approved"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      thermal: {
        "Warmth-to-Weight": "0.85 clo",
        "Moisture Wicking": "0.5L/hr",
        "Wind Resistance": "15mph"
      },
      colors: ["Black", "Hunter Green", "Cranberry", "Graphite"],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "6-7 weeks",
        "121-240": "7-8 weeks",
        "241-480": "8-9 weeks",
        "480+": "9-10 weeks"
      },
      pricing: {
        "40-120": 68.00,
        "121-240": 63.00,
        "241-480": 58.00,
        "480+": 54.00
      },
      features: [
        "Zippered chest pocket",
        "Internal media port",
        "Adjustable hem drawcord",
        "Reflective logo"
      ],
      category: "womens-sweatshirts",
      idealFor: ["Skiing", "Winter running", "Outdoor work"]
    },
    {
      id: "SS-QZ-003",
      name: "Performance Quarter-Zip",
      image: "/images/products/womens-sweatshirts/ss-qz-003.jpg",
      images: [
        "/images/products/womens-sweatshirts/ss-qz-003.jpg",
        "/images/products/womens-sweatshirts/ss-qz-003-front.jpg",
        "/images/products/womens-sweatshirts/ss-qz-003-back.jpg",
        "/images/products/womens-sweatshirts/ss-qz-003-detail.jpg"
      ],
      description: "Slim-fit moisture-wicking quarter-zip with laser-cut ventilation zones for high-intensity training.",
      materials: [
        { 
          name: "92% Polyester/8% Spandex", 
          price: 0,
          properties: ["UPF 30+", "4-way stretch"]
        },
        { 
          name: "Coolmax® Ecomade", 
          price: 12,
          properties: ["37% faster drying", "Oeko-Tex certified"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      performance: {
        "Breathability": "CFM 50+",
        "Moisture Wicking": "AATCC 195 compliant",
        "Stretch Recovery": "90% after 50 washes"
      },
      colors: ["Black", "Royal Blue", "Electric Pink", "Silver Grey"],
      minOrderQuantity: 55,
      leadTimes: {
        "55-165": "4-5 weeks",
        "166-330": "5-6 weeks",
        "331-660": "6-7 weeks",
        "660+": "7-8 weeks"
      },
      pricing: {
        "55-165": 65.00,
        "166-330": 60.00,
        "331-660": 55.00,
        "660+": 50.00
      },
      features: [
        "Perforated back panel",
        "Hidden earbud port",
        "Anti-snag zipper garage",
        "Thumbhole cuffs"
      ],
      category: "womens-sweatshirts",
      activities: ["Running", "Cycling", "HIIT", "Tennis"]
    },
    {
      id: "SS-QZ-004",
      name: "Pullover Quarter-Zip",
      image: "/images/products/womens-sweatshirts/ss-qz-004.jpg",
      images: [
        "/images/products/womens-sweatshirts/ss-qz-004.jpg",
        "/images/products/womens-sweatshirts/ss-qz-004-front.jpg",
        "/images/products/womens-sweatshirts/ss-qz-004-back.jpg",
        "/images/products/womens-sweatshirts/ss-qz-004-detail.jpg"
      ],
      description: "Streamlined quarter-zip pullover with hidden placket for clean lines. Brushed interior for lightweight warmth.",
      materials: [
        { 
          name: "Cotton Modal Blend", 
          price: 0,
          properties: ["Breathable", "Drapes well"]
        },
        { 
          name: "Tencel™ Fleece", 
          price: 14,
          properties: ["Biodegradable", "Silk-like handfeel"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      design: {
        "Closure": "Magnetic snap placket",
        "Collar": "Stand-up/mock neck convertible",
        "Seams": "Minimal topstitching"
      },
      colors: ["Oatmeal", "Slate Blue", "Taupe", "White"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "5-6 weeks",
        "151-300": "6-7 weeks",
        "301-600": "7-8 weeks",
        "600+": "8-9 weeks"
      },
      pricing: {
        "50-150": 58.00,
        "151-300": 54.00,
        "301-600": 50.00,
        "600+": 46.00
      },
      features: [
        "Hidden inner pocket",
        "Ribbed side panels",
        "Tagless neckline",
        "Eco-friendly dyes"
      ],
      category: "womens-sweatshirts",
      style: ["Minimalist", "Capsule wardrobe", "Workwear chic"]
    }                        
  ],
  'womens-sweaters': [
    {
      id: "WSW-CD-001",
      name: "Button-Up Cardigan",
      image: "/images/products/womens-sweaters/wsw-cd-001.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-cd-001.jpg",
        "/images/products/womens-sweaters/wsw-cd-001-buttons.jpg"
      ],
      description: "Classic button-up cardigan with a flattering fit and versatile styling. Features button closure and ribbed trim for a polished, professional look.",
      materials: [
        { name: "Acrylic Blend", price: 0 },
        { name: "Cotton Blend (60/40)", price: 8 },
        { name: "Merino Wool Blend", price: 18 },
        { name: "Cashmere Blend", price: 35 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Cream", "Grey", "Camel", "Dusty Rose"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "4-5 weeks",
        "145-360": "5-6 weeks",
        "360+": "6-7 weeks"
      },
      pricing: {
        "36-144": 32.00,
        "145-360": 29.50,
        "360+": 26.50
      },
      features: ["Button-front closure", "Ribbed cuffs and hem", "Two front pockets", "Classic fit", "V-neckline"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-CD-002",
      name: "Open Front Cardigan",
      image: "/images/products/womens-sweaters/wsw-cd-002.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-cd-002.jpg",
        "/images/products/womens-sweaters/wsw-cd-002-drape.jpg"
      ],
      description: "Effortless open-front cardigan with a relaxed drape. Perfect for layering with a flowing silhouette that flatters all body types.",
      materials: [
        { name: "Soft Acrylic", price: 0 },
        { name: "Viscose Blend", price: 10 },
        { name: "Bamboo Blend", price: 15 },
        { name: "Modal Cotton Blend", price: 20 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Charcoal", "Oatmeal", "Sage Green", "Mauve", "Ivory", "Black"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 28.00,
        "145-360": 25.50,
        "360+": 23.00
      },
      features: ["Open front design", "Relaxed fit", "Flowing drape", "Long sleeves", "Hip length"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-CD-003",
      name: "Chunky Knit Cardigan",
      image: "/images/products/womens-sweaters/wsw-cd-003.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-cd-003.jpg",
        "/images/products/womens-sweaters/wsw-cd-003-texture.jpg"
      ],
      description: "Cozy chunky knit cardigan with oversized styling. Features thick knit construction and relaxed fit perfect for cold weather comfort.",
      materials: [
        { name: "Chunky Acrylic", price: 0 },
        { name: "Wool Acrylic Blend", price: 12 },
        { name: "Alpaca Blend", price: 28 },
        { name: "Pure Wool Chunky", price: 40 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Cream", "Camel", "Forest Green", "Burgundy", "Grey Heather", "Blush"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-96": "5-6 weeks",
        "97-240": "6-7 weeks",
        "240+": "7-8 weeks"
      },
      pricing: {
        "24-96": 45.00,
        "97-240": 42.00,
        "240+": 38.50
      },
      features: ["Chunky knit texture", "Oversized fit", "Button closure", "Cozy warmth", "Statement piece"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-CD-004",
      name: "Longline Cardigan",
      image: "/images/products/womens-sweaters/wsw-cd-004.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-cd-004.jpg",
        "/images/products/womens-sweaters/wsw-cd-004-length.jpg"
      ],
      description: "Elegant longline cardigan that extends past the hip for a sophisticated silhouette. Perfect for creating polished layered looks.",
      materials: [
        { name: "Fine Gauge Acrylic", price: 0 },
        { name: "Cotton Cashmere Feel", price: 15 },
        { name: "Merino Wool", price: 25 },
        { name: "Luxury Cashmere Blend", price: 45 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Camel", "Stone Grey", "Ivory", "Dusty Pink"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-96": "4-5 weeks",
        "97-240": "5-6 weeks",
        "240+": "6-7 weeks"
      },
      pricing: {
        "24-96": 38.00,
        "97-240": 35.50,
        "240+": 32.00
      },
      features: ["Longline silhouette", "Open front", "Side slits", "Elegant drape", "Versatile layering"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-PO-001",
      name: "Crew Neck Pullover",
      image: "/images/products/womens-sweaters/wsw-po-001.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-po-001.jpg",
        "/images/products/womens-sweaters/wsw-po-001-fit.jpg"
      ],
      description: "Classic crew neck pullover with a comfortable regular fit. Essential wardrobe staple that pairs well with any bottom for casual or smart-casual wear.",
      materials: [
        { name: "Cotton Acrylic Blend", price: 0 },
        { name: "Pima Cotton Blend", price: 12 },
        { name: "Merino Wool", price: 22 },
        { name: "Organic Cotton Blend", price: 18 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Navy", "Grey Heather", "Burgundy", "Forest Green"],
      minOrderQuantity: 48,
      leadTimes: {
        "48-192": "3-4 weeks",
        "193-480": "4-5 weeks",
        "480+": "5-6 weeks"
      },
      pricing: {
        "48-192": 24.00,
        "193-480": 22.00,
        "480+": 19.50
      },
      features: ["Classic crew neckline", "Regular fit", "Ribbed trim", "Easy care", "Wardrobe essential"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-PO-002",
      name: "V-Neck Pullover",
      image: "/images/products/womens-sweaters/wsw-po-002.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-po-002.jpg",
        "/images/products/womens-sweaters/wsw-po-002-vneck.jpg"
      ],
      description: "Flattering V-neck pullover that elongates the neckline. Features a feminine silhouette perfect for layering over blouses or wearing alone.",
      materials: [
        { name: "Soft Touch Acrylic", price: 0 },
        { name: "Cotton Blend", price: 10 },
        { name: "Cashmere Feel Blend", price: 20 },
        { name: "Pure Cashmere", price: 55 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Cream", "Black", "Navy", "Soft Pink", "Lavender", "Camel"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 26.00,
        "145-360": 24.00,
        "360+": 21.50
      },
      features: ["Flattering V-neckline", "Feminine fit", "Lightweight knit", "Layering friendly", "Versatile styling"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-PO-003",
      name: "Turtleneck Sweater",
      image: "/images/products/womens-sweaters/wsw-po-003.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-po-003.jpg",
        "/images/products/womens-sweaters/wsw-po-003-neck.jpg"
      ],
      description: "Sophisticated turtleneck sweater with a high folded collar. Offers warmth and elegance with a slim fit that works for both casual and professional settings.",
      materials: [
        { name: "Fine Gauge Acrylic", price: 0 },
        { name: "Modal Blend", price: 12 },
        { name: "Merino Wool", price: 25 },
        { name: "Cashmere Silk Blend", price: 50 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Cream", "Navy", "Charcoal", "Wine", "Camel"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "4-5 weeks",
        "145-360": "5-6 weeks",
        "360+": "6-7 weeks"
      },
      pricing: {
        "36-144": 30.00,
        "145-360": 27.50,
        "360+": 25.00
      },
      features: ["High turtleneck collar", "Slim fit", "Sophisticated style", "Warm coverage", "Professional look"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-PO-004",
      name: "Cable Knit Sweater",
      image: "/images/products/womens-sweaters/wsw-po-004.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-po-004.jpg",
        "/images/products/womens-sweaters/wsw-po-004-cable.jpg"
      ],
      description: "Traditional cable knit sweater with intricate braided pattern details. Features timeless Aran-style knitting for a classic, cozy aesthetic.",
      materials: [
        { name: "Acrylic Wool Feel", price: 0 },
        { name: "Cotton Wool Blend", price: 15 },
        { name: "Pure Wool", price: 30 },
        { name: "Irish Wool", price: 45 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Fisherman Cream", "Heather Grey", "Navy", "Forest Green", "Burgundy", "Natural"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-96": "5-6 weeks",
        "97-240": "6-7 weeks",
        "240+": "7-8 weeks"
      },
      pricing: {
        "24-96": 42.00,
        "97-240": 39.00,
        "240+": 35.50
      },
      features: ["Cable knit pattern", "Traditional styling", "Crew neckline", "Cozy warmth", "Textured design"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-PO-005",
      name: "Cropped Sweater",
      image: "/images/products/womens-sweaters/wsw-po-005.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-po-005.jpg",
        "/images/products/womens-sweaters/wsw-po-005-crop.jpg"
      ],
      description: "Trendy cropped sweater that hits at the waist. Perfect for pairing with high-waisted bottoms and creating modern, youthful silhouettes.",
      materials: [
        { name: "Soft Cotton Blend", price: 0 },
        { name: "Ribbed Knit Blend", price: 8 },
        { name: "Cashmere Feel", price: 18 },
        { name: "Organic Cotton", price: 15 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Blush Pink", "Sage Green", "Lavender", "Camel"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 22.00,
        "145-360": 20.00,
        "360+": 18.00
      },
      features: ["Cropped length", "Modern silhouette", "Crew neckline", "Trendy styling", "High-waist friendly"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-PO-006",
      name: "Oversized Sweater",
      image: "/images/products/womens-sweaters/wsw-po-006.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-po-006.jpg",
        "/images/products/womens-sweaters/wsw-po-006-oversized.jpg"
      ],
      description: "Cozy oversized sweater with relaxed, boyfriend-style fit. Features dropped shoulders and loose silhouette for ultimate comfort and casual styling.",
      materials: [
        { name: "Chunky Acrylic", price: 0 },
        { name: "Cotton Fleece Blend", price: 12 },
        { name: "Wool Blend", price: 20 },
        { name: "Alpaca Blend", price: 35 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Oatmeal", "Charcoal", "Cream", "Dusty Rose", "Sage", "Camel"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-96": "4-5 weeks",
        "97-240": "5-6 weeks",
        "240+": "6-7 weeks"
      },
      pricing: {
        "24-96": 35.00,
        "97-240": 32.50,
        "240+": 29.00
      },
      features: ["Oversized fit", "Dropped shoulders", "Relaxed styling", "Cozy comfort", "Casual aesthetic"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-PO-007",
      name: "Mock Neck Sweater",
      image: "/images/products/womens-sweaters/wsw-po-007.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-po-007.jpg",
        "/images/products/womens-sweaters/wsw-po-007-mockneck.jpg"
      ],
      description: "Modern mock neck sweater with a shorter collar than a traditional turtleneck. Offers neck coverage with a contemporary, minimalist aesthetic.",
      materials: [
        { name: "Fine Rib Knit", price: 0 },
        { name: "Merino Wool Blend", price: 18 },
        { name: "Cashmere Touch", price: 25 },
        { name: "Bamboo Blend", price: 20 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Grey", "Navy", "Camel", "Olive"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 28.00,
        "145-360": 25.50,
        "360+": 23.00
      },
      features: ["Mock neckline", "Slim fit", "Modern styling", "Versatile wear", "Minimalist design"],
      category: "womens-sweaters"
    },
    {
      id: "WSW-PO-008",
      name: "Wrap Sweater",
      image: "/images/products/womens-sweaters/wsw-po-008.jpg",
      images: [
        "/images/products/womens-sweaters/wsw-po-008.jpg",
        "/images/products/womens-sweaters/wsw-po-008-wrap.jpg"
      ],
      description: "Feminine wrap sweater with tie closure at the waist. Creates a flattering silhouette with adjustable fit and elegant draping.",
      materials: [
        { name: "Soft Knit Blend", price: 0 },
        { name: "Modal Cotton", price: 12 },
        { name: "Viscose Blend", price: 15 },
        { name: "Cashmere Feel Blend", price: 25 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Burgundy", "Emerald", "Blush", "Camel"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-96": "4-5 weeks",
        "97-240": "5-6 weeks",
        "240+": "6-7 weeks"
      },
      pricing: {
        "24-96": 34.00,
        "97-240": 31.50,
        "240+": 28.50
      },
      features: ["Wrap front design", "Tie waist closure", "Flattering silhouette", "V-neckline", "Feminine styling"],
      category: "womens-sweaters"
    }
  ],
  'womens-hoodies': [
    {
      "id": "HD-PO-001",
      "name": "Basic Pullover Hoodie",
      "image": "/images/products/womens-hoodies/hd-po-001.jpg",
      "images": [
        "/images/products/womens-hoodies/hd-po-001.jpg",
        "/images/products/womens-hoodies/hd-po-001-hood.jpg"
      ],
      "description": "Classic pullover hoodie with kangaroo pocket and adjustable drawstring hood. Essential comfort wear for everyday casual styling.",
      "materials": [
        { "name": "Cotton-Polyester Fleece", "price": 0 },
        { "name": "French Terry Cotton", "price": 3.0 },
        { "name": "Organic Cotton Blend", "price": 4.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "Gray", "Navy", "White", "Pink", "Sage Green", "Burgundy", "Heather Gray"],
      "minOrderQuantity": 24,
      "leadTimes": {
        "24-100": "2-3 weeks",
        "101-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      "pricing": {
        "24-100": 28.00,
        "101-300": 25.00,
        "300+": 22.00
      },
      "features": ["Kangaroo pocket", "Drawstring hood", "Ribbed cuffs", "Preshrunk fabric"],
      "category": "womens-hoodies"
    },
    {
      "id": "HD-PO-002",
      "name": "Graphic Hoodie",
      "image": "/images/products/womens-hoodies/hd-po-002.jpg",
      "images": [
        "/images/products/womens-hoodies/hd-po-002.jpg",
        "/images/products/womens-hoodies/hd-po-002-print.jpg"
      ],
      "description": "Trendy graphic hoodie perfect for custom designs and brand promotion. Premium canvas for screen printing and embroidery applications.",
      "materials": [
        { "name": "Cotton-Polyester Blend", "price": 0 },
        { "name": "Ring-Spun Cotton Mix", "price": 2.5 },
        { "name": "Tri-Blend Fleece", "price": 3.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "White", "Heather Gray", "Navy", "Forest Green", "Maroon", "Royal Blue", "Charcoal"],
      "minOrderQuantity": 18,
      "leadTimes": {
        "18-75": "2-3 weeks",
        "76-200": "3-4 weeks",
        "200+": "4-5 weeks"
      },
      "pricing": {
        "18-75": 32.00,
        "76-200": 28.50,
        "200+": 25.00
      },
      "features": ["Print-ready surface", "Double-lined hood", "Pouch pocket", "Tear-away label"],
      "category": "womens-hoodies"
    },
    {
      "id": "HD-PO-003",
      "name": "Fleece-Lined Hoodie",
      "image": "/images/products/womens-hoodies/hd-po-003.jpg",
      "images": [
        "/images/products/womens-hoodies/hd-po-003.jpg",
        "/images/products/womens-hoodies/hd-po-003-fleece.jpg"
      ],
      "description": "Ultra-warm fleece-lined hoodie for maximum comfort in cold weather. Soft brushed interior provides superior insulation and coziness.",
      "materials": [
        { "name": "Cotton-Poly Fleece Lined", "price": 0 },
        { "name": "Sherpa Fleece Interior", "price": 5.0 },
        { "name": "Plush Fleece Lining", "price": 4.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "Charcoal", "Navy", "Cream", "Dusty Rose", "Olive", "Wine"],
      "minOrderQuantity": 20,
      "leadTimes": {
        "20-80": "3-4 weeks",
        "81-200": "4-5 weeks",
        "200+": "5-6 weeks"
      },
      "pricing": {
        "20-80": 38.00,
        "81-200": 34.00,
        "200+": 30.00
      },
      "features": ["Fleece-lined interior", "Thermal insulation", "Adjustable hood", "Thumb holes"],
      "category": "womens-hoodies"
    },
    {
      "id": "HD-PO-004",
      "name": "Oversized Hoodie",
      "image": "/images/products/womens-hoodies/hd-po-004.jpg",
      "images": [
        "/images/products/womens-hoodies/hd-po-004.jpg",
        "/images/products/womens-hoodies/hd-po-004-fit.jpg"
      ],
      "description": "Trendy oversized hoodie with relaxed fit and street-style appeal. Perfect for layering and contemporary casual fashion.",
      "materials": [
        { "name": "Heavy Cotton Blend", "price": 0 },
        { "name": "Vintage Fleece", "price": 3.0 },
        { "name": "Premium Cotton Terry", "price": 5.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Sand", "Black", "Cream", "Sage", "Mauve", "Charcoal", "Camel", "Stone Gray"],
      "minOrderQuantity": 16,
      "leadTimes": {
        "16-60": "2-3 weeks",
        "61-150": "3-4 weeks",
        "150+": "4-5 weeks"
      },
      "pricing": {
        "16-60": 35.00,
        "61-150": 31.50,
        "150+": 28.00
      },
      "features": ["Oversized fit", "Drop shoulders", "Extended length", "Vintage styling"],
      "category": "womens-hoodies"
    },
    {
      "id": "HD-ZU-001",
      "name": "Full-Zip Hoodie",
      "image": "/images/products/womens-hoodies/hd-zu-001.jpg",
      "images": [
        "/images/products/womens-hoodies/hd-zu-001.jpg",
        "/images/products/womens-hoodies/hd-zu-001-zip.jpg"
      ],
      "description": "Classic full-zip hoodie with front pockets and comfortable fit. Versatile layering piece perfect for active and casual wear.",
      "materials": [
        { "name": "Cotton-Polyester Fleece", "price": 0 },
        { "name": "French Terry", "price": 2.5 },
        { "name": "Organic Cotton Blend", "price": 4.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "Navy", "Gray", "White", "Pink", "Lavender", "Forest Green", "Burgundy"],
      "minOrderQuantity": 20,
      "leadTimes": {
        "20-100": "2-3 weeks",
        "101-250": "3-4 weeks",
        "250+": "4-5 weeks"
      },
      "pricing": {
        "20-100": 32.00,
        "101-250": 28.50,
        "250+": 25.50
      },
      "features": ["Full-length zipper", "Front pockets", "Ribbed hem", "YKK zipper"],
      "category": "womens-hoodies"
    },
    {
      "id": "HD-ZU-002",
      "name": "Lightweight Zip Hoodie",
      "image": "/images/products/womens-hoodies/hd-zu-002.jpg",
      "images": [
        "/images/products/womens-hoodies/hd-zu-002.jpg",
        "/images/products/womens-hoodies/hd-zu-002-detail.jpg"
      ],
      "description": "Lightweight zip hoodie perfect for transitional weather and layering. Breathable fabric ideal for active wear and mild climates.",
      "materials": [
        { "name": "Cotton-Modal Blend", "price": 0 },
        { "name": "Bamboo-Cotton Mix", "price": 3.0 },
        { "name": "Organic Cotton Jersey", "price": 3.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["White", "Light Gray", "Mint", "Coral", "Sky Blue", "Lavender", "Sage", "Blush"],
      "minOrderQuantity": 24,
      "leadTimes": {
        "24-120": "2-3 weeks",
        "121-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      "pricing": {
        "24-120": 26.00,
        "121-300": 23.00,
        "300+": 20.50
      },
      "features": ["Lightweight fabric", "Breathable construction", "Slim fit", "Moisture-wicking"],
      "category": "womens-hoodies"
    },
    {
      "id": "HD-ZU-003",
      "name": "Tech Fleece Zip Hoodie",
      "image": "/images/products/womens-hoodies/hd-zu-003.jpg",
      "images": [
        "/images/products/womens-hoodies/hd-zu-003.jpg",
        "/images/products/womens-hoodies/hd-zu-003-tech.jpg"
      ],
      "description": "High-performance tech fleece hoodie with moisture-wicking properties. Engineered for athletic performance and modern lifestyle.",
      "materials": [
        { "name": "Tech Fleece Polyester", "price": 0 },
        { "name": "Performance Fleece Blend", "price": 4.0 },
        { "name": "Merino Wool Tech", "price": 8.0 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "Charcoal", "Navy", "White", "Heather Gray", "Deep Teal", "Burgundy"],
      "minOrderQuantity": 18,
      "leadTimes": {
        "18-75": "3-4 weeks",
        "76-200": "4-5 weeks",
        "200+": "5-6 weeks"
      },
      "pricing": {
        "18-75": 45.00,
        "76-200": 40.00,
        "200+": 36.00
      },
      "features": ["Moisture-wicking", "Quick-dry fabric", "Athletic fit", "Reflective details"],
      "category": "womens-hoodies"
    },
    {
      "id": "HD-ZU-004",
      "name": "Sherpa-Lined Zip Hoodie",
      "image": "/images/products/womens-hoodies/hd-zu-004.jpg",
      "images": [
        "/images/products/womens-hoodies/hd-zu-004.jpg",
        "/images/products/womens-hoodies/hd-zu-004-sherpa.jpg"
      ],
      "description": "Premium sherpa-lined zip hoodie for ultimate warmth and luxury comfort. Perfect for cold weather and outdoor activities.",
      "materials": [
        { "name": "Cotton-Sherpa Lined", "price": 0 },
        { "name": "Premium Sherpa Fleece", "price": 6.0 },
        { "name": "Organic Cotton-Sherpa", "price": 7.5 }
      ],
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "colors": ["Black", "Cream", "Charcoal", "Navy", "Camel", "Forest Green", "Wine"],
      "minOrderQuantity": 12,
      "leadTimes": {
        "12-50": "3-4 weeks",
        "51-120": "4-5 weeks",
        "120+": "5-6 weeks"
      },
      "pricing": {
        "12-50": 52.00,
        "51-120": 46.00,
        "120+": 42.00
      },
      "features": ["Sherpa fleece lining", "Premium warmth", "Heavy-duty zipper", "Wind-resistant"],
      "category": "womens-hoodies"
    }                   
  ],
  'womens-bottoms': [
    {
      id: "WJN-MJ-001",
      name: "Straight Fit Jeans",
      image: "/images/products/womens-bottoms/wjn-mj-001.jpg",
      images: [
        "/images/products/womens-bottoms/wjn-mj-001.jpg",
        "/images/products/womens-bottoms/wjn-mj-001-back.jpg"
      ],
      description: "Classic straight-leg jeans with a timeless silhouette. Features a comfortable mid-rise waist and versatile fit that flatters all body types.",
      materials: [
        { name: "100% Cotton Denim", price: 0 },
        { name: "Cotton Stretch Blend (98/2)", price: 5 },
        { name: "Comfort Stretch (94/5/1)", price: 8 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["28", "30", "32", "34"],
      colors: ["Medium Wash", "Dark Indigo", "Light Blue", "Black", "White"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 28.50,
        "145-360": 26.00,
        "360+": 23.50
      },
      features: ["Mid-rise waist", "Five-pocket styling", "Button and zip closure", "Belt loops", "Classic straight leg"],
      category: "womens-bottoms"
    },
    {
      id: "WJN-MJ-002",
      name: "Slim Fit Jeans",
      image: "/images/products/womens-bottoms/wjn-mj-002.jpg",
      images: [
        "/images/products/womens-bottoms/wjn-mj-002.jpg",
        "/images/products/womens-bottoms/wjn-mj-002-side.jpg"
      ],
      description: "Modern slim-fit jeans with a tailored silhouette through the hip and thigh. Tapers down to a sleek ankle opening for a contemporary look.",
      materials: [
        { name: "Stretch Denim (92/6/2)", price: 0 },
        { name: "Premium Stretch (90/8/2)", price: 7 },
        { name: "Recovery Stretch", price: 12 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["28", "30", "32", "34"],
      colors: ["Dark Wash", "Medium Blue", "Black", "Grey", "Navy"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 32.00,
        "145-360": 29.50,
        "360+": 26.50
      },
      features: ["Slim through hip and thigh", "Tapered leg", "Mid-rise", "Stretch comfort", "Modern fit"],
      category: "womens-bottoms"
    },
    {
      id: "WJN-MJ-003",
      name: "Relaxed Fit Jeans",
      image: "/images/products/womens-bottoms/wjn-mj-003.jpg",
      images: [
        "/images/products/womens-bottoms/wjn-mj-003.jpg",
        "/images/products/womens-bottoms/wjn-mj-003-comfort.jpg"
      ],
      description: "Comfortable relaxed-fit jeans perfect for everyday wear. Features a looser cut through the hip and thigh with a classic straight leg opening.",
      materials: [
        { name: "100% Cotton Denim", price: 0 },
        { name: "Comfort Cotton Blend", price: 6 },
        { name: "Soft Touch Denim", price: 10 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["28", "30", "32", "34"],
      colors: ["Light Wash", "Medium Blue", "Dark Indigo", "Stone Grey"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 26.50,
        "145-360": 24.00,
        "360+": 21.50
      },
      features: ["Relaxed through hip and thigh", "Comfortable fit", "Classic rise", "Straight leg", "Easy wearing"],
      category: "womens-bottoms"
    },
    {
      id: "WJN-MJ-004",
      name: "Distressed Jeans",
      image: "/images/products/womens-bottoms/wjn-mj-004.jpg",
      images: [
        "/images/products/womens-bottoms/wjn-mj-004.jpg",
        "/images/products/womens-bottoms/wjn-mj-004-details.jpg"
      ],
      description: "Trendy distressed jeans with authentic wear details. Features strategic rips, fading, and whiskering for a lived-in vintage aesthetic.",
      materials: [
        { name: "Vintage Wash Denim", price: 0 },
        { name: "Stretch Vintage Blend", price: 8 },
        { name: "Premium Distressed", price: 15 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["28", "30", "32"],
      colors: ["Light Distressed", "Medium Destroyed", "Dark Ripped", "Bleached"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-96": "4-5 weeks",
        "97-240": "5-6 weeks",
        "240+": "6-7 weeks"
      },
      pricing: {
        "24-96": 38.00,
        "97-240": 35.50,
        "240+": 32.00
      },
      features: ["Strategic distressing", "Authentic fading", "Ripped details", "Vintage wash", "Trendy styling"],
      category: "womens-bottoms"
    },
    {
      id: "WJN-WJ-001",
      name: "Skinny Jeans",
      image: "/images/products/womens-bottoms/wjn-wj-001.jpg",
      images: [
        "/images/products/womens-bottoms/wjn-wj-001.jpg",
        "/images/products/womens-bottoms/wjn-wj-001-fit.jpg"
      ],
      description: "Ultra-slim skinny jeans that hug the body from hip to ankle. Features premium stretch denim for comfort and mobility while maintaining shape.",
      materials: [
        { name: "Super Stretch Denim (78/20/2)", price: 0 },
        { name: "Recovery Stretch Blend", price: 10 },
        { name: "Premium Sculpting Denim", price: 18 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["28", "30", "32", "34"],
      colors: ["Black", "Dark Blue", "Medium Wash", "White", "Grey"],
      minOrderQuantity: 48,
      leadTimes: {
        "48-192": "3-4 weeks",
        "193-480": "4-5 weeks",
        "480+": "5-6 weeks"
      },
      pricing: {
        "48-192": 34.00,
        "193-480": 31.50,
        "480+": 28.50
      },
      features: ["Ultra-slim fit", "High stretch content", "Shape retention", "Ankle length", "Second-skin feel"],
      category: "womens-bottoms"
    },
    {
      id: "WJN-WJ-002",
      name: "High-Waisted Jeans",
      image: "/images/products/womens-bottoms/wjn-wj-002.jpg",
      images: [
        "/images/products/womens-bottoms/wjn-wj-002.jpg",
        "/images/products/womens-bottoms/wjn-wj-002-waist.jpg"
      ],
      description: "Flattering high-waisted jeans that sit above the natural waistline. Creates a vintage-inspired silhouette with modern comfort and stretch.",
      materials: [
        { name: "High-Waist Stretch Denim", price: 0 },
        { name: "Tummy Control Blend", price: 12 },
        { name: "Sculpting High-Rise", price: 20 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["28", "30", "32", "34"],
      colors: ["Dark Indigo", "Medium Blue", "Black", "Light Wash", "Vintage Blue"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 36.00,
        "145-360": 33.50,
        "360+": 30.00
      },
      features: ["High-rise waistline", "Flattering fit", "Vintage-inspired", "Stretch comfort", "Elongating silhouette"],
      category: "womens-bottoms"
    },
    {
      id: "WJN-WJ-003",
      name: "Boyfriend Jeans",
      image: "/images/products/womens-bottoms/wjn-wj-003.jpg",
      images: [
        "/images/products/womens-bottoms/wjn-wj-003.jpg",
        "/images/products/womens-bottoms/wjn-wj-003-relaxed.jpg"
      ],
      description: "Relaxed boyfriend jeans with a loose, comfortable fit. Features a slightly baggy silhouette through the hip and thigh with a tapered ankle.",
      materials: [
        { name: "Relaxed Cotton Denim", price: 0 },
        { name: "Vintage Boyfriend Wash", price: 8 },
        { name: "Soft Comfort Blend", price: 12 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["28", "30", "32"],
      colors: ["Light Boyfriend Wash", "Medium Vintage", "Dark Relaxed", "Stone Blue"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 30.00,
        "145-360": 27.50,
        "360+": 25.00
      },
      features: ["Relaxed boyfriend fit", "Loose through hip", "Tapered ankle", "Vintage styling", "Casual comfort"],
      category: "womens-bottoms"
    },
    {
      id: "WJN-WJ-004",
      name: "Straight Leg Jeans",
      image: "/images/products/womens-bottoms/wjn-wj-004.jpg",
      images: [
        "/images/products/womens-bottoms/wjn-wj-004.jpg",
        "/images/products/womens-bottoms/wjn-wj-004-classic.jpg"
      ],
      description: "Classic straight-leg jeans with a consistent width from knee to hem. Perfect balance of classic styling and modern comfort for versatile wear.",
      materials: [
        { name: "Classic Cotton Denim", price: 0 },
        { name: "Comfort Stretch (96/4)", price: 6 },
        { name: "Premium Cotton Blend", price: 10 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["28", "30", "32", "34"],
      colors: ["Classic Blue", "Dark Wash", "Medium Indigo", "Black", "Rinse"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "3-4 weeks",
        "145-360": "4-5 weeks",
        "360+": "5-6 weeks"
      },
      pricing: {
        "36-144": 29.00,
        "145-360": 26.50,
        "360+": 24.00
      },
      features: ["Straight leg silhouette", "Classic five-pocket", "Versatile styling", "Consistent width", "Timeless design"],
      category: "womens-bottoms"
    },
    {
      id: "WCP-CL-001",
      name: "Classic Chino",
      image: "/images/products/womens-bottoms/wcp-cl-001.jpg",
      images: [
        "/images/products/womens-bottoms/wcp-cl-001.jpg",
        "/images/products/womens-bottoms/wcp-cl-001-detail.jpg"
      ],
      description: "Versatile chino pants perfect for business casual and smart-casual occasions. Features a tailored fit with stretch for all-day comfort.",
      materials: [
        { name: "Cotton Twill", price: 0 },
        { name: "Stretch Cotton Twill", price: 8 },
        { name: "Premium Cotton Blend", price: 12 },
        { name: "Wrinkle-Resistant", price: 15 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["28", "30", "32", "34"],
      colors: ["Khaki", "Navy", "Black", "Olive", "Camel", "White"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "2-3 weeks",
        "145-360": "3-4 weeks",
        "360+": "4-5 weeks"
      },
      pricing: {
        "36-144": 24.00,
        "145-360": 22.00,
        "360+": 19.50
      },
      features: ["Tailored fit", "Stretch comfort", "Professional styling", "Versatile wear", "Classic chino design"],
      category: "womens-bottoms"
    },
    {
      id: "WCP-CL-002",
      name: "Wide Leg Pants",
      image: "/images/products/womens-bottoms/wcp-cl-002.jpg",
      images: [
        "/images/products/womens-bottoms/wcp-cl-002.jpg",
        "/images/products/womens-bottoms/wcp-cl-002-flow.jpg"
      ],
      description: "On-trend wide leg pants with a flowing silhouette. Features a high waist and dramatic wide leg opening for a fashion-forward statement piece.",
      materials: [
        { name: "Crepe Fabric", price: 0 },
        { name: "Ponte Knit", price: 8 },
        { name: "Stretch Woven", price: 12 },
        { name: "Premium Suiting", price: 18 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["30", "32", "34"],
      colors: ["Black", "Navy", "Camel", "Olive", "Burgundy", "Cream"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-96": "3-4 weeks",
        "97-240": "4-5 weeks",
        "240+": "5-6 weeks"
      },
      pricing: {
        "24-96": 32.00,
        "97-240": 29.50,
        "240+": 26.50
      },
      features: ["Wide leg silhouette", "High waistline", "Flowing fit", "Statement piece", "Fashion-forward design"],
      category: "womens-bottoms"
    },
    {
      id: "WCP-CL-003",
      name: "Cropped Pants",
      image: "/images/products/womens-bottoms/wcp-cl-003.jpg",
      images: [
        "/images/products/womens-bottoms/wcp-cl-003.jpg",
        "/images/products/womens-bottoms/wcp-cl-003-ankle.jpg"
      ],
      description: "Stylish cropped pants that hit at the ankle. Perfect for showcasing shoes and creating a modern, polished look for work or casual wear.",
      materials: [
        { name: "Cotton Blend", price: 0 },
        { name: "Stretch Cotton", price: 6 },
        { name: "Technical Fabric", price: 12 },
        { name: "Wrinkle-Free Blend", price: 15 }
      ],
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"],
      inseam: ["26", "27"],
      colors: ["Black", "Navy", "White", "Khaki", "Grey", "Blush"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-144": "2-3 weeks",
        "145-360": "3-4 weeks",
        "360+": "4-5 weeks"
      },
      pricing: {
        "36-144": 26.00,
        "145-360": 24.00,
        "360+": 21.50
      },
      features: ["Cropped length", "Ankle-hitting", "Modern silhouette", "Versatile styling", "Polished look"],
      category: "womens-bottoms"
    },
    {
      id: "WCP-CL-004",
      name: "Leggings",
      image: "/images/products/womens-bottoms/wcp-cl-004.jpg",
      images: [
        "/images/products/womens-bottoms/wcp-cl-004.jpg",
        "/images/products/womens-bottoms/wcp-cl-004-stretch.jpg"
      ],
      description: "High-performance leggings with four-way stretch and moisture-wicking properties. Perfect for activewear, loungewear, or casual styling.",
      materials: [
        { name: "Cotton Spandex Blend", price: 0 },
        { name: "Performance Stretch", price: 8 },
        { name: "Moisture-Wicking Blend", price: 12 },
        { name: "Premium Athletic", price: 15 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      inseam: ["25", "28", "30"],
      colors: ["Black", "Navy", "Grey", "Burgundy", "Olive", "Charcoal"],
      minOrderQuantity: 48,
      leadTimes: {
        "48-192": "2-3 weeks",
        "193-480": "3-4 weeks",
        "480+": "4-5 weeks"
      },
      pricing: {
        "48-192": 18.00,
        "193-480": 16.50,
        "480+": 14.50
      },
      features: ["Four-way stretch", "High waistband", "Moisture-wicking", "Squat-proof fabric", "Compression fit"],
      category: "womens-bottoms"
    }      
  ],
  'womens-outerwear': [
    {
      id: "WJK-CJ-001",
      name: "Denim Jacket",
      image: "/images/products/womens-outerwear/wjk-cj-001.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-cj-001.jpg",
        "/images/products/womens-outerwear/wjk-cj-001-back.jpg"
      ],
      description: "Timeless cropped denim jacket with feminine tailoring. Features a flattering fit that pairs perfectly with dresses or high-waisted bottoms.",
      materials: [
        { name: "100% Cotton Denim", price: 0 },
        { name: "Stretch Denim Blend", price: 7 },
        { name: "Eco-Friendly Recycled Denim", price: 12 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Classic Blue", "Light Wash", "Dark Indigo", "White Denim", "Black Denim"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-100": "3-4 weeks",
        "101-250": "4-5 weeks",
        "250+": "5-6 weeks"
      },
      pricing: {
        "24-100": 42.00,
        "101-250": 39.50,
        "250+": 36.00
      },
      features: ["Button-front closure", "Chest pockets", "Cropped silhouette", "Tailored fit", "Adjustable cuffs"],
      category: "womens-outerwear"
    },
    {
      id: "WJK-CJ-002",
      name: "Bomber Jacket",
      image: "/images/products/womens-outerwear/wjk-cj-002.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-cj-002.jpg",
        "/images/products/womens-outerwear/wjk-cj-002-detail.jpg"
      ],
      description: "Modern bomber jacket with a sleek silhouette. Features ribbed trim and zip closure for a contemporary athletic-inspired look.",
      materials: [
        { name: "Polyester Twill", price: 0 },
        { name: "Satin Finish", price: 8 },
        { name: "Quilted Lining", price: 15 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Olive Green", "Blush Pink", "Metallic Silver"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-120": "2-3 weeks",
        "121-300": "3-4 weeks",
        "300+": "4-5 weeks"
      },
      pricing: {
        "36-120": 38.00,
        "121-300": 35.50,
        "300+": 32.00
      },
      features: ["Full zip closure", "Ribbed cuffs and hem", "Side pockets", "Lightweight construction", "Relaxed fit"],
      category: "womens-outerwear"
    },
    {
      id: "WJK-CJ-003",
      name: "Windbreaker",
      image: "/images/products/womens-outerwear/wjk-cj-003.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-cj-003.jpg",
        "/images/products/womens-outerwear/wjk-cj-003-hood.jpg"
      ],
      description: "Lightweight windbreaker perfect for active lifestyles. Water-resistant with packable design for on-the-go convenience.",
      materials: [
        { name: "Ripstop Nylon", price: 0 },
        { name: "DWR Coating", price: 5 },
        { name: "Breathable Mesh Lining", price: 10 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Hot Pink", "Turquoise", "Black", "White", "Coral Orange"],
      minOrderQuantity: 48,
      leadTimes: {
        "48-150": "2-3 weeks",
        "151-400": "3-4 weeks",
        "400+": "4-5 weeks"
      },
      pricing: {
        "48-150": 32.00,
        "151-400": 29.50,
        "400+": 26.50
      },
      features: ["Packable design", "Water-resistant", "Adjustable hood", "Elastic waistband", "Reflective details"],
      category: "womens-outerwear"
    },
    {
      id: "WJK-CJ-004",
      name: "Track Jacket",
      image: "/images/products/womens-outerwear/wjk-cj-004.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-cj-004.jpg",
        "/images/products/womens-outerwear/wjk-cj-004-stripe.jpg"
      ],
      description: "Athletic-inspired track jacket with contrasting stripe details. Perfect for casual wear or light workouts with moisture-wicking properties.",
      materials: [
        { name: "Polyester Blend", price: 0 },
        { name: "Moisture-Wicking Fabric", price: 8 },
        { name: "Four-Way Stretch", price: 12 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Navy/White", "Black/Red", "Purple/Pink", "Forest/Yellow", "Grey/Mint"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-120": "3-4 weeks",
        "121-300": "4-5 weeks",
        "300+": "5-6 weeks"
      },
      pricing: {
        "36-120": 35.00,
        "121-300": 32.50,
        "300+": 29.00
      },
      features: ["Full zip closure", "Side stripe details", "Moisture-wicking", "Athletic fit", "Thumb holes"],
      category: "womens-outerwear"
    },
    {
      id: "WJK-OW-001",
      name: "Parka",
      image: "/images/products/womens-outerwear/wjk-ow-001.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-ow-001.jpg",
        "/images/products/womens-outerwear/wjk-ow-001-hood.jpg"
      ],
      description: "Heavy-duty parka designed for harsh weather conditions. Features faux fur hood trim and multiple pockets for functionality and style.",
      materials: [
        { name: "Cotton Canvas Shell", price: 0 },
        { name: "Waterproof Shell", price: 18 },
        { name: "Down Insulation", price: 25 },
        { name: "Synthetic Insulation", price: 15 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Olive Green", "Navy", "Burgundy", "Camel"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-100": "4-5 weeks",
        "101-250": "5-6 weeks",
        "250+": "6-7 weeks"
      },
      pricing: {
        "24-100": 85.00,
        "101-250": 78.50,
        "250+": 72.00
      },
      features: ["Removable faux fur hood", "Multiple pockets", "Adjustable waist", "Storm flaps", "Heavy-duty zippers"],
      category: "womens-outerwear"
    },
    {
      id: "WJK-OW-002",
      name: "Puffer Jacket",
      image: "/images/products/womens-outerwear/wjk-ow-002.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-ow-002.jpg",
        "/images/products/womens-outerwear/wjk-ow-002-packable.jpg"
      ],
      description: "Lightweight puffer jacket with excellent warmth-to-weight ratio. Packable design makes it perfect for travel and layering.",
      materials: [
        { name: "Ripstop Nylon Shell", price: 0 },
        { name: "Down Fill (650)", price: 20 },
        { name: "Down Fill (800)", price: 32 },
        { name: "Synthetic Fill", price: 12 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Rose Gold", "Sage Green", "Cream"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-120": "3-4 weeks",
        "121-300": "4-5 weeks",
        "300+": "5-6 weeks"
      },
      pricing: {
        "36-120": 65.00,
        "121-300": 60.00,
        "300+": 55.50
      },
      features: ["Packable into stuff sack", "Water-resistant", "Elastic cuffs", "Interior pockets", "Lightweight construction"],
      category: "womens-outerwear"
    },
    {
      id: "WJK-OW-003",
      name: "Rain Jacket",
      image: "/images/products/womens-outerwear/wjk-ow-003.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-ow-003.jpg",
        "/images/products/womens-outerwear/wjk-ow-003-seams.jpg"
      ],
      description: "Fully waterproof rain jacket with breathable membrane. Features sealed seams and adjustable hood for complete weather protection.",
      materials: [
        { name: "2-Layer Waterproof", price: 0 },
        { name: "3-Layer Waterproof", price: 22 },
        { name: "Eco-Friendly PFC-Free", price: 18 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Yellow", "Navy", "Black", "Red", "Teal"],
      minOrderQuantity: 36,
      leadTimes: {
        "36-120": "3-4 weeks",
        "121-300": "4-5 weeks",
        "300+": "5-6 weeks"
      },
      pricing: {
        "36-120": 55.00,
        "121-300": 51.50,
        "300+": 47.00
      },
      features: ["Fully waterproof", "Breathable membrane", "Sealed seams", "Adjustable hood", "Pit zips for ventilation"],
      category: "womens-outerwear"
    },
    {
      id: "WJK-OW-004",
      name: "Trench Coat",
      image: "/images/products/womens-outerwear/wjk-ow-004.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-ow-004.jpg",
        "/images/products/womens-outerwear/wjk-ow-004-belt.jpg"
      ],
      description: "Classic trench coat with timeless elegance. Features double-breasted design with belt and sophisticated details for professional and casual wear.",
      materials: [
        { name: "Cotton Gabardine", price: 0 },
        { name: "Water-Resistant Coating", price: 15 },
        { name: "Wool Blend", price: 28 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Khaki", "Black", "Navy", "Stone Beige"],
      minOrderQuantity: 24,
      leadTimes: {
        "24-100": "4-5 weeks",
        "101-250": "5-6 weeks",
        "250+": "6-7 weeks"
      },
      pricing: {
        "24-100": 78.00,
        "101-250": 72.50,
        "250+": 67.00
      },
      features: ["Double-breasted design", "Removable belt", "Storm flaps", "Classic lapels", "Interior pockets"],
      category: "womens-outerwear"
    },
    {
      id: "WJK-OW-005",
      name: "Wool Coat",
      image: "/images/products/womens-outerwear/wjk-ow-005.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-ow-005.jpg",
        "/images/products/womens-outerwear/wjk-ow-005-texture.jpg"
      ],
      description: "Elegant wool coat perfect for professional settings and formal occasions. Features luxurious wool blend with tailored silhouette.",
      materials: [
        { name: "60% Wool Blend", price: 0 },
        { name: "80% Wool Blend", price: 25 },
        { name: "100% Pure Wool", price: 45 },
        { name: "Cashmere Blend", price: 65 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Charcoal", "Camel", "Black", "Navy", "Burgundy"],
      minOrderQuantity: 18,
      leadTimes: {
        "18-75": "5-6 weeks",
        "76-200": "6-7 weeks",
        "200+": "7-8 weeks"
      },
      pricing: {
        "18-75": 125.00,
        "76-200": 115.00,
        "200+": 105.00
      },
      features: ["Tailored fit", "Single-breasted design", "Notched lapels", "Interior lining", "Button closure"],
      category: "womens-outerwear"
    },
    {
      id: "WJK-OW-006",
      name: "Fleece Jacket",
      image: "/images/products/womens-outerwear/wjk-ow-006.jpg",
      images: [
        "/images/products/womens-outerwear/wjk-ow-006.jpg",
        "/images/products/womens-outerwear/wjk-ow-006-zip.jpg"
      ],
      description: "Cozy fleece jacket perfect for outdoor activities and casual wear. Anti-pill finish ensures long-lasting softness and appearance.",
      materials: [
        { name: "Polyester Fleece", price: 0 },
        { name: "Recycled Fleece", price: 8 },
        { name: "Sherpa Fleece", price: 12 }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Cream", "Grey", "Navy", "Forest Green", "Dusty Rose"],
      minOrderQuantity: 48,
      leadTimes: {
        "48-150": "2-3 weeks",
        "151-400": "3-4 weeks",
        "400+": "4-5 weeks"
      },
      pricing: {
        "48-150": 28.00,
        "151-400": 25.50,
        "400+": 23.00
      },
      features: ["Anti-pill finish", "Full zip closure", "Side pockets", "Elastic cuffs", "Lightweight warmth"],
      category: "womens-outerwear"
    }           
  ],
  'womens-sportswear': [
    {
      id: "SP-AT-001",
      name: "Performance Tee",
      image: "/images/products/womens-sportswear/sp-at-001.jpg",
      images: [
        "/images/products/womens-sportswear/sp-at-001.jpg",
        "/images/products/womens-sportswear/sp-at-001-front.jpg",
        "/images/products/womens-sportswear/sp-at-001-back.jpg",
        "/images/products/womens-sportswear/sp-at-001-sweat.jpg"
      ],
      description: "Raglan-sleeve athletic tee with laser-cut ventilation and anti-odor treatment. Moves seamlessly from gym to street.",
      materials: [
        { 
          name: "QuickDry Polyester (92% Poly, 8% Spandex)", 
          price: 0,
          properties: ["UPF 30+", "4-way stretch", "Wicks sweat in <90s"]
        },
        { 
          name: "Bamboo Charcoal Blend", 
          price: 7,
          properties: ["Natural antimicrobial", "Softer handfeel", "Biodegradable"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      techSpecs: {
        "Weight": "140GSM",
        "Breathability": "CFM 35",
        "Dry Time": "12min (AATCC 201)"
      },
      colors: ["Black", "Power Pink", "Heather Grey", "Athletic Green"],
      minOrderQuantity: 100,
      leadTimes: {
        "100-300": "3-4 weeks",
        "301-600": "4-5 weeks",
        "601-1200": "5-6 weeks",
        "1200+": "6-7 weeks"
      },
      pricing: {
        "100-300": 28.00,
        "301-600": 25.00,
        "601-1200": 22.00,
        "1200+": 19.00
      },
      features: [
        "Flatlock seams",
        "Thumbhole cuff option (+$2)",
        "Reflective logo printing",
        "Side gussets"
      ],
      category: "womens-sportswear",
      activities: ["CrossFit", "HIIT", "Running", "Yoga"]
    },  
    {
      id: "SP-AT-002",
      name: "Training Tank",
      image: "/images/products/womens-sportswear/sp-at-002.jpg",
      images: [
        "/images/products/womens-sportswear/sp-at-002.jpg",
        "/images/products/womens-sportswear/sp-at-002-front.jpg",
        "/images/products/womens-sportswear/sp-at-002-back.jpg",
        "/images/products/womens-sportswear/sp-at-002-detail.jpg"
      ],
      description: "High-neck racerback with perforated mesh panels for maximum airflow during high-intensity training.",
      materials: [
        { 
          name: "Performance Mesh (88% Nylon, 12% Elastane)", 
          price: 0,
          properties: ["50+ UPF", "360° stretch", "Abrasion-resistant"]
        },
        { 
          name: "CoolCore™ Technology", 
          price: 9,
          properties: ["Temperature-regulating", "3x faster drying"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      ventilation: {
        "Mesh Coverage": "30% surface area",
        "Panel Placement": "Underarm/back",
        "Airflow Rating": "CFM 45"
      },
      colors: ["Nightshade", "Electric Blue", "Camo", "White"],
      minOrderQuantity: 75,
      leadTimes: {
        "75-225": "4-5 weeks",
        "226-450": "5-6 weeks",
        "451-900": "6-7 weeks",
        "900+": "7-8 weeks"
      },
      pricing: {
        "75-225": 34.00,
        "226-450": 31.00,
        "451-900": 28.00,
        "900+": 25.00
      },
      features: [
        "Internal shelf bra (removable pads)",
        "Silicone hem grip",
        "Laser-cut edges",
        "Key pocket at waistband"
      ],
      category: "womens-sportswear",
      intensityLevel: ["Hot yoga", "Spin class", "Boxing"]
    }, 
    {
      id: "SP-AT-003",
      name: "Long Sleeve Athletic Top",
      image: "/images/products/womens-sportswear/sp-at-003.jpg",
      images: [
        "/images/products/womens-sportswear/sp-at-003.jpg",
        "/images/products/womens-sportswear/sp-at-003-front.jpg",
        "/images/products/womens-sportswear/sp-at-003-back.jpg",
        "/images/products/womens-sportswear/sp-at-003-detail.jpg"
      ],
      description: "Compression-fit base layer with graduated thermal regulation. Ideal for cold-weather training or post-workout recovery.",
      materials: [
        { 
          name: "Thermolyte® Polyester", 
          price: 0,
          properties: ["Moisture-wicking", "UPF 50+", "Odor-resistant"]
        },
        { 
          name: "Merino Wool Blend", 
          price: 15,
          properties: ["Natural temperature control", "Anti-microbial"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      thermalTech: {
        "Heat Retention": "Traps 90% body heat",
        "Moisture Transfer": "0.8L/hr sweat evaporation",
        "Breathability Zones": "Underarm/lower back"
      },
      colors: ["Black", "Deep Teal", "Maroon", "Graphite"],
      minOrderQuantity: 60,
      leadTimes: {
        "60-180": "5-6 weeks",
        "181-360": "6-7 weeks",
        "361-720": "7-8 weeks",
        "720+": "8-9 weeks"
      },
      pricing: {
        "60-180": 45.00,
        "181-360": 42.00,
        "361-720": 39.00,
        "720+": 36.00
      },
      features: [
        "Seamless construction",
        "Thumbhole cuffs with touchscreen tips",
        "Reflective safety detailing",
        "Flatlock seams"
      ],
      category: "womens-sportswear",
      idealTempRange: ["30°F to 60°F", "Post-workout recovery"]
    },  
    {
      id: "SP-AT-004",
      name: "Compression Shirt",
      image: "/images/products/womens-sportswear/sp-at-004.jpg",
      images: [
        "/images/products/womens-sportswear/sp-at-004.jpg",
        "/images/products/womens-sportswear/sp-at-004-front.jpg",
        "/images/products/womens-sportswear/sp-at-004-back.jpg",
        "/images/products/womens-sportswear/sp-at-004-detail.jpg"
      ],
      description: "Medical-grade 20-30mmHg compression for muscle stabilization and enhanced circulation during endurance training.",
      materials: [
        { 
          name: "PowerCompress™ Nylon/Spandex", 
          price: 0,
          properties: ["Graduated compression", "Muscle oscillation control"]
        },
        { 
          name: "Copper-Infused Fabric", 
          price: 18,
          properties: ["Joint pain relief", "Enhanced recovery"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      compression: {
        "Level": "20-30mmHg (Class 1 Medical)",
        "Zones": "Targeted abdominal/back support",
        "Certification": "FDA-registered"
      },
      colors: ["Black", "Navy", "Burgundy"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "6-7 weeks",
        "151-300": "7-8 weeks",
        "301-600": "8-9 weeks",
        "600+": "9-10 weeks"
      },
      pricing: {
        "50-150": 65.00,
        "151-300": 60.00,
        "301-600": 55.00,
        "600+": 50.00
      },
      features: [
        "Seamless underarm gussets",
        "Tagless neckline",
        "Anti-roll hem",
        "Ventilated mesh panels"
      ],
      category: "womens-sportswear",
      benefits: ["Reduces muscle fatigue", "Improves oxygenation", "Post-workout recovery"]
    },    
    {
      id: "SP-AB-001",
      name: "Training Shorts",
      image: "/images/products/womens-sportswear/sp-ab-001.jpg",
      images: [
        "/images/products/womens-sportswear/sp-ab-001.jpg",
        "/images/products/womens-sportswear/sp-ab-001-front.jpg",
        "/images/products/womens-sportswear/sp-ab-001-back.jpg",
        "/images/products/womens-sportswear/sp-ab-001-movement.jpg"
      ],
      description: "4-way stretch shorts with built-in compression liner and anti-chafe flat seams for explosive movements.",
      materials: [
        { 
          name: "Supplex® Nylon (88/12 Blend)", 
          price: 0,
          properties: ["Tear-resistant", "Quick-drying", "UPF 50+"]
        },
        { 
          name: "Eco-Repel Recycled Fabric", 
          price: 8,
          properties: ["Water-resistant", "30% recycled content"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      inseam: {
        "3-inch": "Competition fit",
        "5-inch": "Standard (+$0)",
        "7-inch": "Modest coverage (+$2)"
      },
      colors: ["Black", "Royal Blue", "Hot Pink", "Camouflage"],
      minOrderQuantity: 80,
      leadTimes: {
        "80-240": "4-5 weeks",
        "241-480": "5-6 weeks",
        "481-960": "6-7 weeks",
        "960+": "7-8 weeks"
      },
      pricing: {
        "80-240": 42.00,
        "241-480": 38.00,
        "481-960": 35.00,
        "960+": 32.00
      },
      features: [
        "Gusseted crotch",
        "Zippered security pocket",
        "Inner drawcord",
        "Laser-cut ventilation"
      ],
      category: "womens-sportswear",
      movementRange: ["Squats", "Lunges", "Box jumps", "Agility drills"]
    },
    {
      id: "SP-AB-002",
      name: "Athletic Leggings",
      image: "/images/products/womens-sportswear/sp-ab-002.jpg",
      images: [
        "/images/products/womens-sportswear/sp-ab-002.jpg",
        "/images/products/womens-sportswear/sp-ab-002-front.jpg",
        "/images/products/womens-sportswear/sp-ab-002-back.jpg",
        "/images/products/womens-sportswear/sp-ab-002-detail.jpg"
      ],
      description: "High-waisted leggings with targeted compression zones and sweat-wicking channels for intense training sessions.",
      materials: [
        { 
          name: "CompressTek™ Fabric", 
          price: 0,
          properties: ["25-30mmHg graduated compression", "4-way stretch"]
        },
        { 
          name: "ButterySoft Nulu Fabric", 
          price: 12,
          properties: ["Naked sensation", "Squat-proof"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      waist: {
        "High-rise": "11-inch front/13-inch back",
        "Tummy Control": "Double-layer power mesh"
      },
      colors: ["Black", "Dark Olive", "Marble Dye", "Rust"],
      minOrderQuantity: 70,
      leadTimes: {
        "70-210": "5-6 weeks",
        "211-420": "6-7 weeks",
        "421-840": "7-8 weeks",
        "840+": "8-9 weeks"
      },
      pricing: {
        "70-210": 68.00,
        "211-420": 63.00,
        "421-840": 58.00,
        "840+": 54.00
      },
      features: [
        "Reflective safety detailing",
        "Hidden waistband pocket",
        "Ankle zippers (optional)",
        "Seamless crotch gusset"
      ],
      category: "womens-sportswear",
      opacity: ["Fully opaque (300GSM)", "Passes squat test"]
    },
    {
      id: "SP-AB-003",
      name: "Joggers",
      image: "/images/products/womens-sportswear/sp-ab-003.jpg",
      images: [
        "/images/products/womens-sportswear/sp-ab-003.jpg",
        "/images/products/womens-sportswear/sp-ab-003-front.jpg",
        "/images/products/womens-sportswear/sp-ab-003-back.jpg",
        "/images/products/womens-sportswear/sp-ab-003-detail.jpg"
      ],
      description: "Technical French terry joggers with articulated knees and zippered ankles for studio-to-street versatility.",
      materials: [
        { 
          name: "Organic Cotton French Terry", 
          price: 0,
          properties: ["Breathable", "GOTS certified"]
        },
        { 
          name: "Tech Fleece", 
          price: 10,
          properties: ["Wind-resistant", "Thermal insulation"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      fit: {
        "Taper": "Slim through thigh",
        "Ankle": "Adjustable zipper (8-10in opening)",
        "Pockets": "4 total (2 hand, 1 zip, 1 hidden)"
      },
      colors: ["Heather Grey", "Black", "Army Green", "Dusty Rose"],
      minOrderQuantity: 65,
      leadTimes: {
        "65-195": "4-5 weeks",
        "196-390": "5-6 weeks",
        "391-780": "6-7 weeks",
        "780+": "7-8 weeks"
      },
      pricing: {
        "65-195": 55.00,
        "196-390": 51.00,
        "391-780": 47.00,
        "780+": 43.00
      },
      features: [
        "Elastic drawcord waist",
        "Laser-etched logos",
        "Reinforced seat",
        "Anti-pill finish"
      ],
      category: "womens-sportswear",
      transition: ["Yoga class", "Airport travel", "Weekend errands"]
    },
    {
      id: "SP-AB-004",
      name: "Track Pants",
      image: "/images/products/womens-sportswear/sp-ab-004.jpg",
      images: [
        "/images/products/womens-sportswear/sp-ab-004.jpg",
        "/images/products/womens-sportswear/sp-ab-004-front.jpg",
        "/images/products/womens-sportswear/sp-ab-004-back.jpg",
        "/images/products/womens-sportswear/sp-ab-004-stripes.jpg"
      ],
      description: "Classic track pants with modern performance upgrades, featuring contrast side stripes and moisture-wicking fabric.",
      materials: [
        { 
          name: "DryVent™ Polyester", 
          price: 0,
          properties: ["Water-repellent", "2-way stretch"]
        },
        { 
          name: "Vintage Loopback Cotton", 
          price: 7,
          properties: ["Authentic 80s handfeel", "Pre-shrunk"]
        }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      design: {
        "Stripes": "Contrast color options",
        "Side Slits": "Functional ventilation",
        "Waist": "Elastic + drawcord"
      },
      colors: ["Navy/White", "Black/Gold", "Red/White", "Grey/Pink"],
      minOrderQuantity: 55,
      leadTimes: {
        "55-165": "5-6 weeks",
        "166-330": "6-7 weeks",
        "331-660": "7-8 weeks",
        "660+": "8-9 weeks"
      },
      pricing: {
        "55-165": 62.00,
        "166-330": 58.00,
        "331-660": 54.00,
        "660+": 50.00
      },
      features: [
        "Ankle zippers",
        "Hidden security pocket",
        "Contrast inner cuff",
        "Tear-away side seams (optional)"
      ],
      category: "womens-sportswear",
      retroDetails: ["80s-inspired color blocking", "Embroidered logo patch"]
    }        
  ],

  // Children's Wear
  'boys-tops': [
    { 
      id: "BT-AT-001", 
      name: "Cotton Tee", 
      image: "/images/products/boys-tops/bt-at-001.jpg",
      images: [
        "/images/products/boys-tops/bt-at-001.jpg",
        "/images/products/boys-tops/bt-at-001-back.jpg"
      ],
      description: "Comfortable cotton t-shirt for boys with reinforced seams for durability. Available in fun colors.",
      materials: [
        { name: "100% Cotton Jersey", price: 0 },
        { name: "Organic Cotton", price: 2 }
      ],
      sizes: ["2T", "3T", "4T", "5/6", "7/8", "10/12", "14/16"],
      colors: ["Royal Blue", "Red", "Forest Green", "Black", "Navy"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-200": "2-3 weeks",
        "201-500": "3-4 weeks",
        "500+": "4-5 weeks"
      },
      pricing: {
        "50-200": 8.50,
        "201-500": 7.50,
        "500+": 6.50
      },
      features: ["Reinforced neckline", "Double-needle stitching", "Tagless label", "Pre-shrunk"],
      category: "boys-tops"
    },
    {
      id: "BT-AT-002",
      name: "Polo Shirt",
      image: "/images/products/boys-tops/bt-at-002.jpg",
      images: [
        "/images/products/boys-tops/bt-at-002.jpg",
        "/images/products/boys-tops/bt-at-002-back.jpg"
      ],
      description: "Classic boys’ polo shirt featuring a soft collar, breathable cotton fabric, and a clean, polished look. Perfect for school or casual wear.",
      materials: [
        { name: "100% Cotton Pique", price: 0 },
        { name: "Cotton-Polyester Blend", price: 1 }
      ],
      sizes: ["2T", "3T", "4T", "5/6", "7/8", "10/12", "14/16"],
      colors: ["White", "Navy", "Sky Blue", "Red", "Heather Gray"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-200": "2-3 weeks",
        "201-500": "3-4 weeks",
        "500+": "4-5 weeks"
      },
      pricing: {
        "50-200": 10.00,
        "201-500": 8.75,
        "500+": 7.50
      },
      features: ["Ribbed collar", "Two-button placket", "Side vents", "Reinforced stitching"],
      category: "boys-tops"
    },
    {
      id: "BT-AT-003",
      name: "Sets",
      image: "/images/products/boys-tops/bt-at-003.jpg",
      images: [
        "/images/products/boys-tops/bt-at-003.jpg",
        "/images/products/boys-tops/bt-at-003-back.jpg"
      ],
      description: "Coordinated t-shirt and shorts set for boys, designed for convenience and all-day comfort. Great for casual play or travel.",
      materials: [
        { name: "Cotton Blend", price: 0 },
        { name: "Organic Cotton", price: 3 }
      ],
      sizes: ["2T", "3T", "4T", "5/6", "7/8", "10/12"],
      colors: ["Navy/Grey", "Red/Black", "Green/Khaki", "Blue/White"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-200": "3-4 weeks",
        "201-500": "4-5 weeks",
        "500+": "5-6 weeks"
      },
      pricing: {
        "50-200": 14.00,
        "201-500": 12.25,
        "500+": 10.50
      },
      features: ["Elastic waistband shorts", "Coordinated color scheme", "Tagless neck label", "Breathable fabric"],
      category: "boys-tops"
    },
    {
      id: "BT-AT-004",
      name: "Activewear",
      image: "/images/products/boys-tops/bt-at-004.jpg",
      images: [
        "/images/products/boys-tops/bt-at-004.jpg",
        "/images/products/boys-tops/bt-at-004-back.jpg"
      ],
      description: "Performance-driven activewear top for boys made with lightweight, moisture-wicking fabric. Ideal for sports, gym, and high-energy activities.",
      materials: [
        { name: "Polyester-Spandex Blend", price: 0 },
        { name: "Recycled Polyester Blend", price: 2 }
      ],
      sizes: ["4T", "5", "6", "7/8", "10/12", "14/16"],
      colors: ["Black", "Electric Blue", "Gray", "Green Camo", "Orange"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-200": "2-3 weeks",
        "201-500": "3-4 weeks",
        "500+": "4-5 weeks"
      },
      pricing: {
        "50-200": 9.50,
        "201-500": 8.25,
        "500+": 7.00
      },
      features: ["Quick-dry technology", "Stretch fabric", "Reflective detail", "Flatlock seams"],
      category: "boys-tops"
    }
  ],
  'girls-tops': [
      { 
        id: "GT-AT-001", 
        name: "Cotton Tee", 
        image: "/images/products/girls-tops/gt-at-001.jpg",
        images: [
          "/images/products/girls-tops/gt-at-001.jpg",
          "/images/products/girls-tops/gt-at-001-back.jpg"
        ],
        description: "Soft and breathable cotton t-shirt for girls, designed for comfort and play. Stylish fit with vibrant colors.",
        materials: [
          { name: "100% Cotton Jersey", price: 0 },
          { name: "Organic Cotton", price: 2 }
        ],
        sizes: ["2T", "3T", "4T", "5/6", "7/8", "10/12", "14/16"],
        colors: ["Pink", "Lavender", "Sky Blue", "Coral", "White"],
        minOrderQuantity: 50,
        leadTimes: {
          "50-200": "2-3 weeks",
          "201-500": "3-4 weeks",
          "500+": "4-5 weeks"
        },
        pricing: {
          "50-200": 8.50,
          "201-500": 7.50,
          "500+": 6.50
        },
        features: ["Reinforced seams", "Tag-free neck label", "Pre-washed for softness", "Double-stitched hem"],
        category: "girls-tops"
      },
      { 
        id: "GT-AT-002", 
        name: "Dresses", 
        image: "/images/products/girls-tops/gt-at-002.jpg",
        images: [
          "/images/products/girls-tops/gt-at-002.jpg",
          "/images/products/girls-tops/gt-at-002-back.jpg"
        ],
        description: "Playful and elegant dresses designed for both casual and special occasions. Lightweight and easy to wear.",
        materials: [
          { name: "Cotton Blend", price: 0 },
          { name: "Organic Cotton", price: 3 }
        ],
        sizes: ["2T", "3T", "4T", "5", "6", "7", "8", "10"],
        colors: ["Floral Print", "Pink", "Navy", "White", "Mint"],
        minOrderQuantity: 50,
        leadTimes: {
          "50-200": "3-4 weeks",
          "201-500": "4-5 weeks",
          "500+": "5-6 weeks"
        },
        pricing: {
          "50-200": 12.00,
          "201-500": 10.50,
          "500+": 9.00
        },
        features: ["Ruffled sleeves", "Back button closure", "Soft lining", "Machine washable"],
        category: "girls-tops"
      },
      { 
        id: "GT-AT-003", 
        name: "Activewear", 
        image: "/images/products/girls-tops/gt-at-003.jpg",
        images: [
          "/images/products/girls-tops/gt-at-003.jpg",
          "/images/products/girls-tops/gt-at-003-back.jpg"
        ],
        description: "Moisture-wicking activewear top designed for energetic play and sports. Stretchable and breathable fabric.",
        materials: [
          { name: "Polyester-Spandex Blend", price: 0 },
          { name: "Recycled Polyester Blend", price: 2 }
        ],
        sizes: ["4T", "5", "6", "7/8", "10/12", "14/16"],
        colors: ["Magenta", "Teal", "Charcoal", "Turquoise", "Black"],
        minOrderQuantity: 50,
        leadTimes: {
          "50-200": "2-3 weeks",
          "201-500": "3-4 weeks",
          "500+": "4-5 weeks"
        },
        pricing: {
          "50-200": 9.50,
          "201-500": 8.25,
          "500+": 7.00
        },
        features: ["Moisture-wicking", "Four-way stretch", "Flatlock seams", "Reflective logo"],
        category: "girls-tops"
      }
  ],

  // Home Textiles
  'bedding': [
    {
      id: "BS-AT-001",
      name: "Solid Sheets",
      image: "/images/products/bedding/bs-at-001.jpg",
      images: [
        "/images/products/bedding/bs-at-001.jpg",
        "/images/products/bedding/bs-at-001-folded.jpg",
        "/images/products/bedding/bs-at-001-bed.jpg",
        "/images/products/bedding/bs-at-001-detail.jpg"
      ],
      description: "Premium solid-color sheet set with deep pockets and sateen weave for hotel-quality softness. OEKO-TEX certified for safety.",
      materials: [
        { 
          name: "100% Long-Staple Egyptian Cotton (600TC)", 
          price: 0,
          properties: ["Sateen weave", "Silky handfeel", "Wrinkle-resistant"]
        },
        { 
          name: "Organic Bamboo Lyocell", 
          price: 45,
          properties: ["Temperature-regulating", "Hypoallergenic", "Eco-friendly"]
        }
      ],
      sizes: ["Twin", "Full", "Queen", "King", "Cal King"],
      colorOptions: ["White", "Slate", "Blush", "Sage", "Oatmeal"],
      threadCount: {
        "Standard": "600 threads/sq inch",
        "Luxury": "800TC (+$35)"
      },
      pocketDepth: {
        "Standard": "15 inches",
        "Deep": "18 inches (+$10)"
      },
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "4-5 weeks",
        "151-300": "5-6 weeks",
        "301-600": "6-7 weeks",
        "600+": "7-8 weeks"
      },
      pricing: {
        "50-150": 120.00,
        "151-300": 110.00,
        "301-600": 100.00,
        "600+": 90.00
      },
      features: [
        "Hospital corners",
        "Reinforced hems",
        "Tagless labeling",
        "Colorfast dyes"
      ],
      certifications: ["OEKO-TEX 100", "GOTS (organic option)"],
      includedPieces: ["Fitted sheet", "Flat sheet", "2 pillowcases (1 for Twin)"]
    },
    {
      id: "BS-AT-002",
      name: "Printed Sheets",
      image: "/images/products/bedding/bs-at-002.jpg",
      images: [
        "/images/products/bedding/bs-at-002.jpg",
        "/images/products/bedding/bs-at-002-bed.jpg",
        "/images/products/bedding/bs-at-002-detail.jpg",
        "/images/products/bedding/bs-at-002-pillow.jpg"
      ],
      description: "Vibrant digitally printed sheets with fade-resistant technology. Features all-over patterns that withstand 50+ washes.",
      materials: [
        { 
          name: "100% Pima Cotton (400TC)", 
          price: 0,
          properties: ["Percale weave", "Crisp feel", "Breathable"]
        },
        { 
          name: "Microfiber Polyester", 
          price: -20,
          properties: ["Wrinkle-free", "Stain-resistant", "Budget-friendly"]
        }
      ],
      sizes: ["Twin", "Full", "Queen", "King"],
      printMethods: [
        "Reactive dye (standard)",
        "Sublimation printing (+$15)",
        "Eco-water-based ink (+$10)"
      ],
      patternOptions: [
        "Botanical",
        "Geometric",
        "Abstract",
        "Custom design (+$25/set)"
      ],
      minOrderQuantity: 40,
      leadTimes: {
        "40-120": "6-7 weeks",
        "121-240": "7-8 weeks",
        "241-480": "8-9 weeks",
        "480+": "9-10 weeks"
      },
      pricing: {
        "40-120": 95.00,
        "121-240": 88.00,
        "241-480": 82.00,
        "480+": 75.00
      },
      features: [
        "Pattern matching across pieces",
        "Fade-resistant technology",
        "Envelope pillowcase closure",
        "Pre-washed for softness"
      ],
      colorfastness: ["4-5 on AATCC Gray Scale", "50+ wash durability"],
      designService: ["Pantone color matching", "Scale adjustments", "Repeat pattern customization"]
    },
    {
      id: "BS-AT-003",
      name: "Flat Sheets",
      image: "/images/products/bedding/bs-at-003.jpg",
      images: [
        "/images/products/bedding/bs-at-003.jpg",
        "/images/products/bedding/bs-at-003-folded.jpg",
        "/images/products/bedding/bs-at-003-bed.jpg",
        "/images/products/bedding/bs-at-003-detail.jpg"
      ],
      description: "Single-layer flat sheets perfect for hot sleepers or layered bedding. Finished with mitered corners for elegant drape.",
      materials: [
        { 
          name: "100% Linen", 
          price: 0,
          properties: ["Highly breathable", "Gets softer with wash", "Moisture-wicking"]
        },
        { 
          name: "Supima Cotton Percale", 
          price: 25,
          properties: ["Year-round comfort", "Durable 200+ washes"]
        }
      ],
      sizes: ["Twin", "Full", "Queen", "King", "Split King"],
      weights: [
        "Lightweight (150GSM)",
        "Medium (190GSM)",
        "Heavyweight (220GSM +$15)"
      ],
      hemStyles: [
        "Standard 2-inch hem",
        "Decorative 4-inch hem (+$8)",
        "Monogrammed (+$12)"
      ],
      minOrderQuantity: 60,
      leadTimes: {
        "60-180": "3-4 weeks",
        "181-360": "4-5 weeks",
        "361-720": "5-6 weeks",
        "720+": "6-7 weeks"
      },
      pricing: {
        "60-180": 65.00,
        "181-360": 60.00,
        "361-720": 55.00,
        "720+": 50.00
      },
      features: [
        "Pre-washed to prevent shrinkage",
        "Tear-resistant selvage edges",
        "Corner loops (optional +$5)",
        "Natural fiber options"
      ],
      bestFor: ["Summer bedding", "Layering", "Hot sleepers", "Guest rooms"]
    },
    {
      id: "BS-AT-004",
      name: "Percale Sheets",
      image: "/images/products/bedding/bs-at-004.jpg",
      images: [
        "/images/products/bedding/bs-at-004.jpg",
        "/images/products/bedding/bs-at-004-folded.jpg",
        "/images/products/bedding/bs-at-004-bed.jpg",
        "/images/products/bedding/bs-at-004-texture.jpg"
      ],
      description: "Classic percale weave sheets with matte finish and breathable structure. Gets softer with every wash while maintaining crispness.",
      materials: [
        { 
          name: "100% Organic Cotton (300TC)", 
          price: 0,
          properties: ["GOTS certified", "Breathable", "Year-round use"]
        },
        { 
          name: "Egyptian Cotton (400TC)", 
          price: 30,
          properties: ["Longer fibers", "Luxury handfeel", "Enhanced durability"]
        }
      ],
      sizes: ["Twin", "Full", "Queen", "King", "Cal King"],
      weaveDetails: {
        "Type": "1-over-1-under plain weave",
        "Threads": "Equal warp/weft count",
        "Benefits": "Superior airflow"
      },
      colorOptions: ["White", "Ivory", "Light Grey", "Sky Blue"],
      minOrderQuantity: 50,
      leadTimes: {
        "50-150": "5-6 weeks",
        "151-300": "6-7 weeks",
        "301-600": "7-8 weeks",
        "600+": "8-9 weeks"
      },
      pricing: {
        "50-150": 110.00,
        "151-300": 102.00,
        "301-600": 95.00,
        "600+": 88.00
      },
      features: [
        "Double-stitched hems",
        "All-around elastic (fitted)",
        "Oeko-Tex certified dyes",
        "Minimal shrinkage (<3%)"
      ],
      coolingProperties: {
        "Airflow": "High",
        "Heat Dissipation": "0.5°C cooler than sateen",
        "Moisture Wicking": "150% faster drying"
      },
      setOptions: [
        "4-piece standard",
        "5-piece (+pillow sham)",
        "7-piece (European shams +$40)"
      ]
    }         
  ],

  // Accessories
  'bags': [
    {
      id: "TB-AT-001",
      name: "Tote Bag",
      image: "/images/products/bags/tb-at-001.jpg",
      images: [
        "/images/products/bags/tb-at-001.jpg",
        "/images/products/bags/tb-at-001-side.jpg"
      ],
      description: "Eco-friendly jute tote bag perfect for groceries, daily errands, or retail. Strong, stylish, and sustainable with sturdy handles and reinforced stitching.",
      materials: [
        { name: "Natural Jute", price: 0 },
        { name: "Jute with Cotton Lining", price: 1.5 },
        { name: "Laminated Jute", price: 2 }
      ],
      sizes: ["Small (10x12 in)", "Medium (14x16 in)", "Large (16x18 in)"],
      colors: ["Natural", "Black Trim", "Navy Trim", "Olive", "Rust"],
      minOrderQuantity: 100,
      leadTimes: {
        "100-500": "3-4 weeks",
        "501-1000": "4-5 weeks",
        "1000+": "6-7 weeks"
      },
      pricing: {
        "100-500": 4.25,
        "501-1000": 3.75,
        "1000+": 3.25
      },
      features: [
        "Durable jute fiber",
        "Reinforced cotton handles",
        "Custom logo printing available",
        "Biodegradable and reusable"
      ],
      category: "bags"
    },
    {
      id: "TB-AT-002",
      name: "Canvas Grocery Bag",
      image: "/images/products/bags/tb-at-002.jpg",
      images: [
        "/images/products/bags/tb-at-002.jpg",
        "/images/products/bags/tb-at-002-side.jpg"
      ],
      description: "Heavy-duty canvas tote bag ideal for groceries, shopping, and everyday use. Washable, reusable, and designed for sustainability with modern style.",
      materials: [
        { name: "100% Cotton Canvas", price: 0 },
        { name: "Recycled Cotton Canvas", price: 1 }
      ],
      sizes: ["Medium (14x15 in)", "Large (16x18 in)"],
      colors: ["Natural", "Black", "Beige", "Olive Green"],
      minOrderQuantity: 100,
      leadTimes: {
        "100-500": "2-3 weeks",
        "501-1000": "3-4 weeks",
        "1000+": "4-5 weeks"
      },
      pricing: {
        "100-500": 5.00,
        "501-1000": 4.25,
        "1000+": 3.75
      },
      features: [
        "Thick 12oz canvas",
        "Double-stitched handles",
        "Machine washable",
        "Custom branding options"
      ],
      category: "bags"
    },
    {
      id: "TB-AT-003",
      name: "Foldable Shopping Bag",
      image: "/images/products/bags/tb-at-003.jpg",
      images: [
        "/images/products/bags/tb-at-003.jpg",
        "/images/products/bags/tb-at-003-folded.jpg"
      ],
      description: "Compact foldable shopping bag made from recycled polyester. Lightweight, durable, and designed to fit in your purse or pocket—perfect for everyday errands.",
      materials: [
        { name: "Recycled Polyester (rPET)", price: 0 },
        { name: "Water-Resistant Nylon", price: 1 }
      ],
      sizes: ["One Size (15x16 in unfolded)"],
      colors: ["Gray", "Teal", "Coral", "Navy", "Multicolor Print"],
      minOrderQuantity: 200,
      leadTimes: {
        "200-500": "2-3 weeks",
        "501-1000": "3-4 weeks",
        "1000+": "4-5 weeks"
      },
      pricing: {
        "200-500": 3.25,
        "501-1000": 2.75,
        "1000+": 2.25
      },
      features: [
        "Foldable design with pouch",
        "Water-resistant",
        "Machine washable",
        "Custom logo printing available"
      ],
      category: "bags"
    }
  ],

  'hats': [
    {
      id: "CP-CS-001",
      name: "Custom Cap",
      image: "/images/products/hats/cp-cs-001.jpg",
      images: [
        "/images/products/hats/cp-cs-001.jpg",
        "/images/products/hats/cp-cs-001-back.jpg"
      ],
      description: "Premium 6-panel custom cap with adjustable strap and curved visor. Ideal for events, retail brands, or giveaways with embroidery or screen print options.",
      materials: [
        { name: "100% Cotton Twill", price: 0 },
        { name: "Organic Cotton", price: 1.5 },
        { name: "Recycled Cotton Blend", price: 1.75 }
      ],
      sizes: ["One Size (Adjustable)"],
      colors: ["Black", "White", "Navy", "Khaki", "Charcoal"],
      minOrderQuantity: 100,
      leadTimes: {
        "100-500": "2-3 weeks",
        "501-1000": "3-4 weeks",
        "1000+": "4-5 weeks"
      },
      pricing: {
        "100-500": 5.50,
        "501-1000": 4.75,
        "1000+": 4.00
      },
      features: [
        "6-panel design",
        "Curved brim",
        "Adjustable strap with metal buckle",
        "Custom embroidery or print option"
      ],
      category: "hats"
    },
    {
      id: "CP-BK-001",
      name: "Bucket Hat",
      image: "/images/products/hats/cp-bk-001.jpg",
      images: [
        "/images/products/hats/cp-bk-001.jpg",
        "/images/products/hats/cp-bk-001-side.jpg"
      ],
      description: "Classic bucket hat with breathable eyelets and soft brim. A trendy option for sunny days, festivals, beachwear, and streetwear collections.",
      materials: [
        { name: "Cotton Canvas", price: 0 },
        { name: "Washed Cotton", price: 1.25 }
      ],
      sizes: ["S/M", "L/XL"],
      colors: ["Beige", "Black", "Olive", "Stonewash Blue", "Camo"],
      minOrderQuantity: 100,
      leadTimes: {
        "100-500": "3-4 weeks",
        "501-1000": "4-5 weeks",
        "1000+": "5-6 weeks"
      },
      pricing: {
        "100-500": 6.00,
        "501-1000": 5.25,
        "1000+": 4.50
      },
      features: [
        "Soft brim",
        "Side ventilation eyelets",
        "Vintage washed look",
        "Brand label stitching optional"
      ],
      category: "hats"
    },
    {
      id: "CP-WB-001",
      name: "Winter Beanie",
      image: "/images/products/hats/cp-wb-001.jpg",
      images: [
        "/images/products/hats/cp-wb-001.jpg",
        "/images/products/hats/cp-wb-001-folded.jpg"
      ],
      description: "Warm knit beanie made from soft acrylic or recycled yarn. Great for winter collections or branded merchandise during colder months.",
      materials: [
        { name: "Acrylic Knit", price: 0 },
        { name: "Recycled Acrylic Blend", price: 1.5 },
        { name: "Wool-Acrylic Blend", price: 2 }
      ],
      sizes: ["One Size (Stretch Fit)"],
      colors: ["Heather Gray", "Black", "Burgundy", "Navy", "Forest Green"],
      minOrderQuantity: 100,
      leadTimes: {
        "100-500": "3 weeks",
        "501-1000": "4 weeks",
        "1000+": "5 weeks"
      },
      pricing: {
        "100-500": 4.25,
        "501-1000": 3.75,
        "1000+": 3.25
      },
      features: [
        "Ribbed knit pattern",
        "Fold-over cuff",
        "Custom woven patch optional",
        "Warm and stretchable"
      ],
      category: "hats"
    }
  ]
};

// Helper function to get products by subcategory
export const getProductsBySubcategory = (subcategoryId) => {
  return productsData[subcategoryId] || [];
};

// Helper function to get all products
export const getAllProducts = () => {
  return Object.values(productsData).flat();
};

// Helper function to get product by ID - UPDATED
export const getProductById = (id) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === id); // Remove parseInt since IDs are strings
};