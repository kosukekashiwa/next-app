import * as RadixDialog from '@radix-ui/react-dialog';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Stack from '@/src/ui/layouts/Stack';

type DialogProps = {
  openButton: React.ReactNode;
  title?: string;
  description?: string;
  actions: React.ReactNode[];
};

const Dialog: React.FC<DialogProps> = ({ openButton, title, description, actions }) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{openButton}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-30/50" />
        <RadixDialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <RadixDialog.Title>{title}</RadixDialog.Title>
          <RadixDialog.Description>{description}</RadixDialog.Description>
          <div className="mt-[25px] flex justify-end">
            <Stack space="1">
              {actions.map((action, idx) => (
                <RadixDialog.Close key={`dialog-action-${idx}`} asChild>
                  {action}
                </RadixDialog.Close>
              ))}
            </Stack>
          </div>
          <RadixDialog.Close asChild>
            <button
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-gray-90 hover:bg-gray-30 focus:shadow-[0_0_0_2px] focus:shadow-gray-50 focus:outline-none"
              aria-label="Close"
            >
              <XMarkIcon />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default Dialog;
