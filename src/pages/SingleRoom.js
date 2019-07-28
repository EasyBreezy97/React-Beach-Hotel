import React,{Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';


class SingleRoom extends Component{
  constructor(props){
    super(props);
   //props has been passed by react router

    this.state = {
      slug:this.props.match.params.slug,
      defaultBcg
    }
  }

  static contextType = RoomContext;

  // componentDidMount(){ //this is other way
  //   console.log(this.props); //props has been passed by react router

  // }

  render(){

    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    if(!room){
      return( <div className ='error'><h3>No such room could be found...</h3>
       <Link to ='/rooms' className = "btn-primary">Go back to rooms</Link>
      </div>)
    }

    const {name,description,capacity,price,size,extras,breakfast,pets,images} = room; //destructure all room props
    const [mainImg,...defaultImg] = images;


    return(
      <>
       <StyledHero img={mainImg || this.state.defaultBcg}> {/*mainImg is from data.js array */}
         <Banner title={`${name} room`}>
           <Link to='/rooms' className='btn-primary'>
             back to rooms
           </Link>
         </Banner>
       </StyledHero>
       <section className = 'single-room'>
         <div className="single-room-images">
            {defaultImg.map((img,index) => {
              return <img key={index} src = {img} alt={name}/>
            })}
         </div>
         <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className = 'info'>
              <h3>Info</h3>
              <h6>Price: $ {price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                Max capacity: {capacity > 1 ? `${capacity} Person` : `${capacity} People`}
              </h6>
              <h6>Pets: {pets === true ? "Allowed" : "Not Allowed"}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
         </div>

       </section>

       <section className="room-extras">
         <h6>Extras</h6>
         <ul className = 'extras'>
            {extras.map((info,index) => {
              return (
                <li key = {index}>{info}</li>
              )
            })}
         </ul>

       </section>
      </>

    )
  }

}

export default SingleRoom;