import {flexRender, Header, HeaderContext, RowData} from "@tanstack/react-table";

interface SortableHeaderProps<TData extends RowData> {
    header: Header<TData, unknown>;
    column: HeaderContext<TData, unknown>['column'];
}

export const SortableHeader = <TData extends RowData>({ header, column }: SortableHeaderProps<TData>) => (
    <th onClick={column.getToggleSortingHandler()}>
        {flexRender(column.columnDef.header, header.getContext())}
        {{
            asc: ' 🔼',
            desc: ' 🔽'
        }[column.getIsSorted() as string] ?? null}
    </th>
);