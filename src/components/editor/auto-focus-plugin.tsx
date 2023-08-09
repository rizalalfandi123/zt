import React from "react"

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export interface AutoFucusPluginProps {
  enable?: boolean;
}

const AutoFucusPlugin: React.FunctionComponent<AutoFucusPluginProps> = ({ enable = true }) => {
  const [editor] = useLexicalComposerContext();

  React.useEffect(() => {
    if (enable) {
      editor.focus();
    }
  }, [editor]);

  return null;
};

export default AutoFucusPlugin