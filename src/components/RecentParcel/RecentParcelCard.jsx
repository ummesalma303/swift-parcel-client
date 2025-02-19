
import React from 'react'
import { Link } from 'react-router-dom'

export default function RecentParcelCard({parcel}) {
   
    const { parcelUrl, description, parcelType,_id } = parcel

   
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs h-full">
  <img
    alt=""
    src={parcelUrl}
    className="h-56 w-full object-cover"
  />

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        {parcelType}
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
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
