import React from 'react'
import faqs from '../../assets/faqs.webp'
export default function Faqs() {
  return (
    <div className='md:flex justify-between items-center w-11/12 mx-auto py-20'>
      <div className="space-y-4 md:w-1/2">
      <h2 className='text-4xl font-bold'>Faqs Asked Questions</h2>
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">How do I track the status of my parcel?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-white">
    You can easily track your parcel by entering your tracking number in the "Track Parcel" section on our website or mobile app. Once entered, you’ll see real-time updates on your parcel’s location and delivery status. If you face any issues, feel free to contact our customer support team for assistance.
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">What happens if my parcel is delayed?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-white">
    Delays can occur due to unforeseen circumstances like weather conditions or logistical issues. If your parcel is delayed, you can check the updated delivery timeline using your tracking number. For further assistance, contact our support team, and we’ll help resolve the issue as quickly as possible.
    </p>
  </details>
</div>
<div className="">
<img src={faqs} alt="" />

</div>
    </div>
  )
}
