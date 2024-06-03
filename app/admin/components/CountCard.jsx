"use client"

import useCollectionCount from "@/lib/firebase/count"
import Link from "next/link"

export default function CountCard({ path, name, icon }) {
    const { data, isLoading, error } = useCollectionCount({ path: path })
   
    if (isLoading) {
        return <h2>Loading ...</h2>
    }
    if (error) {
        return <p>{error}</p>
    }
    return <Link href={`/admin/${path}`}>
      <div className="flex gap-2 bg-gray-50 items-center rounded px-8 py-2">
        {icon}
        <div>
          <h1 className="font-bold">{name}</h1>
          <h2 className="text-xl font-bold">{data}</h2>
        </div>
      </div>
    </Link>;
}