import React from "react";

import { FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { IconBold, IconItalic, IconUnderline, IconStrikethrough, type Icon } from "@/components/icons";
import Button, { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib";

interface ToolbarPluginProps extends React.ComponentProps<"div"> {
  isOpen: boolean;
}

interface ToolItem extends Pick<ButtonProps, "onClick"> {
  icon: Icon;
}

const Component: React.ForwardRefRenderFunction<HTMLDivElement, ToolbarPluginProps> = (props, ref) => {
  const { isOpen, ...moreProps } = props;

  const { className, ...divProps } = moreProps;

  const [editor] = useLexicalComposerContext();

  const formatText = (format: TextFormatType) => () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  if (!isOpen) return null;

  const toolItems: ToolItem[] = [
    {
      icon: IconBold,
      onClick: formatText("bold"),
    },
    {
      icon: IconItalic,
      onClick: formatText("italic"),
    },
    {
      icon: IconUnderline,
      onClick: formatText("underline"),
    },
    {
      icon: IconStrikethrough,
      onClick: formatText("strikethrough"),
    },
  ];

  return (
    <div
      {...divProps}
      className={cn(["p-1 bg-background rounded-lg flex gap-1 border border-border", className])}
      ref={ref}
    >
      {toolItems.map(({ icon: Icon, onClick }, key) => {
        return (
          <Button key={key} size="icon" variant="ghost" onClick={onClick} className="w-8 h-8">
            <Icon className="w-5 h-5" />
          </Button>
        );
      })}
    </div>
  );
};

const InlineToolbarPlugin = React.forwardRef<HTMLDivElement, ToolbarPluginProps>(Component);

export default InlineToolbarPlugin;
