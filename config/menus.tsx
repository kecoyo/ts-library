import { components } from './components';

export const menus = {
  '/': [
    {
      title: 'Home',
      path: 'index',
    },
  ],
  '/zh': [
    {
      title: '首页',
      path: 'index',
    },
  ],
  '/guide': [
    {
      title: 'Quick Start',
      path: '/guide/quick-start',
    },
    {
      title: 'FAQ',
      path: '/guide/faq',
    },
  ],
  '/zh/guide': [
    {
      title: '快速上手',
      path: '/zh/guide/quick-start',
    },
    {
      title: '常见问题',
      path: '/zh/guide/faq',
    },
  ],
  '/components': [
    {
      title: 'Common',
      children: components.common,
    },
    {
      title: 'Layout',
      children: components.layout,
    },
    {
      title: 'Data Display',
      children: components.dataDisplay,
    },
  ],
  '/zh/components': [
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
