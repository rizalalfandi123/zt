import { useEffect, useState } from "react";
import {
  useFloating,
  useDismiss,
  useInteractions,
  flip,
  shift,
  inline,
  autoUpdate,
  UseFloatingReturn,
  offset,
} from "@floating-ui/react";

export interface UseInlineToolbarArgs<T extends HTMLElement> {
  element: React.MutableRefObject<T | null>;
}

export interface UseInlineToolbarReturnValue {
  floating: UseFloatingReturn;
  interactions: ReturnType<typeof useInteractions>;
  isOpen: boolean;
}

type UseInlineToolbar = <T extends HTMLElement>(args: UseInlineToolbarArgs<T>) => UseInlineToolbarReturnValue;

export const useInlineToolbar: UseInlineToolbar = (args) => {
  const { element } = args;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const floating = useFloating({
    placement: "top",
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [inline(), flip(), shift(), offset(4)],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(floating.context);

  const interactions = useInteractions([dismiss]);

  useEffect(() => {
    function handleMouseUp(event: Event) {
      if (floating.refs.floating.current?.contains(event.target as Element | null)) {
        return;
      }

      setTimeout(() => {
        const selection = window.getSelection();
        const range =
          typeof selection?.rangeCount === "number" && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

        if (selection?.isCollapsed) {
          setIsOpen(false);
          return;
        }

        if (range) {
          floating.refs.setReference({
            getBoundingClientRect: () => range.getBoundingClientRect(),
            getClientRects: () => range.getClientRects(),
          });

          setIsOpen(true);
        }
      }, 50);
    }

    function handleMouseDown(event: Event) {
      if (floating.refs.floating.current?.contains(event.target as Element | null)) {
        return;
      }

      if (window.getSelection()?.isCollapsed) {
        setIsOpen(false);
      }
    }

    element.current?.addEventListener("mouseup", handleMouseUp);
    element.current?.addEventListener("mousedown", handleMouseDown);

    return () => {
      element.current?.removeEventListener("mouseup", handleMouseUp);
      element.current?.removeEventListener("mousedown", handleMouseDown);
    };
  }, [floating.refs]);

  return {
    floating,
    interactions,
    isOpen,
  };
};
