const countries = [
  {name: 'Australia', flag: require('../assets/flags/flag1.png')},
  {name: 'Brazil', flag: require('../assets/flags/flag2.png')},
  {name: 'Canada', flag: require('../assets/flags/flag3.png')},
  {name: 'France', flag: require('../assets/flags/flag4.png')},
  {name: 'Germany', flag: require('../assets/flags/flag5.png')},
  {name: 'Italy', flag: require('../assets/flags/flag6.png')},
  {name: 'India', flag: require('../assets/flags/flag7.png')},
  {name: 'Iran', flag: require('../assets/flags/flag8.png')},
  {name: 'Kuwait', flag: require('../assets/flags/flag9.png')},
  {name: 'Monaco', flag: require('../assets/flags/flag10.png')},
  {name: 'Pakistan', flag: require('../assets/flags/flag11.png')},
  {name: 'Russia', flag: require('../assets/flags/flag12.png')},
  {name: 'Singapore', flag: require('../assets/flags/flag13.png')},
  {name: 'CH', flag: require('../assets/flags/flag14.png')},
  {name: 'Spain', flag: require('../assets/flags/flag15.png')},
  {name: 'KSA', flag: require('../assets/flags/flag16.png')},
  {name: 'Turkey', flag: require('../assets/flags/flag17.png')},
  {name: 'UAE', flag: require('../assets/flags/flag18.png')},
  {name: 'USA', flag: require('../assets/flags/flag19.png')},
  {name: 'UK', flag: require('../assets/flags/flag20.png')},
];

const bussiness = [
  'Popular in Businesses for Sale',
  'Popular in Shares for Sale',
  'Popular in Business Ideas',
  'Popular in Investors',
  'Popular in Investors Required',
  'Popular in Franchise Opportunities',
  'Popular in Machinery & Supplies',
  'Popular in Export & Import Trade',
];

const adds = [
  {
    title: 'Ul designing',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
    time: '8 months ago',
    location: 'New York',
    image: require('../assets/banners/banner1.jpg'),
    amount: 'AED 2000',
  },
  {
    title: 'Tag Store',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
    time: '6 months ago',
    location: 'Chicago',
    image: require('../assets/banners/banner2.png'),
    amount: 'AED 3000',
  },
  {
    title: 'App designing',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
    time: '10 months ago',
    location: 'San Francisco',
    image: require('../assets/banners/banner1.jpg'),
    amount: 'AED 8000',
  },
  {
    title: 'Digital Marketing',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
    time: '4 months ago',
    location: 'Maxico',
    image: require('../assets/banners/banner2.png'),
    amount: 'AED 5000',
  },
];

const sortLabels = [
  'Default',
  'Newest to Oldest',
  'Oldest to Newest',
  'Price Highest to Lowest',
  'Price Lowest to highest',
];

const placesImages = [
  require('../assets/images/img1.jpg'),
  require('../assets/images/img2.jpg'),
  require('../assets/images/img3.jpg'),
  require('../assets/images/img4.jpg'),
  require('../assets/images/img5.jpg'),
  require('../assets/images/img6.jpg'),
  require('../assets/images/img7.jpg'),
  require('../assets/images/img8.jpg'),
  require('../assets/images/img9.jpg'),
  require('../assets/images/img10.jpg'),
];

const reportTypes = [
  'Spam',
  'Fraud',
  'Miscategorized',
  'Repetive Listing',
  'Copyright Infringement',
  'Not available',
  'Incorrect Pricing',
];

const inboxMessages = [
  {
    name: 'John Kevin',
    lastMessage: 'What kind of strategy is better?',
    date: '11/16/19',
    image: '',
  },
  {
    name: 'Andrew Parker',
    lastMessage: 'How do you do',
    date: '11/16/19',
    image: '',
  },
  {
    name: 'Karen Castillo',
    lastMessage: 'Bro, I have a good idea!',
    date: '11/16/19',
    image: '',
  },
  {
    name: 'Maximillian Jacobson',
    lastMessage: 'Hlo',
    date: '11/16/19',
    image: '',
  },
  {name: 'Martha Craig', lastMessage: 'Hey', date: '11/16/19', image: ''},
  {
    name: 'Tabitha Potter',
    lastMessage:
      'Actually I wanted to check with you about › your online business plan on',
    date: '11/16/19',
    image: '',
  },
  {
    name: 'Maisy Humphrey',
    lastMessage: 'Welcome, to make design process faster, look at Pixsellz',
    date: '11/16/19',
    image: '',
  },
  {
    name: 'Kieron Dotson',
    lastMessage: 'Ok, have a good trip!',
    date: '11/16/19',
    image: '',
  },
  {name: 'Kieron Dotson', lastMessage: 'OK', date: '11/16/19', image: ''},
];

const dummyChat = [
  {position: 'right', text: 'Hi, available for snow removal tomorrow?'},
  {
    position: 'left',
    text: "Hello! Yes, we're available. Where is your property located?",
  },
  {position: 'right', text: "It's in 987 Willow Lane, Springvale, CA, 90210"},
  {position: 'left', text: 'Got it. We can definitely help you out.'},
  {position: 'lett', text: 'What time works best for you?'},
  {position: 'right', text: 'How about around 9 AM?'},
  {position: 'left', text: "That works for us. We'll see you then"},
  {position: 'right', text: 'Great, thank you!'},
];

const salesTypes = [
  {title: 'Businesses for Sale', image: require('../assets/businessSale.png')},
  {title: 'Shares for Sale', image: require('../assets/SharesSale.png')},
  {title: 'Business Ideas', image: require('../assets/businessIdea.png')},
  {title: 'Investors', image: require('../assets/investor.png')},
  {
    title: 'Investors Required',
    image: require('../assets/investorRequired.png'),
  },
  {title: 'Franchise Opportunities', image: require('../assets/franchise.png')},
  {title: 'Machinery & Supplies', image: require('../assets/machinary.png')},
  {title: 'Export & Import Trade', image: require('../assets/export.png')},
];

const salesCatogries = [
  'Business Services',
  'Government Services',
  'Trading & Forex',
  'Real Estate',
  'Commercial',
  'Retail & Services',
  'Food & Beverage',
  'Industrial',
  'Healthcare & Laboratory',
  'Businesses for Rent',
  'Assets & Interiors',
  'Trade Licenses',
  'Electrical Equipments',
  'Veterinary',
  'Manufacturing',
  'Marketing',
  'Garage & Workshops',
  'Construction',
  'Packaging & Shipping',
  'Office Furniture & Equipments',
  'Agriculture & Forestry',
  'Trade & Distribution',
  'Others',
  'Industrial Supplies',
  'All in Businesses for Sale',
];

const sharesSalesCategories = [
  'Running Businesses',
  'Start-up Businesses',
  'International Businesses',
  'All in Shares for Sale',
];

const exportSalesCategories = [
  'Manufacturer',
  'Distributor',
  'All in Export & Import Trade',
];

export {
  countries,
  bussiness,
  adds,
  sortLabels,
  placesImages,
  reportTypes,
  inboxMessages,
  dummyChat,
  salesTypes,
  salesCatogries,
  sharesSalesCategories,
  exportSalesCategories,
};
