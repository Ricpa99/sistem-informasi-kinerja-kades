import { Head, useForm } from '@inertiajs/react';
import React from 'react'
Head
export default function Admin({title}) {
   const {post,setData, processing} = useForm({img:null})
   const submit = (e) => {
    e.preventDefault();
    post(route('file'));
  }
  return (
     <div>
       <Head title={title}/>
      <form className='mt-20 ml-40' onSubmit={submit} encType='multipart/form-data'>
         <input type="file" accept='.jpg' name="img" id="img" onChange={(e) => setData('img', e.target.files[0])} />
         <input type="hidden" value='berhasil' />
         <button className='p-3 text-slate-600 font-bold' type="submit" disabled={processing}>
         {processing ? 'Mengunggah...' : 'Upload'}
         </button>
      </form>
    </div>
  )
}
