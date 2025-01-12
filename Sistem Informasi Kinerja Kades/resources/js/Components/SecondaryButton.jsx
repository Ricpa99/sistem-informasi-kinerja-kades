export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center justify-center rounded-md border border-slate-100  px-4 py-3 text-xs font-semibold 
                capitalize tracking-widest bg-slate-200 max-md:text-xs text-slate-500 shadow-sm transition duration-150 ease-in-out text-center
                 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2 
                 disabled:opacity-25 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
