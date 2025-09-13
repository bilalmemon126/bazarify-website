const products = [
    {
        id: 0,
        mainImage: "mobile1.webp",
        images: ["mobile1.webp", "mobile2.webp", "mobile3.webp", "mobile4.webp"],
        title: "Apple iPhone 12 128Gb & 256Gb Pta Approve With 7days Replace Warranty",
        description: "Looking for a like-new iPhone 12 at the best price? At Microtel Trading, every phone comes with 7 Days Replacement and 3 Weeks Service Warranty so you can shop with complete peace of mind.",
        price: 96000,
        category: "mobile",
        location: "hyderabad"
    },
    {
        id: 1,
        mainImage: "mobile2.webp",
        images: ["mobile2.webp", "mobile3.webp", "mobile4.webp", "mobile1.webp"],
        title: "Apple iPhone 12 128Gb & 256Gb Pta Approve With 7days Replace Warranty",
        description: "Looking for a like-new iPhone 12 at the best price? At Microtel Trading, every phone comes with 7 Days Replacement and 3 Weeks Service Warranty so you can shop with complete peace of mind.",
        price: 96000,
        category: "mobile",
        location: "karachi"
    },
    {
        id: 2,
        mainImage: "mobile3.webp",
        images: ["mobile3.webp", "mobile4.webp", "mobile1.webp", "mobile2.webp"],
        title: "Apple iPhone 12 128Gb & 256Gb Pta Approve With 7days Replace Warranty",
        description: "Looking for a like-new iPhone 12 at the best price? At Microtel Trading, every phone comes with 7 Days Replacement and 3 Weeks Service Warranty so you can shop with complete peace of mind.",
        price: 96000,
        category: "mobile",
        location: "lahore"
    },
    {
        id: 3,
        mainImage: "mobile4.webp",
        images: ["mobile4.webp", "mobile1.webp", "mobile2.webp", "mobile3.webp"],
        title: "Apple iPhone 12 128Gb & 256Gb Pta Approve With 7days Replace Warranty",
        description: "Looking for a like-new iPhone 12 at the best price? At Microtel Trading, every phone comes with 7 Days Replacement and 3 Weeks Service Warranty so you can shop with complete peace of mind.",
        price: 96000,
        category: "mobile",
        location: "karachi"
    },
    {
        id: 4,
        mainImage: "car1.webp",
        images: ["car1.webp", "car2.webp", "car3.webp", "car4.webp"],
        title: "2020 Toyota Raize Z Better Rocky Yaris City Corolla Swift",
        description: "Fresh Import 2025 Remote Engine Start G Package 2020 Model Shiny Blue Colour Low Mileage: 31631 KM Comfortable And High Quality Stylish Model Parking Sensors Auto LED Head Lamps LED Clearance Lamp Smart Assist LED Digital Speedometer",
        price: 56.90+" Lacs",
        category: "car",
        location: "islamabad"
    },
    {
        id: 5,
        mainImage: "car2.webp",
        images: ["car2.webp", "car3.webp", "car4.webp", "car1.webp"],
        title: "Honda BR-V S 2020 Top of the Line Better then Toyota Raize, Aqua, Vitz",
        description: "Fresh Import 2025 Remote Engine Start G Package 2020 Model Shiny Blue Colour Low Mileage: 31631 KM Comfortable And High Quality Stylish Model Parking Sensors Auto LED Head Lamps LED Clearance Lamp Smart Assist LED Digital Speedometer",
        price: 47+" Lacs",
        category: "car",
        location: "lahore"
    },
    {
        id: 6,
        mainImage: "car3.webp",
        images: ["car3.webp", "car4.webp", "car1.webp", "car2.webp"],
        title: "toyota passo 2020 model tottal genuine",
        description: "Fresh Import 2025 Remote Engine Start G Package 2020 Model Shiny Blue Colour Low Mileage: 31631 KM Comfortable And High Quality Stylish Model Parking Sensors Auto LED Head Lamps LED Clearance Lamp Smart Assist LED Digital Speedometer",
        price: 39+" Lacs",
        category: "car",
        location: "hyderabad"
    },
    {
        id: 7,
        mainImage: "car4.webp",
        images: ["car4.webp", "car1.webp", "car2.webp", "car3.webp"],
        title: "Suzuki Swift DLX ABS 2016",
        description: "Fresh Import 2025 Remote Engine Start G Package 2020 Model Shiny Blue Colour Low Mileage: 31631 KM Comfortable And High Quality Stylish Model Parking Sensors Auto LED Head Lamps LED Clearance Lamp Smart Assist LED Digital Speedometer",
        price: 23.50+" Lacs",
        category: "car",
        location: "karachi"
    },
    {
        id: 8,
        mainImage: "bike1.webp",
        images: ["bike1.webp", "bike2.webp", "bike3.webp", "bike4.webp"],
        title: "Honda 125 good condition",
        description: "Honda 125 2014 model First owner 40,000km Best condition",
        price: 1.10+" Lacs",
        category: "bike",
        location: "hyderabad"
    },
    {
        id: 9,
        mainImage: "bike2.webp",
        images: ["bike2.webp", "bike3.webp", "bike4.webp", "bike1.webp"],
        title: "Ducati Corse Panigal Urgent For Sale",
        description: "Honda 125 2014 model First owner 40,000km Best condition",
        price: 9.19+" Lacs",
        category: "bike",
        location: "hyderabad"
    },
    {
        id: 10,
        mainImage: "bike3.webp",
        images: ["bike3.webp", "bike4.webp", "bike1.webp", "bike2.webp"],
        title: "YAMAHA YBR 125G MATT GRAY 2023",
        description: "Honda 125 2014 model First owner 40,000km Best condition",
        price: 3.75+" Lacs",
        category: "bike",
        location: "karachi"
    },
    {
        id: 11,
        mainImage: "bike4.webp",
        images: ["bike4.webp", "bike1.webp", "bike2.webp", "bike3.webp"],
        title: "Suzuki GR-150",
        description: "Honda 125 2014 model First owner 40,000km Best condition",
        price: 4.80+" Lacs",
        category: "bike",
        location: "karachi"
    },
    {
        id: 12,
        mainImage: "electronics1.webp",
        images: ["electronics1.webp", "electronics2.webp", "electronics3.webp", "electronics4.webp"],
        title: "LIMITED HOT SALE LED TV 55 INCH SAMSUNG ANDROID ULTRA SHARP 4k",
        description: "HOME DELIVERY AVAILABLE WALL FITTING AVAILABLE 24 INCH TO 101 INCHES AVAILABLE ALL LED TV,S PRICES : 32 Smart LED TV 17,000 TO 28000, 32000 43 Smart LED TV 27,000 TO 40,000, 45000 48 Smart LED TV 35,000 TO 55,000 55 Smart LED TV 48000 TO 68,000, 82000 65 Smart LED TV 64000 TO 98,000",
        price: 50000,
        category: "electronic",
        location: "hyderabad"
    },
    {
        id: 13,
        mainImage: "electronics2.webp",
        images: ["electronics2.webp", "electronics3.webp", "electronics4.webp", "electronics1.webp"],
        title: "Old, Dead & Scrap AC We Buy Best Price Offer",
        description: "We buy **Old, Used & Dead AC Units** at the **best market price**. Accurate price according to AC condition Fair & Transparent dealing Quick & Hassle-Free Service",
        price: 35000,
        category: "electronic",
        location: "lahore"
    },
    {
        id: 14,
        mainImage: "electronics3.webp",
        images: ["electronics3.webp", "electronics4.webp", "electronics1.webp", "electronics2.webp"],
        title: "Solar LED Street Light/ Energy Savings Solutions",
        description: "Remote control options Battery type: LiFePO4 3.2V Lithium Solar Panel type: Polycrystalline 6V/18w Battery Discharging time 12 to 14 hours. Battery charging time 4 to 6 hours Recommended height is 3 to 5 meters Easy to install No Electricity Expense",
        price: 13000,
        category: "electronic",
        location: "lahore"
    },
    {
        id: 15,
        mainImage: "electronics4.webp",
        images: ["electronics4.webp", "electronics1.webp", "electronics2.webp", "electronics3.webp"],
        title: "PS5 Disc Edition + 8 Original Games + Controller – Full Bundle",
        description: "Selling my PS5 Disc Edition in excellent condition. Comes with: 1 Original DualSense Controller All cables included (power + HDMI)",
        price: 1.85+" Lac",
        category: "electronic",
        location: "islamabad"
    },
    {
        id: 16,
        mainImage: "fashion1.webp",
        images: ["fashion1.webp", "fashion2.webp", "fashion3.webp", "fashion4.webp"],
        title: "3pcs women grip silk plain suit",
        description: "•Fabric: Grip Silk •Pattern: Plain •Shirt Pattern: Plain •Trouser Pattern: Plain •Dupatta Pattern: Printed •Available Sizes: Medium •Number Of Pieces: 3 Pcs •Color: Yellow •Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta •Shirt Length: 31 Inches •Shirt Chest: 21 Inches •Shirt Shoulder: 15 Inches •Trouser Length: 38 Inches •Trouser Waist: 44 Inches •Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.",
        price: 3500,
        category: "fashion",
        location: "karachi"
    },
    {
        id: 17,
        mainImage: "fashion2.webp",
        images: ["fashion2.webp", "fashion3.webp", "fashion4.webp", "fashion1.webp"],
        title: "Instant Cash for Rolex Omega Chopard IWC BVLGARI PP VC Cartier Zenith",
        description: "Looking to sell your Rolex, Omega, Cartier, Patek Philippe or any Swiss luxury watch? We pay the highest cash on the spot! Trusted by thousands across Lahore, Karachi, and Islamabad, we specialize in buying luxury watches – new, used, vintage, gold, diamond, and limited editions.",
        price: 20+" Lacs",
        category: "fashion",
        location: "karachi"
    },
    {
        id: 18,
        mainImage: "fashion3.webp",
        images: ["fashion3.webp", "fashion4.webp", "fashion1.webp", "fashion2.webp"],
        title: "Cross body bags",
        description: "•Material: PU Leather •Pattern: Plain •Gender: Girl's •Number Of Pieces: 1 Pc With delivery •Product Feature: Minimal •Color: Black •Package Includes: 1 x Crossbody Bag •Length: 8 Inches •Width: 5 Inches •Height: 4.5 Inches",
        price: 1500,
        category: "fashion",
        location: "lahore"
    },
    {
        id: 19,
        mainImage: "fashion4.webp",
        images: ["fashion4.webp", "fashion1.webp", "fashion2.webp", "fashion3.webp"],
        title: "1. New Stylish Shoes for &Women 2. Affordable Quality Footwear",
        description: "- نیا، آرام دہ اور اسٹائلش جوتے  -  خواتین کے لیے دستیاب  - اعلیٰ معیار کے مواد سے بنے ہوئے  - مختلف سائز میں دستیاب  - بہترین قیمت پر فوری دستیابی  ",
        price: 2000,
        category: "fashion",
        location: "hyderabad"
    },  
    {
        id: 20,
        mainImage: "house1.webp",
        images: ["house1.webp", "house2.webp", "house3.webp", "house4.webp"],
        title: "4 brand new house for sale Al najaf Colony Jarawala Road Faisalabad",
        description: "Al Najaf Colony Jaranwala Road Near to KHAWAJA Islam Road Faisalabad 4 Marla Brand New Double Story Corner House* Available For Sale: *3 Bedrooms* Attached Bath With Attached Cupboards",
        price: 1.60+" Crore",
        category: "house",
        location: "karachi"
    },
    {
        id: 21,
        mainImage: "house2.webp",
        images: ["house2.webp", "house3.webp", "house4.webp", "house1.webp"],
        title: "House for sale",
        description: "Al Najaf Colony Jaranwala Road Near to KHAWAJA Islam Road Faisalabad 4 Marla Brand New Double Story Corner House* Available For Sale: *3 Bedrooms* Attached Bath With Attached Cupboards",
        price: 2.85+" Crore",
        category: "house",
        location: "islamabad"
    },
    {
        id: 22,
        mainImage: "house3.webp",
        images: ["house3.webp", "house4.webp", "house1.webp", "house2.webp"],
        title: "Prime 125 Sq. Yds Villa for Sale in Precinct Ali Block Bahria Town Karachi | With Key | Ready to Move",
        description: "Al Najaf Colony Jaranwala Road Near to KHAWAJA Islam Road Faisalabad 4 Marla Brand New Double Story Corner House* Available For Sale: *3 Bedrooms* Attached Bath With Attached Cupboards",
        price: 1.25+" Crore",
        category: "house",
        location: "hyderabad"
    },
    {
        id: 23,
        mainImage: "house4.webp",
        images: ["house4.webp", "house1.webp", "house2.webp", "house3.webp"],
        title: "8 MARLA DOUBLE UNIT HOUSE",
        description: "Al Najaf Colony Jaranwala Road Near to KHAWAJA Islam Road Faisalabad 4 Marla Brand New Double Story Corner House* Available For Sale: *3 Bedrooms* Attached Bath With Attached Cupboards",
        price: 2.35+" Crore",
        category: "house",
        location: "lahore"
    },
    {
        id: 24,
        mainImage: "furniture1.webp",
        images: ["furniture1.webp", "furniture2.webp", "furniture3.webp", "furniture4.webp"],
        title: "New Dining Set (Raw Table and 10 Chairs",
        description: "New Dining set 10 Chairs and Raw Table, Polish at your own color",
        price: 1.65+" Lac",
        category: "furniture",
        location: "karachi"
    },
    {
        id: 25,
        mainImage: "furniture2.webp",
        images: ["furniture2.webp", "furniture3.webp", "furniture4.webp", "furniture1.webp"],
        title: "Bed side table dressing Complete set in 50k with 10 year warranty",
        description: "New Dining set 10 Chairs and Raw Table, Polish at your own color",
        price: 44999,
        category: "furniture",
        location: "hyderabad"
    },
    {
        id: 26,
        mainImage: "furniture3.webp",
        images: ["furniture3.webp", "furniture4.webp", "furniture1.webp", "furniture2.webp"],
        title: "Bed side table dressing Complete set in 50k with 10 year warranty",
        description: "New Dining set 10 Chairs and Raw Table, Polish at your own color",
        price: 44999,
        category: "furniture",
        location: "lahore"
    },
    {
        id: 27,
        mainImage: "furniture4.webp",
        images: ["furniture4.webp", "furniture1.webp", "furniture2.webp", "furniture3.webp"],
        title: "High build quality chairs for office",
        description: "computer, office chairs both for home, office High build quality",
        price: 9000,
        category: "furniture",
        location: "lahore"
    },
    {
        id: 28,
        mainImage: "kids1.webp",
        images: ["kids1.webp", "kids2.webp", "kids3.webp", "kids4.webp"],
        title: "jumping castle / token ride / swings / jhuly / kids / kiddi",
        description: "A name of trust. A name of Quality. We provide playground Equipment at most challenging price.",
        price: 1.10+" Lac",
        category: "kids",
        location: "islamabad"
    },
    {
        id: 29,
        mainImage: "kids2.webp",
        images: ["kids2.webp", "kids3.webp", "kids4.webp", "kids1.webp"],
        title: "Battery Operated Kids Bikes | Kids Toys | Baby Toys | Online Toys",
        description: "A name of trust. A name of Quality. We provide playground Equipment at most challenging price.",
        price: 14000,
        category: "kids",
        location: "hyderabad"
    },
    {
        id: 30,
        mainImage: "kids3.webp",
        images: ["kids3.webp", "kids4.webp", "kids1.webp", "kids2.webp"],
        title: "Teddy bear",
        description: "new condition teddy bear",
        price: 2000,
        category: "kids",
        location: "lahore"
    },
    {
        id: 31,
        mainImage: "kids4.webp",
        images: ["kids4.webp", "kids1.webp", "kids2.webp", "kids3.webp"],
        title: "Trampoline | Jumping Pad | Round Trampoline | Kids Toy|With safety net",
        description: "Top Quality Trampoline Available For Sale Company and (GS) International Approved/ Certified Quality Please Contact on Mobile",
        price: 25000,
        category: "kids",
        location: "karachi"
    }
]


const category = [
    {
        categoryImage: "bikes.png",
        categoryName: "bike"
    },
    {
        categoryImage: "cars.png",
        categoryName: "car"
    },
    {
        categoryImage: "electronics.png",
        categoryName: "electronics"
    },
    {
        categoryImage: "fashion.png",
        categoryName: "fashion"
    },
    {
        categoryImage: "furniture.png",
        categoryName: "furniture"
    },
    {
        categoryImage: "house.png",
        categoryName: "house"
    },
    {
        categoryImage: "kids.png",
        categoryName: "kids"
    },
    {
        categoryImage: "mobiles.png",
        categoryName: "mobile"
    }
]

export {products, category}