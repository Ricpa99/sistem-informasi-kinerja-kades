import React from 'react'

export default function Pagination({component}) {

  return (
    <>
      <div className={`join self-end justify-end mt-14`}>
         <button className="join-item btn">«</button>
         <button className="join-item btn">Page 22</button>
         <button className="join-item btn">»</button>
      </div>
    </>
  )
}
