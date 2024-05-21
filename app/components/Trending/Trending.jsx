import { TrendingUp } from "lucide-react";

import Link from "next/link";

export default function Trending() {
  return (
    <div className="text-gray-600 flex">
      Trending searches:
      <Link href="/jobs">
        <div className="text-blue-600 hover:underline mx-2 space-x-2  flex cursor-pointer">
          <TrendingUp className="h-6 w-6" />

          <span>Software Developer</span>
        </div>
      </Link>
      <Link href="/jobs">
        <div className="text-blue-600 hover:underline mx-2 space-x-2  flex cursor-pointer">
          <TrendingUp className="h-6 w-6" />

          <span>Python Developer</span>
        </div>
      </Link>
      <Link href="/jobs">
        <div className="text-blue-600 hover:underline mx-2 space-x-2  flex cursor-pointer">
          <TrendingUp className="h-6 w-6" />

          <span>Frontend</span>
        </div>
      </Link>
      <Link href="/jobs">
        <div className="text-blue-600 hover:underline mx-2 space-x-2  flex cursor-pointer">
          <TrendingUp className="h-6 w-6" />

          <span>Backend</span>
        </div>
      </Link>
    </div>
  );
}
