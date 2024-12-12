import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  WarnIcon,
} from '@/shared';
import Link from 'next/link';

export const ModalUI = () => {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription className="flex justify-center">
            <WarnIcon />
          </DialogDescription>
          <DialogDescription className="flex justify-center">
            Для последующего сохранение результатов тестирования,
            зарегистрируйтесь в системе
          </DialogDescription>
          <Button variant="subscribe" size="md" showRightArrowIcon>
            Регистрация
          </Button>
          <Button variant="outlineSecondary" size="md" showRightArrowIcon>
            <Link href="/form">Продолжить без регистрации</Link>
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
