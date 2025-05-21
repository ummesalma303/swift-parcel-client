// import React from 'react'
import faqs from '../../assets/faqs.webp'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 
export default function Faqs() {
  return (
    <div className='md:flex justify-between items-center w-11/12 mx-auto py-20 '>
      <div className="space-y-4 md:w-1/2">
      <h2 className='text-4xl font-bold'>Faqs Asked Questions</h2>
   <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I track the status of my parcel?</AccordionTrigger>
        <AccordionContent>
           You can easily track your parcel by entering your tracking number in the "Track Parcel" section on our website or mobile app. Once entered, you’ll see real-time updates on your parcel’s location and delivery status. If you face any issues, feel free to contact our customer support team for assistance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What happens if my parcel is delayed?</AccordionTrigger>
        <AccordionContent>
          Delays can occur due to unforeseen circumstances like weather conditions or logistical issues. If your parcel is delayed, you can check the updated delivery timeline using your tracking number. For further assistance, contact our support team, and we’ll help resolve the issue as quickly as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I track the status of my parcel?</AccordionTrigger>
        <AccordionContent>
          You can easily track your parcel by entering your tracking number in the "Track Parcel" section on our website or mobile app. Once entered, you’ll see real-time updates on your parcel’s location and delivery status. If you face any issues, feel free to contact our customer support team for assistance.
        </AccordionContent>
      </AccordionItem>
       {/* <AccordionItem value="item-4">
        <AccordionTrigger>What happens if my parcel is delayed?</AccordionTrigger>
        <AccordionContent>
          Delays can occur due to unforeseen circumstances like weather conditions or logistical issues. If your parcel is delayed, you can check the updated delivery timeline using your tracking number. For further assistance, contact our support team, and we’ll help resolve the issue as quickly as possible.
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
</div>
<div className="">
<img src={faqs} alt="" />

</div>
    </div>
  )
}
