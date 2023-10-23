import { Component } from "react";

class ImageComponents extends Component {
    render () {
        return <img src={this.props.imageSrc} alt={this.props.nameImage}/>
    }
}

export default ImageComponents