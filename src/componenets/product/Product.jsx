import React,{useEffect,useState} from 'react';
import Loader from 'react-loader-spinner';
import Card from './Card';
import './Products.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Products = () => {
    const [products,setProducts]=useState([]);
    const [errormessage,setErrormessage]=useState('');
    const [visible,setVisible] = useState(4);
    const [visible1,setVisible1] = useState(4);
    const [visible2,setVisible2] = useState(4);
    const [loading,setLoading]=useState(false)
    
    useEffect(() => {
        const getProducts = async () => {
          setLoading(true);
          await axios.get('https://fakestoreapi.com/products')
          .then((res => {
            setProducts(res.data)
            setErrormessage("")
            setLoading(false);
          }))
          .catch(err => {
            console.log(err.message)
            setErrormessage(err.message);
            setLoading(false);
          });
        }
        getProducts();
      }, [])    

console.log(errormessage);
      
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
          <h1 className='products'>New Arrivals</h1>
    
            <div className='card-container'>
          
              {
                  products.slice(0, 4).map((product,index)=>{
                      return (
                          <div key={index}>
                            <Card product={product}  />
                            
                          </div>
                      )

                  })
              }
            </div>
                 </>
                }
                </>
            </div>
           
        </>
      }
    </>
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
          <h1 className='products'>Featured Products</h1>
    
            <div className='card-container'>
          
              {
                  products.slice(0, 4).map((product,index)=>{
                      return (
                          <div key={index}>
                            <Card product={product}  />
                            
                          </div>
                      )

                  })
              }
            </div>
                 </>
                }
                </>
            </div>
           
        </>
      }
    </>
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
          <h1 className='products'>All Products</h1>
    
            <div className='card-container'>
          
              {
                  products.slice(0, 4).map((product,index)=>{
                      return (
                          <div key={index}>
                            <Card product={product}  />
                            
                          </div>
                      )

                  })
              }
            </div>

                <div className='loadmore'>
                    <Link to={"/Allproduct"}><button>Load more</button></Link>  
                 </div>
                 </>
                }
                </>
            </div>
           
        </>
      }
    </>
    </>
    </>

  );
    }
    
 
export default Products;