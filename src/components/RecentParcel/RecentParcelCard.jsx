
import React from 'react'
import { Link } from 'react-router-dom'

export default function RecentParcelCard({parcel}) {
   
    const { parcelUrl, description, parcelType,_id } = parcel || {}

   
  return (
    <div>
   

<article className="overflow-hidden rounded-lg p-8 text-center dark:bg-[#06151E]  dark:border-gray-700 light:bg-[#ecf0f3] shadow-[0_0_15px_rgba(0,0,0,0.1)] inset-shadow-sm inset-shadow-white border-[1px] border-indigo-100 hover:border-indigo-300 transition-all duration-[0.5] delay-200 hover:bg-gradient-to-b hover:from-[#ffffff1e] hover:from-[5%] dark:hover:from-[#1b13132c] dark:hover:via-[#271b1b1d] hover:via-[#ffffff93]  hover:to-indigo-200 dark:hover:to-indigo-800 h-full">
  <img
    alt=""
    src={parcelUrl}
    className="h-56 w-full object-cover"
  />

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {parcelType}
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-300">
     {description.slice(0,68)}...
    </p>

    <Link to={`/recentParcel/${_id}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      See more...

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
  </div>
</article>
    </div>
  )
}
