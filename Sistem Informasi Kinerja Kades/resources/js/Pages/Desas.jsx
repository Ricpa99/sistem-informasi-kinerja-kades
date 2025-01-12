import React, { useState } from 'react'
import Navbar from '@/Layouts/Navbar'
import { Head, Link, router, useForm, usePage, } from '@inertiajs/react'

import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';
import { Button, ButtonBase, useForkRef } from '@mui/material';
import { ButtonIcon } from '@radix-ui/react-icons';
export default function ({title, data, kabupaten, kecamatan}) {
 console.log(data);
const result = usePage()
return (
   <div>
    <Head title={title}/>
    <Navbar>
    <div className={`flex w-full gap-4 justify-center flex-wrap max-w-7xl mt-8`}>
              <div className={`${result && 'hidden'} text-6xl text-slate-300 text-center my-auto max-md:text-base mt-20 max-md:mt-10`}>404| NOT FOUND</div>
         {data.map((el,i) => {
           return (
             <>
               <Link  className="card bg-base-100 w-96 shadow-xl hover:scale-105 ease-out 
                 transition- duration-150">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        <p>
                        Desa {`${el.nama_desa}`}
                        </p>
                      </h2>
                      
                      <p>If a dog chews shoes whose shoes does he choose?
                        <Link className='text-blue-400 font-bold' data={{kecamatan:kecamatan, kabupaten:kabupaten}} href={route(`detail.desa`, {slug:el.slug})}>Lihat desa </Link>
                      {/* <Button onClick={() => kirim()} className='font-bold'>Lihat</Button> */}
                      {/* <ButtonBase  onClick={()=>kirim(el.slug)}>Lihat</ButtonBase> */}
                      </p>
                      <div className="card-actions justify-end">
                        {/* <Link href={`/kecamatan/${el.nama_kecamatan}`} className=" "><p><FmdGoodRoundedIcon/> Kec. {`${el.nama_kecamatan.length >= 4 ? `${el.nama_kecamatan.slice(0,14)}...` : ''}`}</p></Link> */}
                        {/* <div className=""> <CabinRoundedIcon/> {``} Lihat desa </div> */}
                      </div>
                    </div>
                  </Link>
             </>
           )
         })}
       </div>
    </Navbar>
   </div>
 )
}
