import PropTypes from 'prop-types';
import { Items } from '../Items/items'
import {
    TransactionListTable,
    TransactionThead,
    TransactionTr,
    TransactionTh,
    TransactionListTbody,
    TransactionListTr
} from './TransactionHistory.styled'

export const TransactionHistory = ({transactions}) =>{
    return (
        <TransactionListTable className="transaction-table">
             <TransactionThead>
        <TransactionTr>
            <TransactionTh>Type</TransactionTh>
            <TransactionTh>Amount</TransactionTh>
           <TransactionTh>Currency</TransactionTh>
         </TransactionTr>
            </TransactionThead>

            <TransactionListTbody>{transactions.map(transaction => (
                <TransactionListTr key={transaction.id}>
                    <Items 
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                    </TransactionListTr>
                ))}</TransactionListTbody>
            </TransactionListTable>
    )
}
TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};