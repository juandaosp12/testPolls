import { Poll } from './poll';

export const POLLS: Poll[] = [
  {
    id: 1,
    name: 'Kanye West',
    pubdate: new Date('2021-01-14'),
    category: 'Entertainment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing, elit egestas venenatis cubilia ornare, mauris vivamus curabitur dis aenean.',
    votesUp: 1,
    votesDown: 2,
    selectedUp: false,
    selectedDown: false,
    voted: false,
    showNotSelectedError: false,
  },
  {
    id: 2,
    name: 'Mark Zuckerberg',
    pubdate: new Date('2020-10-14'),
    category: 'Business',
    description:
      'Suspendisse congue ornare felis. Donec bibendum tempus augue, faucibus congue mi maximus vel. Nullam turpis nunc, posuere sit amet consequat consequat, vehicula et risus. Vivamus congue volutpat metus eu porta.',
    votesUp: 124,
    votesDown: 321,
    selectedUp: false,
    selectedDown: false,
    voted: false,
    showNotSelectedError: false,
  },
  {
    id: 3,
    name: 'Cristina Fernández de Kirchner',
    pubdate: new Date('2010-10-14'),
    category: 'Politics',
    description:
      'Ut suscipit bibendum potenti aliquet fames et scelerisque purus, nam mi inceptos.',
    votesUp: 629,
    votesDown: 923,
    selectedUp: false,
    selectedDown: false,
    voted: false,
    showNotSelectedError: false,
  },
  {
    id: 4,
    name: 'Malala Yousafzai',
    pubdate: new Date('2019-09-24'),
    category: 'Entertainment',
    description:
      'Feugiat integer cras sed himenaeos fermentum in viverra sem eros per hendrerit ut, habitasse quis sociis fames nec urna facilisi semper nullam eleifend.',
    votesUp: 1290,
    votesDown: 923,
    selectedUp: false,
    selectedDown: false,
    voted: true,
    showNotSelectedError: false,
  },
];
