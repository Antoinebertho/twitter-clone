interface InputProps {
    placeholder?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    disabled?: boolean;
}
const Input: React.FC<InputProps> = ({ placeholder, value, onChange, type, disabled }) => {
  return (
    <input value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} className="w-full p-4 text-lg border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed" />
  )
}

export default Input