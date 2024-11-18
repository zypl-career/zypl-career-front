'use client';

import { FC } from 'react';
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

type BlockNoteProps = {
  editable?: boolean;
  value?: string;
};

const BlockNote: FC<BlockNoteProps> = ({
  value,
  editable = false,
}) => {
  const editor = useCreateBlockNote({
    initialContent: value ? JSON.parse(value) : null,
  });

  return <BlockNoteView editor={editor} editable={editable} theme="light" />;
};

export default BlockNote;
