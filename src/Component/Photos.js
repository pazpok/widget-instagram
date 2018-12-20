import React, {Component} from 'react';
import {Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";


class Photos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            index: 0
        }
    }

    componentDidMount() {
        fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + this.props.accessToken)
            .then(response => response.json())
            .then(data => this.setState({photos: data}));

        this.timer = setInterval(() => {
            this.props.animate().then(() => {
                const index = (this.state.index > this.state.images.length - 2) ? 0 : this.state.index + 1;
                this.setState({ images: this.state.images.data[index],
                    index: index})
            })
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        if (this.state.photos.length == 0) {
        return <div>Chargement en cours...</div>;
            }

        const image = this.state.photos.data[this.state.index];

        return (
            <div>
                <div>
                    <Carousel autoPlay width="500px" interval="3000" infiniteLoop={true} showArrows={true} showIndicators={false} showStatus={false} showThumbs={true} stopOnHover={false}>
                        <div>
                            <img src={image.images.standard_resolution.url} />
                            <p className="legend">{image.caption.text}</p>
                        </div>
                    </Carousel>

                </div>
            </div>
        );
    }
}

export default Photos;