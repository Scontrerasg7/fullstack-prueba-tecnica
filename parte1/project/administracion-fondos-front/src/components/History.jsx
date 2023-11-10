import { useId } from "react";
import { HistoryIcon } from "./Icons.jsx";

import "./History.css"

import { useTransactions } from "../hooks/useTransactions.js";


function HistoryItem (transaction) {

  return(
      <li>
          <div>
              <strong>
                {transaction.product.title} <br/>
              </strong>
          </div>

          <footer>
              <small>
                  COP - {transaction.product.opening} <br/>
                  Tipo: {transaction.type}
                  <p className="transaction-id">                    
                  {transaction.id}
                  </p>
              </small>
          </footer>
      </li>
  )
}

export function History() {
    const historyId = useId()
    const {transactions} = useTransactions()

    return (
        <>
          <label className="history-button" htmlFor={historyId}>
            <HistoryIcon />
          </label>
          <input id={historyId} type="checkbox" hidden />

          <aside className="history">
            <ul>
              {transactions.map(transaction => (
                  <HistoryItem key={transaction.id} {...transaction} />
              ))}
            </ul>
          </aside>
        </>
    )
}