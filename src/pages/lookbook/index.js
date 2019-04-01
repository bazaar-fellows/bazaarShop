import React, { Component } from "react"
import Auth from "../../auth/auth"
import Layout from "../../components/layout"
import { store } from "../index"
import { Provider } from "react-redux"
import Header from "../../components/header"
import LBCard from './LBCard';
// import LBDeck from "./LBDeck"

class LookBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogArray: [
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551400078/Jazz-2.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551400366/olive.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551400536/crickett.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551400669/tiber.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551400828/freya.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551401044/Dug.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551411933/oliveandatlas-35.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551411513/atlas.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551400078/Jazz-2.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551413378/B_L-2.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551413474/Scout.jpg",
        "https://res.cloudinary.com/olive-atlas/image/upload/v1551413578/oliveandatlas-12.jpg",
      ],
      url: "",
    }
  }

  addImage = e => {
    e.preventDefault()
    let url = e.target.value
    this.setState({ url })
    console.log("state after submit", this.state)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ imgArr: [...this.state.imgArr, this.state.url] })
  }

  clearImgArr = e => {
    e.preventDefault()
    this.setState({ imgArr: [] })
  }

  render() {
    console.log("from render", this.state)
    return (
      <Provider store={store}>
        <Layout>
          <div>
            <Auth capability="create">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="lookbook image url"
                  onChange={e => this.addImage(e)}
                />
              </form>
              <button onClick={e => this.clearImgArr(e)}>Clear Lookbook</button>
            </Auth>
            <div className="look-book-container">
              {/* <h2>look</h2> */}

              <div>
                <section className="deck">
                  {this.state.dogArray.map((pic, i) => (
                      <LBCard key={i} content={pic} />
                    ))}
                </section>
              </div>
              {/* <LBDeck pics={this.state.dogArray} /> */}
            </div>
          </div>
        </Layout>
      </Provider>
    )
  }
}

export default LookBook
