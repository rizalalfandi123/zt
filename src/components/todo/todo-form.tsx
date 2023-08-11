import React from "react";
import Button from "@/components/ui/button";
import Editor from "@/components/editor";

import type { EditorState, LexicalEditor } from "lexical";
import { XIcon, SendIcon } from "@/components/icons";
import { cn } from "@/lib";
import { Todo } from "@/schema-and-types";
import { useAppSelector } from "@/hooks";

interface EditorRef {
  editorState: EditorState;
  editor: LexicalEditor;
}

type TodoFormResult = Pick<Todo, "title" | "description">;

export interface TodoFormProps {
  onSave?: (todo: TodoFormResult, titleEditorRef: EditorRef | null, descriptionEditorRef: EditorRef | null) => void;
  onClose?: () => void;
  containerClassname?: string;
  initialValue?: {
    description?: string;
    title: string;
  };
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  const { initialValue, onSave, onClose, containerClassname } = props;

  const titleEditorRef = React.useRef<EditorRef | null>(null);

  const descriptionEditorRef = React.useRef<EditorRef | null>(null);

  const isUserDraggingTodo = useAppSelector((store) => store.ui.value.isUserDraggingTodo);

  const handleSave = () => {
    if (titleEditorRef.current) {
      const isEmptyTitle = titleEditorRef.current.editor._rootElement?.textContent === "";

      const isEmptysDesription = descriptionEditorRef.current?.editor._rootElement?.textContent === "";
      if (isEmptyTitle) {
        titleEditorRef.current.editor.focus();
        return;
      }

      if (!onSave) return;

      const title = JSON.stringify(titleEditorRef.current.editorState.toJSON());

      const description = descriptionEditorRef.current
        ? JSON.stringify(descriptionEditorRef.current.editorState.toJSON())
        : initialValue?.description
        ? initialValue.description
        : undefined;

      const formResult: TodoFormResult = {
        title,
        description: isEmptysDesription ? undefined : description,
      };

      onSave(formResult, titleEditorRef.current, descriptionEditorRef.current);
    }
  };

  return (
    <div
      className={cn([
        "p-2 border flex flex-col border-slate-700 bg-background transition-all duration-300 rounded-lg w-full",
        { "opacity-0": isUserDraggingTodo },
        containerClassname,
      ])}
    >
      <Editor
        autoFocus
        initialConfig={{ namespace: "todo-title", editorState: initialValue?.title }}
        editableProps={{ className: "border-none focus:outline-none" }}
        placeholder={<div className="p-0 font-medium text-gray-500 mt-[-24px]">Task Name</div>}
        onChange={(editorState, editor) => {
          titleEditorRef.current = { editorState, editor };
        }}
      />

      <Editor
        initialConfig={{
          namespace: "todo-description",
          editorState: initialValue?.description,
        }}
        editableProps={{ className: "border-none focus:outline-none" }}
        placeholder={<div className="p-0 text-gray-500 mt-[-24px]">Decription</div>}
        onChange={(editorState, editor) => {
          descriptionEditorRef.current = { editorState, editor };
        }}
      />

      <hr className="my-1" />

      <div className="flex justify-between items-center">
        <div>p</div>
        <div className="flex gap-1">
          <Button size="icon" variant="ghost" onClick={onClose}>
            <XIcon />
          </Button>

          <Button size="icon" variant="ghost" onClick={handleSave}>
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
