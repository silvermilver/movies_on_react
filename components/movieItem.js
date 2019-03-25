function Title(properties){
    return React.createElement('span', null, properties.title);
}

function Image(properties){
    return React.createElement('img', {scr: properties.url});
}

function MovieItem(properties){
    return React.createElement('div', null, [
        React.createElement(Image, {key: 'movie-image', url: properties.imageUrl}),
        React.createElement(Title, {key: 'movie-title', title: properties.title}),
    ])
}

ReactDOM.render(
    React.createElement(MovieItem, {
        title: 'Home alone',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'}),
    document.getElementById('root')

);