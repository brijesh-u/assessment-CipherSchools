import React from 'react'
import Button from 'react-bootstrap/Button'
import "./App.css";

function Items(props) {
  return (
    <div
      className="items"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid black',
      }}
    >
      <div
        style={{
          width: '7rem',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <img
          style={{ width: '80px', height: '80px', display: '-webkit-flex',borderRadius:"50px"}}
          src={props.img}
        />
        <div
          style={{
            display: '-webkit-inline-box',
            padding: '10px',
            alignItems: 'center',
          }}
        >
          <div></div>
          <div style={{ marginLeft: '50px' }}>{props.title}</div>
          <div style={{ marginLeft: '50px' }}>
          {props.desc}
          <div class="stars">
  <form action="">
    <input className="star star-5" id="star-5" type="radio" name="star"/>
    <label className="star star-5" for="star-5"></label>
    <input className="star star-4" id="star-4" type="radio" name="star"/>
    <label className="star star-4" for="star-4"></label>
    <input className="star star-3" id="star-3" type="radio" name="star"/>
    <label className="star star-3" for="star-3"></label>
    <input className="star star-2" id="star-2" type="radio" name="star"/>
    <label className="star star-2" for="star-2"></label>
    <input className="star star-1" id="star-1" type="radio" name="star"/>
    <label className="star star-1" for="star-1"></label>
  </form>
</div>

          
          </div>

          <div style={{ marginLeft: '50px' }}>{props.price}</div>

          <Button variant="primary" style={{ marginLeft: '50px' }}>
            Add To Cart
          </Button>
          <Button variant="primary" style={{ marginLeft: '50px' }}>
            Make Order
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Items
