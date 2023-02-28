import * as Dialog from "@radix-ui/react-dialog";
import { ArrowFatDown, ArrowFatUp, X } from "phosphor-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { ValueContext } from "../Context/TransactionsContext";

interface ModalCreateTransactionProps {
  handleModal: () => void;
  idToUpdate: string;
}

export function ModalUpdateTransaction({
  handleModal,
  idToUpdate,
}: ModalCreateTransactionProps) {
  interface TransactionsProps {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }

  const [uniqueTransaction, setUniqueTransaction] = useState<TransactionsProps>(
    {} as TransactionsProps
  );

  // useEffect(() => {
  //   api
  //     .get(`transaction/${idToUpdate}`)
  //     .then((res) => setUniqueTransaction(res.data));
  // }, []);

  const [title, setTitle] = useState(uniqueTransaction.title);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(uniqueTransaction.amount);
  const [transactionType, setTransactionType] = useState(
    uniqueTransaction.type
  );
  console.log(title, category, amount, transactionType);

  // async function handleUpdateTransaction(e: FormEvent) {
  //   e.preventDefault();

  //   await api
  //     .put(`transactionupdate/${idToUpdate}`, {
  //       titleUpdate: title,
  //       amountUpdate: amount,
  //       categoryUpdate: category,
  //       typeUpdate: transactionType,
  //     })
  //     .then((response) => console.log(response.data));
  //   handleModal();
  // }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed bg-black/50 inset-0" />

      <Dialog.Content
        onEscapeKeyDown={handleModal}
        onInteractOutside={handleModal}
        className="fixed bg-zinc-200 p-5 rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Dialog.Title className="text-xl mb-5 font-bold text-zinc-500">
          Alterar transação
        </Dialog.Title>

        <form className="flex flex-col gap-3 w-80">
          <input
            placeholder={uniqueTransaction.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-zinc-300 p-2 rounded"
          />

          <input
            type="number"
            placeholder={String(uniqueTransaction.amount)}
            value={uniqueTransaction.amount || 0}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="bg-zinc-300 p-2 rounded"
          />

          <div className="flex justify-between gap-2">
            <button
              type="button"
              onClick={() => {
                setTransactionType("income");
              }}
              className={`${
                transactionType === "income" &&
                "bg-green-600/50 text-green-700 font-bold"
              } bg-zinc-300 p-2 w-full transition-all rounded flex justify-center items-center gap-2`}
            >
              <ArrowFatUp
                weight="fill"
                className={`${
                  transactionType === "income" && "text-green-700"
                }`}
              />
              Entrada
            </button>

            <button
              type="button"
              onClick={() => {
                setTransactionType("outcome");
              }}
              className={`${
                transactionType === "outcome" &&
                "bg-red-600/50 text-red-700 font-bold"
              } bg-zinc-300 transition-all p-2 w-full rounded flex justify-center items-center gap-2`}
            >
              <ArrowFatDown
                weight="fill"
                className={`${transactionType === "outcome" && "text-red-700"}`}
              />
              Saída
            </button>
          </div>

          <input
            placeholder={uniqueTransaction.category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-zinc-300 p-2 rounded"
          />

          <Dialog.Close /* onClick={handleUpdateTransaction} */>
            Cadastrar
          </Dialog.Close>
        </form>

        <Dialog.Close onClick={handleModal} className="absolute top-2 right-2">
          <X className="text-zinc-500 hover:text-zinc-700" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
