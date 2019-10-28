import React, { Component } from 'react';

class FavMovies extends Component {
    render() {
        const {profiles, users, movies} = this.props
        return(
            <ul>
                {profiles.map((profile) => {
                    const user = users[profile.userID]
                    const movie = movies[profile.favoriteMovieID]
                    return (
                      <li key={profile.id}>
                        {`${user.name}'s favorite movie is ${movie.name}`}
                      </li>
                    )
                })}
            </ul>
        )
    }
}

export default FavMovies