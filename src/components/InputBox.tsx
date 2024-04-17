import { useId } from "react";

type props = {
    label: string;
    amount: number;
    className: string;
    onAmountChange: (amount: number) => void;
    onCurrencyChange: (currency: string) => void;
    currencyOptions: Array<string>;
    selectCurrency: string;
};

function InputBox({
    label,
    amount,
    className = " ",
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "inr"
}: props) {
    const amountInputId = useId();

    return (
        <div className={`bg-white flex rounded-lg text-sm p-3 ${className}`}>
            <div className='w-1/2'>
                <label
                    htmlFor={amountInputId}
                    className="text-black/40 mb-2 inline-block"
                >{label}</label>

                <input
                    id={amountInputId}
                    className='outline-none w-full bg-transparent py-1.5'
                    type="number"
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className='w-1/2 text-end'>
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select
                    className="bg-gray-300 p-1 outline-none rounded-md cursor-pointer font-medium"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
                </select>
            </div>
        </div>
    );
}

export default InputBox;