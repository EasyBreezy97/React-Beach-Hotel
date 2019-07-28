import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

const getUnique = (items,value) =>{
  return [...new Set(items.map(item=>item[value]))]
}

const RoomsFilter = ({rooms}) => {
  const context = useContext(RoomContext)
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = getUnique(rooms,'type');
  types = ['all',...types];
  types = types.map((item,index) => {
    return <option value={item} key={index}>
      {item}
    </option>
  })

  let people = getUnique(rooms,'capacity');
  people = people.map((item,index) =>
  {return <option key={index} value={item}>
    {item}
  </option> })

  // eslint-disable-next-line no-unused-vars
  let prices = getUnique(rooms,'price');
  prices = prices.map((price,index) =>{
    return <option key={index} value={price}>
        {price}
    </option>
  })

  return (
    <section className = 'filter-container'>
        <Title title ="Search Rooms"/>
        <form className = 'filter-form'>
          {/*select type */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select name="type" id="type" value={type} className = 'form-control' onChange ={handleChange}>
                {types}
            </select>
          </div>
          {/*end of select style */}
            {/*guests */}
            <div className="form-group">
            <label htmlFor="capacity">room type</label>
            <select name="capacity" id="capacity" value={capacity} className = 'form-control' onChange ={handleChange}>
                {people}
            </select>
          </div>
          {/*end of guests style */}
           {/*price */}
           <div className="form-group">
            <label htmlFor="price">
              price:${price}
            </label>
            <input type="range" name="price" id="price" min={minPrice} max={maxPrice}value={price} onChange={handleChange} className ="form-control"/>
          </div>
          {/*end of price style */}
          {/*size */}
          <div className = 'form-group'>
          <label htmlFor="size">
              <div className = 'size-inputs'>
                <input type="number" id="size" name="minSize" value={minSize}
                onChange={handleChange} className="size-input"/>
              </div>
            </label>
          </div>
          <div className = 'form-group'>
          <label htmlFor="size">
              <div className = 'size-inputs'>
                <input type="number" id="size" name="maxSize" value={maxSize}
                onChange={handleChange} className="size-input"/>
              </div>
            </label>
          </div>
          {/*end of size */}
          {/*extras */}
          <div className = 'form-group'>
          <div className="single-extra">
            <input type="checkbox" name="breakfast" checked ={breakfast} onChange={handleChange}/>
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" checked ={pets} onChange={handleChange}/>
            <label htmlFor="pets">pets</label>
          </div>
          </div>
          {/*end of extras */}
        </form>
    </section>
  )
}

export default RoomsFilter
