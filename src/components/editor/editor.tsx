import React from "react";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import AutoFucusPlugin from "@/components/editor/auto-focus-plugin";
import InlineToolbarPlugin from "@/components/editor/inline-toolbar-plugin";

import { EditorThemeClasses } from "lexical";
import { type InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable, type Props as ContentEditableProps } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { cn } from "@/lib";
import { useInlineToolbar } from "@/hooks";

type OnEditorChange = Parameters<typeof OnChangePlugin>[0]["onChange"];

type LexicalComposerProps = {
  children?: JSX.Element | string | (JSX.Element | string)[];
  initialConfig: Omit<InitialConfigType, "onError" | "theme">;
  onChange?: OnEditorChange;
};

interface EditorProps extends LexicalComposerProps {
  placeholder: Parameters<typeof RichTextPlugin>[0]["placeholder"];
  editableProps?: ContentEditableProps;
  autoFocus?: boolean;
}

const theme: EditorThemeClasses = {
  text: {
    underline: "underline",
    bold: "font-semibold",
    italic: "italic",
    strikethrough: "line-through",
    underlineStrikethrough: "underline-and-line-through",
  },
};

const onError: InitialConfigType["onError"] = (error) => {
  console.error(error);
};

export const Editor: React.FunctionComponent<EditorProps> = (props) => {
  const {
    editableProps = { className: "" },
    placeholder,
    onChange = () => {},
    autoFocus = false,
    ...composerProps
  } = props;

  const { className: editableClassName = "", ...moreEditableProps } = editableProps;

  const editorWrapperRef = React.useRef<HTMLDivElement | null>(null);

  const { floating, interactions, isOpen } = useInlineToolbar<HTMLDivElement>({ element: editorWrapperRef });

  const initialConfig: InitialConfigType = {
    theme,
    onError,
    ...composerProps.initialConfig,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div ref={editorWrapperRef}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className={cn(["w-full border border-border rounded-lg relative", editableClassName])}
              {...moreEditableProps}
            />
          }
          placeholder={placeholder}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      <OnChangePlugin onChange={onChange} />
      <AutoFucusPlugin enable={autoFocus} />
      <InlineToolbarPlugin
        isOpen={isOpen && initialConfig.editable !== false}
        ref={floating.refs.setFloating}
        style={floating.floatingStyles}
        {...interactions.getFloatingProps()}
      />
    </LexicalComposer>
  );
};
