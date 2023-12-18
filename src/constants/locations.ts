import LatLngLiteral = google.maps.LatLngLiteral;

export type LocationType = {
  id: string;
  location: LatLngLiteral;
  label: string;
  pm25: number;
};

export const Locations: LocationType[] = [
  {
    id: "city1",
    location: {
      lat: 37,
      lng: 35.3213,
    },
    label: "Adana",
    pm25: 40.89,
  },
  {
    id: "city2",
    location: {
      lat: 37.7648,
      lng: 38.2766,
    },
    label: "Adiyaman",
    pm25: 25.85,
  },
  {
    id: "city3",
    location: {
      lat: 38.7507,
      lng: 30.5567,
    },
    label: "Afyonkarahisar",
    pm25: 8.25,
  },
  {
    id: "city4",
    location: {
      lat: 39.7217,
      lng: 43.0567,
    },
    label: "Agri",
    pm25: 20.31,
  },
  {
    id: "city5",
    location: {
      lat: 40.6533,
      lng: 35.8333,
    },
    label: "Amasya",
    pm25: 1.01,
  },
  {
    id: "city6",
    location: {
      lat: 39.9334,
      lng: 32.8597,
    },
    label: "Ankara",
    pm25: 126.2,
  },
  {
    id: "city7",
    location: {
      lat: 36.8969,
      lng: 30.7133,
    },
    label: "Antalya",
    pm25: 9.63,
  },
  {
    id: "city8",
    location: {
      lat: 41.1837,
      lng: 41.8183,
    },
    label: "Artvin",
    pm25: 14.2,
  },
  {
    id: "city9",
    location: {
      lat: 37.856,
      lng: 27.8416,
    },
    label: "Aydin",
    pm25: 9.56,
  },
  {
    id: "city10",
    location: {
      lat: 39.6484,
      lng: 27.8826,
    },
    label: "Balikesir",
    pm25: 0.99,
  },
  {
    id: "city11",
    location: {
      lat: 40.0567,
      lng: 29.8694,
    },
    label: "Bilecik",
    pm25: 1.03,
  },
  {
    id: "city12",
    location: {
      lat: 39.0626,
      lng: 40.7696,
    },
    label: "Bingol",
    pm25: 14.13,
  },
  {
    id: "city13",
    location: {
      lat: 38.3938,
      lng: 42.123,
    },
    label: "Bitlis",
    pm25: 6.09,
  },
  {
    id: "city14",
    location: {
      lat: 40.576,
      lng: 31.5788,
    },
    label: "Bolu",
    pm25: 1.06,
  },
  {
    id: "city15",
    location: {
      lat: 37.4613,
      lng: 30.0365,
    },
    label: "Burdur",
    pm25: 3.77,
  },
  {
    id: "city16",
    location: {
      lat: 40.1824,
      lng: 29.067,
    },
    label: "Bursa",
    pm25: 1.82,
  },
  {
    id: "city17",
    location: {
      lat: 40.1553,
      lng: 26.4142,
    },
    label: "Canakkale",
    pm25: 0.51,
  },
  {
    id: "city18",
    location: {
      lat: 40.602,
      lng: 33.6137,
    },
    label: "Cankiri",
    pm25: 12.91,
  },
  {
    id: "city19",
    location: {
      lat: 40.5489,
      lng: 34.953,
    },
    label: "Corum",
    pm25: 31.47,
  },
  {
    id: "city20",
    location: {
      lat: 37.7765,
      lng: 29.0864,
    },
    label: "Denizli",
    pm25: 13.24,
  },
  {
    id: "city21",
    location: {
      lat: 37.9204,
      lng: 40.2306,
    },
    label: "Diyarbakir",
    pm25: 90.16,
  },
  {
    id: "city22",
    location: {
      lat: 41.6759,
      lng: 26.5587,
    },
    label: "Edirne",
    pm25: 0.51,
  },
  {
    id: "city23",
    location: {
      lat: 38.6753,
      lng: 39.2279,
    },
    label: "Elazig",
    pm25: 25.13,
  },
  {
    id: "city24",
    location: {
      lat: 39.75,
      lng: 39.5,
    },
    label: "Erzincan",
    pm25: 20.34,
  },
  {
    id: "city25",
    location: {
      lat: 39.9334,
      lng: 41.2691,
    },
    label: "Erzurum",
    pm25: 27.13,
  },
  {
    id: "city26",
    location: {
      lat: 39.7667,
      lng: 30.5256,
    },
    label: "Eskisehir",
    pm25: 2.12,
  },
  {
    id: "city27",
    location: {
      lat: 37.0662,
      lng: 37.3833,
    },
    label: "Gaziantep",
    pm25: 45.24,
  },
  {
    id: "city28",
    location: {
      lat: 40.9128,
      lng: 38.3895,
    },
    label: "Giresun",
    pm25: 0.61,
  },
  {
    id: "city29",
    location: {
      lat: 40.4607,
      lng: 39.4819,
    },
    label: "Gumushane",
    pm25: 8.22,
  },
  {
    id: "city30",
    location: {
      lat: 37.5744,
      lng: 43.7408,
    },
    label: "Hakkari",
    pm25: 6.01,
  },
  {
    id: "city31",
    location: {
      lat: 36.2061,
      lng: 36.15,
    },
    label: "Hatay",
    pm25: 27.82,
  },
  {
    id: "city32",
    location: {
      lat: 37.7648,
      lng: 30.5566,
    },
    label: "Isparta",
    pm25: 8.54,
  },
  {
    id: "city33",
    location: {
      lat: 36.7951,
      lng: 34.6178,
    },
    label: "Mersin",
    pm25: 22.01,
  },
  {
    id: "city34",
    location: {
      lat: 41.0082,
      lng: 28.9784,
    },
    label: "Istanbul",
    pm25: 0.7,
  },
  {
    id: "city35",
    location: {
      lat: 38.4192,
      lng: 27.1287,
    },
    label: "Izmir",
    pm25: 2.26,
  },
  {
    id: "city36",
    location: {
      lat: 40.6167,
      lng: 43.1,
    },
    label: "Kars",
    pm25: 15.22,
  },
  {
    id: "city37",
    location: {
      lat: 41.3887,
      lng: 33.7827,
    },
    label: "Kastamonu",
    pm25: 1.1,
  },
  {
    id: "city38",
    location: {
      lat: 38.7312,
      lng: 35.4787,
    },
    label: "Kayseri",
    pm25: 42.74,
  },
  {
    id: "city39",
    location: {
      lat: 41.7333,
      lng: 27.2167,
    },
    label: "Kirklareli",
    pm25: 0.77,
  },
  {
    id: "city40",
    location: {
      lat: 39.15,
      lng: 34.1667,
    },
    label: "Kirsehir",
    pm25: 4.36,
  },
  {
    id: "city41",
    location: {
      lat: 40.8533,
      lng: 29.8815,
    },
    label: "Kocaeli",
    pm25: 0.73,
  },
  {
    id: "city42",
    location: {
      lat: 37.8714,
      lng: 32.4846,
    },
    label: "Konya",
    pm25: 6.12,
  },
  {
    id: "city43",
    location: {
      lat: 39.4167,
      lng: 29.9833,
    },
    label: "Kutahya",
    pm25: 1.21,
  },
  {
    id: "city44",
    location: {
      lat: 38.3552,
      lng: 38.3095,
    },
    label: "Malatya",
    pm25: 44.61,
  },
  {
    id: "city45",
    location: {
      lat: 38.6191,
      lng: 27.4289,
    },
    label: "Manisa",
    pm25: 1.29,
  },
  {
    id: "city46",
    location: {
      lat: 37.5736,
      lng: 36.937,
    },
    label: "Kahramanmaras",
    pm25: 59.52,
  },
  {
    id: "city47",
    location: {
      lat: 37.3212,
      lng: 40.7245,
    },
    label: "Mardin",
    pm25: 17.14,
  },
  {
    id: "city48",
    location: {
      lat: 37.215,
      lng: 28.3636,
    },
    label: "Mugla",
    pm25: 2.74,
  },
  {
    id: "city49",
    location: {
      lat: 38.9167,
      lng: 41.9833,
    },
    label: "Mus",
    pm25: 25.49,
  },
  {
    id: "city50",
    location: {
      lat: 38.6939,
      lng: 34.6857,
    },
    label: "Nevsehir",
    pm25: 11.06,
  },
  {
    id: "city51",
    location: {
      lat: 37.9667,
      lng: 34.6833,
    },
    label: "Nigde",
    pm25: 6.01,
  },
  {
    id: "city52",
    location: {
      lat: 40.9839,
      lng: 37.8769,
    },
    label: "Ordu",
    pm25: 0.78,
  },
  {
    id: "city53",
    location: {
      lat: 41.0201,
      lng: 40.5234,
    },
    label: "Rize",
    pm25: 1.91,
  },
  {
    id: "city54",
    location: {
      lat: 40.7569,
      lng: 30.3781,
    },
    label: "Sakarya",
    pm25: 0.63,
  },
  {
    id: "city55",
    location: {
      lat: 41.2867,
      lng: 36.33,
    },
    label: "Samsun",
    pm25: 1.13,
  },
  {
    id: "city56",
    location: {
      lat: 37.9278,
      lng: 41.9408,
    },
    label: "Siirt",
    pm25: 24.58,
  },
  {
    id: "city57",
    location: {
      lat: 41.7711,
      lng: 34.8719,
    },
    label: "Sinop",
    pm25: 0.79,
  },
  {
    id: "city58",
    location: {
      lat: 39.7477,
      lng: 37.0179,
    },
    label: "Sivas",
    pm25: 21.99,
  },
  {
    id: "city59",
    location: {
      lat: 40.9833,
      lng: 27.5167,
    },
    label: "Tekirdag",
    pm25: 0.5,
  },
  {
    id: "city60",
    location: {
      lat: 40.3333,
      lng: 36.55,
    },
    label: "Tokat",
    pm25: 20.22,
  },
  {
    id: "city61",
    location: {
      lat: 41.0053,
      lng: 39.7266,
    },
    label: "Trabzon",
    pm25: 1.32,
  },
  {
    id: "city62",
    location: {
      lat: 39.0833,
      lng: 39.55,
    },
    label: "Tunceli",
    pm25: 5.72,
  },
  {
    id: "city63",
    location: {
      lat: 37.1671,
      lng: 38.7939,
    },
    label: "Sanliurfa",
    pm25: 38.93,
  },
  {
    id: "city64",
    location: {
      lat: 38.6823,
      lng: 29.4082,
    },
    label: "Usak",
    pm25: 4.41,
  },
  {
    id: "city65",
    location: {
      lat: 38.4937,
      lng: 43.3833,
    },
    label: "Van",
    pm25: 29.29,
  },
  {
    id: "city66",
    location: {
      lat: 39.7167,
      lng: 35.1667,
    },
    label: "Yozgat",
    pm25: 8.39,
  },
  {
    id: "city67",
    location: {
      lat: 41.4564,
      lng: 31.7987,
    },
    label: "Zonguldak",
    pm25: 0.69,
  },
  {
    id: "city68",
    location: {
      lat: 38.3725,
      lng: 34.0259,
    },
    label: "Aksaray",
    pm25: 5.05,
  },
  {
    id: "city69",
    location: {
      lat: 40.2552,
      lng: 40.2249,
    },
    label: "Bayburt",
    pm25: 10.23,
  },
  {
    id: "city70",
    location: {
      lat: 37.1759,
      lng: 33.2288,
    },
    label: "Karaman",
    pm25: 9.02,
  },
  {
    id: "city71",
    location: {
      lat: 39.85,
      lng: 33.5167,
    },
    label: "Kirikkale",
    pm25: 22.92,
  },
  {
    id: "city72",
    location: {
      lat: 37.8824,
      lng: 41.122,
    },
    label: "Batman",
    pm25: 62.34,
  },
  {
    id: "city73",
    location: {
      lat: 37.5139,
      lng: 42.4543,
    },
    label: "Sirnak",
    pm25: 5.25,
  },
  {
    id: "city74",
    location: {
      lat: 41.5911,
      lng: 32.3378,
    },
    label: "Bartin",
    pm25: 0.75,
  },
  {
    id: "city75",
    location: {
      lat: 41.1104,
      lng: 42.7022,
    },
    label: "Ardahan",
    pm25: 13.51,
  },
  {
    id: "city76",
    location: {
      lat: 39.9236,
      lng: 44.045,
    },
    label: "Igdir",
    pm25: 14.5,
  },
  {
    id: "city77",
    location: {
      lat: 40.65,
      lng: 29.25,
    },
    label: "Yalova",
    pm25: 1.36,
  },
  {
    id: "city78",
    location: {
      lat: 41.2002,
      lng: 32.6157,
    },
    label: "Karabuk",
    pm25: 1.9,
  },
  {
    id: "city79",
    location: {
      lat: 36.7184,
      lng: 37.1212,
    },
    label: "Kilis",
    pm25: 44.47,
  },
  {
    id: "city80",
    location: {
      lat: 37.213,
      lng: 36.1763,
    },
    label: "Osmaniye",
    pm25: 26.04,
  },
  {
    id: "city81",
    location: {
      lat: 40.8438,
      lng: 31.1565,
    },
    label: "Duzce",
    pm25: 0.7,
  },
];
