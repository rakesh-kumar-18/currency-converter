import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
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
      <div className='w-full h-screen bg-main-bg flex justify-center items-center bg-cover bg-no-repeat'>

        <div className='w-full max-w-md border bg-gray-60 p-5 rounded-lg bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault();
            onConvert();
          }}>

            <div className='mb-1'>
              <InputBox
                label='From'
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={currencyOptions}
                selectCurrency={from}
              ></InputBox>
            </div>

            <div className='relative h-0.5'>
              <button
                className='bg-blue-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white border-2 border-white rounded-md px-2 pb-1'
                type='button' onClick={swap}>swap</button>
            </div>

            <div className='mt-1 mb-4'>
              <InputBox
                label='To'
                amount={convertedAmount}
                onAmountChange={() => setConvertedAmount(convertedAmount)}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={currencyOptions}
                selectCurrency={to}
                isDisabled
              ></InputBox>
            </div>

            <button
              className='bg-blue-600 w-full text-white py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div >
    </>
  );
}

export default App;
