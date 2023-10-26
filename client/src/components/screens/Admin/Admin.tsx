import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/ui/sidebar-nav"

const sidebarNavItems = [
  {
    title: "Создать товар",
    href: "/admin",
  },
  {
    title: "Создать категорию",
    href: "/admin/category",
  },
  {
    title: "Создать пользователя",
    href: "/admin/create-user",
  },
]

interface SettingsLayoutProps {
  children?: React.ReactNode
}

export default function Admin({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-6">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Панель администратора</h2>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
