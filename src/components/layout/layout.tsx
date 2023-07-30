import { Outlet } from "react-router-dom";
import { useResizableNavbar } from "@/lib";

interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { header, sidebar } = props;

  const { onMouseDown, onTouchStart, sidebarWidth } = useResizableNavbar<HTMLDivElement>({});

  return (
    <div className="h-dynamic-screen flex flex-col">
      <header className="w-full basis-11">{header}</header>

      <div className="w-full grow flex">
        <aside style={{ flexBasis: `${sidebarWidth}px` }}>{sidebar}</aside>
        <div
          className="w-2 hover:cursor-ew-resize active:cursor-ew-resize hover:bg-accent active:bg-accent"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        />
        <main className="grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
