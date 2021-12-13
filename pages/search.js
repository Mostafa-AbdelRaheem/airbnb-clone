import { useRouter } from "next/router";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Footer from './../components/Footer';


const Search = ({searchReuslts}) => {
    const router=useRouter();
    const {location,startDate,endDate,numberOfGuests}=router.query;
    
    // handle Date
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const unformattedStartDate = new Date(startDate)
    const unformattedEndDate = new Date(endDate)
    const formattedStartDate=`${unformattedStartDate.getDate()}-${monthNames[unformattedStartDate.getMonth()]}-${unformattedStartDate.getFullYear()}`
    const formattedEndDate=`${unformattedEndDate.getDate()}-${monthNames[unformattedEndDate.getMonth()]}-${unformattedEndDate.getFullYear()}`    
    const range=`${formattedStartDate} - ${formattedEndDate}`

    
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6" >
                    <p className="text-xs">300+ Stays - {range} - for {numberOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-s mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="buttonStyle">Cancellation Flexibility</p>
                        <p className="buttonStyle">Type Place</p>
                        <p className="buttonStyle">Price</p>
                        <p className="buttonStyle">Rooms and Beds</p>
                        <p className="buttonStyle">More Filters</p>
                    </div>
                    <div className="flex flex-col">
                        {searchReuslts.map(({description,img,location,lat,long,price,star,title,total})=>(
                            <InfoCard description
                            key={img}
                            img={img}
                            location={location}
                            price={price}
                            star={star}
                            title={title}
                            total={total} 
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
 
export default Search;


export async function getStaticProps(){
    const searchReuslts= await fetch("https://links.papareact.com/isz").then(
      (res)=>res.json()
    ) ;
   
    return{
      props:{
        searchReuslts,
      }
    }
   }