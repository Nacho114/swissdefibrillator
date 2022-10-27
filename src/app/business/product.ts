export interface Product {
  title: string;
  summary: string;
  price: number;
  path: string;
}

export const PRODUCT_FOLDER_PATH = '../assets/products/'

export const PRODUCTS: Product[] = [
  {
    title: 'Phillips - HS1',
    summary:
      'Designed for the ordinary person in the extraordinary moment, Philips HeartStart HS1 AED is ready to act and virtually ready to go.',
    price: 69,
    path: 'hs1.png',
  },
  {
    title: 'Phillips - FRx',
    summary:
      'The Philips HeartStart FRx defibrillator features intuitive, step-by-step voice instructions, including CPR guidance, and an audible metronome.',
    price: 69,
    path: 'frx.jpg',
  },
  {
    title: 'Phillips Electrodes',
    summary:
      'Electrodes for PHILIPS HS1 and FRx, available for Adults and children.',
    price: 69,
    path: 'hs1-electrode.jpg',
  },
  {
    title: 'Phillips Battery',
    summary:
      'Lithium Manganese dioxide non-rechargeable battery for HS1 or FRX',
    price: 69,
    path: 'hs1-battery.jpg',
  },

  {
    title: 'Avivia AED Wall mount',
    summary:
      'Avivia AED Wall mount that fist most defibrillators such as Phillips and Zoll; sturdy and ideal for office buildings and shopping centers.',
    price: 69,
    path: 'avivia-wall-mount.jpg',
  },
  {
    title: 'Avivia AED stand',
    summary:
      'Avivia AED Wall mount that fits most defibrillators such as Phillips and Zoll; sturdy and ideal for various settings.',
    price: 69,
    path: 'avivia-stand.jpg',
  },
  {
    title: 'First Aid it',
    summary:
      'First aid kit that holds supplies used to treat minor injuries including cuts, scrapes, burns, bruises, and sprains.',
    price: 69,
    path: 'first-aid.jpg',
  },
];
