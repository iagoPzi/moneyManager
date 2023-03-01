import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import MoneyLogo from "../img/moneyLogo";
import { ModalCreateTransaction } from "./ModalCreateTransaction";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Dialog.Root open={isModalOpen}>
      <ModalCreateTransaction handleModal={handleModalOpen} />

      <header className="bg-slate-400 h-44 pt-5 px-4">
        <header className=" flex items-center justify-between text-zinc-200 max-w-3xl mx-auto">
          <MoneyLogo width="120px" />
          <Dialog.Trigger
            onClick={handleModalOpen}
            className="bg-[#666666] py-2 px-5 rounded hover:bg-slate-600 focus:bg-slate-600 transition-colors"
          >
            Nova transação
          </Dialog.Trigger>
        </header>
      </header>
    </Dialog.Root>
  );
}
