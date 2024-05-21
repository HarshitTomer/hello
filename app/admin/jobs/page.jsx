import { CirclePlus } from 'lucide-react';
import Link from 'next/link'
import PostListView from './components/PostListView';

export default function Page() {
    return <main className="p-6 w-full flex flex-col gap-6">
        <div className='flex justify-between items-center'>
            <h1 className="font-bold">jobs</h1>
            <Link href={'/admin/jobs/form'}>
                <button className="flex gap-2 items-center bg-blue-500 px-4 py-2 text-white rounded-full font-bold">
                    <CirclePlus />
                    Add
                </button>
            </Link>
        </div>
        <PostListView />
    </main>
}