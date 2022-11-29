import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { ModalCreateTransaction } from "./ModalCreateTransaction";

export function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Dialog.Root open={isModalOpen}>
      <ModalCreateTransaction handleModal={handleModalOpen}/>

      <div className="bg-violet-700 h-44 pt-5 px-4">
        <header className=" flex items-center justify-between text-zinc-200 max-w-3xl mx-auto">
          <h1>logo</h1>
          <Dialog.Trigger
          onClick={handleModalOpen}
          className="bg-violet-600 py-2 px-5 rounded hover:bg-violet-800 focus:bg-violet-800 transition-colors">
            Nova transação
          </Dialog.Trigger>
        </header>
      </div>
    </Dialog.Root>
  );
}
