import { Button } from "@/components/ui/button"
import paymentSuccessImage from "@/public/paymentSuccess.png"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <main className="pt-20 min-h-screen flex flex-col items-center gap-y-5 bg-[#F7F3ED]">
      <h1 className="text-4xl text-center font-bold text-[#702E1C]">
        Thank you for your order
      </h1>
      <div className="rounded-full p-3">
        <Image src={paymentSuccessImage} alt="Payment Success" width={500} 
        className="rounded-md"
        />
      </div>

      <div className="flex items-center gap-4">
        <Link href="/shop">
          <Button className="w-45 py-6 text-white bg-[#702E1C] hover:bg-[#8a3a24] cursor-pointer">
            Continue Shopping
          </Button>
        </Link>
        <Link href="/">
          <Button className="w-45 py-6 text-white bg-[#702E1C] hover:bg-[#8a3a24] cursor-pointer">
            Home
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default page