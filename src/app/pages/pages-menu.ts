import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/start',
    home: true,
  },
  {
    title: 'Transactions',
    icon: 'swap-outline',
    link: '/txs',
  },
  {
    title: 'Blocks',
    icon: 'cube-outline',
    link: '/blocks',
  },
];
