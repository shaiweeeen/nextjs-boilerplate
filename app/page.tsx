"use client"
import Image from 'next/image'
import { Button } from '@/components'
import { useState } from 'react'


export default function Home() {
  const [wallet, setWallet] = useState(null);

  const connectWallet = async () => {
    const { solana } = window as any;
    setWallet((await solana.connect()).publicKey.toString())
  }
  return (
    <main className="w-full flex justify-center items-center h-screen">

      {
        wallet == null ? <>
          <Button onClick={connectWallet}>Connect Wallet</Button>
        </> : <>
          
          <Button onClick={setWallet(null)}>Wallet key: {wallet}</Button>
        </> 
        }

    </main>
  )
}
