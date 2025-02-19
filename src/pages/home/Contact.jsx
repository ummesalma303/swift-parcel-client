import React from 'react'

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { icon } from 'leaflet';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/components/ui/input';
import Swal from 'sweetalert2';

export default function Contact() {
  const position = [51.505, -0.09]
   const customIcon = new icon({
            iconUrl:'https://cdn-icons-png.freepik.com/512/535/535137.png',
            iconSize: [44,44]
          })

          const handleSubmit=e=>{
            e.preventDefault()
 Swal.fire({
                          title: "Success",
                          text: "Thanks for your valuable feedback",
                          icon: "success",
                        //   timer: 1000
                        });
                        e.target.reset()
          }
  return (
    <div className=" md:flex mb-9 md:space-x-6 space-y-4 md:space-y-0">

    <div className="grid h-96 md:w-1/2 z-0">
       <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
    {/* input */}
    <div className="flex-1">
      <h2 className='text-2xl font-semibold'>Feedbacks</h2>
      <p className='mb-4'>We gives important to every feedback</p>
      <form onSubmit={handleSubmit} className="space-y-4 border-[1px] p-4">
        <div className="">
        <Label>Name</Label>
      <Input type="text" placeholder="Name" required/>
        </div>
        <div className="">
        <Label>Email</Label>
      <Input type="email" placeholder="Email" name="email" className="w-full" required/>
        </div>
        <div className="">
        <Label>Message</Label>
        <textarea name="" id="" placeholder='Message' className='w-full border-[1px]' required></textarea>
        </div>
        <input type="submit" className='px-4 py-2 bg-black text-white rounded-sm' />
      </form>
    </div>
    </div>
  )
}
