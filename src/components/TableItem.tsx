import { PopOver } from "./PopOver";

interface TableItemProps {
  id: string;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

export function TableItem({
  id,
  type,
  title,
  amount,
  category,
  createdAt,
}: TableItemProps) {
  var date = new Date(createdAt);





  return (
    <tr
      className={`border-b-2 ${
        type === "income" ? "text-green-500" : "text-red-500"
      }`}
    >
      <th>{title}</th>
      <th>{amount}</th>
      <th>{category}</th>
      <th>{date.toLocaleDateString()}</th>

      <th>
        <PopOver type={type} id={id}/>
      </th>
      {/* <th>{new Intl.DateTimeFormat("pt-BR").format(date)}</th> */}
    </tr>
  );
}
