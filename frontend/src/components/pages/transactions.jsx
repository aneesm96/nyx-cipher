import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../views/footer';
import { useTimer } from '../../utils/utils';
import { BACKEND_API_URL } from '../../constants/constants';
import TransactionsTable from '../views/transactionsTable';
import { IntervelFrom } from '../views/intervelFrom';

const endPoint = `${BACKEND_API_URL}/api/transactions/list`;

export const Transactions = () => {
  const [interval, setInterval] = useState(0);
  const [timer, setTimer] = useTimer(null);
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const handleSetInterval = () => {
    const num = Number(interval);
    if (!isNaN(num) && num >= 0) {
      setTimer(num * 60);
      // setTimer(num);
    }
  };

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const transactions = await fetch(endPoint);
      let data = await transactions.json();
      data = (await data?.data?.ethereum?.transactions) || [];
      console.log('data', data);
      setTransactions(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setTransactions([]);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      fetchTransactions();
    }
  }, [timer]);

  // Initial data fetch on component mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      if (interval > 0) {
        console.log('set repeatedly');
        setTimer(interval * 60);
      }
    }
  }, [timer]);

  return (
    <React.Fragment>
      <div>
        <Navbar />
        <IntervelFrom
          handleSetInterval={handleSetInterval}
          interval={interval}
          setInterval={setInterval}
          timer={timer}
        />
        <TransactionsTable
          transactions={transactions}
          loading={loading}
          timer={timer}
        />
        <Footer />
      </div>
    </React.Fragment>
  );
};
