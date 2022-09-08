import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

let firstLoad = true;

export default function Pincode() {
    const [pincode, setpincode] = useState()
    const [timeoutss , setTimeouts] = useState('')
    const [deliverymessage, setdeliverymessage] = useState('')
    const [region, setregion] = useState('')

    function pincodehandler(e){
        setpincode(e.target.value)
    }

    useEffect(() => {
        if (firstLoad) {
          firstLoad = false
          return
        }
        clearTimeout(timeoutss);
        setTimeouts(setTimeout(() => {
        axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
        .then((res)=> {
          console.log(res.data[0])
          if (res.data[0].Status === 'Success') {
            setdeliverymessage(res.data[0].PostOffice[0].DeliveryStatus)
            setregion(res.data[0].PostOffice[0].Name)
          } else {
            setdeliverymessage(res.data[0].Message)
            setregion('')
          }
        })
        .catch((error)=> console.log(error))
      }, 800))
    }, [pincode])
    

  return (
    <>
        <div className="pincode pt-3">
            <p className='pinName pb-2'>Check Delivery Status</p>
            <input className='pin_input' type="text" maxLength={6} onChange={pincodehandler} />
            {deliverymessage && <p className='pt-2'>Status : {deliverymessage}</p>}
            {region && <p >Region : {region}</p>}
        </div>
    </>
  )
}
