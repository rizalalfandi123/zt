import React from "react"

import { FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { IconBold, IconItalic, IconUnderline, IconStrikethrough } from "@/components/icons";
import Button from "@/components/ui/button";
import { cn } from "@/lib";

interface ToolbarPluginProps extends React.ComponentProps<"div"> {
  isOpen: boolean;
}

const Component: React.ForwardRefRenderFunction<HTMLDivElement, ToolbarPluginProps> = (props, ref) => {
  const { isOpen, ...moreProps } = props;

  const { className, ...divProps } = moreProps;

  const [editor] = useLexicalComposerContext();

  const formatText = (format: TextFormatType) => () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  if (!isOpen) return null;

  return (
    <div
      {...divProps}
      className={cn(["p-1 bg-background rounded-lg flex gap-1 border border-border", className])}
      ref={ref}
    >
      <Button size="icon" variant="ghost" onClick={formatText("bold")}>
        <IconBold />
      </Button>

      <Button size="icon" variant="ghost" onClick={formatText("italic")}>
        <IconItalic />
      </Button>

      <Button size="icon" variant="ghost" onClick={formatText("underline")}>
        <IconUnderline />
      </Button>

      <Button size="icon" variant="ghost" onClick={formatText("strikethrough")}>
        <IconStrikethrough />
      </Button>
    </div>
  );
};

export const InlineToolbarPlugin = React.forwardRef<HTMLDivElement, ToolbarPluginProps>(Component);
