import React, {memo, useMemo} from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';
import {SortableHeader} from "./components/SortableHeader.tsx";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: { name: string };
}

interface UserTableProps {
  users: User[];
  columns?: ColumnDef<User>[];
  onRowClick?: (user: User) => void;
}
import s from './UserTable.module.scss'


export const UserTable: React.FC<UserTableProps> = memo(({ users, columns: customColumns, onRowClick }) => {
  const data = useMemo(() => users, [users]);

  const defaultColumns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name'
      },
      {
        accessorKey: 'email',
        header: 'Email'
      },
      {
        accessorKey: 'phone',
        header: 'Phone'
      },
      {
        accessorKey: 'company.name',
        header: 'Company'
      }
    ],
    []
  );

  const columns = customColumns || defaultColumns;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <table className={s.table}>
      <thead className={s.thead}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <SortableHeader key={header.id} header={header} column={header.column} />
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={s.tbody}>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            onClick={() => onRowClick?.(row.original)}
            style={{ cursor: onRowClick ? 'pointer' : 'default' }}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
});
