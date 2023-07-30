import React from "react";

const MIN_SIZE = 180;

const MAX_SIZE = 420;

type UseResizableNavbarArgs = {
  min?: number;
  max?: number;
};

type UseResizableNavbarReturnValue<T extends HTMLElement> = {
  onTouchStart: React.DOMAttributes<T>["onTouchStart"];
  onMouseDown: React.DOMAttributes<T>["onMouseDown"];
  sidebarWidth: number;
};

export function useResizableNavbar<T extends HTMLElement>(
  args: UseResizableNavbarArgs,
): UseResizableNavbarReturnValue<T> {
  const { max = MAX_SIZE, min = MIN_SIZE } = args;

  const [sidebarWidth, setSidebarWidth] = React.useState<number>(min);

  const [isResizeSidebar, setIsResizeSidebar] = React.useState<boolean>(false);

  const toggleReziseMouse = () => {
    document.documentElement.classList.toggle("cursor-ew-resize");
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isResizeSidebar && event.x < max && event.x > min) {
      setSidebarWidth(event.x);
    }
  };

  const handleTouchMove = (event: TouchEvent) => {
    event.stopPropagation();
    if (isResizeSidebar && event.touches[0].screenX < max && event.touches[0].screenX > min) {
      setSidebarWidth(event.touches[0].screenX);
    }
  };

  const handleMouseUp = () => {
    if (isResizeSidebar) {
      setIsResizeSidebar(false);
      toggleReziseMouse();
    }
  };

  const handleTouchEnd = () => {
    if (isResizeSidebar) {
      setIsResizeSidebar(false);
    }
  };

  const onMouseDown: React.DOMAttributes<T>["onMouseDown"] = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.button !== 0 && event.type === "mousedown") {
      return;
    }

    setIsResizeSidebar(true);
    toggleReziseMouse();
  };

  const onTouchStart: React.DOMAttributes<T>["onTouchStart"] = () => {
    setIsResizeSidebar(true);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mouseup", handleMouseUp);

    window.addEventListener("touchmove", handleTouchMove);

    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("touchmove", handleTouchMove);

      window.removeEventListener("mouseup", handleMouseUp);

      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isResizeSidebar]);

  return {
    onMouseDown,
    onTouchStart,
    sidebarWidth,
  };
}
