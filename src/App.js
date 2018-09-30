import React, { Component } from 'react';
import './App.css';
import Gallery from './components/gallery';
import Header from './components/header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import NotFound from './components/NotFound';
import searchTags from './tags';

// API KEY
import API_KEY from "./.config.js";



class App extends Component {

state = {
  initialPhotos: [],
  catPhotos: [],
  computerPhotos:[],
  dogPhotos:[],
  searchPhotos: [],
  isLoading: false
}




componentDidMount() {
  axios.all([
    axios.get(searchTags.yosemite),
    axios.get(searchTags.cats),
    axios.get(searchTags.dogs),
    axios.get(searchTags.computers)
  ]).then(axios.spread((yosemite, cats, dogs, computers) => {
    const initialPhotos = yosemite.data.photos.photo;
    const catPhotos = cats.data.photos.photo;
    const dogPhotos = dogs.data.photos.photo;
    const computerPhotos = computers.data.photos.photo;

     this.setState({
        initialPhotos,
        catPhotos,
        dogPhotos,
        computerPhotos
     })
  }));

}

searchRequest = (searchQuery) => {
  this.setState({isLoading: true, searchPhotos: []}, ()=> {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${searchQuery}&per_page=24&page=1&format=json&nojsoncallback=1`)
   .then( ({data}) => {

       this.setState({
         isLoading: false,
         searchPhotos: data.photos.photo
       })
     })
     .catch(function (error) {
       console.log(error);
     });
  })

  // this.setState({isLoading: true })
  // axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${searchQuery}&per_page=24&page=1&format=json&nojsoncallback=1`)
  // .then( ({data}) => {
  //
  //     this.setState({
  //       isLoading: false,
  //       searchPhotos: data.photos.photo
  //     })
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
}






  render() {
    return (
<BrowserRouter >
  <div className="App">
    <Header   searchRequest={this.searchRequest}/>
    <Switch>
      <Route exact path="/" render={()=> <Gallery isLoading={this.state.isLoading} photos={this.state.initialPhotos}/>}/>
      <Route exact path="/cats" render={()=> <Gallery  isLoading={this.state.isLoading}  photos={this.state.catPhotos}/>}/>
      <Route exact path="/dogs" render={()=> <Gallery  isLoading={this.state.isLoading} photos={this.state.dogPhotos}/>}/>
      <Route exact path="/computers" render={()=> <Gallery isLoading={this.state.isLoading} photos={this.state.computerPhotos}/>}/>

      <Route path="/search" render={()=> <Gallery  isLoading={this.state.isLoading} photos={this.state.searchPhotos}/>}/>

      <Route component={NotFound} />
      </Switch >
    </div>
  </BrowserRouter>
    );
  }
}


if (module.hot) {
  module.hot.accept();
}


export default App;
