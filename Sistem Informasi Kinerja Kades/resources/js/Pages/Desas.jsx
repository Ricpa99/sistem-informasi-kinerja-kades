import React, { useState, useEffect } from 'react'
import Navbar from '@/Layouts/Navbar'
import { Head, Link, router, useForm, usePage, } from '@inertiajs/react'
import axios from 'axios';
import Pagination from '@/Components/Pagination';
import Footer from '../Layouts/Footer'
// import Footer from '../Layouts/Footer';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';
import { Button, ButtonBase, useForkRef } from '@mui/material';
import { ButtonIcon } from '@radix-ui/react-icons';

export default function ({title, data, kabupaten, kecamatan}) {
    const [query,setQuery] = useState('desa')
    const [showImage,setImage] = useState([])
    const [imageCount, setImageCount] = useState(data.length);
    const access_key ='kCYlbq6b_8NaaEZn85SIZu1T-IaXKdVpL-PRw9cwMMs';
    const token = '8pdqBqr_03HxkPt4jeRFFbyyVO8d__eWRBylIhy4Gsk';
    const secret_key ='VGjNXYFqI1sgqvOX-4AeO9Omw1499bY8kY3MZSnH3qU';
    const prev = usePage().props.data.prev_page_url;
    const next = usePage().props.data.next_page_url;
    const page = usePage().props.data.current_page;
    const result = usePage()
    
    
    useEffect(() =>{
        const fetchImage = async () => {
          try {
            const response = await axios.get(`https://api.unsplash.com/search/photos`,{
              headers: {
                Authorization: `Client-ID ${access_key}`,
              },
              params: {
                query: query, // Kata kunci pencarian
                per_page: imageCount, // Ambil jumlah gambar sesuai input user
                order_by: "relevant", // Urutkan berdasarkan relevansi
              },
            });
            // console.log(response.data);
            setImage(response.data.results.map((img) => img.urls.small))
          } catch (error) {
            console.error("Error fetching image from Unsplash:", error);
          }
        };
    
        fetchImage();

    },[])
    
    return (
      <div>
        <Head title={title}/>
        <Navbar>
        <div className={`flex w-full gap-4 justify-center flex-wrap max-w-7xl mt-8`}>
            <div className={`${result && 'hidden'} text-6xl text-slate-300 text-center my-auto max-md:text-base mt-20 max-md:mt-10`}>404| NOT FOUND</div>
            {data.data.map((el,i) => {
              return (
                <>
                  <div  className="card bg-base-100 w-96 shadow-xl hover:scale-105 ease-out 
                    transition- duration-150">
                        <figure>
                          <img
                            key={i}
                            src={showImage[i]}
                            alt={`Unsplash ${query}`}
                            className='w-full max-h-56'
              
                            />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            <p>
                            Desa {`${el.nama_desa}`} 
                            </p>
                          </h2>
                          
                          <p>If a dog chews shoes whose shoes does he choose
                            <Link className='text-blue-400 font-bold' data={{kecamatan:kecamatan, kabupaten:kabupaten}} href={route(`detail.desa`, {slug:el.slug})}> Lihat desa </Link>
                          {/* <Button onClick={() => kirim()} className='font-bold'>Lihat</Button> */}
                          {/* <ButtonBase  onClick={()=>kirim(el.slug)}>Lihat</ButtonBase> */}
                          </p>
                          <div className="card-actions justify-end">
                            {/* <Link href={`/kecamatan/${el.nama_kecamatan}`} className=" "><p><FmdGoodRoundedIcon/> Kec. {`${el.nama_kecamatan.length >= 4 ? `${el.nama_kecamatan.slice(0,14)}...` : ''}`}</p></Link> */}
                            {/* <div className=""> <CabinRoundedIcon/> {``} Lihat desa </div> */}
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
