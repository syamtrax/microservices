import { Link } from "react-router-dom";

export default function Navbar() {

    const link = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Lists",
            link: "/Lists"
        },
        {
            name: "Cart",
            link: "/cart"
        },
        {
            name: "Search",
            link: "/search"
        }
    ]

    const link2 = ["Notifikasi", "Bantuan", "Bahasa"]
    const link3 = [ "Daftar", "Masuk"]

    return (
        <div className="bg-white px-10 py-4">
            <nav className="flex flex-row items-center">
                <div className="flex flex-row ">
                    <span className="text-xl font-bold">Kelompok 7</span>
                    <ul className="flex flex-row items-center ml-8 gap-5">
                        {
                            link.map((item, index) => (
                                <li key={index} className="transition hover:scale-110 hover:cursor-pointer">
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="ml-auto">
                    <ul className="flex flex-row items-center ml- gap-5 ">
                        {
                            link2.map((item, index) => (
                                <li key={index} className="transition hover:scale-110 hover:cursor-pointer">
                                    {item}
                                </li>
                            ))
                        }
                        <div className="flex gap-2 font-bold ">
                            <Link to="#" className="transition hover:scale-110 hover:cursor-pointer">
                                Daftar
                            </Link>
                            |
                            <Link to="#" className="transition hover:scale-110 hover:cursor-pointer">
                                Masuk
                            </Link>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}