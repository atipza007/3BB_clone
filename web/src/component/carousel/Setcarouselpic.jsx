import { useState } from 'react'
import Content from './Carouselpic'

function App() {
  const data = [
    {
      id: 1,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20220718105408main.jpg",
      desc: "ส่วนลดเพิ่ม 8% สำหรับจองที่พักทั่วโลกผ่าน อโกด้า",
      descname: "อโกด้า"
    },
    {
      id: 2,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20220221115402main.jpg",
      desc: "รับเงินคืนสูงสุด 10% เมื่อจองโรงแรมทั่วโลกผ่าน...",
      descname: "Booking.com"
    },
    {
      id: 3,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20230118155241main.jpg",
      desc: "ส่วนลด 100 บาท เมื่อช้อปครบ 1,000 บาท สำหรับลูกค้าใหม่...",
      descname: "Tops Online ลูกค้าใหม่"
    },
    {
      id: 4,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20230118085141main.png",
      desc: "ส่วนลด 150 บาท เมื่อซื้อสินค้าครั้งแรกครบ 1,000 บาทขึ้น...",
      descname: "MOnline & Gourmet Market"
    },
    {
      id: 5,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20221228140242main.jpg",
      desc: "ส่วนลดมูลค่า 100 บาท เมื่อซื้อสินค้าครั้งแรก ตั้งแต่ 800 บาท",
      descname: "Big C Online - ลูกค้าใหม่"
    },
    {
      id: 6,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20230118153523main.jpg",
      desc: "รับฟรี 300 Reward Coins จาก comico",
      descname: "comico"
    },
  ]
  const data2 = [
    {
      id: 1,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20230126161458main.jpg",
      desc: "ส่วนลดเพิ่ม 8% สำหรับจองที่พักทั่วโลกผ่าน อโกด้า",
      descname: "อโกด้า"
    },
    {
      id: 2,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20220718103406main.jpg",
      desc: "รับเงินคืนสูงสุด 10% เมื่อจองโรงแรมทั่วโลกผ่าน...",
      descname: "Booking.com"
    },
    {
      id: 3,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20220815140446main.jpg",
      desc: "ส่วนลด 100 บาท เมื่อช้อปครบ 1,000 บาท สำหรับลูกค้าใหม่...",
      descname: "Tops Online ลูกค้าใหม่"
    },
    {
      id: 4,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20230118080840main.jpg",
      desc: "ส่วนลด 150 บาท เมื่อซื้อสินค้าครั้งแรกครบ 1,000 บาทขึ้น...",
      descname: "MOnline & Gourmet Market"
    },
    {
      id: 5,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20220815155033main.jpg",
      desc: "ส่วนลดมูลค่า 100 บาท เมื่อซื้อสินค้าครั้งแรก ตั้งแต่ 800 บาท",
      descname: "Big C Online - ลูกค้าใหม่"
    },
    {
      id: 6,
      url: "https://picman.3bb.co.th/module_privilege/uploads/20220815155103main.jpg",
      desc: "รับฟรี 300 Reward Coins จาก comico",
      descname: "comico"
    },
  ]
  const nameTag = ["3BB Privilege", "Reward"]
  return (
    <>
      <Content data={data} dataName={nameTag[0]} />
      <Content data={data2} dataName={nameTag[1]} />
    </>
  )
}

export default App
