import { ColumnDef } from '@tanstack/react-table';

import { ReactCheckbox } from '@paintbox/react-checkbox';

export const dndCol: ColumnDef<unknown> = {
  id: 'dnd',
  header: 'DnD',
  cell: () => null,
};

export const selectCol: ColumnDef<unknown> = {
  id: 'select',
  header: 'Select',
  cell: ({ row }) => (
    <ReactCheckbox
      checked={row.getIsSelected()}
      onChange={row.getToggleSelectedHandler()}
    />
  ),
};

export const expanderCol: ColumnDef<unknown> = {
  id: 'expander',
  header: () => null,
  cell: ({ row }) => {
    return row.getCanExpand() ? (
      <button
        {...{
          onClick: row.getToggleExpandedHandler(),
          style: { cursor: 'pointer' },
        }}
      >
        {row.getIsExpanded() ? '👇' : '👉'}
      </button>
    ) : null;
  },
};
