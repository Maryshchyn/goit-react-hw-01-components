import PropTypes from 'prop-types';
import { Items } from '../Items/items'

export const TransactionHistory = ({transactions}) =>{
    return (
        <table className="transaction-history">
             <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
           <th>Currency</th>
         </tr>
            </thead>

            <tbody>{transactions.map(transaction => (
                <tr key={transaction.id}>
                    <Items 
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                    </tr>
                ))}</tbody>
            </table>
    )
}
TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};