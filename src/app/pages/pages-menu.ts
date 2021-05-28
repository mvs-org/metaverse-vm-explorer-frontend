import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/mainnet',
    home: true,
  },
  {
    title: 'Transactions',
    icon: 'swap-outline',
    link: '/mainnet/txs',
  },
  {
    title: 'Blocks',
    icon: 'cube-outline',
    link: '/mainnet/blocks',
  },
];
