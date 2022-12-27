import { components } from './components';

export const menus = {
  '/': [
    {
      title: '首页',
      path: 'index',
    },
  ],
  '/guide': [
    {
      title: '快速上手',
      path: '/guide/quick-start',
    },
    {
      title: '常见问题',
      path: '/guide/faq',
    },
  ],
  '/components': [
    {
      title: '通用',
      children: components.common,
    },
    {
      title: '布局',
      children: components.layout,
    },
    {
      title: '信息展示',
      children: components.dataDisplay,
    },
  ],
};
