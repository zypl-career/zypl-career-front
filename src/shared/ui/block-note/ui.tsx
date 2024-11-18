'use client';

import { FC, useMemo } from 'react';
import { BlockNoteView } from '@blocknote/mantine';
import { schema } from './utils';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { BlockNoteEditor } from '@blocknote/core';

type BlockNoteProps = {
  editable?: boolean;
  value?: string;
};

const BlockNote: FC<BlockNoteProps> = ({
  value,
  editable = false,
}) => {
  const initialContent = value ? JSON.parse(value) : null;
  const editor = useMemo(() => BlockNoteEditor.create({
    initialContent,
    schema,
  }), [initialContent]);

  return <BlockNoteView editor={editor} editable={editable} theme="light" />;
};

export default BlockNote;
