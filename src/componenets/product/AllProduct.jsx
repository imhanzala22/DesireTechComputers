import React,{useEffect,useState} from 'react';
import Loader from 'react-loader-spinner';
import Card from './Card';
import './AllProduct.css';
import axios from 'axios';
const AllProducts = () => {
    const [Allproducts,setAllProducts]=useState([]);
    const [errormessage,setErrormessage]=useState('');
    const [visible,setVisible] = useState(8);
    const [loading,setLoading]=useState(false)
    
    useEffect(() => {
        const getAllProducts = async () => {
          setLoading(true);
          await axios.get('https://fakestoreapi.com/products')
          .then((res => {
            setAllProducts(res.data)
            setErrormessage("")
            setLoading(false);
          }))
          .catch(err => {
            console.log(err.message)
            setErrormessage(err.message);
            setLoading(false);
          });
        }
        getAllProducts();
      }, [])    
    
const itemToShow = () => {
    setVisible((prevValue) => prevValue + 4);
}

    
return (
  
  <>
    <>
      {
        loading ? 
        <>
          <div className='loader'>
              <Loader
                type="Oval"
                color="brown"
                height={50}
                width={50}
               />
          </div>
        </> 
        :
        <>
        <div className='container'>
        <>
        {
          errormessage?
          <>
          <h1>upps something went wrong</h1> 
          </>
          :
          <>
          <h1 className='products'>Products</h1>
    
            <div className='card-container'>
          
              {
                 Allproducts.slice(0, visible).map((Allproduct,index)=>{
                      return (
                          <div key={index}>
                            <Card product={Allproduct}  />
                            
                          </div>
                      )

                  })
              }
            </div>
                    <div className='loadmore'>
                    <button onClick={itemToShow} >Load more</button>
                    </div>
                
                 </>
                }
                </>
            </div>
           
        </>
      }
    </>
     </>

  );
    }
    
 
export default AllProducts;