import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Navbar from '@/Layouts/Navbar';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Pages } from '@mui/icons-material';



export default function Desa({dataDesa, kabupaten, kecamatan, project, title, slug, tahun}) {

  const startYear = 2020;
  const currentYear = new Date().getFullYear();
  const years = [];
  const access_key ='kCYlbq6b_8NaaEZn85SIZu1T-IaXKdVpL-PRw9cwMMs';
  const [showImage, setImage] = useState([]);
  const query = "proyek berjalan";
  const countImage = project.length;
  for(let year = startYear; year <= currentYear; year++ ){
    years.push(year)
  }

  const {data,setData,get} = useForm({
    tahun: '',
    kecamatan: kecamatan,
    kabupaten: kabupaten,
  })

  useEffect(() => {
        const fetImg = async ()=>{
          try {
            const response = await axios.get(`https://api.unsplash.com/search/photos`,{
              headers: {
                Authorization: `Client-ID ${access_key}`,
              },
              params: {
                query: query, // Kata kunci pencarian
                per_page: countImage, // Ambil jumlah gambar sesuai input user
                order_by: "relevant", // Urutkan berdasarkan relevansi
              },
            });
            // console.log(response);
            
            setImage(response.data.results.map((img) => img.urls.small));
            
          } catch (error) {
            console.log(error);
            
          }
        }
        fetImg()
  },[])
  console.log(showImage);
  

  const kirim = (e) => {
    e.preventDefault()
    get(route('detail.desa', {slug: slug}));
  }

  return (
    <div>
     <Head title={title}/>
     <Navbar>
     <div className="container rounded-lg bg-slate-50 min-h-screen p-6 max-sm:p-0 mt-20 max-sm:mt-5">
        <div className="max-sm:p-3 max-w-full items-center flex max-sm:text-xs max-sm:flex-wrap">
          <div className="w-1/2 max-sm:w-full">
            <form onSubmit={kirim}>
              <select name='tahun' onChange={(e) => setData('tahun', e.target.value)} 
              className="select text-sm select-bordered select-sm scrollbar
              overflow-y-auto sm:text-sm focus:border-blue-500 focus:ring-blue-50 shadow-sm rounded-md border-gray-300 border ">

                <option className='max-sm:h-52' disabled selected>Select Year</option>
                {/* <div className='bg-blue-400 max-h-96 overflow-y-scroll overflow-hidden '> */}
                {years.map((year) => {
                  return (
                <option className='text-sm max-sm:text-xs min-h-32 overflow-y-scroll' key={year}>{year}</option>
                )
              })}
              {/* </div> */}
              </select>
              <PrimaryButton type='submit'>cari</PrimaryButton>
            </form>
          </div>
          <div className="w-1/2 self-end max-sm:w-full max-sm:p-0 max-sm:mt-2 max-w-full">
            <p className='text-right max-sm:text-left max-sm:flex max-sm:flex-col'>
             {dataDesa.nama_desa}, {kecamatan}, {kabupaten} {project.anggaran} <br />
             <span className='font-bold'>{dataDesa.nama_kades}</span> <br />
            </p>
          </div>
        </div>
        <div className='mt-12 max-sm:text-sm max-sm:mt-1 max-sm:flex max-sm:flex-col max-sm:pl-3'>
          Visi :
          <ol>
            <li>{dataDesa.visi}</li>
          </ol>
          Misi :
          <ol> 
            <li>{dataDesa.misi1}</li>
            <li>{dataDesa.misi2}</li>
            <li>{dataDesa.misi3}</li>
            <li>{dataDesa.misi4}</li>
            <li>{dataDesa.misi5}</li>
            <li></li>
          </ol>
        </div>
        <div className="steps steps-vertical mt-6 w-full">
        {project.map((res, i) => {
          const tahun = res.tahun.split(".")[1]
          // const yearArray = tahun.map(item => item.match(/\{4}/)?.[0] || "")
          console.log(tahun);
          return (
            <>
              <Card className='mt-5 max-sm:m-2 '>
                  <CardMedia
                    sx={{ height: 350 }}
                    image={showImage[i]}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h2 className='font-bold text-2xl'>
                      {res.nama_project}
                      </h2>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      <p className='text-slate-600'>
                      {res.deskripsi}
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <small className='font-bold' size="small"> anggaran {res.anggaran}</small>
                  </CardActions>
                </Card>
            </>
          )
        })}
        </div>
    </div>
     </Navbar>
    </div>
  )
}
