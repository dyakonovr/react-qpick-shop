import { MoreHorizontal } from "lucide-react";
import { DataTable } from "../../../components/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type { ICategory } from "@/types/features/category.types";
import { useCategories } from "@/hooks/features/useCategories";
import { Button } from "@/components/ui/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/shadcn/dropdown-menu";

const columns: ColumnDef<ICategory>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 self-end">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Обновить</DropdownMenuItem>
            <DropdownMenuItem>Удалить</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

export function AdminCategoryTable() {
  const { categories } = useCategories();

  return <DataTable columns={columns} data={categories || []} />;
}
