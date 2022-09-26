import PropTypes from 'prop-types';
import { Items } from '../Items/items'
import {
    FriendListTable,
    FriendThead,
    FriendTr,
    FriendListTh,
    FriendListTbody,
    FriendListTr
} from './TransactionHistory.styled'

export const TransactionHistory = ({transactions}) =>{
    return (
        <FriendListTable className="transaction-table">
             <FriendThead>
        <FriendTr>
            <FriendListTh>Type</FriendListTh>
            <FriendListTh>Amount</FriendListTh>
           <FriendListTh>Currency</FriendListTh>
         </FriendTr>
            </FriendThead>

            <FriendListTbody>{transactions.map(transaction => (
                <FriendListTr key={transaction.id}>
                    <Items 
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                    </FriendListTr>
                ))}</FriendListTbody>
            </FriendListTable>
    )
}
TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};