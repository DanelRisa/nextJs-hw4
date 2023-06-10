import Link from "next/link"

export default function Home(){
    const cards = [
        {"title": "Characters", "link": "/characters",

        }
    ]
    return <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center">
            <div className="flex gap-4">
            {
                cards.map((card,index) => (
                    <Link key={index} href = {card.link}>
                        <div className="card bg-slate-400  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72 h-72 flex items-center justify-center">
                            <h2 className=" text-xl font font-bold text-white">{card.title}</h2>
                        </div>
                    </Link>
                )
            )}
            </div>
        </main>
    </div>
}