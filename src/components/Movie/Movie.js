import React, { Component } from 'react'
import { API_URL, API_KEY } from '../../config'
import {
    Navigation,
    MovieInfo,
    MovieInfoBar,
    FourColGrid,
    Actor,
    Spinner,
} from '../elements/'
import './_movie.sass'

export default class Movie extends Component {
    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false,
    }

    componentDidMount() {
        if (localStorage.getItem(`${this.props.match.params.movieID}`)) {
            const state = JSON.parse(
                localStorage.getItem(`${this.props.match.params.movieID}`)
            )
            this.setState({ ...state })
        } else {
            this.setState({ loading: true })
            //fetching movie data
            const endpoint = `${API_URL}movie/${this.props.match.params.movieID}?api_key=${API_KEY}&language=en-US`
            this.fetchItems(endpoint)
        }
    }
    fetchItems = (endpoint) => {
        fetch(endpoint)
            .then((result) => result.json())
            .then((result) => {
                if (result == undefined) {
                    this.setState({
                        loading: false,
                    })
                } else {
                    this.setState({ movie: result }, () => {
                        //fetch actors in set state callback
                        const endpoint = `${API_URL}movie/${this.props.match.params.movieID}/credits?api_key=${API_KEY}&language=en-US`
                        fetch(endpoint)
                            .then((result) => result.json())
                            .then((result) => {
                                const directors = result.crew.filter(
                                    (member) => member.job === 'Director'
                                )
                                this.setState(
                                    {
                                        actors: result.cast,
                                        directors,
                                        loading: false,
                                    },
                                    () => {
                                        localStorage.setItem(
                                            `${this.props.match.params.movieID}`,
                                            JSON.stringify(this.state)
                                        )
                                    }
                                )
                            })
                    })
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }

    render() {
        return (
            <div className="rmdb-movie">
                {this.state.movie ? (
                    <div>
                        <Navigation movie={this.props.location.movieName} />
                        <MovieInfo
                            movie={this.state.movie}
                            directors={this.state.directors}
                        />
                        <MovieInfoBar
                            time={this.state.movie.runtime}
                            budget={this.state.movie.budget}
                            revenue={this.state.movie.revenue}
                        />
                    </div>
                ) : null}
                {this.state.actors ? (
                    <div className="rmdb-movie-grid">
                        <FourColGrid header={'Actors'}>
                            {this.state.actors.map((element, i) => {
                                return <Actor key={i} actor={element} />
                            })}
                        </FourColGrid>
                    </div>
                ) : null}
                {!this.state.actors && !this.state.loading ? (
                    <h1>No movie found!</h1>
                ) : null}
                {this.state.loading ? <Spinner /> : null}
            </div>
        )
    }
}
