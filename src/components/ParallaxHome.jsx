import React from 'react'
import { Parallax } from "react-parallax";

const ParallaxHome = () => {
    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
      };
      const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      };
      const image1 =
        "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
      const image2 =
        "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
      const image3 =
        "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
      const image4 =
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
  return (
    <>
    <div>
    <h1  className ="text-center text-6xl " style={{fontWeight:"700",marginBottom:"70px",marginTop:"30px"}} >Discover the Enchantment of Nature</h1>
    </div>

     <div style={styles}>
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Breathe in the Serenity of the Ancient Giants</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Your Next Adventure Awaits</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Step into the Heart of the Wilderness</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Elevate to the Peak of Urban Majesty</div>
      </div>
    </Parallax>
    <div style={{ height: 50 }} />
    {/* <h2>{"\u2728"}</h2> */}
  </div>
    
    
    </>
  )
}

export default ParallaxHome