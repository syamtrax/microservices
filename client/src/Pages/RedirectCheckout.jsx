import { Link } from "react-router-dom"
export default function RedirectCheckout() {
    return <div className="flex flex-col items-center">
        <img src="/payment.png" width="512" height="512" alt="preview" />
        <h1 className="text-3xl font-bold text-center">Yeay! </h1>
        <h1 className="text-xl  text-center"> Your order will be processed soon once your payment confirmed.</h1>
        <Link to="/">
        <button className="transition mt-2 bg-black text-white rounded-lg px-3 py-1 hover:cursor-pointer hover:scale-110">Back to home</button>
            </Link>
    </div>
}