import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <div className='flex justify-center items-center w-full 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        {currentAccount ? (
          <h3 className='text-white text-3xl text-center my-2'>
            Latest Transaction
          </h3>
        ) : (
          <h3 className='text-white text-3xl text-center my-2'>
            Connect Your Account to see the latest transaction
          </h3>
        )}
      </div>
    </div>
  );
};

export default Transactions;
