"use client";
import React, { useMemo, useReducer, useState } from "react";
import classes from "./CustomerTable.module.css";

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
	getPaginationRowModel,
} from "@tanstack/react-table";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Person, makeData } from "./makeData";

import Card from "../UI/Card/Card";

export default function CustomerTable() {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [data, setData] = useState(() => makeData(1000));

	const columns = useMemo<ColumnDef<Person>[]>(
		() => [
			{
				header: "Name",
				accessorFn: (row) => `${row.firstName}  ${row.lastName}`,
				footer: "Name",
			},
			{
				header: "Phone",
				accessorKey: "phone",
				footer: "Phone",
			},
			{
				header: "Email",
				accessorKey: "email",
				footer: "Email",
			},
			{
				header: "Project",
				accessorKey: "project",
				footer: "Project",
			},
			{
				header: "Priority",
				accessorKey: "priority",

				footer: "Priority",
			},
		],
		[]
	);

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
	});

	return (
		<section className={classes.customer}>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<th
										key={header.id}
										colSpan={header.colSpan}
										style={{ textAlign: "start" }}
									>
										{header.isPlaceholder ? null : (
											<div
												style={{
													display: "flex",
													alignItems: "center",
													gap: "2rem",
												}}
												{...{
													className: header.column.getCanSort()
														? "cursor-pointer select-none"
														: "",
													onClick: header.column.getToggleSortingHandler(),
												}}
											>
												{flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
												{{
													asc: <FaArrowUp />,
													desc: <FaArrowDown />,
												}[header.column.getIsSorted() as string] ?? null}
											</div>
										)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table
						.getRowModel()
						.rows.slice(0, 10)
						.map((row) => {
							return (
								<tr key={row.id}>
									<td>
										{flexRender(
											row.getVisibleCells()[0].column.columnDef.cell,
											row.getVisibleCells()[0].getContext()
										)}
									</td>
									<td>
										{flexRender(
											row.getVisibleCells()[1].column.columnDef.cell,
											row.getVisibleCells()[1].getContext()
										)}
									</td>
									<td>
										{flexRender(
											row.getVisibleCells()[2].column.columnDef.cell,
											row.getVisibleCells()[2].getContext()
										)}
									</td>
									<td>
										{flexRender(
											row.getVisibleCells()[3].column.columnDef.cell,
											row.getVisibleCells()[3].getContext()
										)}
									</td>
									<td
										style={{
											textAlign: "center",
											color: row.getVisibleCells()[4].getValue()
												? "green"
												: "red",
										}}
									>
										{row.getVisibleCells()[4].getValue() ? (
											<IoCheckmarkDoneCircle />
										) : (
											<IoMdCloseCircle />
										)}
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			<div className={classes.func}>
				<button
					disabled={!table.getCanPreviousPage()}
					onClick={() => table.setPageIndex(0)}
				>
					First Page
				</button>
				<button
					disabled={!table.getCanPreviousPage()}
					onClick={() => table.previousPage()}
				>
					Previous Page
				</button>
				<button
					disabled={!table.getCanNextPage()}
					onClick={() => table.nextPage()}
				>
					Next Page
				</button>
				<button
					disabled={!table.getCanNextPage()}
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
				>
					Last Page
				</button>
			</div>
		</section>
	);
}
