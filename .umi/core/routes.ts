// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/test/peach-design3/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'D:/test/peach-design3/node_modules/@umijs/preset-dumi/lib/theme/layout')})],
    "component": (props) => React.createElement(
        dynamic({
          loader: async () => {
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'D:/test/peach-design3/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { default: demos } = await import(/* webpackChunkName: 'dumi_demos' */ '@@/dumi/demos');
            const { usePrefersColor } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          }
        }), props)
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'D:/test/peach-design3/node_modules/@umijs/preset-dumi/lib/theme/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'D:/test/peach-design3/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/button",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__button__src__button.md' */'D:/test/peach-design3/packages/button/src/button.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/button/src/button.md",
          "updatedTime": 1626783690000,
          "slugs": [],
          "nav": {
            "path": "/button",
            "title": "Button"
          },
          "title": "Button"
        },
        "title": "Button"
      },
      {
        "path": "/checkbox",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__checkbox__src__checkbox.md' */'D:/test/peach-design3/packages/checkbox/src/checkbox.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/checkbox/src/checkbox.md",
          "updatedTime": 1626783690000,
          "slugs": [],
          "nav": {
            "path": "/checkbox",
            "title": "Checkbox"
          },
          "title": "Checkbox"
        },
        "title": "Checkbox"
      },
      {
        "path": "/input",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__input__src__input.md' */'D:/test/peach-design3/packages/input/src/input.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/input/src/input.md",
          "updatedTime": 1626783690000,
          "slugs": [],
          "nav": {
            "path": "/input",
            "title": "Input"
          },
          "title": "Input"
        },
        "title": "Input"
      },
      {
        "path": "/docs",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__docs.md' */'D:/test/peach-design3/docs/docs.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs.md",
          "updatedTime": 1626832735708,
          "slugs": [
            {
              "depth": 3,
              "value": "2. 单输入",
              "heading": "2-单输入"
            },
            {
              "depth": 3,
              "value": "3. 多必选参数",
              "heading": "3-多必选参数"
            },
            {
              "depth": 3,
              "value": "4. 多非必选参数",
              "heading": "4-多非必选参数"
            },
            {
              "depth": 3,
              "value": "5. 必选参数 + 非必选参数",
              "heading": "5-必选参数--非必选参数"
            }
          ],
          "title": "2. 单输入",
          "nav": {
            "path": "/docs",
            "title": "Docs"
          }
        },
        "title": "2. 单输入"
      }
    ],
    "title": "peach-design",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
