const huntData = [
  {
    title: "Hunt Demo",
    location: "Leeds",
    checkpoints: {
      1: {
        lat: 53.77568,
        long: -1.55998,
      },
      2: {
        lat: 53.800755,
        long: -1.549077,
      },
      3: {
        lat: 53.796638,
        long: -1.5926,
      },
    },
    distance: 3,
  },
  {
    title: "Heaton Rush",
    location: "Manchester",
    checkpoints: {
      1: { lat: 53.536647987313486, long: -2.2440359741449356 },
      2: { lat: 53.53587625617422, long: -2.2509312629699707 },
      3: { lat: 53.53303688981281, long: -2.251698710024357 },
      4: { lat: 53.53360621307354, long: -2.2549626231193542 },
      5: { lat: 53.53054409241709, long: -2.2573253139853477 },
    },
    distance: 5,
  },
  {
    title: "Temple Run",
    location: "Manchester",
    checkpoints: {
      1: { lat: 53.53792540755858, long: -2.2651255130767822 },
      2: { lat: 53.534382170217945, long: -2.26406067609787 },
      3: { lat: 53.53558075095777, long: -2.2601087763905525 },
      4: { lat: 53.53615482225113, long: -2.2579381987452507 },
      5: { lat: 53.5363955273709, long: -2.254282683134079 },
      6: { lat: 53.537410140202276, long: -2.2504954040050507 },
    },
    distance: 6,
  },
  {
    title: "Pinecone Pass",
    location: "Manchester",
    checkpoints: {
      1: { lat: 53.51580630897123, long: -2.2929470613598824 },
      2: { lat: 53.51763954268451, long: -2.2972821816802025 },
      3: { lat: 53.52138789589685, long: -2.2984499484300613 },
      4: { lat: 53.52368091763837, long: -2.301746718585491 },
      5: { lat: 53.5259120298351, long: -2.3033131286501884 },
      6: { lat: 53.52648902248384, long: -2.3084187135100365 },
      7: { lat: 53.52158662670249, long: -2.30164747685194 },
      8: { lat: 53.51961980846949, long: -2.298227995634079 },
    },
    distance: 8,
  },
  {
    title: "Erin's Lilypad Lane",
    location: "Cambridge",
    checkpoints: {
      1: { lat: 52.2368033301621, long: 0.16111157834529877 },
      2: { lat: 52.23712671253907, long: 0.1640777662396431 },
      3: { lat: 52.238015745280165, long: 0.16349874436855316 },
      4: { lat: 52.23955436633099, long: 0.16652293503284454 },
      5: { lat: 52.23718913019958, long: 0.1681802049279213 },
      6: { lat: 52.23616456604839, long: 0.16574978828430176 },
      7: { lat: 52.236635581042265, long: 0.16270112246274948 },
    },
    distance: 7,
  },
  {
    title: "Toon Trail",
    location: "Newcastle",
    checkpoints: {
      1: { lat: 54.969966, long: -1.616405 },
      2: { lat: 54.969262, long: -1.611025 },
      3: { lat: 54.970216, long: -1.600378 },
      4: { lat: 54.9672, long: -1.604881 },
      5: { lat: 54.957688, long: -1.628502 },
    },
    distance: 5,
  },
  {
    title: "Barrowford Reservoir",
    location: "Barrowford",
    checkpoints: {
      1: { lat: 53.849037, long: -2.204111 },
      2: { lat: 53.851003, long: -2.203758 },
      3: { lat: 53.853303, long: -2.20038 },
      4: { lat: 53.854897, long: -2.20144 },
    },
    distance: 4,
  },{
    title: "Steel striding",
    location: "Sheffield",
    checkpoints: {
      1: { lat: 53.3488432, long: -1.4804345 },
      2: { lat: 53.3485226, long: -1.4776718 },
      3: { lat: 53.3512468, long: -1.4734668 },
      4: { lat: 53.3528226, long: -1.4740539 }
      
    },
    distance: 4,
  },{
    title: "Londinium",
    location: "London",
    checkpoints: {
      1: { lat: 51.5608756, long: -0.0852913 },
      2: { lat: 51.5608960, long: -0.0864971 },
      3: { lat: 51.5610306, long: -0.0883976 },
      4: { lat: 51.5599434, long: -0.0893661 },
      5: { lat: 51.5580330, long: -0.0901777 }
      
    },
    distance: 5,
  },{
    title: "Quick sand escape",
    location: "Cromer",
    checkpoints: {
      1: { lat: 52.9600409, long: 0.9378260 },
      2:{lat: 52.9570110, long: 0.9308137},
      3:{lat: 52.9540783, long: 0.9238832},
      4 :{lat: 52.9512725, long: 0.9284182}, 
    },
    distance: 4,
  }, {
    title: "Thrills on the Hills",
    location: "Sheffield",
    checkpoints: {
     1: {lat: 53.3397349, long: -1.4796537},
     2: {lat: 53.3346120, long: -1.4761381}, 
     3:{lat:53.3388740, long:-1.4687763}
    },
    distance: 4,
  },
  {
    title: "Brum brum",
    location: "Birmingham",
    checkpoints: {
     1: {lat:52.5197176, long: -1.9080263},
     2: {lat: 52.5233073, long: -1.9143728},
     3: {lat: 52.5253832, long: -1.9213863}
     
    },
    distance: 3,
  }, {
    title: "Let's get saucy",
    location: "Worcester", 
  checkpoints: {
    1: {lat: 52.2061034, long: -2.2274841},
    2: {lat: 52.2072184, long: -2.2288462}, 
    3: {lat: 52.2072394, long: -2.2309583}
  }, distance: 3,
}, {
  title: "Penny lane",
  location: "Liverpool",
  checkpoints: {
    1: {lat: 53.3866438, long: -2.9199804},
    2: {lat: 53.3842971, long: -2.9246636}
  }, distance: 2
}, {
  title: "Hey Presto(n)!",
  location: "Preston",
  checkpoints: {
    1: {lat: 53.7744899, long: -2.7064188},
    2:{lat: 53.7720507, long: -2.6975610}
  }, distance: 2
}
];

module.exports = huntData;

/*
Willowy way
Shady Acres 
Alley Oop 
Topsy Turvy Trail
Pinecone Pass 
Path of the Puppy 
Toon Trail
*/
