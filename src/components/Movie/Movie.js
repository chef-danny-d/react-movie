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

    fetchItems = async (endpoint) => {
        try {
            const result = await (await fetch(endpoint)).json()
            if (result == undefined) {
                this.setState({
                    loading: false,
                })
            } else {
                this.setState({ movie: result })
                const creditsEndpoint = `${API_URL}movie/${this.props.match.params.movieID}/credits?api_key=${API_KEY}&language=en-US`
                const creditsResult = await (
                    await fetch(creditsEndpoint)
                ).json()
                const directors = creditsResult.crew.filter(
                    (member) => member.job === 'Director'
                )

                this.setState(
                    {
                        actors: creditsResult.cast,
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
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { movie, actors, loading, directors } = this.state
        return (
            <div className="rmdb-movie">
                {movie ? (
                    <div>
                        <Navigation movie={this.props.location.movieName} />
                        <MovieInfo movie={movie} directors={directors} />
                        <MovieInfoBar
                            time={movie.runtime}
                            budget={movie.budget}
                            revenue={movie.revenue}
                        />
                    </div>
                ) : null}
                {actors ? (
                    <div className="rmdb-movie-grid">
                        <FourColGrid header={'Actors'}>
                            {actors.map((element, i) => {
                                return <Actor key={i} actor={element} />
                            })}
                        </FourColGrid>
                    </div>
                ) : null}
                {!actors && !loading ? <h1>No movie found!</h1> : null}
                {loading ? <Spinner /> : null}
            </div>
        )
    }
}
