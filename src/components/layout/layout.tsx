import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useResizableNavbar } from "@/hooks";

interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { header, sidebar } = props;

  const { onMouseDown, onTouchStart, sidebarWidth } = useResizableNavbar<HTMLDivElement>({});

  return (
    <>
      <div className="h-dynamic-screen flex flex-col">
        <header className="w-full basis-11">{header}</header>

        <div className="grow flex">
          <aside className="shrink-0" style={{ width: `${sidebarWidth}px` }}>
            {sidebar}
          </aside>

          <div
            className="h-full shrink-0 basis-2 hover:cursor-ew-resize active:cursor-ew-resize hover:bg-accent active:bg-accent"
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          />

          <main className="grow overflow-x-auto px-2">
            <Outlet />
          </main>
        </div>
      </div>

      <Toaster />
    </>
  );
};
