import { LAYOUT } from '../../basic'

const dashboard: RouteRecordItem = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/form',
  meta: {
    orderNo: 2,
    icon: 'uiw:component',
    title: 'routes.demo.demo',
    root: true,
  },
  children: [
    {
      path: 'table',
      name: 'Table',
      redirect: '/demo/form/basic',
      meta: {
        title: 'routes.demo.table.table',
      },
      children: [
        {
          path: 'useTable',
          name: 'UseTableDemo',
          component: () => import('@/pages/demo/table/BasicTable.vue'),
          meta: {
            title: 'routes.demo.table.basic',
          },
        },
        {
          path: 'FixedColumn',
          name: 'FixedColumn',
          component: () => import('@/pages/demo/table/FixedColumn.vue'),
          meta: {
            title: 'routes.demo.table.fixedColumn',
          },
        },
        {
          path: 'TreeTable',
          name: 'TreeTable',
          component: () => import('@/pages/demo/table/TreeTable.vue'),
          meta: {
            title: 'routes.demo.table.treeTable'
          }
        }
      ],
    },

    {
      path: 'form',
      name: 'Form',
      component: () => import('@/pages/demo/Form.vue'),
      meta: {
        title: 'routes.demo.form',
      },
    },
    {
      path: 'modal',
      name: 'Modal',
      component: () => import('@/pages/demo/Modal.vue'),
      meta: {
        title: 'routes.demo.modal'
      }
    },
    {
      path: 'card',
      name: 'Card',
      component: () => import('@/pages/demo/Card.vue'),
      meta: {
        title: 'routes.demo.card',
      },
    },
    {
      path: 'draggable',
      name: 'Draggable',
      component: () => import('@/pages/demo/Draggable.vue'),
      meta: {
        title: '拖拽',
      },
    },
  ],
}

export default dashboard
