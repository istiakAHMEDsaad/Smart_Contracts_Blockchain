import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  });
  const [currentAccount, setCurrentAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return toast.warn('Please install metamask');

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        // getAllTransactions();
      } else {
        toast.error('No account found');
      }
    } catch (error) {
      console.log(error);
      throw new Error('No etherum object.');
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return toast.warn('Please install metamask');

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No etherum object.');
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return toast.warn('Please install metamask');

      // get data from the form...
    } catch (error) {
      console.log(error);
      throw new Error('No etherum object.');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const value = {
    connectWallet,
    currentAccount,
    formData,
    setformData,
    handleChange,
    sendTransaction
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};
