'use client';

import { useCallback, useEffect, useState } from 'react';
import { AudioLinesIcon } from 'lucide-react';
import { Button } from '@ui';
import { cn } from '@utils';

export const VoiceOverText = () => {
  const [isReadySpeaking, setIsReadySpeaking] = useState(false);

  const handleToggleReady = useCallback(() => {
    setIsReadySpeaking((prev) => !prev);
  }, []);

  const speak = useCallback((text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }, []);

  const stopSpeak = useCallback(() => {
    window.speechSynthesis.cancel();
  }, []);

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const target = e.target as Element;

      if (target.tagName === 'BUTTON') {
        return;
      }

      const selectedText = window.getSelection()?.toString() ?? '';

      if (!selectedText || !isReadySpeaking) {
        return;
      }

      speak(selectedText);
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isReadySpeaking, speak]);

  useEffect(() => {
    if (!isReadySpeaking) {
      stopSpeak();
    }
  }, [isReadySpeaking, stopSpeak]);

  return (
    <Button
      onClick={handleToggleReady}
      className={cn(
        'size-14 text-xl text-white bg-transparent theme:text-primary border',
        { 'bg-white text-[#1F2937]': isReadySpeaking },
      )}
      variant="outline"
      rounded="sm"
    >
      <AudioLinesIcon />
    </Button>
  );
};
