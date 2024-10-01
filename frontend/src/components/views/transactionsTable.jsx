import React from 'react';
import { truncateString } from '../../utils/utils';

const TransactionsTable = ({ transactions, loading, timer }) => {
  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-[#02ebb5]' />
      </div>
    );
  }

  return (
    <>
      {transactions.length > 0 && (
        <div className='overflow-x-auto  mx-auto mt-5 px-4 py-6'>
          <table className='min-w-full leading-normal'>
            <thead className='bg-gray-800 text-white'>
              <tr>
                <th className='px-5 py-3 border-b-2 border-gray-700  text-left text-xs font-semibold  uppercase tracking-wider'>
                  Hash
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-700  text-left text-xs font-semibold  uppercase tracking-wider'>
                  Amount
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-700  text-left text-xs font-semibold  uppercase tracking-wider'>
                  Sender
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-700  text-left text-xs font-semibold  uppercase tracking-wider'>
                  To
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-700  text-left text-xs font-semibold  uppercase tracking-wider'>
                  Block Height
                </th>
              </tr>
            </thead>
            <tbody className='bg-gray-900 text-white'>
              {transactions?.map((transaction, index) => (
                <tr key={index}>
                  <td className='px-5 py-5 border-b border-gray-700 text-sm'>
                    {truncateString(transaction.hash, 20)}
                  </td>
                  <td className='px-5 py-5 border-b border-gray-700 text-sm'>
                    {transaction.amount} {transaction.currency.symbol}
                  </td>
                  <td className='px-5 py-5 border-b border-gray-700 text-sm'>
                    {truncateString(transaction.sender.address, 20)}
                  </td>
                  <td className='px-5 py-5 border-b border-gray-700 text-sm'>
                    {truncateString(transaction.to.address, 20)} <br />
                    <span className='text-gray-500'>
                      Contract: {transaction.to.smartContract.contractType}
                    </span>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-700 text-sm'>
                    {transaction.block.height}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TransactionsTable;
