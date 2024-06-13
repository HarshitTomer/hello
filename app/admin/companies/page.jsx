import { CirclePlus } from 'lucide-react';
import Link from 'next/link'
import AuthorsListView from './components/AuthorsListView';

export default function Page() {
    return <main className="p-6 w-full flex flex-col gap-6">
        <div className='flex justify-between items-center'>
            <h1 className="font-bold">Companies</h1>
            <Link href={'/admin/companies/form'}>
                <button className="flex gap-2 items-center bg-blue-500 px-4 py-2 text-white rounded-full font-bold">
                    <CirclePlus />
                    Add
                </button>
            </Link>
        </div>
        <AuthorsListView />
    </main>
}