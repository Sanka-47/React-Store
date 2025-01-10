import React from 'react'
import { ProductCard } from '../components/ProductCard'

export function Products({cart , setCart}) {
const protein = {title:"Protein Powder", desc:"whey protein powder buids musces",price:100}
const creatine = {title:"Createin powder", desc:"this is not very good for the body",price:250}
const massGainer = {title:"MassGainer", desc:"we all love mucle gainers so buy it ",price:152}

const products =[protein, creatine,massGainer]
  return (
    <>
    {products.map((product)=>{
      return(
        
        <ProductCard product={product} cart = {cart} setCart ={setCart}/>
        
      )
    })}
    </>
  )
}

