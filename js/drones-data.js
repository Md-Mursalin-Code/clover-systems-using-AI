window.DRONES = {
  shyena: {
    key: 'shyena', name: 'SHYENA-S16', page: 'shyena-s16.html', role: 'Surveillance',
    tagline: 'Heavy-lift surveillance drone — man-portable',
    desc: 'A high-endurance surveillance platform delivering 4K imaging over long periods. At under 16 kg it stays man-portable, while its payload bay carries up to 5 kg of mission equipment.',
    photo: 'images/shyena-s16.jpg',
    chips: ['< 16 kg', '45+ min', '25 km'],
    table: { weight: '< 16 kg', payload: 'Up to 5 kg', endurance: '45+ min', range: '25 km' },
    specs: [['Weight', '< 16 kg'], ['Imaging', '4K High-Res'], ['Payload', 'Up to 5 kg'], ['Endurance', '45+ min'], ['Range', '25 km'], ['Class', 'Man-portable']],
    bars: [['Range', 100], ['Endurance', 90], ['Payload', 100], ['Portability', 60]],
    highlights: ['High-resolution 4K surveillance capability', 'Up to 5 kg payload capacity', '45+ minutes of flight time', 'Man-portable — under 16 kg', '25 km operating range']
  },
  bajra: {
    key: 'bajra', name: 'BAJRA-I', page: 'bajra-i.html', role: 'Interceptor',
    tagline: 'Rapid-response interceptor drone',
    desc: 'A lightweight, fast-reaction interceptor under 3 kg with a 5 km range and 1.5 kg payload. Effective against Group 1 and 2 drones, low-flying helicopters, tanks and armoured vehicles.',
    photo: 'images/bajra-i.jpg',
    chips: ['< 3 kg', '20 min', '5 km'],
    table: { weight: '< 3 kg', payload: '1.5 kg', endurance: '20 min', range: '5 km' },
    specs: [['Weight', '< 3 kg'], ['Payload', '1.5 kg'], ['Endurance', '20 min'], ['Range', '5 km'], ['Targets', 'Air & Armour'], ['Class', 'Man-portable']],
    bars: [['Range', 20], ['Payload', 30], ['Endurance', 45], ['Portability', 95]],
    highlights: ['1.5 kg payload', '20 minutes of endurance', '5 km range', 'Under 3 kg — easy to carry and launch', 'Effective against Group 1 and 2 drones', 'Effective against low-flying helicopters, tanks and armoured vehicles']
  },
  chokh: {
    key: 'chokh', name: 'CHOKH-C5', page: 'chokh-c5.html', role: 'Compact Surveillance',
    tagline: 'Compact tactical surveillance drone',
    desc: 'A sub-5 kg man-portable drone offering a 1 kg payload capacity and 40 minutes of endurance — versatile for tactical operations in tight, fast-moving environments.',
    photo: 'images/chokh-c5.jpg',
    chips: ['< 5 kg', '40 min', '25 km'],
    table: { weight: '< 5 kg', payload: '1 kg', endurance: '40 min', range: '25 km' },
    specs: [['Weight', '< 5 kg'], ['Payload', '1 kg'], ['Endurance', '40 min'], ['Range', '25 km'], ['Class', 'Man-portable']],
    bars: [['Range', 100], ['Endurance', 80], ['Payload', 20], ['Portability', 90]],
    highlights: ['Man-portable — under 5 kg', '1 kg payload capacity', '40 minutes of endurance', '25 km operating range', 'Versatile for tactical operations']
  }
};
