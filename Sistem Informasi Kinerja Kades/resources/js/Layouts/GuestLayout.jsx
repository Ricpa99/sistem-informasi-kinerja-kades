import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';

export default function GuestLayout({ children, judul }) {
    const page = usePage().url
    console.log(page);
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md max-w-7xl max-xl:max-w-4xl
           max-lg:max-w-2xl max-md:max-w-2xl max-sm:max-w-72 sm:rounded-lg md:flex md:flex-row">
                <div className="w-1/2 p-3 max-md:p-0 max-md:w-full ">
                    {children}
                </div>
                <div className="bg-blue-500 backdrop-blur w-1/2 md:flex md:justify-center md:items-center text-slate-50 rounded-lg font-bold">
                    {page == '/register' ? "Register" : "login"}
                </div>
            </div>
        </div>
    );
}
