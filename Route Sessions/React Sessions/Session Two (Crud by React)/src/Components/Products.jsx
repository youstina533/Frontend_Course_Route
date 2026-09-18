import {useEffect, useState} from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'

export default function Products() {

    const [products, setProducts] = useState([]);
    async function getData(){
        let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products'); // hena ana 3amlt destructs l object aly gay wa gebt meno property data (wa deh property sabta feh get.axios data aly btrg3)
        console.log(data.data); // property data aly daimn bytkon mawgoda geh api aly axios btrag3o, bykon feha daimn property data tany aly feha data aly 3ayzaha bgd
        setProducts(data.data); //(I have 2 property data wa7da gwaha wa7da tanya feh al api response aly byrg3)   ****bs bardo at2akdy******
    }

    useEffect(()=>{
        getData();
    },[]);

  return (
    <div>
        <div className="mt-5 row g-3">
        { products.length > 0 ? products.map(function(product){
          return(
            <div className='col-md-6 col-lg-4 col-sm-12'>
             <div className="card-inner">
               <img src={product.imageCover} className="w-100" alt="" />
               <p style = {{color:"grey"}}>{product.title}</p>
             </div>
            </div>
          )
        }) : (
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        )
      }
       </div>
      
    </div>
  )
}
