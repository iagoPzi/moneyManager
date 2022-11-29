import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { DotsThreeVertical, Pencil, Trash } from "phosphor-react";
import { api } from "../services/api";
import { useContext, useState } from "react";
import { ValueContext } from "../Context/ValueContext";
import { ModalUpdateTransaction } from "./ModalUpdateTransaction";

interface PopoverProps {
  id: string;
  type: string;
}

export function PopOver({ type, id }: PopoverProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  const { callRefresh } = useContext(ValueContext);

  async function DeleteTransaction() {
    await api.delete("transaction", {
      data: {
        id: id,
      },
    });
    callRefresh();
  }



  return (
    <Popover.Root>
      <Popover.Trigger className="flex">
        <DotsThreeVertical className="text-lg cursor-pointer" />
      </Popover.Trigger>

      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          side="top"
          sideOffset={30}
          align="end"
          className={`${
            type === "income" ? "bg-green-500" : "bg-red-500"
          } h-10 w-20 rounded flex justify-center items-center text-xl gap-2 text-blue-50`}
        >
          <button onClick={() => DeleteTransaction()} title="Apagar item">
            <Trash weight="fill" />
          </button>

          <Dialog.Root open={isModalOpen}>
            <ModalUpdateTransaction
              handleModal={handleModalOpen}
              idToUpdate={id}
            />
            <Dialog.Trigger asChild onClick={handleModalOpen}>
              <button title="Alterar item">
                <Pencil weight="fill" />
              </button>
            </Dialog.Trigger>
          </Dialog.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
