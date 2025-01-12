import React, { useState } from 'react'
import Navbar from '@/Layouts/Navbar'
import { Head, Link, usePage, } from '@inertiajs/react'
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';

export default function ({title, data}) {
  // console.log(data.data.map(e => e.kecamatan.map(el => el.id_kecamatan)))
  console.log(data.data);
  const result = usePage().props
  return (
    <div>
     <Head title={title}/>
     <Navbar>
      <div className={`flex w-full gap-5 flex-wrap justify-center max-w-7xl mt-8`}>
               <div className={`${result && 'hidden'} text-6xl text-slate-300 text-center my-auto max-md:text-base mt-20 max-md:mt-10`}>404| NOT FOUND</div>
          {data.data.map((el,i) => {
            return (
              <>
                <div key={i} className="card bg-base-100 w-96 shadow-xl hover:scale-105 ease-out 
                 transition- duration-150">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className="card-title font-bold">
                        {el.kabupaten}
                        </p>
                      <p>
                        {el.deskripsi}
                      </p>
                      <div className="card-actions justify-end">
                        <div className="font-bold">
                          <p><FmdGoodRoundedIcon/>   
                            {`${el.nama_kecamatan.length >= 4 ? `${ el.nama_kecamatan.slice(0,10)}...` : ''}`} 
                         </p>
                        </div>
                        <div className="font-bold"><Link href={`/desa/${el.slug}`}> <CabinRoundedIcon/> {el.desa.length} desa </Link></div>
                      </div>
                    </div>
                  </div>
              </>
            )
          })}
      </div>
     </Navbar>
    </div>
  )
}
