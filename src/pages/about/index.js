import React, { Component } from 'react';
import '../../components/design/about.scss';
import Auth from '../../auth/auth';
import Layout from '../../components/layout';
import { store } from '../index';
import { Provider } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Background from '../../components/background';

const styles = {
  inputStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: 40,
    marginLeft: 15,
    marginBottom: 30,
    color: '#333333',
    borderBottomWidth: 1,
    },
    divStyle: {
      width: 500, 
    }
  };

class About extends React.Component{
  constructor(props){
    super(props);
    this.state={
        about:'',
        url: '',
        content: '',
        image: '',
    }
}

// addAbout = e => {
//     e.preventDefault();
//     let content = e.target.value;
//     this.setState({content});
//     console.log('state after submit',this.state);
// }

handleAboutSubmit = e =>{
    e.preventDefault();
    this.setState({about: e.target.value})
}

clearAbout=(e)=>{
    e.preventDefault();
    this.setState({about: ''});
}

// addImg = e => {
//   e.preventDefault();
//   let url = e.target.value;
//   this.setState({url});
//   console.log('state after submit',this.state);
// }

handleImgSubmit = e => {
  e.preventDefault();
  this.setState({image: e.target.value});
  console.log('state after submit',this.state);
}


clearImg=(e)=>{
  e.preventDefault();
  this.setState({image: ''});
}

render() {
  console.log('from render',this.state);
return (
<Provider store = {store} >
<Layout>
<Background />
  <div>
    <div className='about-container'>
      <div className='our-story'>
        <h2 style={{textAlign: 'center', paddingTop: 40}}>Our Story</h2>
        <p style={{padding: 40, fontSize: 18}}>Heather Cherewaty [12:38 PM]
We are excited to bring you high-quality, unique dog style and goods, handcrafted by us in our PNW workshop. All of our fabrics and leathers are hand-picked pieces that embody not only vibrant, urban landscapes, but a sense of the great outdoors as well. Whether your canine is outfitted in bold, on trend sidewalk-style or whether they prefer the comforts of rugged Pendleton® wools and beauty of the great outdoors, we're sure to have a striking collar that your dog will wear proudly. We've been inspired by the spunk and love of a lil' dog named Olive, and the zealous bark and loyalty of a big dog named Atlas. They've shown us the unbreakable bond that can exist between a person and a dog, and we believe that by nourishing this bond, we can create more beauty in this world. In this same way, we're dedicated to creating beautiful dog accessories and handcrafted goods that will bring people and their beloved canines together. We donate to both Old Dog Haven and Project Canine, and thank you for helping us to support their missions.

OLIVE + ATLAS

Est. 9/2015.</p>
      </div>
      <div className='meet-the-team' style={{display:'flex', alignItems: 'center', flexDirection: 'column'}}>
        <h2 style={{textAlign: 'center'}}>Meet The Team!</h2>
        <img style={{}} src='https://res.cloudinary.com/olive-atlas/image/upload/v1551472788/heather_atlas_howarth.jpg'/>
      </div>
    </div>
     <Auth capability="create">
        {/* <form onSubmit={this.handleAboutSubmit}> */}
        <div style={styles.divStyle}>
          <TextField
          style={styles.inputStyle} 
          value={this.state.about}
          onChange={e =>this.handleAboutSubmit(e)}
          type="text"
          placeholder="Tell your customers about your store"
          />
        </div>
        <div style={styles.divStyle}>
        <TextField
        style={styles.inputStyle} 
        value={this.state.image}
        onChange={e =>this.handleImgSubmit(e)}
        type="text"
        placeholder="Image url"
        />
        </div>
            {/* <input type="text" placeholder="Tell your customers about your store" onChange={(e)=>this.addAbout(e)} /> */}
        {/* </form> */}
        {/* <form onSubmit={this.handleImgSubmit}>
            <input type="text" placeholder="Add an image" onChange={(e)=>this.addImg(e)}/>
        </form> */}
        <button onClick={(e)=>this.clearAbout(e)}>Clear About Content</button>
        <button onClick={(e)=>this.clearImg(e)}>Clear Image</button>

        <div className='aboutContentContainer' id="test">
          <img alt='about image' src={this.state.image} style={{ width: "700px", height: '500px' }}/>
          
        </div>

        <div className="aboutInfo">
        <p>{this.state.about}</p>
        </div>

        

     </Auth> 
  </div>
</Layout>
</Provider>
)
}
}

export default About;