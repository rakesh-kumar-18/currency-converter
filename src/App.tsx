import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions: Array<string> = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const onConvert = () => setConvertedAmount(amount * currencyInfo[to]);

  return (
    <>
      <div className='w-full h-screen bg-main-bg bg-cover'>
        <div>

        </div>
      </div >
    </>
  );
}

export default App;
