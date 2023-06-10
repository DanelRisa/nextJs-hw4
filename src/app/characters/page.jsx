import axios from 'axios'
import Link from 'next/link';
const fetchData = async() =>{
    try{
        const response = await axios.get('https://nekos.best/api/v2/husbando')
        return response.data.results;
    } catch(error){
        console.log(error);
    }
}

const Characters = async () => {
    const characters = await fetchData();
    return (
        <div className="flex flex-col min-h-screen ">
  <main className="flex-grow flex items-center justify-center">
    <div className="grid grid-cols-1 gap-8 my-12">
      {characters.map((husbando, index) => (
        <Link className="flex flex-wrap gap-12" key={index} href={`characters/${husbando.artist_name}`}>
          <div className="card bg-slate-50 w-50 h-54"></div>
          <div className="flex justify-center">
            <img className="w-96 h-96 object-contain " src={husbando.url} alt={husbando.artist_name} />
          </div>
          <h2 className="text-xl font-bold">Artist name: {husbando.artist_name}</h2>
        </Link>
      ))}
    </div>
  </main>
</div>

    
    )
}

export default Characters;