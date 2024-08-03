import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  WarnIcon,
} from '@/shared';

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
          <Button variant="subscribe" size="md" showRightArrowIcon={true}>
            Регистрация
          </Button>
          <Button
            variant="outlineSecondary"
            size="md"
            showRightArrowIcon={true}
          >
            Продолжить без регистрации
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
