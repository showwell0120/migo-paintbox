/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as Pages from './pages';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

/**
 * @reference https://github.com/remix-run/react-router/blob/dev/examples/route-objects/src/App.tsx
 */

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Pages.Layout />,
    children: [
      // INVENTORY
      {
        index: true,
        element: <Pages.Inventory />,
        handle: {
          crumb: () => <span>Inventory</span>,
        },
      },
      // CATALOG
      {
        path: 'catalog',
        element: <Pages.Catalog />,
        children: [
          {
            path: 'row-manager',
            element: <Pages.RowManager />,
            handle: {
              crumb: () => <span>Row Manager</span>,
            },
            children: [
              {
                path: 'new',
                element: <Pages.RowManagerAdd />,
                handle: {
                  crumb: () => <span>Create New Row</span>,
                },
              },
              {
                path: 'row/view/:id',
                element: <Pages.RowManagerView />,
                handle: {
                  crumb: () => <span>View Row</span>,
                },
              },
              {
                path: 'row/edit/:id',
                element: <Pages.RowManagerEdit />,
                handle: {
                  crumb: () => <span>Edit Row</span>,
                },
              },
            ],
          },
          {
            path: '/catalog/default-catalog',
            element: <Pages.DefaultCatalog />,
            handle: {
              crumb: () => <span>Default Catalog</span>,
            },
          },
        ],
      },
      // PROMOS
      {
        path: 'promos',
        element: <Pages.Promos />,
        handle: {
          crumb: () => <span>Promos</span>,
        },
        children: [
          {
            path: 'promo-badges',
            element: <Pages.PromoBadges />,
            handle: {
              crumb: () => <span>Promo Badges</span>,
            },
          },
          {
            path: 'live-carousel',
            element: <Pages.LiveCarousel />,
            handle: {
              crumb: () => <span>Live Carousel</span>,
            },
            children: [
              {
                path: 'slide/new',
                element: <Pages.LiveCarouselAdd />,
                handle: {
                  crumb: () => <span>Create New Slide</span>,
                },
              },
              {
                path: 'slide/view/:id',
                element: <Pages.LiveCarouselView />,
                handle: {
                  crumb: () => <span>View Slide</span>,
                },
              },
              {
                path: 'slide/edit/:id',
                element: <Pages.LiveCarouselEdit />,
                handle: {
                  crumb: () => <span>Edit Slide</span>,
                },
              },
            ],
          },
          {
            path: 'free-contents',
            element: <Pages.FreeContents />,
            handle: {
              crumb: () => <span>Free Contents</span>,
            },
          },
        ],
      },
      // CHANNELS
      {
        path: 'channels',
        element: <Pages.Channels />,
        handle: {
          crumb: () => <span>Channels</span>,
        },
        children: [
          {
            path: 'channel/new',
            element: <Pages.ChannelAdd />,
            handle: {
              crumb: () => <span>Create New Channel</span>,
            },
          },
          {
            path: 'channel/view/:id',
            element: <Pages.ChannelView />,
            handle: {
              crumb: () => <span>View Channel</span>,
            },
          },
          {
            path: 'channel/edit/:id',
            element: <Pages.ChannelEdit />,
            handle: {
              crumb: () => <span>Edit Channel</span>,
            },
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
