'use client';

import { FC } from 'react';
import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { schema } from './utils';
import '@blocknote/mantine/style.css';

type BlockNoteProps = {
  editable?: boolean;
  value?: string;
};

export const BlockNote: FC<BlockNoteProps> = ({ value, editable = false }) => {
  const initialContent = value ? JSON.parse(value) : null;
  const editor = useCreateBlockNote({
    initialContent,
    schema,
  });

  return <BlockNoteView editor={editor} editable={editable} theme="light" />;
};

export default BlockNote;
