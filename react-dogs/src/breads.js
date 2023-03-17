import React from "react";
import { v4 } from "uuid";

export default class Breeds extends React.Component {
    state = {
        breeds: [],
        src: "",
    };
    onBreedClick(breed) {
        fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then((responce) => responce.json())
            .then((result) =>
                this.setState({
                    src: result.message[0],
                })
            );
    }
    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/list/all ")
            .then((responce) => responce.json())
            .then((result) =>
                this.setState({
                    breeds: Object.keys(result.message),
                })
            );
    }
    render() {
        return (
            <>
                <img src={this.state.src} />
                <div>
                    {" "}
                    {this.state.breeds.map((breed) => (
                        <div onClick={(evt) => this.onBreedClick(breed)}> {breed} </div>
                    ))}{" "}
                </div>
            </>
        );
    }
}