import './App.scss';
import {useState,useRef} from 'react'
import img1 from './img/product-1.jpeg'
import img2 from './img/product-2.jpeg'
import img3 from './img/product-3.jpeg'
import img4 from './img/product-4.jpg'
import img5 from './img/product-5.jpg'
import img6 from './img/product-6.jpeg'
import img7 from './img/product-7.jpg'
import img8 from './img/product-8.jpg'
import img9 from './img/product-9.jpg'
import img10 from './img/product-10.jpg'
import img11 from './img/product-11.jpeg'
import img12 from './img/product-12.jpg'
function App() {
  const data = [
    {
      name: 'High-Back Bench',
      cost: 9.99,
      img: img1,
      type: 'Ikea'
    },
    {
      name: 'Albany Table',
      cost: 79.99,
      img: img2,
      type: 'Marcos'
    },
    {
      name: 'Accent Chair',
      cost: 25.99,
      img: img3,
      type: 'Caressa'
    },
    {
      name: 'Wooden Table',
      cost: 45.99,
      img: img4,
      type: 'Caressa'
    },
    {
      name: 'Dining Table',
      cost: 6.99,
      img: img5,
      type: 'Caressa'
    },
    {
      name: 'Sofa Set',
      cost: 69.99,
      img: img6,
      type: 'Liddy'
    },
    {
      name: 'Modern Bookshelf',
      cost: 8.99,
      img: img7,
      type: 'Marcos'
    },
    {
      name: 'Emperor Bed',
      cost: 21.99,
      img: img8,
      type: 'Liddy'
    },
    {
      name: 'Utopia Sofa',
      cost: 39.95,
      img: img9,
      type: 'Marcos'
    },
    {
      name: 'Entertainment Center',
      cost: 29.98,
      img: img10,
      type: 'Liddy'
    },
    {
      name: 'Albany Sectional',
      cost: 10.99,
      img: img11,
      type: 'Ikea'
    },
    {
      name: 'Leather Sofa',
      cost: 9.99,
      img: img12,
      type: 'Liddy'
    },
  ]

  const [value,setValue] = useState("")
  const [product,setProduct] = useState(data)
  const inputRef = useRef()

  const handleChangeInput = () => {
    setValue(inputRef.current.value)
    console.log(inputRef.current.value)
    if(value === "")
      setProduct(data)
    else
      setProduct(data.filter(item => item.name.toLowerCase().includes(inputRef.current.value.toLowerCase())))
  }

  const handleClickNavItem = string => {
    setValue("")
    console.log(string.toLowerCase())
    if(string === "all")
      setProduct(data)
    else
      setProduct(data.filter(item => item.type.toLowerCase() === string))
  }

  return (
    <div className="App">
      <div className='nav'>
        <input ref={inputRef} type='text' placeholder='search...' value={value} className='navInput' onInput={handleChangeInput} />
        <div className='navItems'>
          <h4 className='navHeader'>Company</h4>
          <p className='navItem' onClick={()=>handleClickNavItem("all")}>All</p>
          <p className='navItem' onClick={()=>handleClickNavItem('ikea')}>Ikea</p>
          <p className='navItem' onClick={()=>handleClickNavItem('marcos')}>Marcos</p>
          <p className='navItem' onClick={()=>handleClickNavItem('caressa')}>Caressa</p>
          <p className='navItem' onClick={()=>handleClickNavItem('liddy')}>Liddy</p>
        </div>
      </div>
      <div className='products'>
      {
        product.length > 0 ? 
          (product.map((item,index) => (
            <div className='product' key={index}>
              <div className='img'>
                <img src={item.img} alt='ptc' />
              </div>
              <p className='productName'>{item.name}</p>
              <p className='productCost'>{item.cost}</p>
            </div>
          ))) : (
            <p>Sorry, no products matched your search</p>
          )
      }
        
      </div>
    </div>
  );
}

export default App;
