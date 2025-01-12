export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-md border border-transparent ml-3 
                bg-blue-700 px-4 py-2 max-sm:py-1.5 text-xs font-semibold normal-case max-md:text-xs tracking-widest text-white 
                transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-gray-700 focus:outline-none focus:ring-2
                focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 max-sm:text-xs max-sm:ml-1 max-sm:mt-2
                ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
