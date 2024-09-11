interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

const Button = ({
    label,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
}: ButtonProps) => {
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={`mt-4 bg-[#ff3e6c] border-[#ff3e6c] text-white p-4 rounded-md font-bold text-[16px] min-h-5 min-w-[108px] w-[280px] ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                {label}
            </button>
        </div>
    )
}

export default Button