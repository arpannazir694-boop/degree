/**
 * DEGREE LUXURY LEATHER - CORE APPLICATION LOGIC
 * High-performance interactive store engine with cross-page persistence
 */

// ==========================================
// ATELIER COMING SOON OVERLAY - ALL PAGES
// Displays the teaser card in front with blurred background
// ==========================================
(function initAtelierTeaser() {
  function renderOverlay() {
    if (!document.body) return;
    document.body.classList.add('teaser-lock');
    if (document.getElementById('teaserOverlay')) return;
    const overlay = document.createElement('aside');
    overlay.id = 'teaserOverlay';
    overlay.className = 'teaser-overlay';
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Coming Soon');
    overlay.innerHTML = `
      <div class="teaser-card">
        <div class="teaser-card-inner">
          <p class="teaser-eyebrow">A new design story is unfolding</p>
          <h2 class="teaser-title">Something Beautiful is Taking shape.</h2>
          <p class="teaser-desc">Thoughtfully designed bags, wallets and everyday essentials. Created with a love for detail, made to be part of your everyday.</p>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderOverlay);
  } else {
    renderOverlay();
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // ==========================================
  // MASTER COMPANY COLLECTIONS (24 PIECES ACROSS 3 SIGNATURE LINES)
  // Complete with Flipkart-style pricing, discounts, ratings, colors & specs
  // ==========================================
  const companyCollections = [

    // ==========================================
    // LADIES COLLECTION
    // ==========================================
    // --- Category: Ladies Handbag (4 items) ---
    {
      id: 'lh-01',
      title: 'Aurelia Structured Flap Handbag',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'handbag',
      categoryTitle: 'Ladies Handbag',
      gender: 'women',
      leather: 'Full-Grain Italian Calfskin',
      priceINR: 12800,
      originalPriceINR: 15500,
      rating: 4.9,
      reviewsCount: 142,
      badge: '17% OFF • Bestseller',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Saddle", "hex": "#8c5332"}, {"name": "Noir Black", "hex": "#1a1a1a"}, {"name": "Olive Hunter", "hex": "#2f3e2e"}],
      description: 'Sculpted architectural leather handbag featuring custom hand-burnished edges, solid brass hardware, and dual microfiber compartments.',
      specs: [
        "Full-grain Italian calfskin with gold-tone lock",
        "Detachable 52cm shoulder strap",
        "Lined in scratch-resistant alcantara",
        "Dimensions: 27cm x 21cm x 11cm"
]
    },
    {
      id: 'lh-02',
      title: 'Verona Pleated Handle Handbag',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'handbag',
      categoryTitle: 'Ladies Handbag',
      gender: 'women',
      leather: 'Vachetta Drum-Dyed Leather',
      priceINR: 13900,
      originalPriceINR: 16800,
      rating: 4.8,
      reviewsCount: 98,
      badge: 'Handcrafted',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#a76c3f"}, {"name": "Midnight Ink", "hex": "#1b222c"}],
      description: 'A refined daytime luxury silhouette accented with braided grab handle, secure zip ceiling, and antiqued brass studs.',
      specs: [
        "Vachetta vegetable tanned drum-dyed leather",
        "Braided top grab handle plus crossbody sling",
        "Internal zipped pocket & key leash",
        "Dimensions: 29cm x 23cm x 12cm"
]
    },
    {
      id: 'lh-03',
      title: 'Siena Heritage Box Handbag',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'handbag',
      categoryTitle: 'Ladies Handbag',
      gender: 'women',
      leather: 'Box-Calf Fine Grain Leather',
      priceINR: 14500,
      originalPriceINR: 17900,
      rating: 5.0,
      reviewsCount: 116,
      badge: '19% OFF • Limited',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Dark Chocolate", "hex": "#3d2817"}, {"name": "Burgundy Wine", "hex": "#4a121a"}],
      description: 'Rigid structured box bag with polished corners and signature twist turnlock, paying homage to vintage luggage craft.',
      specs: [
        "Ultra-smooth box-calf finish",
        "Protective metal feet base",
        "Double accordion interior compartments",
        "Dimensions: 26cm x 19cm x 10cm"
]
    },
    {
      id: 'lh-04',
      title: 'Capri Trapeze Flap Handbag',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'handbag',
      categoryTitle: 'Ladies Handbag',
      gender: 'women',
      leather: 'Pebbled French Calf Hide',
      priceINR: 11500,
      originalPriceINR: 14000,
      rating: 4.9,
      reviewsCount: 84,
      badge: 'Atelier Pick',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Oatmeal Beige", "hex": "#cfbeaa"}, {"name": "Onyx Black", "hex": "#161616"}],
      description: 'Trapeze wings silhouette allowing expandable capacity, crafted in soft pebbled leather with effortless magnetic latching.',
      specs: [
        "Soft pebbled French calf hide",
        "Expandable side gussets with snap buttons",
        "Drop length: 12cm handle, 50cm strap",
        "Dimensions: 31cm x 22cm x 13cm"
]
    },
    // --- Category: Clutch (4 items) ---
    {
      id: 'lc-01',
      title: 'Étoile Envelope Evening Clutch',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'clutch',
      categoryTitle: 'Clutch',
      gender: 'women',
      leather: 'Smooth Satin Calfskin',
      priceINR: 6400,
      originalPriceINR: 8200,
      rating: 4.9,
      reviewsCount: 92,
      badge: '22% OFF • Evening',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Champagne Gold", "hex": "#c4a36b"}, {"name": "Velvet Black", "hex": "#1a1a1a"}],
      description: 'Sleek fold-over envelope profile designed for galas and cocktail evenings, lined in lush raw suede.',
      specs: [
        "Magnetic snap clasp envelope closure",
        "Interior 6 card slots and lip gloss slip",
        "Optional concealed chain strap in aged gold",
        "Dimensions: 24cm x 14cm x 3.5cm"
]
    },
    {
      id: 'lc-02',
      title: 'Milan Zip Wristlet Clutch',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'clutch',
      categoryTitle: 'Clutch',
      gender: 'women',
      leather: 'Full-Grain Nappa Leather',
      priceINR: 5200,
      originalPriceINR: 6500,
      rating: 4.8,
      reviewsCount: 134,
      badge: 'Everyday Elegance',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Bordeaux Wine", "hex": "#581825"}, {"name": "Caramel Tan", "hex": "#9c603b"}],
      description: 'Versatile wristlet pouch with hand-stitched wrist strap and heavy-gauge Japanese YKK brass teeth.',
      specs: [
        "Buttery-soft full-grain nappa",
        "Solid brass wrist lanyard clip",
        "Dedicated passport & phone slip pocket",
        "Dimensions: 22cm x 13cm x 2cm"
]
    },
    {
      id: 'lc-03',
      title: 'Palermo Accordion Flap Clutch',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'clutch',
      categoryTitle: 'Clutch',
      gender: 'women',
      leather: 'Croc-Embossed Calfskin',
      priceINR: 7200,
      originalPriceINR: 8900,
      rating: 4.9,
      reviewsCount: 67,
      badge: '19% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Emerald Green", "hex": "#1b4d3e"}, {"name": "Ebony Noir", "hex": "#121212"}],
      description: 'Distinctive croc texture stamped on vegetable tanned leather with an accordion tripartite interior.',
      specs: [
        "Triple accordion chamber layout",
        "Hand-painted edge finishing",
        "Accommodates all modern large smartphones",
        "Dimensions: 23cm x 15cm x 4.5cm"
]
    },
    {
      id: 'lc-04',
      title: 'Roma Minaudière Frame Clutch',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'clutch',
      categoryTitle: 'Clutch',
      gender: 'women',
      leather: 'Polished Harness Leather',
      priceINR: 7900,
      originalPriceINR: 9800,
      rating: 5.0,
      reviewsCount: 81,
      badge: 'Artisan Masterpiece',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Saddle Tan", "hex": "#8c5332"}, {"name": "Ivory Bone", "hex": "#ded6c7"}],
      description: 'Rigid metal frame wrapped in vegetable-dyed harness leather with a jewel-like solid brass clasp ball.',
      specs: [
        "Metal hinge clutch with leather exterior",
        "Lined in cream moire faille",
        "Compact luxury for celebratory occasions",
        "Dimensions: 20cm x 12cm x 5cm"
]
    },
    // --- Category: Tote (4 items) ---
    {
      id: 'lt-01',
      title: 'The Grand Carryall Leather Tote',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'tote',
      categoryTitle: 'Tote',
      gender: 'women',
      leather: 'Heavy-Duty Full-Grain Cowhide',
      priceINR: 14900,
      originalPriceINR: 18200,
      rating: 4.9,
      reviewsCount: 210,
      badge: '18% OFF • Work Essential',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Espresso Brown", "hex": "#362217"}, {"name": "Honey Saddle", "hex": "#a3663a"}],
      description: 'A spacious, unlined raw-edge tote designed to carry 15-inch laptops, documents, and daily life effortlessly.',
      specs: [
        "Accommodates 15.6-inch laptop",
        "Dual reinforced shoulder straps (26cm drop)",
        "Removable hanging leather zip organizer",
        "Dimensions: 40cm x 32cm x 14cm"
]
    },
    {
      id: 'lt-02',
      title: 'Verona Structured Zip Tote',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'tote',
      categoryTitle: 'Tote',
      gender: 'women',
      leather: 'Saffiano Scratch-Proof Leather',
      priceINR: 15800,
      originalPriceINR: 19500,
      rating: 5.0,
      reviewsCount: 178,
      badge: 'Signature Line',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Oxford Navy", "hex": "#1d293d"}, {"name": "Jet Noir", "hex": "#111111"}],
      description: 'Structured business tote with top zippered security and water-resistant crosshatch Saffiano surface.',
      specs: [
        "Scratch & splash-resistant Saffiano finish",
        "Padded center tech partition",
        "Reinforced protective base metal studs",
        "Dimensions: 38cm x 30cm x 13cm"
]
    },
    {
      id: 'lt-03',
      title: 'Tuscan Slouch Market Tote',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'tote',
      categoryTitle: 'Tote',
      gender: 'women',
      leather: 'Soft Waxy Pull-Up Leather',
      priceINR: 13200,
      originalPriceINR: 16000,
      rating: 4.8,
      reviewsCount: 95,
      badge: '17% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Rust Tan", "hex": "#9e532b"}, {"name": "Olive Moss", "hex": "#3d4b3c"}],
      description: 'Organic relaxed drape that patinas with every adventure. Soft, durable and generous in capacity.',
      specs: [
        "Pull-up leather with rich marble effect",
        "Magnetic collar closure",
        "Deep double interior phone pockets",
        "Dimensions: 42cm x 34cm x 15cm"
]
    },
    {
      id: 'lt-04',
      title: 'Palazzo Two-Tone Canvas & Leather Tote',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'tote',
      categoryTitle: 'Tote',
      gender: 'women',
      leather: 'Bridle Leather Trim & Heavy Duck Canvas',
      priceINR: 12500,
      originalPriceINR: 15000,
      rating: 4.9,
      reviewsCount: 88,
      badge: 'Summer Luxury',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Ecru & Tan", "hex": "#cbbca3"}, {"name": "Black & Sand", "hex": "#2a2825"}],
      description: 'Architectural contrast tote pairing 24oz heavy organic cotton canvas with bridle leather handles and bottom.',
      specs: [
        "24oz dense waterproof canvas base",
        "English bridle leather trims and handles",
        "Brass key ring and phone organizer",
        "Dimensions: 39cm x 31cm x 14cm"
]
    },
    // --- Category: Duffle (4 items) ---
    {
      id: 'ld-01',
      title: 'Riviera Petite Weekender Duffle',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'duffle',
      categoryTitle: 'Duffle',
      gender: 'women',
      leather: 'Drummed Grain Cowhide',
      priceINR: 16500,
      originalPriceINR: 20500,
      rating: 4.9,
      reviewsCount: 105,
      badge: '20% OFF • Travel',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Saddle", "hex": "#8c5332"}, {"name": "Tuscan Walnut", "hex": "#4a3221"}],
      description: 'An elegant women\'s 36-hour weekend duffle bag with doctor\'s bag wide hinge opening and cushioned shoulder pad.',
      specs: [
        "35L travel capacity, airline cabin approved",
        "Wide framed zipper opening for clear overview",
        "Luggage trolley sleeve on reverse",
        "Dimensions: 46cm x 26cm x 22cm"
]
    },
    {
      id: 'ld-02',
      title: 'Monaco Barrel Gym & Travel Duffle',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'duffle',
      categoryTitle: 'Duffle',
      gender: 'women',
      leather: 'Supple Nappa Calfskin',
      priceINR: 14200,
      originalPriceINR: 17800,
      rating: 4.8,
      reviewsCount: 73,
      badge: 'Athleisure Luxury',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Rosewood Clay", "hex": "#885149"}, {"name": "Raven Black", "hex": "#181818"}],
      description: 'A cylindrical barrel profile with waterproof ventilated side compartment for footwear or garments.',
      specs: [
        "Separate ventilated shoe pocket",
        "Padded ergonomic leather shoulder strap",
        "Water-resistant nylon drill interior lining",
        "Dimensions: 44cm x 24cm x 24cm"
]
    },
    {
      id: 'ld-03',
      title: 'Cortina Heritage Overnight Duffle',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'duffle',
      categoryTitle: 'Duffle',
      gender: 'women',
      leather: 'Vegetable-Tanned Saddle Leather',
      priceINR: 17800,
      originalPriceINR: 22000,
      rating: 5.0,
      reviewsCount: 89,
      badge: '19% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Vintage Chestnut", "hex": "#6b3c22"}, {"name": "Dark Umber", "hex": "#302016"}],
      description: 'Hand-stitched heavy leather duffle with brass padlock, reinforced bottom corners, and solid rivets.',
      specs: [
        "Includes working brass mini padlock & clochette",
        "Internal dual zipper compartments",
        "Heavy-gauge reinforced leather handles",
        "Dimensions: 48cm x 28cm x 24cm"
]
    },
    {
      id: 'ld-04',
      title: 'Geneva Flight Carry Duffle',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'duffle',
      categoryTitle: 'Duffle',
      gender: 'women',
      leather: 'Waxed Full-Grain Calfskin',
      priceINR: 15400,
      originalPriceINR: 18900,
      rating: 4.9,
      reviewsCount: 61,
      badge: 'First Class Pick',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Onyx Black", "hex": "#1a1a1a"}, {"name": "Warm Pecan", "hex": "#8a5738"}],
      description: 'Feather-light yet indestructible construction designed to slide beneath airline cabin seats with style.',
      specs: [
        "TSA-compliant external quick-access pocket",
        "Ultra-smooth nylon coil zipper",
        "Detachable canvas-backed leather strap",
        "Dimensions: 45cm x 25cm x 22cm"
]
    },
    // --- Category: Hobo (4 items) ---
    {
      id: 'lhb-01',
      title: 'Luna Crescent Hobo Bag',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'hobo',
      categoryTitle: 'Hobo',
      gender: 'women',
      leather: 'Soft Butter Calf Hide',
      priceINR: 13400,
      originalPriceINR: 16500,
      rating: 4.9,
      reviewsCount: 89,
      badge: '19% OFF • Trending',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Oat Cream", "hex": "#dcd0c0"}, {"name": "Espresso", "hex": "#39241b"}],
      description: 'Distinctive crescent curved moon bag that nestles smoothly under the arm with ergonomic ease.',
      specs: [
        "Flawless crescent silhouette",
        "Hidden magnetic top center clasp",
        "Interior zip pocket & slip pocket",
        "Dimensions: 34cm x 24cm x 9cm"
]
    },
    {
      id: 'lhb-02',
      title: 'Sienna Slouch Shoulder Hobo',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'hobo',
      categoryTitle: 'Hobo',
      gender: 'women',
      leather: 'Washed Grain Lambskin & Cowhide',
      priceINR: 14200,
      originalPriceINR: 17500,
      rating: 4.8,
      reviewsCount: 112,
      badge: 'Artisanal Drape',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Camel Saddle", "hex": "#9c603b"}, {"name": "Olive Hunter", "hex": "#304033"}],
      description: 'Casual bohemian luxury featuring generous interior folds and a broad, weight-distributing shoulder band.',
      specs: [
        "Extra wide 5cm comfortable shoulder strap",
        "Deep cavernous single main compartment",
        "Solid antique brass O-ring hardware",
        "Dimensions: 36cm x 30cm x 12cm"
]
    },
    {
      id: 'lhb-03',
      title: 'Amalfi Drawstring Hobo Pouch',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'hobo',
      categoryTitle: 'Hobo',
      gender: 'women',
      leather: 'Grained Nappa Hide',
      priceINR: 12800,
      originalPriceINR: 15600,
      rating: 5.0,
      reviewsCount: 76,
      badge: '18% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Dusty Taupe", "hex": "#8a7d73"}, {"name": "Noir Black", "hex": "#1a1a1a"}],
      description: 'Sculpted gather-top bucket hobo with leather tassel cord and versatile short and long straps.',
      specs: [
        "Smooth drawstring cinching closure",
        "Dual detachable strap options included",
        "Reinforced circular base panel",
        "Dimensions: 28cm x 27cm x 14cm"
]
    },
    {
      id: 'lhb-04',
      title: 'Sorrento Pleated Hobo',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'hobo',
      categoryTitle: 'Hobo',
      gender: 'women',
      leather: 'Drum-Tumbled Tuscan Leather',
      priceINR: 13900,
      originalPriceINR: 16900,
      rating: 4.9,
      reviewsCount: 64,
      badge: 'Exclusive Craft',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Burgundy Plum", "hex": "#4e1b29"}, {"name": "Caramel Tan", "hex": "#9c633a"}],
      description: 'Hand-folded base pleats that expand gracefully when filled while maintaining refined proportions.',
      specs: [
        "Hand-pleated structure by master artisans",
        "Secure ceiling brass zipper",
        "Branded brass Degree emblem charm",
        "Dimensions: 33cm x 26cm x 11cm"
]
    },
    // --- Category: Shopper (4 items) ---
    {
      id: 'ls-01',
      title: 'Mercato Open-Top Shopper',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'shopper',
      categoryTitle: 'Shopper',
      gender: 'women',
      leather: 'Natural Milled Cowhide',
      priceINR: 11800,
      originalPriceINR: 14500,
      rating: 4.9,
      reviewsCount: 122,
      badge: '19% OFF • Daily Go-To',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Chestnut Saddle", "hex": "#7d4727"}, {"name": "Midnight Black", "hex": "#171717"}],
      description: 'Clean-lined everyday shopper crafted with minimal hardware to highlight the grain and lightness.',
      specs: [
        "Featherlight 620g build",
        "Fits magazines, tablets, groceries, and essentials",
        "Interior tethered leather coin purse",
        "Dimensions: 37cm x 35cm x 11cm"
]
    },
    {
      id: 'ls-02',
      title: 'Firenze Gusseted Shopper',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'shopper',
      categoryTitle: 'Shopper',
      gender: 'women',
      leather: 'Vegetable Tanned Bridle Leather',
      priceINR: 13200,
      originalPriceINR: 16200,
      rating: 4.8,
      reviewsCount: 88,
      badge: 'Atelier Edition',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Tan", "hex": "#8c5332"}, {"name": "Forest Green", "hex": "#203a27"}],
      description: 'Wide gusseted shopper with contrasting saddle stitching along seams and dual hand handles.',
      specs: [
        "Reinforced flat base with brass rivets",
        "Solid hand-beveled bridle leather straps",
        "Generous wide gussets for extra capacity",
        "Dimensions: 38cm x 33cm x 15cm"
]
    },
    {
      id: 'ls-03',
      title: 'Bari Vertical Slim Shopper',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'shopper',
      categoryTitle: 'Shopper',
      gender: 'women',
      leather: 'Pebbled French Calf',
      priceINR: 10900,
      originalPriceINR: 13500,
      rating: 4.9,
      reviewsCount: 71,
      badge: '19% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Sand Dune", "hex": "#c5b59e"}, {"name": "Rich Mocha", "hex": "#432d1e"}],
      description: 'Tall, slender north-south profile crafted to fit notebooks, tablets, and wine bottles with clean poise.',
      specs: [
        "Vertical North-South profile",
        "Internal padded 13\" tablet sleeve",
        "Magnetic button collar closure",
        "Dimensions: 30cm x 38cm x 9cm"
]
    },
    {
      id: 'ls-04',
      title: 'Venice Structured City Shopper',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'shopper',
      categoryTitle: 'Shopper',
      gender: 'women',
      leather: 'Smooth Box Calfskin',
      priceINR: 14500,
      originalPriceINR: 17800,
      rating: 5.0,
      reviewsCount: 95,
      badge: 'Luxury Signature',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Classic Noir", "hex": "#1a1a1a"}, {"name": "Vintage Bordeaux", "hex": "#501c25"}],
      description: 'The quintessential executive shopper: firm panels, immaculate glass-like edge paint, and gold zipper safe.',
      specs: [
        "Ultra-clean architectural edge finishing",
        "Internal zip divider and organizer wall",
        "Protective solid brass base studs",
        "Dimensions: 36cm x 31cm x 13cm"
]
    },
    // --- Category: Backpack (4 items) ---
    {
      id: 'lb-01',
      title: 'Sienna Mini City Backpack',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'backpack',
      categoryTitle: 'Backpack',
      gender: 'women',
      leather: 'Full-Grain Pebbled Calf',
      priceINR: 12500,
      originalPriceINR: 15500,
      rating: 4.9,
      reviewsCount: 140,
      badge: '19% OFF • Favorite',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#9c603b"}, {"name": "Obsidian Black", "hex": "#151515"}],
      description: 'The petite everyday backpack that converts effortlessly into a crossbody shoulder bag with re-hookable straps.',
      specs: [
        "Convertible backpack-to-crossbody dual straps",
        "Hidden anti-theft back panel zip pocket",
        "Accommodates 11-inch iPad Pro",
        "Dimensions: 25cm x 28cm x 11cm"
]
    },
    {
      id: 'lb-02',
      title: 'Belgravia Flap Rucksack',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'backpack',
      categoryTitle: 'Backpack',
      gender: 'women',
      leather: 'Oil-Tanned Tuscan Cowhide',
      priceINR: 14800,
      originalPriceINR: 18200,
      rating: 5.0,
      reviewsCount: 99,
      badge: 'Heritage Cut',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Chestnut Saddle", "hex": "#7f4625"}, {"name": "Olive Field", "hex": "#374435"}],
      description: 'Traditional equestrian-inspired drawstring rucksack with a brass buckle flap and cushioned shoulder straps.',
      specs: [
        "Cinch cord opening beneath roller buckle flap",
        "Adjustable padded ergonomic leather straps",
        "Soft micro-suede full interior lining",
        "Dimensions: 29cm x 33cm x 13cm"
]
    },
    {
      id: 'lb-03',
      title: 'Verona Structured Dome Backpack',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'backpack',
      categoryTitle: 'Backpack',
      gender: 'women',
      leather: 'Saffiano Scratch-Resistant Hide',
      priceINR: 13900,
      originalPriceINR: 17000,
      rating: 4.8,
      reviewsCount: 78,
      badge: '18% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Midnight Ink", "hex": "#18202c"}, {"name": "Blush Sand", "hex": "#d3b9aa"}],
      description: 'Clean arched dome design providing generous clamshell opening with internal laptop and cosmetics organization.',
      specs: [
        "Double zipper clamshell perimeter opening",
        "Padded compartment for 13\" MacBook",
        "Hardened base retains elegant dome shape",
        "Dimensions: 28cm x 34cm x 12cm"
]
    },
    {
      id: 'lb-04',
      title: 'Como Slim Commuter Backpack',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'backpack',
      categoryTitle: 'Backpack',
      gender: 'women',
      leather: 'Drum-Dyed Smooth Calfskin',
      priceINR: 13400,
      originalPriceINR: 16400,
      rating: 4.9,
      reviewsCount: 85,
      badge: 'Metro Pick',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Espresso Brown", "hex": "#3b261b"}, {"name": "Graphite", "hex": "#252525"}],
      description: 'Ultra-slim profile designed to glide through metro stations and city offices with streamlined poise.',
      specs: [
        "Slim 8cm profile prevents bulkiness",
        "Internal key clip and tech sleeves",
        "Breathable leather back padding",
        "Dimensions: 27cm x 35cm x 8cm"
]
    },
    // --- Category: Purse (4 items) ---
    {
      id: 'lp-01',
      title: 'Clara Flap Coin & Card Purse',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'purse',
      categoryTitle: 'Purse',
      gender: 'women',
      leather: 'Grained Calf Leather',
      priceINR: 4200,
      originalPriceINR: 5400,
      rating: 4.9,
      reviewsCount: 160,
      badge: '22% OFF • Essential',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Honey Saddle", "hex": "#a3663a"}, {"name": "Noir Black", "hex": "#181818"}, {"name": "Blush Rose", "hex": "#c48882"}],
      description: 'Handheld fold-over purse with gusseted coin chamber, card slots, and snap brass closure.',
      specs: [
        "6 dedicated card slots + bill sleeve",
        "Expanding coin pocket with snap flap",
        "Fits smoothly into small evening clutches",
        "Dimensions: 11cm x 9cm x 2.5cm"
]
    },
    {
      id: 'lp-02',
      title: 'Bellini Kiss-Lock Vintage Purse',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'purse',
      categoryTitle: 'Purse',
      gender: 'women',
      leather: 'Supple Vachetta Hide',
      priceINR: 4900,
      originalPriceINR: 6200,
      rating: 4.8,
      reviewsCount: 87,
      badge: 'Retro Classic',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Rich Burgundy", "hex": "#501c25"}, {"name": "Tuscan Ochre", "hex": "#b37b3b"}],
      description: 'Nostalgic brass kiss-lock frame purse that opens wide with a satisfying tactile click.',
      specs: [
        "Solid brass double kiss-lock clasp",
        "Dual interior split compartments",
        "Ultra-soft tumbling leather finish",
        "Dimensions: 13cm x 10cm x 3.5cm"
]
    },
    {
      id: 'lp-03',
      title: 'Venezia Zip-Around Continental Purse',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'purse',
      categoryTitle: 'Purse',
      gender: 'women',
      leather: 'Saffiano Textured Calfskin',
      priceINR: 5800,
      originalPriceINR: 7200,
      rating: 5.0,
      reviewsCount: 114,
      badge: '19% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Classic Black", "hex": "#171717"}, {"name": "Navy Blue", "hex": "#1f2a3c"}],
      description: 'Full-size continental purse with 12 card slots, full-length bill chambers, and central zipped coin hold.',
      specs: [
        "12 card slots + 3 currency slots",
        "Central zip divider pocket",
        "Scratch-resistant Saffiano finish",
        "Dimensions: 19.5cm x 10.5cm x 2.5cm"
]
    },
    {
      id: 'lp-04',
      title: 'Amalfi Envelope Accordion Purse',
      group: 'ladies',
      groupLabel: 'Ladies Collection',
      category: 'purse',
      categoryTitle: 'Purse',
      gender: 'women',
      leather: 'Full-Grain Waxed Leather',
      priceINR: 4600,
      originalPriceINR: 5800,
      rating: 4.9,
      reviewsCount: 69,
      badge: 'Bespoke Cut',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#9c603b"}, {"name": "Forest Green", "hex": "#233d2a"}],
      description: 'Compact tri-fold envelope purse with hand-stitched borders and burnished beeswax edges.',
      specs: [
        "Triple folded accordion chamber",
        "Beeswax hand-burnished edge coating",
        "Polished solid brass front stud",
        "Dimensions: 11.5cm x 8.5cm x 2.5cm"
]
    },

    // ==========================================
    // EVERYDAY ESSENTIALS
    // ==========================================
    // --- Category: Toilet case (4 items) ---
    {
      id: 'et-01',
      title: 'The Master Dopp Toilet Case',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'toiletcase',
      categoryTitle: 'Toilet case',
      gender: 'unisex',
      leather: 'Waterproof Waxed Cowhide',
      priceINR: 5400,
      originalPriceINR: 6900,
      rating: 4.9,
      reviewsCount: 154,
      badge: '22% OFF • Travel Must',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Rustic Tan", "hex": "#8c5332"}, {"name": "Matte Black", "hex": "#1a1a1a"}],
      description: 'Heavy-duty waterproof leather toiletry kit lined in wipeable antibacterial nylon with brass wire-frame opening.',
      specs: [
        "Wire-frame mouth stays wide open on counter",
        "Wipe-clean waterproof internal lining",
        "Heavy-duty Japanese YKK brass zipper",
        "Dimensions: 25cm x 13cm x 12cm"
]
    },
    {
      id: 'et-02',
      title: 'Verona Hanging Roll Toilet Case',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'toiletcase',
      categoryTitle: 'Toilet case',
      gender: 'unisex',
      leather: 'Full-Grain Buffalo Hide',
      priceINR: 6200,
      originalPriceINR: 7800,
      rating: 5.0,
      reviewsCount: 110,
      badge: 'Smart Travel',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Dark Walnut", "hex": "#3d2817"}, {"name": "Saddle Brown", "hex": "#7f4625"}],
      description: 'Tri-fold hanging kit that unrolls on bathroom hooks or hotel racks, featuring 4 clear and mesh compartments.',
      specs: [
        "Built-in solid brass hanging hook",
        "3 distinct zippered organizer chambers",
        "Heavy buckle strap secures tight roll",
        "Dimensions (unrolled): 62cm x 25cm"
]
    },
    {
      id: 'et-03',
      title: 'Firenze Dual-Zip Grooming Case',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'toiletcase',
      categoryTitle: 'Toilet case',
      gender: 'unisex',
      leather: 'Pebbled Calf Leather',
      priceINR: 5800,
      originalPriceINR: 7200,
      rating: 4.8,
      reviewsCount: 82,
      badge: '19% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Jet Black", "hex": "#151515"}, {"name": "Cognac", "hex": "#8c5332"}],
      description: 'Two independent zip chambers to keep dry grooming tools and wet liquid bottles separated safely.',
      specs: [
        "Double tier partitioned storage",
        "Bottom chamber for razor and toothbrushes",
        "Side leather carry grip handle",
        "Dimensions: 26cm x 14cm x 13cm"
]
    },
    {
      id: 'et-04',
      title: 'Siena Compact Flat Wash Bag',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'toiletcase',
      categoryTitle: 'Toilet case',
      gender: 'unisex',
      leather: 'Waxed Harness Leather',
      priceINR: 4600,
      originalPriceINR: 5900,
      rating: 4.9,
      reviewsCount: 67,
      badge: 'Slim Carry',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Tobacco Tan", "hex": "#9c603b"}, {"name": "Deep Forest", "hex": "#273a2b"}],
      description: 'Slim profile flat toilet pouch designed to slip flat into briefcase or overnight carry-on luggage effortlessly.',
      specs: [
        "Packs flat at just 3.5cm depth",
        "Leak-proof sealed internal seams",
        "Solid brass pull tab and wrist strap",
        "Dimensions: 24cm x 16cm x 4cm"
]
    },
    // --- Category: Sunglass holder (4 items) ---
    {
      id: 'es-01',
      title: 'Rigid Bridge Eyewear Case',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'sunglassholder',
      categoryTitle: 'Sunglass holder',
      gender: 'unisex',
      leather: 'Hard-Molded Harness Leather',
      priceINR: 2800,
      originalPriceINR: 3600,
      rating: 4.9,
      reviewsCount: 178,
      badge: '22% OFF • Everyday Pick',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Saddle Tan", "hex": "#8c5332"}, {"name": "Noir Black", "hex": "#161616"}, {"name": "British Tan", "hex": "#a3663a"}],
      description: 'Hard-shell molded leather case with internal nose-bridge support pillar to protect sunglasses against crushes.',
      specs: [
        "Internal wooden bridge support column",
        "Lined with plush microfiber to prevent scratches",
        "Magnetic brass snap stud front",
        "Dimensions: 17cm x 7.5cm x 4.5cm"
]
    },
    {
      id: 'es-02',
      title: 'Foldable Origami Glass Case',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'sunglassholder',
      categoryTitle: 'Sunglass holder',
      gender: 'unisex',
      leather: 'Full-Grain Italian Calf',
      priceINR: 3100,
      originalPriceINR: 3900,
      rating: 4.8,
      reviewsCount: 95,
      badge: 'Ingenious Design',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Mocha Brown", "hex": "#4a3221"}, {"name": "Caramel", "hex": "#9c603b"}],
      description: 'Triangular prismatic glasses case that folds completely flat to slip into pockets when glasses are worn.',
      specs: [
        "Collapses flat to 1cm thickness when empty",
        "Rigid triangular prism when opened",
        "Concealed magnetic latching flaps",
        "Dimensions: 16cm x 7cm x 6.5cm"
]
    },
    {
      id: 'es-03',
      title: 'Atelier Leather Sunglass Neck Lanyard',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'sunglassholder',
      categoryTitle: 'Sunglass holder',
      gender: 'unisex',
      leather: 'Braided Calfskin Cord',
      priceINR: 2200,
      originalPriceINR: 2800,
      rating: 4.9,
      reviewsCount: 64,
      badge: '21% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac & Brass", "hex": "#8c5332"}, {"name": "Black & Gunmetal", "hex": "#1e1e1e"}],
      description: 'Hand-braided supple leather strap with adjustable silicone loop anchors and solid brass hardware sliders.',
      specs: [
        "Universal silicone grip loops fit all arm sizes",
        "Slide brass bead for snug fit adjustment",
        "Total drop length: 42cm",
        "Lightweight all-day comfort"
]
    },
    {
      id: 'es-04',
      title: 'Sleeve Slip Sunglass Pocket',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'sunglassholder',
      categoryTitle: 'Sunglass holder',
      gender: 'unisex',
      leather: 'Waxy Pull-Up Leather',
      priceINR: 2400,
      originalPriceINR: 3100,
      rating: 4.7,
      reviewsCount: 71,
      badge: 'Minimalist',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Vintage Tan", "hex": "#9e532b"}, {"name": "Olive Drab", "hex": "#3d4b3c"}],
      description: 'Ultra-slim open-top slip case lined with cleaning microfiber, perfectly sized for shirts and breast pockets.',
      specs: [
        "Direct squeeze-open flex frame top",
        "Double-layered protection with zero bulk",
        "Edge-burnished vegetable tanned leather",
        "Dimensions: 17cm x 8cm x 0.8cm"
]
    },
    // --- Category: Airpod cover (4 items) ---
    {
      id: 'ea-01',
      title: 'Heritage Snap AirPod Pro Case',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'airpodcover',
      categoryTitle: 'Airpod cover',
      gender: 'unisex',
      leather: 'Full-Grain Saddle Cowhide',
      priceINR: 1900,
      originalPriceINR: 2500,
      rating: 4.9,
      reviewsCount: 215,
      badge: '24% OFF • Bestseller',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Tan", "hex": "#8c5332"}, {"name": "Noir Black", "hex": "#191919"}, {"name": "Racing Green", "hex": "#134e3a"}],
      description: 'Precision-cut molded leather armor with cutout for Lightning/USB-C charging and LED indicator light.',
      specs: [
        "Compatible with AirPods Pro 1, 2 & Gen 3",
        "Solid brass spring carabiner clip included",
        "Wireless charging compatible",
        "Full 360-degree shock protection"
]
    },
    {
      id: 'ea-02',
      title: 'Nordic Carabiner Pod Armor',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'airpodcover',
      categoryTitle: 'Airpod cover',
      gender: 'unisex',
      leather: 'Waxed Vachetta Leather',
      priceINR: 2100,
      originalPriceINR: 2700,
      rating: 4.8,
      reviewsCount: 142,
      badge: 'Precision Fit',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#a3663a"}, {"name": "Dark Walnut", "hex": "#422e1e"}],
      description: 'Seamless two-piece hard shell wrapped in authentic Italian leather that ages to a golden luster.',
      specs: [
        "Form-fitted rigid polycarbonate core wrapped in hide",
        "Exposed pairing button cutout",
        "Brass D-ring for belt loop or bag tether",
        "Dimensions: 6.5cm x 5cm x 2.5cm"
]
    },
    {
      id: 'ea-03',
      title: 'Minimalist Pod Sling Pouch',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'airpodcover',
      categoryTitle: 'Airpod cover',
      gender: 'unisex',
      leather: 'Grained Nappa Leather',
      priceINR: 2300,
      originalPriceINR: 2900,
      rating: 5.0,
      reviewsCount: 88,
      badge: '21% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Bordeaux Wine", "hex": "#541926"}, {"name": "Graphite", "hex": "#222222"}],
      description: 'Petite leather pouch with magnetic front flap and an included leather lanyard to wear around neck or wrist.',
      specs: [
        "Includes 40cm matching leather neck cord",
        "Magnetic snap closure for one-handed opening",
        "Protects against scratches and accidental drops",
        "Universal fit for earbuds and small items"
]
    },
    {
      id: 'ea-04',
      title: 'Bespoke Monogram AirPod Clasp',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'airpodcover',
      categoryTitle: 'Airpod cover',
      gender: 'unisex',
      leather: 'Box-Calf Leather',
      priceINR: 2200,
      originalPriceINR: 2800,
      rating: 4.9,
      reviewsCount: 96,
      badge: 'Signature Stud',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Midnight Blue", "hex": "#1b2738"}, {"name": "Tan Ochre", "hex": "#9c603b"}],
      description: 'Hand-stitched leather case featuring solid antique brass stud fastener and blind-debossed Degree stamp.',
      specs: [
        "Antiqued solid brass stud closure",
        "Laser-calibrated charging port alignment",
        "Compatible with MagSafe wireless pads",
        "Dimensions: 6.8cm x 5.2cm x 2.6cm"
]
    },
    // --- Category: Headphone hanger (4 items) ---
    {
      id: 'eh-01',
      title: 'The Atelier Desk Headphone Rest',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'headphonehanger',
      categoryTitle: 'Headphone hanger',
      gender: 'unisex',
      leather: 'Heavy Saddle Bridle Leather & Walnut Wood',
      priceINR: 3800,
      originalPriceINR: 4900,
      rating: 4.9,
      reviewsCount: 134,
      badge: '22% OFF • Studio Pick',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Walnut & Tan", "hex": "#8c5332"}, {"name": "Black & Ash", "hex": "#181818"}],
      description: 'Curved solid American walnut arch wrapped in thick bridle leather pad to preserve headphone headband foam.',
      specs: [
        "Leather padded cradle prevents headband indentation",
        "Weighted solid metal anti-tip base",
        "Integrated cord catch notch at rear",
        "Dimensions: 28cm high x 14cm base"
]
    },
    {
      id: 'eh-02',
      title: 'Under-Desk Brass & Leather Headphone Clamp',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'headphonehanger',
      categoryTitle: 'Headphone hanger',
      gender: 'unisex',
      leather: 'Vegetable Tanned Leather & Brass Clamp',
      priceINR: 3200,
      originalPriceINR: 4100,
      rating: 5.0,
      reviewsCount: 92,
      badge: 'Space Saver',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Vintage Brass & Tan", "hex": "#9c603b"}, {"name": "Black Metal & Noir", "hex": "#1d1d1d"}],
      description: 'Screw clamp that mounts to any desktop edge (up to 4.5cm thick) with a wide leather sling to hang headphones.',
      specs: [
        "Clamps to desks 1cm to 4.5cm thick without tools",
        "Wide 5cm curved leather resting band",
        "Silicone rubber non-marring clamp feet",
        "360-degree rotating arm swivel"
]
    },
    {
      id: 'eh-03',
      title: 'Wall-Mounted Artisan Headphone Hook',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'headphonehanger',
      categoryTitle: 'Headphone hanger',
      gender: 'unisex',
      leather: 'Full-Grain Harness Strap',
      priceINR: 2600,
      originalPriceINR: 3400,
      rating: 4.8,
      reviewsCount: 77,
      badge: '24% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Chestnut Tan", "hex": "#7d4727"}, {"name": "Dark Chocolate", "hex": "#39241b"}],
      description: 'Minimalist wall fixture made of solid brass dowel encased in looped heavy bridle leather with brass screw covers.',
      specs: [
        "Includes heavy-duty drywall anchor & brass screw",
        "Supports studio headphones up to 3kg",
        "Burnished and hand-beveled edges",
        "Wall projection: 9cm"
]
    },
    {
      id: 'eh-04',
      title: 'Travel Cable & Headphone Wrap Strap',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'headphonehanger',
      categoryTitle: 'Headphone hanger',
      gender: 'unisex',
      leather: 'Drum-Dyed Calfskin',
      priceINR: 1800,
      originalPriceINR: 2400,
      rating: 4.9,
      reviewsCount: 115,
      badge: 'Cable Organizer',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Tan", "hex": "#8c5332"}, {"name": "Midnight Black", "hex": "#1a1a1a"}],
      description: 'Smart leather strap with brass snap button to hang headphones to backpacks or keep headphone cables untangled.',
      specs: [
        "Dual brass snaps for loose or tight loop",
        "Tethers headphones safely to bag straps",
        "Set of 2 organizing wraps included",
        "Dimensions: 16cm x 3cm flat"
]
    },
    // --- Category: Notebook cover (4 items) ---
    {
      id: 'en-01',
      title: 'The Writer\'s A5 Leather Journal Cover',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'notebookcover',
      categoryTitle: 'Notebook cover',
      gender: 'unisex',
      leather: 'Full-Grain Crazy Horse Leather',
      priceINR: 3900,
      originalPriceINR: 5000,
      rating: 4.9,
      reviewsCount: 186,
      badge: '22% OFF • Bestseller',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Rustic Brown", "hex": "#704225"}, {"name": "Vintage Tan", "hex": "#9c603b"}, {"name": "Charcoal Black", "hex": "#202020"}],
      description: 'Refillable A5 journal jacket with built-in leather pen loop, card slots, and bookmark ribbon.',
      specs: [
        "Fits standard A5 notebooks (Moleskine, Leuchtturm1917)",
        "Integrated leather pen loop holds pens up to 14mm",
        "Interior card slot & document flap",
        "Dimensions: 22.5cm x 16cm closed"
]
    },
    {
      id: 'en-02',
      title: 'Executive B5 Wirebound Portfolio Cover',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'notebookcover',
      categoryTitle: 'Notebook cover',
      gender: 'unisex',
      leather: 'Vachetta Drum-Dyed Leather',
      priceINR: 4800,
      originalPriceINR: 6100,
      rating: 5.0,
      reviewsCount: 94,
      badge: 'Boardroom Ready',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Espresso Noir", "hex": "#2a1e17"}, {"name": "Cognac Saddle", "hex": "#8c5332"}],
      description: 'Substantial portfolio cover engineered for legal notepads and B5 books with an elasticated pen slot and card pockets.',
      specs: [
        "Accommodates top-bound or side-bound B5 pads",
        "Solid metal magnetic clasp tongue",
        "Dual business card pockets and receipt vault",
        "Dimensions: 27cm x 20cm closed"
]
    },
    {
      id: 'en-03',
      title: 'Field Pocket Notebook Jacket (Set with 3 Inserts)',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'notebookcover',
      categoryTitle: 'Notebook cover',
      gender: 'unisex',
      leather: 'Pull-Up Waxed Leather',
      priceINR: 2900,
      originalPriceINR: 3700,
      rating: 4.8,
      reviewsCount: 130,
      badge: '22% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#9e532b"}, {"name": "Dark Forest", "hex": "#253b2a"}],
      description: 'Compact pocket cover designed for 3.5x5.5 inch Field Notes with elastic band spine supporting 3 notebooks.',
      specs: [
        "Multi-cord spine accommodates up to 3 pocket notebooks",
        "Includes 3 blank 48-page fountain-pen friendly inserts",
        "Front slip pocket for tickets and cash",
        "Dimensions: 15cm x 10cm"
]
    },
    {
      id: 'en-04',
      title: 'Grand A4 Artist Sketchbook Cover',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'notebookcover',
      categoryTitle: 'Notebook cover',
      gender: 'unisex',
      leather: 'Heavy Full-Grain Cowhide',
      priceINR: 5600,
      originalPriceINR: 7200,
      rating: 4.9,
      reviewsCount: 72,
      badge: 'Atelier Craft',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Chestnut Saddle", "hex": "#7d4727"}, {"name": "Onyx Black", "hex": "#181818"}],
      description: 'Substantial heavyweight A4 leather shield with full wrap strap and antique brass peg closure.',
      specs: [
        "Fits all standard A4 sketchpads & pads",
        "Traditional wrap-around leather lace and brass peg",
        "Hand-burnished edges with organic beeswax",
        "Dimensions: 32cm x 23.5cm"
]
    },
    // --- Category: File Folder cover (4 items) ---
    {
      id: 'ef-01',
      title: 'The Diplomat Leather Document Folder',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'filefoldercover',
      categoryTitle: 'File Folder cover',
      gender: 'unisex',
      leather: 'Saddle Bridle Leather',
      priceINR: 5200,
      originalPriceINR: 6600,
      rating: 4.9,
      reviewsCount: 112,
      badge: '21% OFF • Executive',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Dark Chestnut", "hex": "#6b3c22"}, {"name": "Black Obsidian", "hex": "#1a1a1a"}],
      description: 'A rigid-back document envelope with brass stud latch designed to keep A4 contracts and certificates uncreased.',
      specs: [
        "Fits up to 100 sheets of A4 / US Letter paper",
        "Reinforced backing prevents bent document corners",
        "Solid brass stud button fastening",
        "Dimensions: 33cm x 24.5cm x 2cm"
]
    },
    {
      id: 'ef-02',
      title: 'Flap & String Archive File Folder',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'filefoldercover',
      categoryTitle: 'File Folder cover',
      gender: 'unisex',
      leather: 'Vegetable Tanned Calfskin',
      priceINR: 4600,
      originalPriceINR: 5800,
      rating: 4.8,
      reviewsCount: 85,
      badge: 'Vintage Archive',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Tan Ochre", "hex": "#9c603b"}, {"name": "Warm Umber", "hex": "#4a3221"}],
      description: 'Nostalgic legal envelope featuring leather washer string tie closure and expandable accordioned gussets.',
      specs: [
        "Traditional dual washer-and-cord wrap lock",
        "Expandable 4cm gusset for hefty legal briefs",
        "Hand-stamped serial numbering option",
        "Dimensions: 34cm x 25cm x 4cm"
]
    },
    {
      id: 'ef-03',
      title: 'Milano Zip-Around Conference Folder',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'filefoldercover',
      categoryTitle: 'File Folder cover',
      gender: 'unisex',
      leather: 'Textured Saffiano Hide',
      priceINR: 6400,
      originalPriceINR: 8100,
      rating: 5.0,
      reviewsCount: 98,
      badge: '21% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Oxford Navy", "hex": "#1d293d"}, {"name": "Jet Black", "hex": "#151515"}],
      description: 'Full perimeter brass zipper folder with tablet pocket, notepad insert slot, pen loop, and card organizers.',
      specs: [
        "Perimeter Japanese YKK brass zipper for 100% security",
        "Interior sleeve fits 12.9-inch iPad or tablet",
        "Includes Degree 50-page ruled executive pad",
        "Dimensions: 35cm x 26cm x 3cm"
]
    },
    {
      id: 'ef-04',
      title: 'Verona Accordion Tri-Pocket Portfolio',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'filefoldercover',
      categoryTitle: 'File Folder cover',
      gender: 'unisex',
      leather: 'Full-Grain French Calf',
      priceINR: 5800,
      originalPriceINR: 7400,
      rating: 4.9,
      reviewsCount: 63,
      badge: 'Master Tailored',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Saddle", "hex": "#8c5332"}, {"name": "Burgundy", "hex": "#4e1b29"}],
      description: 'Three distinct internal accordion compartments to segregate confidential reports, invoices, and receipts.',
      specs: [
        "3 separate expanding document dividers",
        "Concealed magnetic lock under front flap",
        "Suede lined interior walls",
        "Dimensions: 33.5cm x 24.5cm x 3.5cm"
]
    },
    // --- Category: Planner cover (4 items) ---
    {
      id: 'epl-01',
      title: 'The Annual Hobonichi Techo Planner Cover',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'plannercover',
      categoryTitle: 'Planner cover',
      gender: 'unisex',
      leather: 'Drum-Dyed Milled Calf',
      priceINR: 4200,
      originalPriceINR: 5400,
      rating: 4.9,
      reviewsCount: 145,
      badge: '22% OFF • Productivity',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#9c603b"}, {"name": "Forest Green", "hex": "#1b4d3e"}, {"name": "Noir", "hex": "#171717"}],
      description: 'Designed with interlocking dual pen-loop closure (\'butterfly stopper\') that locks the planner shut when a pen is inserted.',
      specs: [
        "Dual interlocking butterfly pen loops lock planner",
        "Dual ribbon bookmarks with leather charms",
        "Multiple interior card & sticky note slots",
        "Fits Hobonichi Cousin & A5 Daily Planners"
]
    },
    {
      id: 'epl-02',
      title: 'Heritage Snap Ring Planner Binder',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'plannercover',
      categoryTitle: 'Planner cover',
      gender: 'unisex',
      leather: 'Bridle Leather with German Krause Rings',
      priceINR: 5600,
      originalPriceINR: 7100,
      rating: 5.0,
      reviewsCount: 102,
      badge: '6-Ring Binder',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Saddle Brown", "hex": "#7f4625"}, {"name": "Midnight Ink", "hex": "#1a2332"}],
      description: 'Classic Personal-size 6-ring binder featuring genuine German Krause nickel-plated mechanisms and brass snap closure.',
      specs: [
        "Precision German Krause 20mm 6-ring mechanism",
        "Full-length rear cash and receipt pocket",
        "Snap button strap with Degree debossed emblem",
        "Dimensions: 19cm x 13.5cm x 3.5cm"
]
    },
    {
      id: 'epl-03',
      title: 'Minimalist A6 Pocket Daily Planner Sleeve',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'plannercover',
      categoryTitle: 'Planner cover',
      gender: 'unisex',
      leather: 'Waxy Pull-Up Leather',
      priceINR: 3400,
      originalPriceINR: 4300,
      rating: 4.8,
      reviewsCount: 79,
      badge: '21% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Warm Chestnut", "hex": "#844a2b"}, {"name": "Olive Hunter", "hex": "#304033"}],
      description: 'Compact slip cover for pocket agendas with stitched card pockets on front and back for quick-access tickets.',
      specs: [
        "Ultra-lightweight pocket profile",
        "Accommodates standard A6 yearly planners",
        "Edge-burnished by hand with natural beeswax",
        "Dimensions: 16cm x 11.5cm"
]
    },
    {
      id: 'epl-04',
      title: 'Executive Desk Calendar Agenda Folio',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'plannercover',
      categoryTitle: 'Planner cover',
      gender: 'unisex',
      leather: 'Full-Grain Italian Calfskin',
      priceINR: 6200,
      originalPriceINR: 7800,
      rating: 4.9,
      reviewsCount: 88,
      badge: 'Atelier Luxury',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Jet Noir", "hex": "#151515"}, {"name": "Cognac Saddle", "hex": "#8c5332"}],
      description: 'Heavy-duty desk organizer folio with lay-flat spine, business card carousel, and magnetic closure flap.',
      specs: [
        "Spine engineered to lie 180 degrees completely flat",
        "Magnetic closure latch with hidden magnets",
        "Full microfiber dust-proof lining",
        "Dimensions: 24cm x 18cm x 3cm"
]
    },
    // --- Category: Book mark (4 items) ---
    {
      id: 'eb-01',
      title: 'Artisan Corner Page Triangle Bookmark',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'bookmark',
      categoryTitle: 'Book mark',
      gender: 'unisex',
      leather: 'Full-Grain Veg-Tan Leather',
      priceINR: 950,
      originalPriceINR: 1300,
      rating: 4.9,
      reviewsCount: 320,
      badge: '27% OFF • Set of 3',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac, Olive & Noir", "hex": "#8c5332"}],
      description: 'Set of 3 hand-stitched corner triangle leather bookmarks that slide snugly over the corner of your page.',
      specs: [
        "Set includes 3 artisanal colors (Tan, Green, Noir)",
        "Saddle-stitched corners with waxed linen thread",
        "Protects fragile book corners from folding",
        "Dimensions: 5.5cm x 5.5cm each"
]
    },
    {
      id: 'eb-02',
      title: 'The Heritage Tassel Ribbon Bookmark',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'bookmark',
      categoryTitle: 'Book mark',
      gender: 'unisex',
      leather: 'Vachetta Leather & Raw Suede Fringe',
      priceINR: 1100,
      originalPriceINR: 1500,
      rating: 5.0,
      reviewsCount: 210,
      badge: 'Artisan Tassel',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#9c603b"}, {"name": "Espresso Noir", "hex": "#251a14"}],
      description: 'Slender full-grain leather bookmark ribbon finished with a solid brass eyelet and hand-cut leather fringe tassel.',
      specs: [
        "Gold foil Degree insignia debossed along body",
        "Hand-cut suede tassel drape",
        "Won't warp book spines or stretch binding",
        "Length: 21cm x 2.8cm wide"
]
    },
    {
      id: 'eb-03',
      title: 'Magnetic Dual-Flap Leather Page Clip',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'bookmark',
      categoryTitle: 'Book mark',
      gender: 'unisex',
      leather: 'Nappa Leather with Neodymium Magnets',
      priceINR: 1250,
      originalPriceINR: 1700,
      rating: 4.8,
      reviewsCount: 175,
      badge: '26% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Saddle Brown", "hex": "#7f4625"}, {"name": "Hunter Green", "hex": "#1b4d3e"}],
      description: 'Dual leather flaps embedded with neodymium magnets that clip securely onto both sides of your reading page.',
      specs: [
        "Neodymium magnetic hold never falls out of books",
        "Ultra-thin profile preserves page flatness",
        "Hand-burnished perimeter",
        "Dimensions: 8cm x 3cm folded"
]
    },
    {
      id: 'eb-04',
      title: 'Vintage Brass Clip & Leather Bookmark',
      group: 'essentials',
      groupLabel: 'Everyday Essentials',
      category: 'bookmark',
      categoryTitle: 'Book mark',
      gender: 'unisex',
      leather: 'Bridle Leather & Solid Cast Brass',
      priceINR: 1350,
      originalPriceINR: 1800,
      rating: 4.9,
      reviewsCount: 140,
      badge: 'Collector Edition',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Vintage Chestnut", "hex": "#6b3c22"}, {"name": "Jet Noir", "hex": "#151515"}],
      description: 'Heavy antique brass spring paper clamp attached to a rich vegetable-tanned leather strip with embossed quotes.',
      specs: [
        "Solid antique cast brass clamp with firm grip",
        "Sturdy 2.5mm bridle leather strip",
        "Dual functional as a money or document clip",
        "Dimensions: 14cm x 2.5cm"
]
    },

    // ==========================================
    // MEN’S COLLECTION
    // ==========================================
    // --- Category: Messenger bag (4 items) ---
    {
      id: 'mm-01',
      title: 'The Atelier Postman Messenger Bag',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'messengerbag',
      categoryTitle: 'Messenger bag',
      gender: 'men',
      leather: 'Full-Grain Waxed Cowhide',
      priceINR: 14900,
      originalPriceINR: 18500,
      rating: 4.9,
      reviewsCount: 185,
      badge: '19% OFF • Daily Icon',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Rustic Tan", "hex": "#8c5332"}, {"name": "Charcoal Black", "hex": "#1a1a1a"}],
      description: 'Full-flap classic postman silhouette with quick-release push clips behind traditional brass buckles.',
      specs: [
        "Accommodates 15\" MacBook Pro with padded protection",
        "Quick-release magnetic tuck locks behind buckles",
        "Reinforced top grab handle and padded shoulder sling",
        "Dimensions: 39cm x 29cm x 11cm"
]
    },
    {
      id: 'mm-02',
      title: 'Oxford Executive Brief-Messenger',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'messengerbag',
      categoryTitle: 'Messenger bag',
      gender: 'men',
      leather: 'English Bridle Leather',
      priceINR: 16500,
      originalPriceINR: 20500,
      rating: 5.0,
      reviewsCount: 128,
      badge: 'Boardroom Class',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Dark Walnut", "hex": "#3d2817"}, {"name": "Midnight Black", "hex": "#151515"}],
      description: 'Structured briefcase-messenger hybrid featuring dual compartments, trolley sleeve, and brass keyed tuck lock.',
      specs: [
        "Solid brass key lock for confidential papers",
        "Luggage trolley sleeve on back exterior",
        "Dedicated organizer for pens, passport, and phone",
        "Dimensions: 41cm x 31cm x 10cm"
]
    },
    {
      id: 'mm-03',
      title: 'Camden Compact City Messenger',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'messengerbag',
      categoryTitle: 'Messenger bag',
      gender: 'men',
      leather: 'Pebbled Calfskin Hide',
      priceINR: 12800,
      originalPriceINR: 15800,
      rating: 4.8,
      reviewsCount: 96,
      badge: '19% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Brown", "hex": "#9c603b"}, {"name": "Slate Grey", "hex": "#2e3338"}],
      description: 'Streamlined vertical messenger tailored for urban transit, holding an 11-inch iPad, chargers, and wallet.',
      specs: [
        "Perfect fit for 11\" iPad and Kindle",
        "Front quick-stash zipper pocket under flap",
        "Adjustable heavy cotton webbing shoulder strap",
        "Dimensions: 25cm x 30cm x 8cm"
]
    },
    {
      id: 'mm-04',
      title: 'Rugged Field Canvas & Leather Messenger',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'messengerbag',
      categoryTitle: 'Messenger bag',
      gender: 'men',
      leather: '22oz Waxed Twill & Oil Leather',
      priceINR: 13500,
      originalPriceINR: 16800,
      rating: 4.9,
      reviewsCount: 114,
      badge: 'Heritage Field',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Olive Twill & Saddle", "hex": "#3b4334"}, {"name": "Tan Canvas & Mocha", "hex": "#8a6547"}],
      description: 'Weatherproof waxed canvas body reinforced with heavy oil-tanned leather base and full harness leather strap.',
      specs: [
        "Water-shedding paraffin waxed 22oz twill",
        "Leather reinforced base and corners",
        "Internal dual storm flaps prevent rain ingress",
        "Dimensions: 38cm x 28cm x 12cm"
]
    },
    // --- Category: Backpack (4 items) ---
    {
      id: 'mb-01',
      title: 'The Explorer Full-Grain Leather Rucksack',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'mensbackpack',
      categoryTitle: 'Backpack',
      gender: 'men',
      leather: 'Heavy Drummed Cowhide',
      priceINR: 16900,
      originalPriceINR: 21000,
      rating: 4.9,
      reviewsCount: 196,
      badge: '20% OFF • Top Rated',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Saddle", "hex": "#8c5332"}, {"name": "Espresso Brown", "hex": "#382318"}],
      description: 'Rugged dual-pocket rucksack with roll-top expandable capacity, thick padded leather straps, and brass hardware.',
      specs: [
        "28L expandable cargo capacity",
        "Padded compartment for up to 16\" MacBook Pro",
        "Two exterior water bottle / flask pockets",
        "Dimensions: 44cm x 32cm x 16cm"
]
    },
    {
      id: 'mb-02',
      title: 'Vanguard Commuter Zip Backpack',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'mensbackpack',
      categoryTitle: 'Backpack',
      gender: 'men',
      leather: 'Smooth Box-Grain Leather',
      priceINR: 15400,
      originalPriceINR: 18900,
      rating: 5.0,
      reviewsCount: 145,
      badge: 'Tech Executive',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Stealth Black", "hex": "#141414"}, {"name": "Deep Marine", "hex": "#1b2533"}],
      description: 'Minimalist architectural silhouette designed with hidden luggage pass-through and 180-degree flat opening for airport TSA.',
      specs: [
        "180-degree lay-flat clamshell TSA opening",
        "Hidden anti-theft passport vault against back",
        "Ergonomic breathable air-mesh leather backing",
        "Dimensions: 42cm x 30cm x 13cm"
]
    },
    {
      id: 'mb-03',
      title: 'Dakota Heritage Flap Backpack',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'mensbackpack',
      categoryTitle: 'Backpack',
      gender: 'men',
      leather: 'Pull-Up Waxed Leather',
      priceINR: 17500,
      originalPriceINR: 21800,
      rating: 4.8,
      reviewsCount: 88,
      badge: '20% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Tobacco Tan", "hex": "#9c603b"}, {"name": "Vintage Charcoal", "hex": "#272727"}],
      description: 'Classic frontier rucksack crafted from rich pull-up leather that lightens where bent, developing distinct character.',
      specs: [
        "Dual leather cinch cords with heavy buckle flap",
        "Exterior side access zipper directly to laptop sleeve",
        "Hand-stitched reinforcements with copper rivets",
        "Dimensions: 43cm x 31cm x 15cm"
]
    },
    {
      id: 'mb-04',
      title: 'Aero Ultra-Slim Laptop Backpack',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'mensbackpack',
      categoryTitle: 'Backpack',
      gender: 'men',
      leather: 'Milled Calfskin',
      priceINR: 13900,
      originalPriceINR: 17200,
      rating: 4.9,
      reviewsCount: 92,
      badge: 'Urban Slim',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Jet Black", "hex": "#161616"}, {"name": "Chestnut", "hex": "#7d4727"}],
      description: 'Sleek 9cm thin profile crafted for minimalists carrying just a laptop, charger, notepad, and daily essentials.',
      specs: [
        "Ultra-thin 9cm profile maintains sleek posture",
        "Water-resistant waterproof zippers throughout",
        "Soft microfiber fleece laptop compartment",
        "Dimensions: 40cm x 29cm x 9cm"
]
    },
    // --- Category: Travel bag (4 items) ---
    {
      id: 'mt-01',
      title: 'The Sovereign 48-Hour Leather Weekender',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'travelbag',
      categoryTitle: 'Travel bag',
      gender: 'men',
      leather: 'Full-Grain Saddle Cowhide',
      priceINR: 18900,
      originalPriceINR: 23500,
      rating: 4.9,
      reviewsCount: 240,
      badge: '20% OFF • Travel Icon',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Saddle", "hex": "#8c5332"}, {"name": "Dark Walnut", "hex": "#3d2817"}],
      description: 'The quintessential gentleman\'s travel holdall, boasting a 45L volume, solid brass hardware, and dedicated shoe garage.',
      specs: [
        "45-liter carry-on compliant flight capacity",
        "Independent exterior shoe compartment",
        "Detachable ergonomic shoulder pad with heavy clips",
        "Dimensions: 52cm x 30cm x 26cm"
]
    },
    {
      id: 'mt-02',
      title: 'Navigator Doctor-Bag Travel Duffel',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'travelbag',
      categoryTitle: 'Travel bag',
      gender: 'men',
      leather: 'Vegetable Tanned Bridle Leather',
      priceINR: 19800,
      originalPriceINR: 24900,
      rating: 5.0,
      reviewsCount: 162,
      badge: 'Atelier Masterpiece',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Rich Chestnut", "hex": "#743f21"}, {"name": "Noir Black", "hex": "#151515"}],
      description: 'Rigid hinged doctor\'s mouth frame that pops open wide and stays open, giving a full overview of packed attire.',
      specs: [
        "Steel reinforced mouth frame stays open wide",
        "Includes functional solid brass combination lock",
        "Full cotton drill interior with 2 zip vaults",
        "Dimensions: 50cm x 32cm x 25cm"
]
    },
    {
      id: 'mt-03',
      title: 'Capri Foldable Garment & Travel Bag',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'travelbag',
      categoryTitle: 'Travel bag',
      gender: 'men',
      leather: 'Waxed Calfskin & Ripstop',
      priceINR: 21500,
      originalPriceINR: 26900,
      rating: 4.9,
      reviewsCount: 98,
      badge: '20% OFF • Suit Care',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Espresso Brown", "hex": "#352217"}, {"name": "Jet Noir", "hex": "#191919"}],
      description: '2-in-1 suit carrier: unzips flat into a full garment bag for suits and blazers, then zips into a spacious duffel.',
      specs: [
        "Hangs 2 full suits wrinkle-free inside garment sleeve",
        "Zips into a 48L duffel holding clothes and shoes",
        "Luggage trolley sleeve and detachable sling",
        "Dimensions: 55cm x 32cm x 28cm"
]
    },
    {
      id: 'mt-04',
      title: 'Heritage Canvas & Leather Holdall',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'travelbag',
      categoryTitle: 'Travel bag',
      gender: 'men',
      leather: 'Heavy Waxed Duck Canvas & Saddle Hide',
      priceINR: 16200,
      originalPriceINR: 19900,
      rating: 4.8,
      reviewsCount: 115,
      badge: 'Safari Cut',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Field Khaki & Saddle", "hex": "#8a7b63"}, {"name": "Charcoal Canvas & Black", "hex": "#2c2d2f"}],
      description: 'Military-grade 24oz water-resistant canvas paired with 3mm thick saddle leather strapping and brass bottom studs.',
      specs: [
        "Reinforced full leather cradle base",
        "Waterproof waxed canvas body sheds rain",
        "Solid cast brass hardware throughout",
        "Dimensions: 50cm x 29cm x 24cm"
]
    },
    // --- Category: Wallets (4 items) ---
    {
      id: 'mw-01',
      title: 'The Classic Bifold Leather Wallet',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'wallets',
      categoryTitle: 'Wallets',
      gender: 'men',
      leather: 'Full-Grain Italian Calfskin',
      priceINR: 3200,
      originalPriceINR: 4200,
      rating: 4.9,
      reviewsCount: 340,
      badge: '24% OFF • Bestseller',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Saddle", "hex": "#8c5332"}, {"name": "Noir Black", "hex": "#171717"}, {"name": "Dark Walnut", "hex": "#3d2817"}],
      description: 'Timeless horizontal bifold featuring 8 card slots, dual currency dividers, and RFID anti-theft blocking weave.',
      specs: [
        "8 precision credit card slots + 2 hidden pockets",
        "Dual currency divider for rupees and foreign notes",
        "Full RFID signal-blocking interior layer",
        "Dimensions: 11.5cm x 9cm x 1.5cm"
]
    },
    {
      id: 'mw-02',
      title: 'Trifold Heritage Gusset Wallet',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'wallets',
      categoryTitle: 'Wallets',
      gender: 'men',
      leather: 'Vegetable Tanned Saddle Hide',
      priceINR: 3600,
      originalPriceINR: 4600,
      rating: 4.8,
      reviewsCount: 172,
      badge: 'High Capacity',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Chestnut Tan", "hex": "#7f4625"}, {"name": "Raven Black", "hex": "#191919"}],
      description: 'Generous trifold wallet with clear ID thumb-window, 10 card slots, and an expanding interior coin purse.',
      specs: [
        "10 card slots + clear mesh ID window",
        "Gusseted coin pocket with snap button",
        "Full-length currency vault",
        "Dimensions: 10.5cm x 8.5cm x 2.2cm"
]
    },
    {
      id: 'mw-03',
      title: 'Slim Front-Pocket Minimalist Wallet',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'wallets',
      categoryTitle: 'Wallets',
      gender: 'men',
      leather: 'Waxy Pull-Up Leather',
      priceINR: 2800,
      originalPriceINR: 3600,
      rating: 5.0,
      reviewsCount: 280,
      badge: '22% OFF • Slim Carry',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#9c603b"}, {"name": "Olive Hunter", "hex": "#273a2b"}],
      description: 'Only 0.6cm thick when empty: slips invisible into front jeans pockets with quick-draw thumb card slots.',
      specs: [
        "Ultra-thin 6mm empty profile prevents pocket bulge",
        "Thumb notch for instant access to primary card",
        "Center folded bill pouch",
        "Dimensions: 10cm x 7.5cm x 0.6cm"
]
    },
    {
      id: 'mw-04',
      title: 'Milano Zip-Around Leather Wallet',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'wallets',
      categoryTitle: 'Wallets',
      gender: 'men',
      leather: 'Saffiano Textured Hide',
      priceINR: 3900,
      originalPriceINR: 4900,
      rating: 4.9,
      reviewsCount: 142,
      badge: 'Total Security',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Midnight Ink", "hex": "#18202c"}, {"name": "Black Noir", "hex": "#141414"}],
      description: 'Full perimeter brass zipper ensures nothing ever falls out of your wallet during travel or busy commutes.',
      specs: [
        "All-around perimeter Japanese brass zipper",
        "6 card slots + central coin zip partition",
        "Scratch-proof crosshatch Saffiano surface",
        "Dimensions: 11cm x 9.5cm x 2cm"
]
    },
    // --- Category: Bill folder (4 items) ---
    {
      id: 'mbf-01',
      title: 'The Sovereign Long Bill & Cheque Folder',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'billfolder',
      categoryTitle: 'Bill folder',
      gender: 'men',
      leather: 'Full-Grain Box Calfskin',
      priceINR: 4200,
      originalPriceINR: 5400,
      rating: 4.9,
      reviewsCount: 168,
      badge: '22% OFF • Executive',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Saddle", "hex": "#8c5332"}, {"name": "Obsidian Black", "hex": "#181818"}],
      description: 'Tall breast-pocket billfold engineered to carry unfolded currency notes, cheque books, and airline boarding passes.',
      specs: [
        "Stores flat banknotes without folding",
        "Cheque book jacket and passport compartment",
        "Slips seamlessly into suit jacket breast pockets",
        "Dimensions: 19cm x 9.5cm x 1.2cm"
]
    },
    {
      id: 'mbf-02',
      title: 'Atelier Brass Spring Money Clip Billfold',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'billfolder',
      categoryTitle: 'Bill folder',
      gender: 'men',
      leather: 'Vegetable Tanned Leather & Brass Clip',
      priceINR: 3100,
      originalPriceINR: 3900,
      rating: 4.8,
      reviewsCount: 210,
      badge: 'Spring Clip',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#9c603b"}, {"name": "Walnut Brown", "hex": "#432d1e"}],
      description: 'Slim bifold with an integrated solid brass hinged spring clip that clamps paper bills tightly in the spine.',
      specs: [
        "Heavy-duty tensioned brass money clip",
        "6 credit card slots + 2 exterior slip pockets",
        "Beveled and hand-burnished edge coating",
        "Dimensions: 11cm x 8cm x 1cm"
]
    },
    {
      id: 'mbf-03',
      title: 'Double-Flap Currency Organizer Folder',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'billfolder',
      categoryTitle: 'Bill folder',
      gender: 'men',
      leather: 'Drum-Dyed Calf Hide',
      priceINR: 3800,
      originalPriceINR: 4800,
      rating: 5.0,
      reviewsCount: 95,
      badge: '21% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Dark Chocolate", "hex": "#372317"}, {"name": "Jet Noir", "hex": "#141414"}],
      description: 'Engineered for international businessmen: two separate currency chambers to manage ₹ and $ currency simultaneously.',
      specs: [
        "Dual full-length bill chambers for multiple currencies",
        "8 horizontal card slots + 1 thumb ID slot",
        "RFID protective shielding weave",
        "Dimensions: 18.5cm x 9cm x 1.4cm"
]
    },
    {
      id: 'mbf-04',
      title: 'Heritage Leather Receipt & Bill Pouch',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'billfolder',
      categoryTitle: 'Bill folder',
      gender: 'men',
      leather: 'Oil Pull-Up Cowhide',
      priceINR: 3400,
      originalPriceINR: 4300,
      rating: 4.9,
      reviewsCount: 82,
      badge: 'Artisan Cut',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Rustic Tan", "hex": "#9e532b"}, {"name": "Forest Green", "hex": "#1c3826"}],
      description: 'Flat envelope bill folder secured with solid brass button stud to archive payment vouchers and receipts.',
      specs: [
        "Solid brass stud fastener closure",
        "Single cavernous pocket holds up to 60 notes",
        "Hand-stitched perimeter with waxed thread",
        "Dimensions: 19cm x 10cm x 1cm"
]
    },
    // --- Category: Card holder (4 items) ---
    {
      id: 'mch-01',
      title: 'The Minimalist 5-Slot Card Holder',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'cardholder',
      categoryTitle: 'Card holder',
      gender: 'men',
      leather: 'Full-Grain Italian Calfskin',
      priceINR: 1800,
      originalPriceINR: 2400,
      rating: 4.9,
      reviewsCount: 412,
      badge: '25% OFF • Pocket Icon',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Cognac Saddle", "hex": "#8c5332"}, {"name": "Noir Black", "hex": "#171717"}, {"name": "British Tan", "hex": "#a3663a"}],
      description: 'Ultra-compact 5-pocket card sleeve with curved card access slots and center cash pocket, edge-burnished by hand.',
      specs: [
        "4 credit card slots + 1 central folded bill sleeve",
        "RFID signal-blocking lining between layers",
        "Featherlight 28g weight",
        "Dimensions: 10cm x 7cm x 0.4cm"
]
    },
    {
      id: 'mch-02',
      title: 'Executive Gusseted Business Card Case',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'cardholder',
      categoryTitle: 'Card holder',
      gender: 'men',
      leather: 'Saffiano Textured Hide',
      priceINR: 2400,
      originalPriceINR: 3100,
      rating: 5.0,
      reviewsCount: 185,
      badge: 'Holds 40 Cards',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Classic Black", "hex": "#161616"}, {"name": "Navy Blue", "hex": "#1a2538"}],
      description: 'Fold-over card case with expanding accordion gusset that holds up to 40 visiting cards in pristine shape.',
      specs: [
        "Gusseted main chamber holds 40+ business cards",
        "2 lid slots for received contacts' cards",
        "Magnetic invisible snap closure",
        "Dimensions: 10.5cm x 7.5cm x 1.8cm"
]
    },
    {
      id: 'mch-03',
      title: 'Pop-Up Aluminum & Leather Card Case',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'cardholder',
      categoryTitle: 'Card holder',
      gender: 'men',
      leather: 'Aviation Aluminum wrapped in Calf Hide',
      priceINR: 2800,
      originalPriceINR: 3600,
      rating: 4.8,
      reviewsCount: 230,
      badge: '22% OFF • Smart Trigger',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#9c603b"}, {"name": "Gunmetal & Black", "hex": "#202020"}],
      description: 'Patented bottom lever trigger fans out 6 cards in a tiered cascade with one click, wrapped in luxury hide.',
      specs: [
        "One-click ergonomic lever ejects cards in cascade",
        "Rigid aluminum prevents card bending and skimming",
        "External leather wrap adds 2 cards & money clip",
        "Dimensions: 10cm x 6.5cm x 1.5cm"
]
    },
    {
      id: 'mch-04',
      title: 'Lanyard ID Card Badge Holder',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'cardholder',
      categoryTitle: 'Card holder',
      gender: 'men',
      leather: 'Full-Grain Leather with Leather Lanyard',
      priceINR: 1900,
      originalPriceINR: 2500,
      rating: 4.9,
      reviewsCount: 140,
      badge: 'Office Badge',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Tobacco Brown", "hex": "#7f4625"}, {"name": "Jet Noir", "hex": "#161616"}],
      description: 'Corporate badge holder with transparent clear window for ID, 2 back card slots, and detachable leather neck cord.',
      specs: [
        "Clear scratch-resistant acrylic ID window",
        "2 card slots on reverse for metro / access cards",
        "45cm matching leather lanyard with brass swivel clip",
        "Dimensions: 11cm x 7.5cm"
]
    },
    // --- Category: Belts (4 items) ---
    {
      id: 'mbelt-01',
      title: 'The Master Saddle Leather Dress Belt',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'belts',
      categoryTitle: 'Belts',
      gender: 'men',
      leather: 'Full-Grain English Bridle Hide (3.8mm thick)',
      priceINR: 3400,
      originalPriceINR: 4400,
      rating: 4.9,
      reviewsCount: 360,
      badge: '23% OFF • Signature',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Rich Cognac", "hex": "#8c5332"}, {"name": "Noir Black", "hex": "#171717"}, {"name": "Dark Walnut", "hex": "#3d2817"}],
      description: 'Cut from 3.8mm single-piece full-grain bridle leather with beveled hand-waxed edges and solid forged brass roller buckle.',
      specs: [
        "100% single-piece leather (zero bonded cardboard)",
        "Solid cast brass buckle with antique finish",
        "Width: 35mm (standard dress and casual loop size)",
        "Available sizes: 30\" to 44\" waist"
]
    },
    {
      id: 'mbelt-02',
      title: 'Firenze Reversible 2-in-1 Leather Belt',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'belts',
      categoryTitle: 'Belts',
      gender: 'men',
      leather: 'Full-Grain Calfskin (Dual Sided)',
      priceINR: 3900,
      originalPriceINR: 4900,
      rating: 5.0,
      reviewsCount: 215,
      badge: 'Black & Brown',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Reversible Black / Cognac", "hex": "#1a1a1a"}],
      description: 'A twistable brass buckle lets you switch between jet black and rich cognac saddle in 1 second for versatile wardrobes.',
      specs: [
        "Patented twist-lock reversible buckle mechanism",
        "Side A: Jet Black • Side B: Cognac Brown",
        "33mm width matches suit trousers and denim",
        "Hand-stitched border reinforcement"
]
    },
    {
      id: 'mbelt-03',
      title: 'Vintage Hand-Braided Leather Belt',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'belts',
      categoryTitle: 'Belts',
      gender: 'men',
      leather: 'Hand-Woven Calfskin Strips',
      priceINR: 3600,
      originalPriceINR: 4600,
      rating: 4.8,
      reviewsCount: 142,
      badge: '22% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Caramel Tan", "hex": "#9c603b"}, {"name": "Espresso", "hex": "#382318"}],
      description: 'Artisan plaiting technique that allows the buckle prong to pass through any point for 100% micro-custom waist sizing.',
      specs: [
        "Infinitely adjustable fit with zero fixed punch holes",
        "Hand-woven from 8 strips of full-grain leather",
        "Antiqued brushed silver roller buckle",
        "Width: 34mm"
]
    },
    {
      id: 'mbelt-04',
      title: 'Rugged Heavy Harness Work Belt',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'belts',
      categoryTitle: 'Belts',
      gender: 'men',
      leather: 'Heavy 4.5mm Bullhide Leather',
      priceINR: 3800,
      originalPriceINR: 4800,
      rating: 4.9,
      reviewsCount: 180,
      badge: 'Indestructible',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Raw Saddle Tan", "hex": "#7f4625"}, {"name": "Charcoal Black", "hex": "#1d1d1d"}],
      description: 'Ultra-thick 4.5mm bullhide engineered for heavy denim and rugged boots, complete with dual-prong heavy duty buckle.',
      specs: [
        "Unmatched 4.5mm thickness - will outlast decades",
        "Heavy-gauge solid brass double-prong buckle",
        "Width: 40mm (denim & workwear loop standard)",
        "Dual Chicago screws allow buckle replacement"
]
    },
    // --- Category: Wristband (4 items) ---
    {
      id: 'mwrist-01',
      title: 'The Nautical Double-Wrap Leather Wristband',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'wristband',
      categoryTitle: 'Wristband',
      gender: 'men',
      leather: 'Round Braided Kangaroo Hide Cord',
      priceINR: 1650,
      originalPriceINR: 2200,
      rating: 4.9,
      reviewsCount: 245,
      badge: '25% OFF • Men\\\'s Accent',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Antique Brass & Tan", "hex": "#8c5332"}, {"name": "Matte Black & Gunmetal", "hex": "#1a1a1a"}, {"name": "Navy & Silver", "hex": "#192437"}],
      description: 'Double-wrap leather cord cuff anchored by a solid cast brass nautical anchor hook with hand-tied whipping cord.',
      specs: [
        "Genuine cast brass anchor hook clasp",
        "Double-wrap 40cm cord fits wrist circumference 17-21cm",
        "Water-resistant beeswax treated leather",
        "Subtle and masculine accent with watches"
]
    },
    {
      id: 'mwrist-02',
      title: 'Milan Magnetic Twist Braided Cuff',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'wristband',
      categoryTitle: 'Wristband',
      gender: 'men',
      leather: '8-Strand Braided Calfskin',
      priceINR: 1850,
      originalPriceINR: 2400,
      rating: 5.0,
      reviewsCount: 190,
      badge: 'Neodymium Clasp',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Ebony Noir", "hex": "#171717"}, {"name": "Dark Chocolate", "hex": "#3d2817"}],
      description: 'Precision neodymium magnetic bayonet clasp in brushed surgical steel with dense 8-strand bolo leather braid.',
      specs: [
        "Precision twist-lock neodymium magnetic clasp",
        "316L stainless steel clasp hardware",
        "Tightly braided round 6mm leather cord",
        "Available in Medium (19cm) & Large (21cm)"
]
    },
    {
      id: 'mwrist-03',
      title: 'Artisan Wide Buckled Leather Cuff',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'wristband',
      categoryTitle: 'Wristband',
      gender: 'men',
      leather: 'Vegetable Tanned Saddle Leather',
      priceINR: 1950,
      originalPriceINR: 2600,
      rating: 4.8,
      reviewsCount: 115,
      badge: '25% OFF',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Vintage Saddle", "hex": "#7f4625"}, {"name": "Rider Black", "hex": "#1c1c1c"}],
      description: 'Bold 30mm wide cuff stamped with subtle geometric borders and secured with twin mini roller buckles.',
      specs: [
        "Solid antique brass twin mini buckles",
        "Supple calfskin lining prevents wrist sweat",
        "Width: 30mm statement cuff",
        "Adjustable from 17cm to 22cm wrist sizes"
]
    },
    {
      id: 'mwrist-04',
      title: 'Minimalist Brass Hook Leather Band',
      group: 'mens',
      groupLabel: 'Men’s Collection',
      category: 'wristband',
      categoryTitle: 'Wristband',
      gender: 'men',
      leather: 'Flat English Bridle Leather Strip',
      priceINR: 1500,
      originalPriceINR: 2000,
      rating: 4.9,
      reviewsCount: 160,
      badge: 'Everyday Minimal',
      badgeClass: 'badge-editorial',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
      colors: [{"name": "Chestnut Tan", "hex": "#9c603b"}, {"name": "Obsidian Black", "hex": "#161616"}],
      description: 'Flat 10mm bridle leather strip with hand-stitched bar tacks and custom solid brass fishhook tension clasp.',
      specs: [
        "Solid brass fishhook tension latch",
        "10mm flat profile wears effortlessly alongside watches",
        "Raw beveled edges burnished with beeswax",
        "Handcrafted in the Degree leather studio"
]
    }
  ];

  // ==========================================
  // MASTER PRODUCT CATALOG (MEN & WOMEN)
  // ==========================================
  const catalog = [
    // 01: Signature Tote (Bag)
    {
      id: 'deg-01',
      title: 'The Atelier Multi-Pocket Tote',
      gender: 'women',
      category: 'tote',
      leather: 'Full-Grain Italian Calf & Heavy Canvas',
      priceINR: 14800,
      originalPriceINR: 17500,
      rating: 5.0,
      reviewsCount: 142,
      badge: 'Bestseller',
      badgeClass: 'badge-gold',
      image: 'img2_tpffn3.png',
      colors: [
        { name: 'Cognac & Canvas', hex: '#8c5332' },
        { name: 'Forest Green Canvas', hex: '#134e3a' },
        { name: 'Obsidian Noir', hex: '#14171c' }
      ],
      description: 'Engineered for the discerning traveler and everyday aesthetician. Features triple exterior bellows pockets with solid antique brass buckle closures, double-reinforced saddler handles, and water-repellent unbleached canvas.',
      specs: [
        'Hand-waxed vegetable-tanned Tuscan leather accents',
        'Heavyweight 24oz organic cotton canvas body',
        'Solid cast antique brass hardware with hand-beveled edges',
        'Dimensions: 38cm (W) x 30cm (H) x 16cm (D)',
        'Fits up to 16-inch MacBook Pro with dedicated padded sleeve'
      ]
    },
    // 02: Bestseller Moneybag (Wallet)
    {
      id: 'deg-15',
      title: 'The Sovereign Bifold Moneybag & Coin Vault',
      gender: 'men',
      category: 'wallets',
      leather: 'Supple Italian Box Calf & Nappa Interior',
      priceINR: 4200,
      originalPriceINR: 5000,
      rating: 5.0,
      reviewsCount: 135,
      badge: 'Bestseller Moneybag',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Obsidian Noir', hex: '#14171c' },
        { name: 'Cognac Saddle', hex: '#8c5332' }
      ],
      description: 'The definitive luxury moneybag. Features dual currency bill compartments, 8 card chambers, a hidden snap coin vault, and certified RFID shielding.',
      specs: [
        'Integrated certified RFID radiation blocking shield',
        'Snap-closure coin pouch and 2 hidden receipt slots',
        'Dimensions: 11.5cm x 9.5cm x 1.8cm',
        'Hand-creased card edge borders'
      ]
    },
    // 03: Artisan Leather Belt (Belt)
    {
      id: 'deg-12',
      title: 'The Verona Bridle Leather Belt',
      gender: 'men',
      category: 'belts',
      leather: 'Full-Grain English Bridle Leather',
      priceINR: 4900,
      originalPriceINR: 5800,
      rating: 5.0,
      reviewsCount: 112,
      badge: 'Artisan Belt',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Saddle Cognac', hex: '#8c5332' },
        { name: 'Obsidian Noir', hex: '#14171c' }
      ],
      description: 'Solid full-grain bridle leather belt with solid cast antique brass roller buckle and hand-beveled edges. Hand-waxed and burnished with natural beeswax.',
      specs: [
        '35mm width compatible with formal trousers and tailored denim',
        'Cast solid brass roller buckle with satin antique patina',
        'Double hand-stitched keeper loops with French waxed thread',
        'Available in sizes 30 through 42 inches'
      ]
    },
    // 04: Glazed Croc Baguette (Bag)
    {
      id: 'deg-03',
      title: 'The Riviera Croc-Embossed Baguette',
      gender: 'women',
      category: 'baguette',
      leather: 'Glazed Croc-Embossed Italian Leather',
      priceINR: 16500,
      originalPriceINR: 19200,
      rating: 5.0,
      reviewsCount: 76,
      badge: 'Artisan Edition',
      badgeClass: 'badge-green',
      image: 'img4_bokvg9.png',
      colors: [
        { name: 'Cognac Croc', hex: '#8c5332' },
        { name: 'Emerald Croc', hex: '#134e3a' },
        { name: 'Noir Glaze', hex: '#14171c' }
      ],
      description: 'An architectural heirloom piece exhibiting rich patina and high-gloss crocodile texture. Completed with an antique silver push-lock clasp and dual wearability as an evening clutch or shoulder satchel.',
      specs: [
        'Artisan embossed Italian calfskin with deep gloss patina',
        'Spring-loaded quick push-lock closure in polished palladium',
        'Exterior slip pouch for immediate phone retrieval',
        'Dimensions: 31cm (W) x 18cm (H) x 7.5cm (D)',
        'Detachable shoulder strap and structured top handle'
      ]
    },
    // 05: Executive Briefcase (Bag - Men)
    {
      id: 'deg-07',
      title: 'The Diplomat Executive Briefcase',
      gender: 'men',
      category: 'briefcase',
      leather: 'Jet Obsidian Full-Grain Calfskin',
      priceINR: 24500,
      originalPriceINR: 28000,
      rating: 5.0,
      reviewsCount: 118,
      badge: 'Executive',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Jet Obsidian', hex: '#14171c' },
        { name: 'British Racing Green', hex: '#134e3a' }
      ],
      description: 'The definitive silhouette for modern executives. Handcrafted from heavy-grade full-grain black hide, featuring reinforced base studs and dual zip security.',
      specs: [
        'Full-grain chrome-free milled leather',
        'Solid brushed metal hardware in gunmetal grey',
        'Luggage trolley pass-through sleeve on reverse',
        'Dimensions: 42cm (W) x 32cm (H) x 14cm (D)'
      ]
    },
    // 06: Continental Zip-Around Moneybag (Wallet)
    {
      id: 'deg-16',
      title: 'The Atelier Zip-Around Moneybag & Wristlet',
      gender: 'women',
      category: 'wallets',
      leather: 'Full-Grain British Racing Green Calfskin',
      priceINR: 5400,
      originalPriceINR: 6400,
      rating: 4.9,
      reviewsCount: 92,
      badge: 'New Release',
      badgeClass: 'badge-green',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'British Racing Green', hex: '#134e3a' },
        { name: 'Obsidian Noir', hex: '#14171c' }
      ],
      description: 'A spacious zip-around continental moneybag crafted to carry smartphone, paper currency flat, 12 cards, and coins. Comes with a removable wristlet strap.',
      specs: [
        'Full perimeter smooth YKK Excella brass zipper',
        '12 credit card slots, center zipper coin well, and 3 bill compartments',
        'Removable leather wristlet strap with swivel brass clip',
        'Dimensions: 20cm x 10.5cm x 2.2cm'
      ]
    },
    // 07: Reversible Dual-Hue Belt (Belt)
    {
      id: 'deg-13',
      title: 'The Milano Reversible Dual-Hue Belt',
      gender: 'men',
      category: 'belts',
      leather: 'Feathered French Calfskin',
      priceINR: 5600,
      originalPriceINR: 6500,
      rating: 4.9,
      reviewsCount: 64,
      badge: 'Reversible',
      badgeClass: 'badge-green',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Racing Green & Noir', hex: '#134e3a' },
        { name: 'Obsidian Noir', hex: '#14171c' }
      ],
      description: 'Two iconic house shades in one piece: British Racing Green on one side, Jet Obsidian on the reverse. Fitted with a quick-turn palladium mechanism buckle.',
      specs: [
        '32mm slimline executive formal width',
        'Rotational quick-switch buckle in polished palladium',
        'Full-grain supple calfskin with feathered edges'
      ]
    },
    // 08: Saddle Crossbody (Bag)
    {
      id: 'deg-02',
      title: 'The Heritage Saddle Crossbody',
      gender: 'women',
      category: 'crossbody',
      leather: 'Natural Grain Textured Leather & Canvas',
      priceINR: 11900,
      originalPriceINR: 13800,
      rating: 4.9,
      reviewsCount: 98,
      badge: 'Limited Run',
      badgeClass: 'badge-green',
      image: 'img3_khoeua.png',
      colors: [
        { name: 'Cognac Saddle', hex: '#8c5332' },
        { name: 'Racing Green', hex: '#134e3a' },
        { name: 'Sky Azure', hex: '#8bbdd9' }
      ],
      description: 'A timeless silhouette inspired by equestrian saddle architecture. Crafted with a supple, drum-dyed full-grain leather flap that molds with age, accompanied by an adjustable woven webbing shoulder strap.',
      specs: [
        'Full-grain pebbled leather contour flap with hand-finished edges',
        'Vintage stencil military typography tribute',
        'Custom magnetic quick-release under brass buckle',
        'Dimensions: 28cm (W) x 22cm (H) x 10cm (D)',
        'Removable cross-body strap with 52cm drop'
      ]
    },
    // 09: Equestrian Horseshoe Belt (Belt - Women)
    {
      id: 'deg-14',
      title: 'The Siena Equestrian Horseshoe Belt',
      gender: 'women',
      category: 'belts',
      leather: 'Drum-Dyed Tuscan Vachetta Leather',
      priceINR: 4400,
      originalPriceINR: 5200,
      rating: 5.0,
      reviewsCount: 78,
      badge: 'Equestrian',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Warm Cognac', hex: '#8c5332' },
        { name: 'Noir Onyx', hex: '#14171c' }
      ],
      description: 'A statement waist and hip belt sculpted in drum-dyed cognac saddle leather, punctuated by a hand-carved sculptural brass horseshoe buckle.',
      specs: [
        '28mm versatile width for coats, dresses, and high-rise trousers',
        'Sculptural solid brass horseshoe buckle closure',
        'Hand-painted edge finishing with vegetable seal'
      ]
    },
    // 10: Florentine Slim Card Slip & Money Clip (Wallet)
    {
      id: 'deg-17',
      title: 'The Florentine Slim Card Slip & Money Clip',
      gender: 'men',
      category: 'wallets',
      leather: 'Vegetable-Tanned Pebbled Leather',
      priceINR: 3200,
      originalPriceINR: 3900,
      rating: 4.8,
      reviewsCount: 54,
      badge: 'Minimalist',
      badgeClass: 'badge-sky',
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Cognac Tan', hex: '#8c5332' },
        { name: 'Racing Green', hex: '#134e3a' }
      ],
      description: 'Ultra-slim pocket organizer with 6 quick-access card slots, central receipt chamber, and an exterior brushed stainless steel sprung money clip for banknotes.',
      specs: [
        'Spring-loaded money clip holds up to 15 folded bills securely',
        '6 exterior card slots with thumb pull notch',
        'Ultra-slim 6mm silhouette'
      ]
    },
    // 11: Sovereign Emerald Flap Bag (Bag)
    {
      id: 'deg-04',
      title: 'The Sovereign Emerald Flap Bag',
      gender: 'women',
      category: 'crossbody',
      leather: 'Full-Grain British Racing Green Calfskin',
      priceINR: 17800,
      originalPriceINR: 20500,
      rating: 4.9,
      reviewsCount: 64,
      badge: 'Forest Green',
      badgeClass: 'badge-green',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'British Racing Green', hex: '#134e3a' },
        { name: 'Obsidian Noir', hex: '#14171c' }
      ],
      description: 'Crafted in our signature Degree Forest Green hue. Cut from the dense fibers of select European hides, offering unrivaled structure and velvet-soft touch.',
      specs: [
        'Full-grain vegetable tanned green leather',
        'Suede interior lining in oatmeal tone',
        'Dimensions: 26cm (W) x 19cm (H) x 9cm (D)',
        'Lifetime repair warranty included'
      ]
    },
    // 12: Savoy Forest Green Rucksack (Backpack / Bag)
    {
      id: 'deg-10',
      title: 'The Savoy Forest Green Rucksack',
      gender: 'men',
      category: 'backpack',
      leather: 'Full-Grain British Racing Green Hide',
      priceINR: 19500,
      originalPriceINR: 22000,
      rating: 5.0,
      reviewsCount: 47,
      badge: 'Forest Green',
      badgeClass: 'badge-green',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'British Racing Green', hex: '#134e3a' },
        { name: 'Obsidian Noir', hex: '#14171c' }
      ],
      description: 'A luxurious urban backpack crafted entirely from supple full-grain green leather. Features padded anatomical shoulder straps and breathable back panel.',
      specs: [
        'Padded 15.6-inch laptop compartment with safety strap',
        'Top carry handle with reinforced saddle stitching',
        'Dimensions: 41cm (W) x 30cm (H) x 15cm (D)'
      ]
    },
    // 13: Serene Sky Mini Trunk (Bag)
    {
      id: 'deg-05',
      title: 'The Serene Sky Mini Trunk',
      gender: 'women',
      category: 'crossbody',
      leather: 'Smooth Sky Blue Italian Nappa',
      priceINR: 12400,
      originalPriceINR: 14000,
      rating: 4.8,
      reviewsCount: 41,
      badge: 'Sky Capsule',
      badgeClass: 'badge-sky',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Sky Azure', hex: '#8bbdd9' },
        { name: 'Oyster White', hex: '#f7f5ef' }
      ],
      description: 'A breath of fresh alpine air. Soft sky blue nappa leather paired with delicate brushed silver fittings. Lightweight yet structured.',
      specs: [
        'Ultra-supple semi-aniline sky nappa',
        'Zip-around secure closure with leather puller',
        'Dimensions: 21cm (W) x 15cm (H) x 7cm (D)',
        'Includes cross-body strap'
      ]
    },
    // 14: Amalfi Weekender Duffle (Travel / Bag)
    {
      id: 'deg-08',
      title: 'The Amalfi Weekender Duffle',
      gender: 'men',
      category: 'travel',
      leather: 'Heavy Canvas & Hand-Waxed Cognac Leather',
      priceINR: 22800,
      originalPriceINR: 26000,
      rating: 4.9,
      reviewsCount: 84,
      badge: 'Voyager',
      badgeClass: 'badge-green',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Saddle Cognac & Canvas', hex: '#8c5332' },
        { name: 'Obsidian Black', hex: '#14171c' }
      ],
      description: 'A spacious 48-hour escape companion. Built with heavy-duty 28oz water-resistant canvas, full-grain harness leather straps, and an independent zippered shoe vault.',
      specs: [
        'Separate base compartment for dress shoes or laundry',
        'YKK Excella antiqued brass zippers',
        'Detachable padded leather shoulder strap',
        'Dimensions: 52cm (W) x 30cm (H) x 26cm (D)'
      ]
    },
    // 15: Oxford Saddler Messenger (Bag)
    {
      id: 'deg-09',
      title: 'The Oxford Saddler Messenger',
      gender: 'men',
      category: 'messenger',
      leather: 'Vegetable-Tanned Saddle Tan Leather',
      priceINR: 16900,
      originalPriceINR: 19500,
      rating: 4.8,
      reviewsCount: 52,
      badge: 'Heritage',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Saddle Tan', hex: '#8c5332' },
        { name: 'Obsidian Noir', hex: '#14171c' }
      ],
      description: 'Crafted for daily commute and scholarly endeavors. Front buckle detailing conceals modern German magnetic quick-snaps for effortless access.',
      specs: [
        'Dedicated sleeve for 14-inch laptop and tablet',
        'Double front utility pockets for notebook and pens',
        'Dimensions: 36cm (W) x 27cm (H) x 10cm (D)'
      ]
    },
    // 16: Vanguard Sky Leather Wallet & Card Pouch (Wallet)
    {
      id: 'deg-11',
      title: 'The Vanguard Sky Leather Wallet & Card Pouch',
      gender: 'men',
      category: 'wallets',
      leather: 'Noir Exterior & Sky Blue Nappa Interior',
      priceINR: 4800,
      originalPriceINR: 5600,
      rating: 4.9,
      reviewsCount: 89,
      badge: 'Sky Accent',
      badgeClass: 'badge-sky',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Noir & Sky Blue', hex: '#4893b8' },
        { name: 'Cognac Tan', hex: '#8c5332' }
      ],
      description: 'Sleek bifold pocket wallet with 8 card slots, dual note pockets, and RFID radiation shielding.',
      specs: [
        'Hand-turned edges with French waxed thread',
        'Natural vegetable-tanned full-grain patina',
        'Dimensions: 11cm x 9cm'
      ]
    },
    // 17: Florentine Envelope Clutch (Clutch)
    {
      id: 'deg-06',
      title: 'The Florentine Envelope Clutch',
      gender: 'women',
      category: 'clutch',
      leather: 'Two-Tone Tuscan Emerald & Tan Leather',
      priceINR: 8900,
      originalPriceINR: 10500,
      rating: 4.9,
      reviewsCount: 33,
      badge: 'New In',
      badgeClass: 'badge-gold',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Forest Green & Tan', hex: '#134e3a' },
        { name: 'Sky & Obsidian', hex: '#4893b8' }
      ],
      description: 'A refined evening clutch with hidden magnetic flap closure, crafted from dual contrasting hues of full-grain Tuscan hides.',
      specs: [
        'Ultra-slim architectural profile',
        'Internal 6-slot leather card organizer',
        'Dimensions: 27cm (W) x 16cm (H) x 3cm (D)'
      ]
    },
    // 18: Heritage Braided Key Lanyard & AirTag Clasp (Lifestyle)
    {
      id: 'deg-18',
      title: 'The Heritage Braided Key Lanyard & AirTag Clasp',
      gender: 'women',
      category: 'lifestyle',
      leather: 'Braided Kangaroo Hide & Saddle Leather',
      priceINR: 2400,
      originalPriceINR: 2900,
      rating: 5.0,
      reviewsCount: 41,
      badge: 'Everyday Heirloom',
      badgeClass: 'badge-green',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
      colors: [
        { name: 'Cognac Tan', hex: '#8c5332' },
        { name: 'Forest Green', hex: '#134e3a' }
      ],
      description: 'An essential luxury pocket and bag companion. Features an 8-strand hand-braided leather tether, solid cast trigger snap, and dedicated AirTag leather sleeve.',
      specs: [
        'Hand-braided leather lanyard with 14cm drop',
        'Solid brass swivel snap hook and heavy split ring',
        'Snap-closure protective leather AirTag charm'
      ]
    }
  ];

  // ==========================================
  // STATE MANAGEMENT WITH LOCALSTORAGE
  // ==========================================
  const loadSavedCart = () => {
    try {
      const saved = localStorage.getItem('degree_cart');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return [
      {
        id: 'deg-01',
        title: 'The Atelier Multi-Pocket Tote',
        variant: 'Artisan Canvas & Cognac Leather',
        priceINR: 14800,
        quantity: 1,
        image: 'img2_tpffn3.png'
      }
    ];
  };

  const loadSavedWishlist = () => {
    try {
      const saved = localStorage.getItem('degree_wishlist');
      if (saved) return new Set(JSON.parse(saved));
    } catch(e) {}
    return new Set(['deg-02']);
  };

  const state = {
    currency: localStorage.getItem('degree_currency') || 'INR',
    rates: {
      INR: { symbol: '₹', rate: 1 },
      USD: { symbol: '$', rate: 0.012 },
      EUR: { symbol: '€', rate: 0.011 },
      GBP: { symbol: '£', rate: 0.0095 }
    },
    freeShippingThresholdINR: 12000,
    cart: loadSavedCart(),
    wishlist: loadSavedWishlist(),
    appliedDiscount: null,
    products: [...companyCollections, ...catalog]
  };

  const persistState = () => {
    localStorage.setItem('degree_cart', JSON.stringify(state.cart));
    localStorage.setItem('degree_wishlist', JSON.stringify(Array.from(state.wishlist)));
    localStorage.setItem('degree_currency', state.currency);
  };

  // ==========================================
  // FORMATTING HELPERS
  // ==========================================
  const formatPrice = (inrAmount) => {
    const config = state.rates[state.currency] || state.rates.INR;
    const converted = inrAmount * config.rate;
    if (state.currency === 'INR') {
      return `${config.symbol} ${converted.toLocaleString('en-IN')}`;
    }
    return `${config.symbol}${converted.toFixed(0)}`;
  };

  const showToast = (message) => {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // ==========================================
  // ANNOUNCEMENT SLIDER & CURRENCY
  // ==========================================
  const messages = document.querySelectorAll('.announcement-message');
  let currentMsgIndex = 0;
  if (messages.length > 1) {
    setInterval(() => {
      messages[currentMsgIndex].classList.remove('active');
      currentMsgIndex = (currentMsgIndex + 1) % messages.length;
      messages[currentMsgIndex].classList.add('active');
    }, 4200);
  }

  const currencySelect = document.getElementById('currencySelect');
  if (currencySelect) {
    currencySelect.value = state.currency;
    currencySelect.addEventListener('change', (e) => {
      state.currency = e.target.value;
      persistState();
      updateAllPrices();
      renderCart();
      renderWishlist();
      showToast(`Currency updated to ${state.currency}`);
    });
  }

  // ==========================================
  // STICKY HEADER SCROLL EFFECT
  // ==========================================
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ==========================================
  // PRODUCT CATALOG RENDERING & ATELIER SHOWCASE
  // ==========================================
  const productsGrid = document.getElementById('productsGrid');
  let refreshProductCardReveals = () => {};

  // ==========================================
  // ATELIER CONTINUOUS STREAM (SEAMLESS INFINITE FLOW)
  // ==========================================
  let atelierCurrentOffset = 0;
  let atelierIsHovered = false;
  let atelierIsDragging = false;
  let atelierIsManualPaused = false;
  let atelierRafId = null;
  let atelierLastTimestamp = null;
  let atelierHasDragged = false;
  let atelierDragStartX = 0;
  let atelierDragStartOffset = 0;
  let atelierTouchStartX = 0;
  let atelierTouchStartOffset = 0;
  const ATELIER_SCROLL_SPEED = 42; // px per second (~0.7px/frame - luxury calm glide)

  const updateAtelierCardSizing = () => {
    const viewport = document.getElementById('atelierCarouselViewport');
    if (!viewport) return;
    const vpWidth = viewport.clientWidth;
    if (vpWidth <= 0) return;

    let visibleCount = 4;
    let gapPx = 32;

    if (vpWidth <= 560) {
      visibleCount = 1.25;
      gapPx = 14;
    } else if (vpWidth <= 880) {
      visibleCount = 2;
      gapPx = 18;
    } else if (vpWidth <= 1240) {
      visibleCount = 3;
      gapPx = 24;
    } else {
      visibleCount = 4;
      gapPx = 32;
    }

    const cardWidth = Math.floor((vpWidth - (Math.floor(visibleCount) - 1) * gapPx) / visibleCount);
    viewport.style.setProperty('--atelier-card-width', `${Math.max(220, cardWidth)}px`);
    viewport.style.setProperty('--atelier-gap', `${gapPx}px`);
  };

  const normalizeAtelierOffset = () => {
    const primaryGroup = document.querySelector('.atelier-marquee-group[data-group="primary"]');
    if (!primaryGroup) return;
    const groupWidth = primaryGroup.offsetWidth;
    if (groupWidth <= 0) return;

    while (atelierCurrentOffset <= -groupWidth) {
      atelierCurrentOffset += groupWidth;
    }
    while (atelierCurrentOffset > 0) {
      atelierCurrentOffset -= groupWidth;
    }
  };

  const atelierStreamStep = (timestamp) => {
    if (!atelierLastTimestamp) atelierLastTimestamp = timestamp;
    const delta = Math.min((timestamp - atelierLastTimestamp) / 1000, 0.1);
    atelierLastTimestamp = timestamp;

    if (!atelierIsHovered && !atelierIsDragging && !atelierIsManualPaused) {
      atelierCurrentOffset -= ATELIER_SCROLL_SPEED * delta;
      normalizeAtelierOffset();
      const track = document.getElementById('atelierCarouselTrack');
      if (track) {
        track.style.transform = `translate3d(${atelierCurrentOffset.toFixed(2)}px, 0, 0)`;
      }
    }

    atelierRafId = requestAnimationFrame(atelierStreamStep);
  };

  const startAtelierStream = () => {
    if (atelierRafId) cancelAnimationFrame(atelierRafId);
    atelierLastTimestamp = null;
    atelierRafId = requestAnimationFrame(atelierStreamStep);
  };

  const stopAtelierStream = () => {
    if (atelierRafId) {
      cancelAnimationFrame(atelierRafId);
      atelierRafId = null;
    }
  };

  const nudgeAtelierStream = (direction) => { // direction: -1 (forward/next), +1 (backward/prev)
    const primaryGroup = document.querySelector('.atelier-marquee-group[data-group="primary"]');
    if (!primaryGroup) return;
    const firstCard = primaryGroup.querySelector('.gallery-card');
    const step = firstCard ? (firstCard.offsetWidth + 32) : 340;

    const track = document.getElementById('atelierCarouselTrack');
    if (track) {
      track.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      atelierCurrentOffset += (direction * step);
      normalizeAtelierOffset();
      track.style.transform = `translate3d(${atelierCurrentOffset.toFixed(2)}px, 0, 0)`;

      setTimeout(() => {
        if (track) track.style.transition = 'none';
        atelierLastTimestamp = performance.now();
      }, 450);
    }
  };

  const renderProducts = (filterGender = 'all', filterCategory = 'all', sortBy = 'featured') => {
    // Check if rendered inside The Degree Accessories Atelier on Homepage (#signature)
    const isSignatureSection = document.getElementById('signature') !== null;
    if (isSignatureSection) {
      let showcaseList = [];
      if (filterCategory === 'ladies') {
        showcaseList = companyCollections.filter(item => item.group === 'ladies');
      } else if (filterCategory === 'essentials') {
        showcaseList = companyCollections.filter(item => item.group === 'essentials');
      } else if (filterCategory === 'mens') {
        showcaseList = companyCollections.filter(item => item.group === 'mens');
      } else {
        // Curate an interleaved selection from all 3 lines (Ladies, Everyday Essentials, Men's)
        const ladiesItems = companyCollections.filter(item => item.group === 'ladies');
        const essentialsItems = companyCollections.filter(item => item.group === 'essentials');
        const mensItems = companyCollections.filter(item => item.group === 'mens');
        showcaseList = [];
        const maxLen = Math.max(ladiesItems.length, essentialsItems.length, mensItems.length);
        for (let i = 0; i < maxLen; i++) {
          if (i < ladiesItems.length) showcaseList.push(ladiesItems[i]);
          if (i < essentialsItems.length) showcaseList.push(essentialsItems[i]);
          if (i < mensItems.length) showcaseList.push(mensItems[i]);
        }
      }

      const track = document.getElementById('atelierCarouselTrack');
      if (track) {
        const renderCardsHtml = (items) => items.map(item => `
          <article class="gallery-card reveal-card" data-id="${item.id}" data-group="${item.group}" tabindex="0">
            <div class="gallery-frame">
              <div class="gallery-img-wrap">
                <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
              </div>
            </div>
            <div class="gallery-caption">
              <span class="gallery-category-tag">${item.groupLabel}</span>
              <h3 class="gallery-title">${item.title}</h3>
            </div>
          </article>
        `).join('');

        track.innerHTML = `
          <div class="atelier-marquee-group" data-group="primary">
            ${renderCardsHtml(showcaseList)}
          </div>
          <div class="atelier-marquee-group" data-group="clone" aria-hidden="true">
            ${renderCardsHtml(showcaseList)}
          </div>
        `;

        // Card clicks open quick view if not dragged
        track.querySelectorAll('.gallery-card').forEach(card => {
          card.addEventListener('click', (e) => {
            if (atelierHasDragged) return;
            const id = card.getAttribute('data-id');
            if (id && typeof openQuickView === 'function') {
              openQuickView(id);
            }
          });
        });

        atelierCurrentOffset = 0;
        track.style.transition = 'none';
        track.style.transform = 'translate3d(0, 0, 0)';
        updateAtelierCardSizing();
        startAtelierStream();
      }

      refreshProductCardReveals();
      return;
    }

    if (!productsGrid) return;

    // Gender filter
    if (filterGender === 'women') filtered = filtered.filter(p => p.gender === 'women');
    else if (filterGender === 'men') filtered = filtered.filter(p => p.gender === 'men');

    // Category / Special filter
    if (filterCategory === 'bags') {
      filtered = filtered.filter(p => ['tote', 'crossbody', 'baguette', 'briefcase', 'backpack', 'messenger'].includes(p.category));
    } else if (filterCategory === 'wallets' || filterCategory === 'moneybag') {
      filtered = filtered.filter(p => p.category === 'wallets' || p.category === 'small-leather');
    } else if (filterCategory === 'belts' || filterCategory === 'belt') {
      filtered = filtered.filter(p => p.category === 'belts' || p.category === 'belt');
    } else if (filterCategory === 'lifestyle' || filterCategory === 'small-goods') {
      filtered = filtered.filter(p => p.category === 'lifestyle' || p.category === 'small-goods');
    } else if (filterCategory === 'tote') {
      filtered = filtered.filter(p => p.category === 'tote');
    } else if (filterCategory === 'crossbody') {
      filtered = filtered.filter(p => p.category === 'crossbody');
    } else if (filterCategory === 'baguette') {
      filtered = filtered.filter(p => p.category === 'baguette');
    } else if (filterCategory === 'briefcase') {
      filtered = filtered.filter(p => p.category === 'briefcase' || p.category === 'messenger');
    } else if (filterCategory === 'color-edit') {
      filtered = filtered.filter(p => p.badge.includes('Green') || p.badge.includes('Sky'));
    }

    // Sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.priceINR - b.priceINR);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.priceINR - a.priceINR);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Update count display if on bags.html
    const catalogCount = document.getElementById('catalogCount');
    if (catalogCount) {
      catalogCount.textContent = `Showing ${filtered.length} Handcrafted Accessories`;
    }

    productsGrid.innerHTML = filtered.map(prod => {
      const isWishlisted = state.wishlist.has(prod.id);
      return `
        <article class="product-card" data-id="${prod.id}">
          <div class="product-media-wrap">
            <div class="product-badge-list">
              <span class="product-badge ${prod.badgeClass}">${prod.badge}</span>
            </div>
            
            <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" data-id="${prod.id}" title="Save to Wishlist">
              <svg width="18" height="18" fill="${isWishlisted ? '#d93d3d' : 'none'}" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>

            <img src="${prod.image}" alt="${prod.title}" class="product-img" loading="lazy">

            <div class="product-quick-actions">
              <button class="btn-card-quickview" data-action="quickview" data-id="${prod.id}">Quick View</button>
              <button class="btn-card-addbag" data-action="add-to-cart" data-id="${prod.id}">+ Add To Bag</button>
            </div>
          </div>

          <div class="product-info">
            <div class="product-category-row">
              <span class="product-category-name">${prod.gender}'s • ${prod.category}</span>
              <div class="product-rating-stars" style="display:inline-flex; align-items:center; gap:2px;">
                <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <svg width="10" height="10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span class="product-rating-count">(${prod.reviewsCount})</span>
              </div>
            </div>

            <h3 class="product-title">${prod.title}</h3>
            <div class="product-leather-type">
              <span class="product-leather-dot"></span>
              <span>${prod.leather}</span>
            </div>

            <div class="product-swatches">
              ${prod.colors.map((c, i) => `
                <span class="swatch-item ${i === 0 ? 'active' : ''}" style="background-color: ${c.hex};" title="${c.name}"></span>
              `).join('')}
            </div>

            <div class="product-footer-row">
              <div class="product-price-wrap">
                <span class="product-current-price" data-price="${prod.priceINR}">${formatPrice(prod.priceINR)}</span>
                <span class="product-original-price" data-orig-price="${prod.originalPriceINR}">${formatPrice(prod.originalPriceINR)}</span>
              </div>
              <span class="product-free-shipping-tag">Complimentary Ship</span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    attachProductCardEvents();
    refreshProductCardReveals();
  };

  const updateAllPrices = () => {
    document.querySelectorAll('.product-current-price').forEach(el => {
      const p = parseFloat(el.getAttribute('data-price'));
      if (p) el.textContent = formatPrice(p);
    });
    document.querySelectorAll('.product-original-price').forEach(el => {
      const p = parseFloat(el.getAttribute('data-orig-price'));
      if (p) el.textContent = formatPrice(p);
    });
  };

  // URL query check on load (e.g. bags.html?gender=men)
  const urlParams = new URLSearchParams(window.location.search);
  const initialGender = urlParams.get('gender') || 'all';
  const initialCategory = urlParams.get('category') || 'all';

  // Highlight initial pills if any
  const genderPills = document.querySelectorAll('.gender-pill');
  if (genderPills.length > 0) {
    genderPills.forEach(pill => {
      const pGender = pill.getAttribute('data-gender');
      const pCat = pill.getAttribute('data-category');
      if ((pCat && pCat === initialCategory) || (pGender && pGender === initialGender && initialCategory === 'all')) {
        genderPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      }
      pill.addEventListener('click', () => {
        genderPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const g = pill.getAttribute('data-gender') || 'all';
        const c = pill.getAttribute('data-category') || 'all';
        const sortVal = document.getElementById('catalogSortSelect')?.value || 'featured';
        renderProducts(g, c, sortVal);
      });
    });
  }

  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const activePill = document.querySelector('.gender-pill.active');
      const g = activePill ? (activePill.getAttribute('data-gender') || 'all') : 'all';
      const c = activePill ? (activePill.getAttribute('data-category') || 'all') : 'all';
      renderProducts(g, c, e.target.value);
    });
  }

  // Filter Pills Event on Home Page
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      renderProducts('all', filter);
    });
  });

  // Atelier Continuous Showcase Navigation, Drag & Controls
  const atelierPrevBtn = document.getElementById('atelierPrevBtn');
  const atelierNextBtn = document.getElementById('atelierNextBtn');
  const flowToggleBtn = document.getElementById('atelierFlowToggle');
  const carouselViewport = document.getElementById('atelierCarouselViewport');

  if (atelierPrevBtn) {
    atelierPrevBtn.addEventListener('click', () => {
      nudgeAtelierStream(1); // nudge to reveal previous items
    });
  }

  if (atelierNextBtn) {
    atelierNextBtn.addEventListener('click', () => {
      nudgeAtelierStream(-1); // nudge to reveal next items
    });
  }

  if (flowToggleBtn) {
    flowToggleBtn.addEventListener('click', () => {
      atelierIsManualPaused = !atelierIsManualPaused;
      flowToggleBtn.classList.toggle('paused', atelierIsManualPaused);
      const iconPause = flowToggleBtn.querySelector('.icon-pause');
      const iconPlay = flowToggleBtn.querySelector('.icon-play');
      const flowText = flowToggleBtn.querySelector('.atelier-flow-text');

      if (atelierIsManualPaused) {
        if (iconPause) iconPause.style.display = 'none';
        if (iconPlay) iconPlay.style.display = 'inline-flex';
        if (flowText) flowText.textContent = 'Paused';
      } else {
        if (iconPause) iconPause.style.display = 'inline-flex';
        if (iconPlay) iconPlay.style.display = 'none';
        if (flowText) flowText.textContent = 'Continuous Flow';
        atelierLastTimestamp = performance.now();
      }
    });
  }

  if (carouselViewport) {
    // Hover to pause smoothly
    carouselViewport.addEventListener('mouseenter', () => {
      atelierIsHovered = true;
    });

    carouselViewport.addEventListener('mouseleave', () => {
      atelierIsHovered = false;
      atelierLastTimestamp = performance.now();
    });

    // Mouse drag support
    carouselViewport.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      atelierIsDragging = true;
      atelierHasDragged = false;
      atelierDragStartX = e.clientX;
      atelierDragStartOffset = atelierCurrentOffset;
      carouselViewport.style.cursor = 'grabbing';
      const track = document.getElementById('atelierCarouselTrack');
      if (track) track.style.transition = 'none';
    });

    window.addEventListener('mousemove', (e) => {
      if (!atelierIsDragging) return;
      const diffX = e.clientX - atelierDragStartX;
      if (Math.abs(diffX) > 6) {
        atelierHasDragged = true;
      }
      atelierCurrentOffset = atelierDragStartOffset + diffX;
      normalizeAtelierOffset();
      const track = document.getElementById('atelierCarouselTrack');
      if (track) {
        track.style.transform = `translate3d(${atelierCurrentOffset.toFixed(2)}px, 0, 0)`;
      }
    });

    window.addEventListener('mouseup', () => {
      if (!atelierIsDragging) return;
      atelierIsDragging = false;
      carouselViewport.style.cursor = 'grab';
      atelierLastTimestamp = performance.now();
      setTimeout(() => {
        atelierHasDragged = false;
      }, 80);
    });

    // Touch swipe support
    carouselViewport.addEventListener('touchstart', (e) => {
      atelierIsDragging = true;
      atelierHasDragged = false;
      atelierTouchStartX = e.touches[0].clientX;
      atelierTouchStartOffset = atelierCurrentOffset;
      const track = document.getElementById('atelierCarouselTrack');
      if (track) track.style.transition = 'none';
    }, { passive: true });

    carouselViewport.addEventListener('touchmove', (e) => {
      if (!atelierIsDragging) return;
      const diffX = e.touches[0].clientX - atelierTouchStartX;
      if (Math.abs(diffX) > 6) {
        atelierHasDragged = true;
      }
      atelierCurrentOffset = atelierTouchStartOffset + diffX;
      normalizeAtelierOffset();
      const track = document.getElementById('atelierCarouselTrack');
      if (track) {
        track.style.transform = `translate3d(${atelierCurrentOffset.toFixed(2)}px, 0, 0)`;
      }
    }, { passive: true });

    carouselViewport.addEventListener('touchend', () => {
      atelierIsDragging = false;
      atelierLastTimestamp = performance.now();
      setTimeout(() => {
        atelierHasDragged = false;
      }, 80);
    }, { passive: true });
  }

  window.addEventListener('resize', () => {
    updateAtelierCardSizing();
    normalizeAtelierOffset();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAtelierStream();
    } else {
      atelierLastTimestamp = performance.now();
      startAtelierStream();
    }
  });

  // ==========================================
  // PRODUCT INTERACTIONS (ADD TO CART, WISHLIST, QUICKVIEW)
  // ==========================================
  const attachProductCardEvents = () => {
    document.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        addToCartById(id);
      });
    });

    document.querySelectorAll('[data-action="quickview"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        openQuickView(id);
      });
    });

    document.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        if (state.wishlist.has(id)) {
          state.wishlist.delete(id);
          btn.classList.remove('active');
          btn.querySelector('svg').setAttribute('fill', 'none');
          showToast('Removed from saved pieces');
        } else {
          state.wishlist.add(id);
          btn.classList.add('active');
          btn.querySelector('svg').setAttribute('fill', '#d93d3d');
          showToast('Saved to your private wishlist');
        }
        persistState();
        updateWishlistCount();
        renderWishlist();
      });
    });
  };

  const updateWishlistCount = () => {
    const badges = document.querySelectorAll('#wishlistCountBadge');
    badges.forEach(b => b.textContent = state.wishlist.size);
  };

  // ==========================================
  // COLLECTIONS PAGE ENGINE WITH LEFT SLIDE-OUT FILTER DRAWER
  // 96 bespoke creations across 24 categories with full interactive drawer
  // ==========================================
  const collectionsGrid = document.getElementById('collectionsGrid');
  const colFilterDrawerBtn = document.getElementById('colFilterDrawerBtn');
  const filterDrawerOverlay = document.getElementById('filterDrawerOverlay');
  const filterDrawerCloseBtn = document.getElementById('filterDrawerCloseBtn');
  const filterDrawerApplyBtn = document.getElementById('filterDrawerApplyBtn');
  const filterDrawerResetAllBtn = document.getElementById('filterDrawerResetAllBtn');
  const filterDrawerResetCatBtn = document.getElementById('filterDrawerResetCatBtn');
  const activeFilterChipWrap = document.getElementById('activeFilterChipWrap');
  const activeFilterChipLabel = document.getElementById('activeFilterChipLabel');
  const activeFilterClearBtn = document.getElementById('activeFilterClearBtn');
  const filterActiveBadge = document.getElementById('filterActiveBadge');
  const filterDrawerCount = document.getElementById('filterDrawerCount');
  const floatingFilterBtn = document.getElementById('floatingFilterBtn');

  let activeColFilter = 'all';     // 'all' | 'ladies' | 'essentials' | 'mens'
  let activeSubCategory = 'all';   // 'all' | category key (e.g. 'handbag', 'clutch')
  let activePriceRange = 'all';    // 'all' | 'under-5000' | '5000-12000' | 'above-12000'
  let activeSortOption = 'featured'; // 'featured' | 'price-low' | 'price-high' | 'rating' | 'discount'

  const COLLECTION_CATEGORIES = {
    ladies: [
      { key: 'handbag', title: 'Ladies Handbag' },
      { key: 'clutch', title: 'Clutch' },
      { key: 'tote', title: 'Tote' },
      { key: 'duffle', title: 'Duffle' },
      { key: 'hobo', title: 'Hobo' },
      { key: 'shopper', title: 'Shopper' },
      { key: 'backpack', title: 'Backpack' },
      { key: 'purse', title: 'Purse' }
    ],
    essentials: [
      { key: 'toiletcase', title: 'Toilet case' },
      { key: 'sunglassholder', title: 'Sunglass holder' },
      { key: 'airpodcover', title: 'Airpod cover' },
      { key: 'headphonehanger', title: 'Headphone hanger' },
      { key: 'notebookcover', title: 'Notebook cover' },
      { key: 'filefoldercover', title: 'File Folder cover' },
      { key: 'plannercover', title: 'Planner cover' },
      { key: 'bookmark', title: 'Book mark' }
    ],
    mens: [
      { key: 'messengerbag', title: 'Messenger bag' },
      { key: 'mensbackpack', title: 'Backpack' },
      { key: 'travelbag', title: 'Travel bag' },
      { key: 'wallets', title: 'Wallets' },
      { key: 'billfolder', title: 'Bill folder' },
      { key: 'cardholder', title: 'Card holder' },
      { key: 'belts', title: 'Belts' },
      { key: 'wristband', title: 'Wristband' }
    ]
  };

  // Drawer Open / Close Controls
  const openFilterDrawer = () => {
    if (!filterDrawerOverlay) return;
    filterDrawerOverlay.classList.add('active');
    filterDrawerOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeFilterDrawer = () => {
    if (!filterDrawerOverlay) return;
    filterDrawerOverlay.classList.remove('active');
    filterDrawerOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (colFilterDrawerBtn) {
    colFilterDrawerBtn.addEventListener('click', openFilterDrawer);
  }
  if (floatingFilterBtn) {
    floatingFilterBtn.addEventListener('click', openFilterDrawer);
  }
  if (filterDrawerCloseBtn) {
    filterDrawerCloseBtn.addEventListener('click', closeFilterDrawer);
  }
  if (filterDrawerOverlay) {
    filterDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === filterDrawerOverlay) {
        closeFilterDrawer();
      }
    });
  }
  if (filterDrawerApplyBtn) {
    filterDrawerApplyBtn.addEventListener('click', () => {
      closeFilterDrawer();
      const catalogSec = document.getElementById('collectionsCatalogSection');
      if (catalogSec) {
        catalogSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Keyboard accessibility (ESC closes filter drawer)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && filterDrawerOverlay && filterDrawerOverlay.classList.contains('active')) {
      closeFilterDrawer();
    }
  });

  // Accordion Toggle Logic inside Drawer
  const accordionTriggers = document.querySelectorAll('.filter-accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      trigger.classList.toggle('active');
      const pane = trigger.nextElementSibling;
      if (pane) {
        pane.classList.toggle('open');
      }
    });
  });

  // Category & Collection button listeners inside drawer
  const filterColBtns = document.querySelectorAll('.filter-col-btn');
  filterColBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const colVal = btn.getAttribute('data-col') || 'all';
      activeColFilter = colVal;
      // If active subcategory doesn't belong to newly selected collection, reset it to all
      if (activeColFilter !== 'all' && activeSubCategory !== 'all') {
        const belongs = COLLECTION_CATEGORIES[activeColFilter]?.some(c => c.key === activeSubCategory);
        if (!belongs) activeSubCategory = 'all';
      }
      renderCollectionsPage();
    });
  });

  const filterCatChips = document.querySelectorAll('.filter-cat-chip');
  filterCatChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const catVal = chip.getAttribute('data-cat') || 'all';
      if (activeSubCategory === catVal) {
        activeSubCategory = 'all'; // toggle off
      } else {
        activeSubCategory = catVal;
      }
      renderCollectionsPage();
    });
  });

  const filterPriceBtns = document.querySelectorAll('.filter-price-btn');
  filterPriceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activePriceRange = btn.getAttribute('data-price') || 'all';
      renderCollectionsPage();
    });
  });

  const filterSortBtns = document.querySelectorAll('.filter-sort-btn');
  filterSortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeSortOption = btn.getAttribute('data-sort') || 'featured';
      renderCollectionsPage();
    });
  });

  // Reset Actions
  const resetAllFilters = () => {
    activeColFilter = 'all';
    activeSubCategory = 'all';
    activePriceRange = 'all';
    activeSortOption = 'featured';
    renderCollectionsPage();
  };

  if (filterDrawerResetAllBtn) {
    filterDrawerResetAllBtn.addEventListener('click', resetAllFilters);
  }
  if (filterDrawerResetCatBtn) {
    filterDrawerResetCatBtn.addEventListener('click', () => {
      activeSubCategory = 'all';
      renderCollectionsPage();
    });
  }
  if (activeFilterClearBtn) {
    activeFilterClearBtn.addEventListener('click', resetAllFilters);
  }

  // Render Product Card HTML
  const renderProductCardMarkup = (prod) => {
    const isWishlisted = state.wishlist.has(prod.id);
    const discountPct = Math.round(((prod.originalPriceINR - prod.priceINR) / prod.originalPriceINR) * 100);
    const whatsappMsg = encodeURIComponent(`Hello Degree Atelier, I would like to order the handcrafted "${prod.title}" (${prod.categoryTitle || prod.groupLabel}) priced at ${formatPrice(prod.priceINR)}. Please assist me with order confirmation.`);

    return `
      <article class="product-card" data-id="${prod.id}">
        <div class="product-media-wrap">
          <div class="product-badge-list">
            <span class="product-badge ${prod.badgeClass}">${prod.badge}</span>
          </div>
          
          <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" data-id="${prod.id}" title="Save to Wishlist">
            <svg width="18" height="18" fill="${isWishlisted ? '#d93d3d' : 'none'}" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>

          <img src="${prod.image}" alt="${prod.title}" class="product-img" loading="lazy">

          <div class="product-quick-actions">
            <button class="btn-card-quickview" data-action="quickview" data-id="${prod.id}">Quick View</button>
            <button class="btn-card-addbag" data-action="add-to-cart" data-id="${prod.id}">+ Add To Bag</button>
          </div>
        </div>

        <div class="product-info">
          <div class="product-category-row">
            <span class="product-category-name">${prod.groupLabel} • ${prod.categoryTitle}</span>
            <div class="fk-rating-badge">
              <span>★ ${prod.rating}</span>
              <span class="fk-reviews-count">(${prod.reviewsCount})</span>
            </div>
          </div>

          <h3 class="product-title">${prod.title}</h3>
          <div class="product-leather-type">
            <span class="product-leather-dot"></span>
            <span>${prod.leather}</span>
          </div>

          <div class="product-swatches">
            ${prod.colors.map((c, i) => `
              <span class="swatch-item ${i === 0 ? 'active' : ''}" style="background-color: ${c.hex};" title="${c.name}"></span>
            `).join('')}
          </div>

          <div class="product-footer-row">
            <div class="product-price-wrap">
              <span class="product-current-price" data-price="${prod.priceINR}">${formatPrice(prod.priceINR)}</span>
              <span class="product-original-price" data-orig-price="${prod.originalPriceINR}">${formatPrice(prod.originalPriceINR)}</span>
              <span class="product-discount-tag">${discountPct}% off</span>
            </div>
            <span class="product-free-shipping-tag">Free Delivery</span>
          </div>

          <div class="product-card-cta-row">
            <button class="btn-col-order-direct" data-action="add-to-cart" data-id="${prod.id}" title="Order Immediately">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span>Order Now</span>
            </button>
            <a href="https://wa.me/?text=${whatsappMsg}" target="_blank" rel="noopener" class="btn-col-whatsapp-order" title="Order via WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  };

  const renderCollectionsPage = () => {
    if (!collectionsGrid) return;

    let items = [...companyCollections];

    // 1. Filter by collection
    if (activeColFilter === 'ladies') {
      items = items.filter(p => p.group === 'ladies');
    } else if (activeColFilter === 'essentials') {
      items = items.filter(p => p.group === 'essentials');
    } else if (activeColFilter === 'mens') {
      items = items.filter(p => p.group === 'mens');
    }

    // 2. Filter by category
    if (activeSubCategory !== 'all') {
      items = items.filter(p => p.category === activeSubCategory);
    }

    // 3. Filter by price range
    if (activePriceRange === 'under-5000') {
      items = items.filter(p => p.priceINR < 5000);
    } else if (activePriceRange === '5000-12000') {
      items = items.filter(p => p.priceINR >= 5000 && p.priceINR <= 12000);
    } else if (activePriceRange === 'above-12000') {
      items = items.filter(p => p.priceINR > 12000);
    }

    // 4. Sort items
    const sortVal = activeSortOption;
    if (sortVal === 'price-low') {
      items.sort((a, b) => a.priceINR - b.priceINR);
    } else if (sortVal === 'price-high') {
      items.sort((a, b) => b.priceINR - a.priceINR);
    } else if (sortVal === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    } else if (sortVal === 'discount') {
      items.sort((a, b) => {
        const discA = (a.originalPriceINR - a.priceINR) / a.originalPriceINR;
        const discB = (b.originalPriceINR - b.priceINR) / b.originalPriceINR;
        return discB - discA;
      });
    }

    // Update Toolbar Result Count
    const countEl = document.getElementById('colResultsCount');
    if (countEl) {
      if (activeSubCategory !== 'all') {
        const catObj = companyCollections.find(p => p.category === activeSubCategory);
        countEl.textContent = `Showing ${items.length} of 96 Creations (${catObj?.categoryTitle || 'Category'})`;
      } else if (activeColFilter !== 'all') {
        const colTitle = activeColFilter === 'ladies' ? 'Ladies Collection' : activeColFilter === 'essentials' ? 'Everyday Essentials' : 'Men’s Collection';
        countEl.textContent = `Showing ${items.length} of 96 Creations (${colTitle})`;
      } else {
        countEl.textContent = `Showing ${items.length} of 96 Handcrafted Creations`;
      }
    }

    // Update Filter Drawer Count badge
    if (filterDrawerCount) {
      filterDrawerCount.textContent = items.length;
    }

    // Update Trigger Button Active Badge & Active Filter Chip in Toolbar
    if (filterActiveBadge) {
      if (activeSubCategory !== 'all') {
        const catObj = companyCollections.find(p => p.category === activeSubCategory);
        filterActiveBadge.textContent = catObj ? catObj.categoryTitle : 'Category';
      } else if (activeColFilter !== 'all') {
        filterActiveBadge.textContent = activeColFilter === 'ladies' ? 'Ladies' : activeColFilter === 'essentials' ? 'Essentials' : 'Men’s';
      } else if (activePriceRange !== 'all') {
        filterActiveBadge.textContent = 'Price Filter';
      } else {
        filterActiveBadge.textContent = 'All (96)';
      }
    }

    // Update Active Filter Chip in Toolbar
    const hasFilterApplied = activeColFilter !== 'all' || activeSubCategory !== 'all' || activePriceRange !== 'all';
    if (activeFilterChipWrap && activeFilterChipLabel) {
      if (hasFilterApplied) {
        let labelText = '';
        if (activeSubCategory !== 'all') {
          const catObj = companyCollections.find(p => p.category === activeSubCategory);
          labelText = `${catObj ? catObj.categoryTitle : activeSubCategory} (${items.length})`;
        } else if (activeColFilter !== 'all') {
          const colTitle = activeColFilter === 'ladies' ? 'Ladies' : activeColFilter === 'essentials' ? 'Essentials' : 'Men’s';
          labelText = `${colTitle} Collection (${items.length})`;
        }
        if (activePriceRange !== 'all') {
          labelText += (labelText ? ' • ' : '') + (activePriceRange === 'under-5000' ? '< ₹5k' : activePriceRange === '5000-12000' ? '₹5k-12k' : '> ₹12k');
        }
        activeFilterChipLabel.textContent = labelText;
        activeFilterChipWrap.style.display = 'flex';
      } else {
        activeFilterChipWrap.style.display = 'none';
      }
    }

    // Sync Active states inside drawer UI
    filterColBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-col') === activeColFilter);
    });
    filterCatChips.forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-cat') === activeSubCategory);
    });
    filterPriceBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-price') === activePriceRange);
    });
    filterSortBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-sort') === activeSortOption);
    });

    // Render cards:
    // If 'featured' sort and browsing all categories, group by category
    if (sortVal === 'featured' && activeSubCategory === 'all' && items.length > 0) {
      const categoryGroups = [];
      const seenCategories = new Set();

      items.forEach(item => {
        if (!seenCategories.has(item.category)) {
          seenCategories.add(item.category);
          categoryGroups.push({
            key: item.category,
            title: item.categoryTitle,
            groupLabel: item.groupLabel,
            items: items.filter(p => p.category === item.category)
          });
        }
      });

      collectionsGrid.innerHTML = categoryGroups.map(catGroup => `
        <div class="col-category-block" data-category="${catGroup.key}">
          <div class="col-category-header">
            <div class="col-category-header-info">
              <span class="col-category-group-tag">${catGroup.groupLabel}</span>
              <h2 class="col-category-title">${catGroup.title}</h2>
            </div>
            <div class="col-category-badge-wrap">
              <span class="col-category-count-badge">${catGroup.items.length} Handcrafted Pieces</span>
            </div>
          </div>
          <div class="col-category-grid">
            ${catGroup.items.map(prod => renderProductCardMarkup(prod)).join('')}
          </div>
          <div class="col-category-footer">
            <button type="button" class="btn-view-all-collections col-view-more-btn" data-category="${catGroup.key}" data-title="${catGroup.title}">
              <span>View More</span>
            </button>
          </div>
        </div>
      `).join('');
    } else if (items.length > 0) {
      // Flat grid rendering
      collectionsGrid.innerHTML = `
        <div class="col-category-grid col-flat-grid">
          ${items.map(prod => renderProductCardMarkup(prod)).join('')}
        </div>
      `;
    } else {
      // Empty state
      collectionsGrid.innerHTML = `
        <div style="text-align:center; padding: 4rem 1rem; width:100%;">
          <p style="font-size:1.1rem; color:var(--color-gray-dark); margin-bottom:1.5rem;">No handcrafted pieces matched your selected filters.</p>
          <button type="button" class="btn-luxury-primary" onclick="window.resetDegreeFilters()" style="margin:0 auto;">Reset All Filters</button>
        </div>
      `;
    }

    attachProductCardEvents();

    // Attach click events to "View More" buttons in each category block
    collectionsGrid.querySelectorAll('.col-view-more-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const catKey = btn.getAttribute('data-category');
        if (catKey) {
          activeSubCategory = catKey;
          renderCollectionsPage();
          const targetEl = document.getElementById('collectionsToolbar') || collectionsGrid;
          if (targetEl) {
            const topPos = targetEl.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
          }
        }
      });
    });

    if (typeof refreshProductCardReveals === 'function') {
      refreshProductCardReveals();
    }
  };

  window.resetDegreeFilters = resetAllFilters;



  // ==========================================
  // CART DRAWER LOGIC
  // ==========================================
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartTotalDisplay = document.getElementById('cartTotalDisplay');
  const cartCountBadges = document.querySelectorAll('#cartCountBadge');
  const shippingMeterText = document.getElementById('shippingMeterText');
  const shippingProgressFill = document.getElementById('shippingProgressFill');

  const openCart = () => {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeCart = () => {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCart();
    });
  }

  const addToCartById = (productId) => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += 1;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        variant: product.leather,
        priceINR: product.priceINR,
        quantity: 1,
        image: product.image
      });
    }

    persistState();
    renderCart();
    openCart();
    showToast(`Added "${product.title}" to your bag`);
  };

  const renderCart = () => {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadges.forEach(badge => badge.textContent = totalCount);

    if (!cartItemsContainer) return;

    if (state.cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-message">
          <div class="cart-empty-icon">
            <svg width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <p style="font-family: var(--font-serif); font-size: 1.4rem; color: #111; margin-bottom: 0.5rem;">Your Shopping Bag Is Empty</p>
          <p style="font-size: 0.85rem; color: #777;">Discover our quiet-luxury handcrafted collection and select your signature companion.</p>
        </div>
      `;
      if (cartTotalDisplay) cartTotalDisplay.textContent = formatPrice(0);
      if (shippingMeterText) shippingMeterText.textContent = `Complimentary shipping on orders over ${formatPrice(state.freeShippingThresholdINR)}`;
      if (shippingProgressFill) shippingProgressFill.style.width = '0%';
      return;
    }

    let subtotalINR = state.cart.reduce((sum, item) => sum + (item.priceINR * item.quantity), 0);
    if (state.appliedDiscount) {
      subtotalINR = subtotalINR * (1 - state.appliedDiscount);
    }

    cartItemsContainer.innerHTML = state.cart.map((item, index) => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.title}</h4>
          <span class="cart-item-variant">${item.variant}</span>
          <div class="cart-item-qty-row">
            <div class="qty-counter">
              <button class="qty-btn" data-action="cart-minus" data-index="${index}">-</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-btn" data-action="cart-plus" data-index="${index}">+</button>
            </div>
            <span class="cart-item-price">${formatPrice(item.priceINR * item.quantity)}</span>
            <button class="cart-item-remove-btn" data-action="cart-remove" data-index="${index}">Remove</button>
          </div>
        </div>
      </div>
    `).join('');

    if (cartTotalDisplay) cartTotalDisplay.textContent = formatPrice(subtotalINR);

    // Free shipping calculate
    const rawTotal = state.cart.reduce((sum, item) => sum + (item.priceINR * item.quantity), 0);
    const progress = Math.min(100, (rawTotal / state.freeShippingThresholdINR) * 100);
    if (shippingProgressFill) shippingProgressFill.style.width = `${progress}%`;

    if (rawTotal >= state.freeShippingThresholdINR) {
      if (shippingMeterText) shippingMeterText.innerHTML = `<strong>Complimentary Express Delivery Unlocked</strong> on your order.`;
    } else {
      const remaining = state.freeShippingThresholdINR - rawTotal;
      if (shippingMeterText) shippingMeterText.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more to unlock <strong>Complimentary Express Delivery</strong>`;
    }

    // Attach cart item events
    document.querySelectorAll('[data-action="cart-minus"]').forEach(b => {
      b.addEventListener('click', () => {
        const idx = parseInt(b.getAttribute('data-index'));
        if (state.cart[idx].quantity > 1) {
          state.cart[idx].quantity -= 1;
        } else {
          state.cart.splice(idx, 1);
        }
        persistState();
        renderCart();
      });
    });

    document.querySelectorAll('[data-action="cart-plus"]').forEach(b => {
      b.addEventListener('click', () => {
        const idx = parseInt(b.getAttribute('data-index'));
        state.cart[idx].quantity += 1;
        persistState();
        renderCart();
      });
    });

    document.querySelectorAll('[data-action="cart-remove"]').forEach(b => {
      b.addEventListener('click', () => {
        const idx = parseInt(b.getAttribute('data-index'));
        const removed = state.cart.splice(idx, 1);
        persistState();
        renderCart();
        showToast(`Removed "${removed[0].title}"`);
      });
    });
  };

  // Promo code trigger
  const promoInput = document.getElementById('promoCodeInput');
  const promoBtn = document.getElementById('promoCodeBtn');
  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => {
      const val = promoInput.value.trim().toUpperCase();
      if (val === 'DEGREE15' || val === 'LUXURY15') {
        state.appliedDiscount = 0.15;
        renderCart();
        showToast('VIP Privilege 15% discount applied!');
        promoInput.disabled = true;
        promoBtn.textContent = 'Applied';
      } else {
        showToast('Invalid code. Try "DEGREE15" for 15% VIP privilege.');
      }
    });
  }

  // Checkout Simulator
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your bag is empty.');
        return;
      }
      alert('Thank you for choosing Degree.\n\nYour luxury order simulation has been received with complimentary white-glove packaging and certificate of authenticity.\n\nOrder ID: DEG-84920\nYou can track this live in the "Track Order" page!');
      state.cart = [];
      persistState();
      renderCart();
      closeCart();
    });
  }

  // ==========================================
  // WISHLIST DRAWER LOGIC
  // ==========================================
  const wishlistDrawerOverlay = document.getElementById('wishlistDrawerOverlay');
  const wishlistTriggerBtn = document.getElementById('wishlistTriggerBtn');
  const wishlistCloseBtn = document.getElementById('wishlistCloseBtn');
  const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');

  const openWishlist = () => {
    if (wishlistDrawerOverlay) {
      renderWishlist();
      wishlistDrawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeWishlist = () => {
    if (wishlistDrawerOverlay) {
      wishlistDrawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (wishlistTriggerBtn) wishlistTriggerBtn.addEventListener('click', openWishlist);
  if (wishlistCloseBtn) wishlistCloseBtn.addEventListener('click', closeWishlist);
  if (wishlistDrawerOverlay) {
    wishlistDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === wishlistDrawerOverlay) closeWishlist();
    });
  }

  const renderWishlist = () => {
    if (!wishlistItemsContainer) return;
    const items = state.products.filter(p => state.wishlist.has(p.id));

    if (items.length === 0) {
      wishlistItemsContainer.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: #888;">
          <div style="display: flex; justify-content: center; margin-bottom: 0.8rem; color: var(--color-gray-medium);">
            <svg width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: #111; margin-bottom: 0.4rem;">No Saved Pieces</h4>
          <p style="font-size: 0.82rem; line-height: 1.6;">Click the heart icon on any bag to curate your private wishlist.</p>
        </div>
      `;
      return;
    }

    wishlistItemsContainer.innerHTML = items.map(item => `
      <div style="display:flex; gap:12px; padding-bottom:1.2rem; border-bottom:1px solid #eee; align-items:center;">
        <img src="${item.image}" alt="${item.title}" style="width:72px; height:88px; object-fit:cover; border-radius:4px;">
        <div style="flex:1;">
          <h4 style="font-family:var(--font-serif); font-size:1.1rem; margin-bottom:0.2rem;">${item.title}</h4>
          <span style="font-size:0.75rem; color:#777; display:block; margin-bottom:0.4rem;">${item.leather}</span>
          <div style="font-weight:700; font-size:0.95rem; margin-bottom:0.6rem;">${formatPrice(item.priceINR)}</div>
          <div style="display:flex; gap:10px;">
            <button class="btn-card-addbag" data-action="wishlist-move-to-bag" data-id="${item.id}" style="padding:0.4rem 0.8rem; font-size:0.7rem;">+ Move To Bag</button>
            <button data-action="wishlist-remove" data-id="${item.id}" style="font-size:0.72rem; color:#999; text-decoration:underline;">Remove</button>
          </div>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('[data-action="wishlist-move-to-bag"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        addToCartById(id);
        state.wishlist.delete(id);
        persistState();
        updateWishlistCount();
        renderWishlist();
      });
    });

    document.querySelectorAll('[data-action="wishlist-remove"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        state.wishlist.delete(id);
        persistState();
        updateWishlistCount();
        renderWishlist();
        showToast('Removed from saved pieces');
      });
    });
  };

  // ==========================================
  // QUICK VIEW MODAL
  // ==========================================
  const quickViewOverlay = document.getElementById('quickViewOverlay');
  const quickViewContent = document.getElementById('quickViewContent');
  const quickViewCloseBtn = document.getElementById('quickViewCloseBtn');

  const openQuickView = (productId) => {
    const prod = state.products.find(p => p.id === productId);
    if (!prod || !quickViewContent) return;

    quickViewContent.innerHTML = `
      <div class="quickview-media-col">
        <img src="${prod.image}" alt="${prod.title}">
      </div>
      <div class="quickview-info-col">
        <span class="modal-brand-tag">Degree Atelier • ${prod.gender}'s ${prod.category}</span>
        <h2 class="modal-title">${prod.title}</h2>
        <div class="modal-price">${formatPrice(prod.priceINR)}</div>
        <p class="modal-description">${prod.description}</p>
        
        <ul class="modal-specs-list">
          ${prod.specs.map(s => `
            <li>
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>${s}</span>
            </li>
          `).join('')}
        </ul>

        <div style="margin-bottom: 1.5rem;">
          <label style="display:block; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; font-weight:600; margin-bottom:0.4rem;">Select Leather Hue</label>
          <div style="display:flex; gap:8px;">
            ${prod.colors.map((c, i) => `
              <span class="swatch-item ${i === 0 ? 'active' : ''}" style="background-color: ${c.hex};" title="${c.name}"></span>
            `).join('')}
          </div>
        </div>

        <button type="button" class="btn-view-all-collections" id="modalAddToCartBtn" style="width: 100%; justify-content: center;">
          <span>Add Piece to Shopping Bag • ${formatPrice(prod.priceINR)}</span>
        </button>
      </div>
    `;

    document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
      addToCartById(prod.id);
      quickViewOverlay.classList.remove('active');
    });

    quickViewOverlay.classList.add('active');
  };

  if (quickViewCloseBtn) {
    quickViewCloseBtn.addEventListener('click', () => {
      quickViewOverlay.classList.remove('active');
    });
  }
  if (quickViewOverlay) {
    quickViewOverlay.addEventListener('click', (e) => {
      if (e.target === quickViewOverlay) quickViewOverlay.classList.remove('active');
    });
  }



  // ==========================================
  // PREDICTIVE SEARCH OVERLAY
  // ==========================================
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  const searchModalOverlay = document.getElementById('searchModalOverlay');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const searchMainInput = document.getElementById('searchMainInput');
  const searchResultsContainer = document.getElementById('searchResultsContainer');

  const openSearch = () => {
    if (searchModalOverlay) {
      searchModalOverlay.classList.add('active');
      setTimeout(() => searchMainInput.focus(), 150);
    }
  };

  const closeSearch = () => {
    if (searchModalOverlay) searchModalOverlay.classList.remove('active');
  };

  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearch);
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
  if (searchModalOverlay) {
    searchModalOverlay.addEventListener('click', (e) => {
      if (e.target === searchModalOverlay) closeSearch();
    });
  }

  if (searchMainInput && searchResultsContainer) {
    searchMainInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        searchResultsContainer.innerHTML = '';
        return;
      }

      const matches = state.products.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.leather.toLowerCase().includes(q) ||
        p.gender.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.badge.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        searchResultsContainer.innerHTML = `
          <div style="color: rgba(255,255,255,0.7); text-align:center; padding: 2rem;">
            No handcrafted pieces found matching "${q}".
          </div>
        `;
        return;
      }

      searchResultsContainer.innerHTML = matches.map(m => `
        <div style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.06); padding:0.8rem 1.2rem; border-radius:4px; cursor:pointer;" data-id="${m.id}" class="search-result-item">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="${m.image}" style="width:48px; height:48px; object-fit:cover; border-radius:3px;">
            <div>
              <div style="color:#fff; font-family:var(--font-serif); font-size:1.15rem;">${m.title}</div>
              <div style="color:rgba(255,255,255,0.6); font-size:0.75rem;">${m.gender}'s • ${m.leather}</div>
            </div>
          </div>
          <span style="color:var(--color-sky-tint); font-weight:600;">${formatPrice(m.priceINR)}</span>
        </div>
      `).join('');

      document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.getAttribute('data-id');
          closeSearch();
          openQuickView(id);
        });
      });
    });
  }

  // Search Tag Quick Clicks
  document.querySelectorAll('.search-tag-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const tag = pill.getAttribute('data-tag');
      if (searchMainInput) {
        searchMainInput.value = tag;
        searchMainInput.dispatchEvent(new Event('input'));
      }
    });
  });

  // ==========================================
  // TRACK ORDER SEARCH INTERACTION (ORDERS.HTML)
  // ==========================================
  const trackOrderForm = document.getElementById('trackOrderForm');
  const trackResultSection = document.getElementById('trackResultSection');
  const trackOrderIdDisplay = document.getElementById('trackOrderIdDisplay');

  if (trackOrderForm && trackResultSection) {
    trackOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('trackOrderIdInput');
      const orderNum = input ? input.value.trim().toUpperCase() : 'DEG-84920';
      if (trackOrderIdDisplay) trackOrderIdDisplay.textContent = orderNum || 'DEG-84920';
      trackResultSection.style.display = 'block';
      trackResultSection.scrollIntoView({ behavior: 'smooth' });
      showToast(`Tracking status retrieved for ${orderNum}`);
    });
  }

  // ==========================================
  // CLIENT REVIEWS SUBMIT MODAL (REVIEWS.HTML)
  // ==========================================
  const openReviewModalBtn = document.getElementById('openReviewModalBtn');
  const reviewModalOverlay = document.getElementById('reviewModalOverlay');
  const closeReviewModalBtn = document.getElementById('closeReviewModalBtn');
  const reviewForm = document.getElementById('reviewForm');

  if (openReviewModalBtn && reviewModalOverlay) {
    openReviewModalBtn.addEventListener('click', () => {
      reviewModalOverlay.classList.add('active');
    });
  }
  if (closeReviewModalBtn && reviewModalOverlay) {
    closeReviewModalBtn.addEventListener('click', () => {
      reviewModalOverlay.classList.remove('active');
    });
  }
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your verified review has been published.');
      if (reviewModalOverlay) reviewModalOverlay.classList.remove('active');
      reviewForm.reset();
    });
  }

  // ==========================================
  // FAQ ACCORDION (CONTACT.HTML)
  // ==========================================
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.parentElement;
      parent.classList.toggle('active');
      const icon = trigger.querySelector('.faq-icon');
      if (icon) {
        icon.textContent = parent.classList.contains('active') ? '−' : '+';
      }
    });
  });

  // Contact form submission
  const contactInquiryForm = document.getElementById('contactInquiryForm');
  if (contactInquiryForm) {
    contactInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! A senior Degree concierge will reply within 4 hours.');
      contactInquiryForm.reset();
    });
  }

  // ==========================================
  // NEWSLETTER VIP FORM
  // ==========================================
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      if (emailInput && emailInput.value) {
        showToast('Welcome to the Degree Circle. Your 15% VIP code is DEGREE15.');
        emailInput.value = '';
      }
    });
  }

  // ==========================================
  // MOBILE NAVIGATION DRAWER
  // ==========================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavClose = document.getElementById('mobileNavClose');

  const openMobileNav = () => {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openMobileNav);
  }
  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }
  if (mobileNavDrawer) {
    mobileNavDrawer.addEventListener('click', (e) => {
      if (e.target === mobileNavDrawer) {
        closeMobileNav();
      }
    });

    const mobileNavLinks = mobileNavDrawer.querySelectorAll('.mobile-nav-links a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('active')) {
        closeMobileNav();
      }
      if (cartDrawerOverlay && cartDrawerOverlay.classList.contains('active')) {
        closeCart();
      }
      if (wishlistDrawerOverlay && wishlistDrawerOverlay.classList.contains('active')) {
        closeWishlist();
      }
    }
  });

  // ==========================================
  // HERO CAROUSEL ENGINE (5 ANIMATED SLIDES)
  // ==========================================
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroIndicators = document.querySelectorAll('.indicator-bar');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  const heroCarouselSection = document.getElementById('heroCarouselSection');

  if (heroSlides.length > 0) {
    let currentSlide = 0;
    let slideTimer = null;
    const slideDuration = 5500;

    const goToSlide = (index) => {
      heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      heroIndicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
      });
      if (currentSlideNum) {
        currentSlideNum.textContent = `0${index + 1}`;
      }
      currentSlide = index;
    };

    const nextSlide = () => {
      const nextIndex = (currentSlide + 1) % heroSlides.length;
      goToSlide(nextIndex);
    };

    const prevSlide = () => {
      const prevIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
      goToSlide(prevIndex);
    };

    const startTimer = () => {
      stopTimer();
      slideTimer = setInterval(nextSlide, slideDuration);
    };

    const stopTimer = () => {
      if (slideTimer) {
        clearInterval(slideTimer);
        slideTimer = null;
      }
    };

    if (heroPrevBtn) {
      heroPrevBtn.addEventListener('click', () => {
        prevSlide();
        startTimer();
      });
    }

    if (heroNextBtn) {
      heroNextBtn.addEventListener('click', () => {
        nextSlide();
        startTimer();
      });
    }

    heroIndicators.forEach((bar, idx) => {
      bar.addEventListener('click', () => {
        goToSlide(idx);
        startTimer();
      });
    });

    // Continuous auto-scroll at all times (no stopping on hover)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        startTimer();
      }
    });

    // Replay active slide animation when scrolling back to top
    let heroWasOffscreen = false;
    if (heroCarouselSection) {
      const heroScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (heroWasOffscreen) {
              const activeSlide = heroSlides[currentSlide];
              if (activeSlide) {
                activeSlide.classList.remove('active');
                void activeSlide.offsetWidth; // force reflow
                activeSlide.classList.add('active');
              }
            }
            heroWasOffscreen = false;
          } else {
            heroWasOffscreen = true;
          }
        });
      }, {
        threshold: 0.15
      });
      heroScrollObserver.observe(heroCarouselSection);
    }

    startTimer();
  }

  // ==========================================
  // VIP CLIENT ACCOUNT / LOGIN MODAL
  // ==========================================
  const loginTriggerBtns = document.querySelectorAll('#loginTriggerBtn');
  const loginModalOverlay = document.getElementById('loginModalOverlay');
  const loginCloseBtn = document.getElementById('loginCloseBtn');
  const clientLoginForm = document.getElementById('clientLoginForm');
  const clientRegisterForm = document.getElementById('clientRegisterForm');
  const toggleAuthLinks = document.querySelectorAll('.toggle-auth-link');
  const loginFormView = document.getElementById('loginFormView');
  const registerFormView = document.getElementById('registerFormView');
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const forgotPassBtn = document.getElementById('forgotPassBtn');

  const openLoginModal = () => {
    if (loginModalOverlay) loginModalOverlay.classList.add('active');
  };

  const closeLoginModal = () => {
    if (loginModalOverlay) loginModalOverlay.classList.remove('active');
  };

  loginTriggerBtns.forEach(btn => btn.addEventListener('click', openLoginModal));
  if (loginCloseBtn) loginCloseBtn.addEventListener('click', closeLoginModal);
  if (loginModalOverlay) {
    loginModalOverlay.addEventListener('click', (e) => {
      if (e.target === loginModalOverlay) closeLoginModal();
    });
  }

  // Toggle between Sign In and Create Account views
  toggleAuthLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (target === 'register') {
        if (loginFormView) loginFormView.classList.add('hidden');
        if (registerFormView) registerFormView.classList.remove('hidden');
      } else {
        if (registerFormView) registerFormView.classList.add('hidden');
        if (loginFormView) loginFormView.classList.remove('hidden');
      }
    });
  });

  // Password visibility toggle
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
      const passInput = document.getElementById('loginPass');
      if (passInput) {
        const isPass = passInput.getAttribute('type') === 'password';
        passInput.setAttribute('type', isPass ? 'text' : 'password');
        togglePasswordBtn.style.color = isPass ? '#9f6e3c' : '#8c867a';
      }
    });
  }

  // Forgot password
  if (forgotPassBtn) {
    forgotPassBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Password recovery instructions sent to your email.');
    });
  }

  if (clientLoginForm) {
    clientLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail')?.value || 'Collector';
      showToast(`Welcome back, ${email.split('@')[0]}!`);
      closeLoginModal();
    });
  }

  if (clientRegisterForm) {
    clientRegisterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('VIP Account created successfully. Welcome to Degree.');
      closeLoginModal();
    });
  }

  const googleLoginBtns = document.querySelectorAll('#googleLoginBtn, .btn-google-sharp, .btn-google-auth');
  googleLoginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Authenticated securely via Google. Welcome to Degree Atelier.');
      closeLoginModal();
    });
  });

  // ==========================================
  // SCROLL-DRIVEN REVEAL ANIMATION ENGINE
  // Bespoke editorial motions: titles, eyebrows, copy, quotes, media, cards, stats
  // ==========================================
  const initScrollReveal = () => {
    // Graceful fallback for older browsers or reduced-motion preference
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Signal CSS that reveal engine is operational
    document.documentElement.classList.add('degree-reveal-ready');

    // Number odometer / counter animation for statistics
    const animateStatCounters = (container) => {
      const h4List = container.classList.contains('stat-item')
        ? [container.querySelector('h4')]
        : container.querySelectorAll('.stat-item h4');

      h4List.forEach(h4 => {
        if (!h4) return;
        if (!h4.dataset.rawText) {
          h4.dataset.rawText = h4.textContent.trim();
        }
        const raw = h4.dataset.rawText;
        const match = raw.match(/^(\d+)(.*)$/);
        if (!match) return; // e.g. "Zero"

        const target = parseInt(match[1], 10);
        const suffix = match[2] || '';
        const duration = 1400;
        const startTime = performance.now();

        if (h4._animFrame) {
          cancelAnimationFrame(h4._animFrame);
        }

        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          // Exponential deceleration
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = Math.floor(ease * target);
          h4.textContent = current + suffix;
          if (progress < 1) {
            h4._animFrame = requestAnimationFrame(step);
          } else {
            h4.textContent = target + suffix;
            h4._animFrame = null;
          }
        };
        h4._animFrame = requestAnimationFrame(step);
      });
    };

    const resetStatCounters = (container) => {
      const h4List = container.classList.contains('stat-item')
        ? [container.querySelector('h4')]
        : container.querySelectorAll('.stat-item h4');

      h4List.forEach(h4 => {
        if (!h4) return;
        if (h4._animFrame) {
          cancelAnimationFrame(h4._animFrame);
          h4._animFrame = null;
        }
        if (h4.dataset.rawText) {
          const match = h4.dataset.rawText.match(/^(\d+)(.*)$/);
          if (match) {
            h4.textContent = '0' + (match[2] || '');
          }
        }
      });
    };

    // Fully repeatable bidirectional reveal observer (triggers on every scroll up and down)
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          if (el.classList.contains('stat-item') || el.querySelector('.stat-item')) {
            animateStatCounters(el);
          }
        } else {
          // Remove is-revealed when element leaves viewport so it re-animates every time you scroll
          el.classList.remove('is-revealed');
          if (el.classList.contains('stat-item') || el.querySelector('.stat-item')) {
            resetStatCounters(el);
          }
        }
      });
    }, {
      rootMargin: '0px 0px -25px 0px',
      threshold: 0.05
    });

    // Helper to register elements with specific animation style
    const registerRevealGroup = (selector, className) => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add(className);
        revealObserver.observe(el);
      });
    };

    // Style 1: Luxury Headline Titles (Rise + Optical Blur Clear)
    registerRevealGroup(
      '.section-title, .home-about-heading, .philosophy-title, .page-hero-title, .newsletter-title, .legal-block-title, .legal-sidebar-title, .comparison-header h3, .capsule-title, .about-story-grid h2, .contact-form-title, .track-card-title, .faq-wrap h2, .contact-form-card h3, section .container > div > h3, section .container > div > h2',
      'reveal-display-title'
    );

    // Style 1B: Bespoke Atelier Parallax Masked Kinetic Title
    registerRevealGroup(
      '.atelier-parallax-title',
      'reveal-atelier-title'
    );

    // Style 2: Subheading / Gold Eyebrows (Tracking Unfurl)
    registerRevealGroup(
      '.section-subheading, .philosophy-tag, .page-hero-eyebrow, .newsletter-eyebrow, .craft-step-num, .legal-block-num, .capsule-badge, .about-story-grid > div > span, .lookbook-editorial-text > span, .faq-wrap > div > span, .contact-form-card > span, .track-result-header span, .stamp-subtitle, .stamp-title, .about-section span',
      'reveal-eyebrow'
    );

    // Style 3: Silky Text Lift
    registerRevealGroup(
      '.section-description, .home-about-text, .home-about-actions, .philosophy-text, .page-hero-desc, .newsletter-desc, .legal-text, .legal-list, .signature-view-all-wrap, .capsule-desc, .capsule-specs-row, .about-story-grid p, .contact-info-list, .faq-item, .atelier-parallax-actions, .lookbook-editorial-text p, .contact-form-card p, .track-form-row, .footer-brand-bio, .footer-links-list, .footer-heading, .about-section p, .lookbook-section p',
      'reveal-fade-up'
    );

    // Style 4: Editorial Quotes & Left Column Slide
    registerRevealGroup(
      '.philosophy-quote, .legal-highlight-box, .concierge-card-box, .lookbook-editorial-quote',
      'reveal-slide-left'
    );

    // Style 5: Atelier Media Frame Slide Right
    registerRevealGroup(
      '.philosophy-media, .about-story-img, .collection-capsule-media, .home-about-image-card, .lookbook-editorial-card',
      'reveal-slide-right'
    );

    // Style 7: Bloom Containers
    registerRevealGroup(
      '.leather-comparison-wrapper, .reviews-aggregate-badge, .product-filters, .catalog-toolbar, .col-filter-header, .col-toolbar, .contact-form-card, .rating-overview-card, .track-search-card, .track-result-card, .newsletter-box',
      'reveal-bloom'
    );

    // Stats items
    document.querySelectorAll('.stat-item').forEach(el => {
      revealObserver.observe(el);
    });

    // Staggered Domino Grid Groups (Style 6)
    const setupStaggeredCards = (containerSelector, itemSelector) => {
      document.querySelectorAll(containerSelector).forEach(container => {
        const items = container.querySelectorAll(itemSelector);
        items.forEach((item, index) => {
          item.classList.add('reveal-card');
          item.style.setProperty('--reveal-index', index % 4);
          revealObserver.observe(item);
        });
      });
    };

    setupStaggeredCards('.craftsmanship-grid', '.craft-card');
    setupStaggeredCards('.values-grid', '.value-card');
    setupStaggeredCards('.home-about-features', '.about-feature-item');
    setupStaggeredCards('.reviews-grid', '.review-card');
    setupStaggeredCards('.lookbook-strip', '.lookbook-item');
    setupStaggeredCards('.lookbook-editorial-grid', '.lookbook-editorial-card');
    setupStaggeredCards('.quality-strip-grid', '.quality-strip-item');
    setupStaggeredCards('.press-strip', '.press-item');
    setupStaggeredCards('.timeline-steps-wrap', '.timeline-node');

    // Dynamic Gallery Cards reveal handler (Product cards stay immediately visible)
    refreshProductCardReveals = () => {
      const galleryCards = document.querySelectorAll('.gallery-card');
      galleryCards.forEach((card, index) => {
        card.classList.add('reveal-card');
        card.style.setProperty('--reveal-index', index % 4);
        revealObserver.observe(card);
      });
    };

    // Initial run on currently present product cards
    refreshProductCardReveals();
  };

  // ==========================================
  // STANDARD SCROLL-TRIGGERED TITLE LINE ANIMATION (SOLID BLACK, NO SHADOW)
  // Expands smoothly from small to big on scroll up & down
  // ==========================================
  const initTitleLineScrollAnimation = () => {
    const heroTitles = document.querySelectorAll('.page-hero-title');
    if (!heroTitles.length) return;

    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let isScrollActive = false;
    let scrollDebounceTimer = null;

    const playExpandAnimation = (title) => {
      title.classList.remove('line-scroll-anim');
      void title.offsetWidth; // trigger reflow
      title.classList.add('line-scroll-anim');
    };

    // 1. Initial play on load for visible titles
    heroTitles.forEach(title => {
      playExpandAnimation(title);
    });

    // 2. IntersectionObserver: triggers when scrolling into view from either direction
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playExpandAnimation(entry.target);
        } else {
          entry.target.classList.remove('line-scroll-anim');
        }
      });
    }, { threshold: 0.1 });

    heroTitles.forEach(title => observer.observe(title));

    // 3. Scroll listener: triggers expansion animation on scroll up and down
    window.addEventListener('scroll', () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY);

      if (scrollDiff > 6) {
        heroTitles.forEach(title => {
          const rect = title.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            if (!isScrollActive) {
              isScrollActive = true;
              playExpandAnimation(title);
            }
          }
        });
      }

      clearTimeout(scrollDebounceTimer);
      scrollDebounceTimer = setTimeout(() => {
        isScrollActive = false;
      }, 200);

      lastScrollY = currentScrollY;
    }, { passive: true });
  };

  // ==========================================
  // INITIAL BOOT
  // ==========================================
  initScrollReveal();
  initTitleLineScrollAnimation();
  if (productsGrid) {
    renderProducts(initialGender, initialCategory);
  }
  if (collectionsGrid) {
    renderCollectionsPage();
  }
  renderCart();
  updateWishlistCount();
});
