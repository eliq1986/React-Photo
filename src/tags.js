import API_KEY from "./.config.js";

export const searchTags = {
   yosemite: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=yosemite&per_page=24&page=1&format=json&nojsoncallback=1`,
   cats: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=cats&per_page=24&page=1&format=json&nojsoncallback=1`,
   dogs: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=dogs&per_page=24&page=1&format=json&nojsoncallback=1`,
   coffee:`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=coffee&per_page=24&page=1&format=json&nojsoncallback=1`
}

export default searchTags;
