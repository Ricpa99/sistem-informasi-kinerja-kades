import React, { useState } from 'react'
import Navbar from '@/Layouts/Navbar'
import { Head, Link, useForm, usePage, } from '@inertiajs/react'
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';
import Pagination from '@/Components/Pagination';
import Footer from '../Layouts/Footer';
// import {asset} from './Asset'
export default function ({title, data}) {
  // console.log(data.data.map(e => e.kecamatan.map(el => el.id_kecamatan)))
    const prev = usePage().props.data.prev_page_url;
    const next = usePage().props.data.next_page_url;
    const page = usePage().props.data.current_page;
    console.log(usePage().props);
    
  const asset = (patc) => {
    return `${window.location.origin}/${patc}`
  }
  const result = usePage().props
  return (
    <div>
     <Head title={title}/>
     <Navbar>
      <div className={`flex w-full gap-6 flex-wrap justify-center max-w-7xl mt-8`}>
               <div className={`${result && 'hidden'} text-6xl text-slate-300 text-center my-auto max-md:text-base mt-20 max-md:mt-10`}>404| NOT FOUND</div>
          {data.data.map((el,i) => {
            return (
              <>
                <div key={i} className="card mt-3 bg-base-100 w-96 shadow-xl hover:scale-105 ease-out 
                 transition- duration-150">
                    <figure>
                      <img src={`storage/image/${el.id}.png`} height={`100`}/>
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
     <div className='w-full flex justify-center mb-5'>
        <Pagination prev={prev} next={next} page={page}/>    
    </div>
    <Footer/>
    </div>
  )
}
