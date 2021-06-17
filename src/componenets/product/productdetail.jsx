import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Loader from 'react-loader-spinner';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './productsdetail.css';
import { useParams } from 'react-router';
import images1  from '../../Assets/1.jpg'
import images2  from '../../Assets/2.jpg'
import images3  from '../../Assets/3.jpg'
import axios from 'axios';

const Productdetail = () => {
    const [productdetial,setproductdetail] = useState({});
    const [errormessage,seterrormessage]=useState('');
    const [loading,setLoading]=useState(false);
    const {id}=useParams()
    console.log(id);
    
    useEffect(()=>{
        
        const getProductdetail = async()=>{
            setLoading(true);
           await axios.get(`http://fakestoreapi.com/products/${id}`)
        .then((res=>
            {
                setproductdetail(res.data);
                seterrormessage(null);
                setLoading(false)
                console.log(res.data)
               
            
            })).catch(err=>
                {
                    console.log(err.message);
                    seterrormessage(err.message);
                    
                    setLoading(false);
                }
            )

        }
    
    getProductdetail();
    },[])
    console.log(errormessage);

    return (
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
        errormessage ? 
            <>
            <h1>upps something went wrong</h1>
            </>
        :
        <>
        <div className='mainbox'>
                <div className='carouselbox'>
                <Carousel>
                        <div>
                            <img src={images1} alt="image 1" />
                            <p className="legend">image 1</p>
                        </div>
                        <div>
                            <img src={images2} alt="image 1"/>
                            <p className="legend">image 2</p>
                        </div>
                        <div>
                            <img src={images3} alt="image 1" />
                            <p className="legend">image 3</p>
                        </div>
                    </Carousel>
                </div>
                <div className='detailsbox'>
                    <h1>{productdetial.title}</h1> 
                    <h2>${productdetial.price}</h2> 
                    <h3>{productdetial.category}</h3>
                    <label > Quantity </label>
                    <input  className='innmb' type="number" />  <br />
                    <button className='btn' type="button">Add to Cart!</button>

                </div>
        
            </div>
        <div>
            
        <h1 className='descript'>Description</h1>
        <p>{productdetial.description}</p>
            <div >
                            <table>
                   
                    <tr>
                        <td>Operating System ::</td>
                        <td>Windows 10 Home</td>
                      
                    </tr>
                    <tr>
                        <td>Case ::</td>
                        <td>iBUYPOWER Slate 4 MR Mirror Finished Tempered Glass ARGB</td>
                        
                    </tr>
                    <tr>
                        <td>Processor ::</td>
                        <td>Intel® Core™ i5-11400F Processor (6X 2.60GHz/12MB L3 Cache)</td>
                        
                    </tr>
                    <tr>
                        <td>Processor Cooling ::</td>
                        <td>Certified CPU Fan and Heatsink</td>
                      
                    </tr>
                    <tr>
                        <td>Memory ::</td>
                        <td>8GB DDR4-3200MHz ADATA XPG SPECTRIX D41 RGB</td>
                      
                    </tr>
                    <tr>
                        <td>Video Card ::</td>
                        <td>GeForce GTX 1660 SUPER - 6GB GDDR6</td>
                        
                    </tr>
                    <tr>
                        <td>Storage ::</td>
                        <td>500GB WD Blue SN550 M.2 NVMe SSD</td>
                        
                    </tr>
                    </table>
            </div>

                

                
         </div>
         </>
}
</>
        
    </div> 
    </>    
     
}
</>
    );
        
}
 
export default Productdetail;