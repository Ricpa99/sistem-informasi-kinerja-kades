import { Link } from '@inertiajs/react'
import React from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";


export default function Pagination({component, page, next, prev}) {

  return (
    <>
      <div className={`join self-end justify-end mt-14`}>
         <Link href={prev} className="join-item btn"><GrFormPrevious /></Link>
         <button className="join-item btn">{page}</button>
         <Link href={next} className="join-item btn"><GrFormNext /></Link>
      </div>
    </>
  )
}
