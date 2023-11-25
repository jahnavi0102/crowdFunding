import { adamsitsWheeze, bouquet, cat, horse, snail, well } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: adamsitsWheeze,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: bouquet,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: cat,
    link: '/',
    disabled: true,
  },
  {
    name: 'withdraw',
    imgUrl: horse,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: snail,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: well,
    link: '/',
    disabled: true,
  },
];