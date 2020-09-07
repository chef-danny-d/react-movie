import React, { Component } from 'react'
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
} from '../../config'
import {
    HeroImage,
    SearchBar,
    FourColGrid,
    MovieThumb,
    LoadMoreBtn,
    Spinner,
} from '../elements'
import '../../App.min.css'
import { createEndpoint } from '../../helpers'

class Home extends Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: null,
    }

    //fetching the API objects using the URL and KEY and other attributes
    componentDidMount() {
        if (localStorage.getItem('Home')) {
            const state = JSON.parse(localStorage.getItem('Home'))
            this.setState({ ...state })
        } else {
            this.setState({ loading: true })
            this.fetchItems(
                createEndpoint(
                    API_URL,
                    API_KEY,
                    'movie/popular',
                    false,
                    '',
                    this.state.currentPage
                )
            )
        }
    }

    updateItems = (loadMore, searchTerm) => {
        this.setState(
            {
                movies: loadMore ? [...this.state.movies] : [],
                loading: true,
                searchTerm: loadMore ? this.state.searchTerm : searchTerm,
            },
            () => {
                this.fetchItems(
                    !this.state.searchTerm
                        ? createEndpoint(
                              API_URL,
                              API_KEY,
                              'movie/popular',
                              loadMore,
                              '',
                              this.state.currentPage
                          )
                        : createEndpoint(
                              API_URL,
                              API_KEY,
                              'search/movie',
                              loadMore,
                              this.state.searchTerm,
                              this.state.currentPage
                          )
                )
            }
        )
    }

    //method to extract the data from the API
    fetchItems = async (endpoint) => {
        const { movies, heroImage } = this.state
        const result = await (await fetch(endpoint)).json()
        try {
            this.setState(
                {
                    //updating the state to dynamic fetched data
                    movies: [...movies, ...result.results],
                    heroImage: heroImage || result.results[0],
                    loading: false,
                    currentPage: result.page,
                    totalPages: result.total_pages,
                },
                () => {
                    localStorage.setItem('Home', JSON.stringify(this.state))
                }
            )
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const {
            movies,
            heroImage,
            loading,
            currentPage,
            totalPages,
            searchTerm,
        } = this.state
        return (
            <div className="rmdb-home">
                {heroImage && !searchTerm ? (
                    <div>
                        <HeroImage
                            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                            title={heroImage.original_title}
                            text={heroImage.overview}
                        />
                    </div>
                ) : null}
                <SearchBar callback={this.updateItems} />
                <div className="rmdb-home-grid">
                    <FourColGrid
                        header={searchTerm ? 'Search Result' : 'Popular Movies'}
                        loading={loading}
                    >
                        {movies.map((element, i) => {
                            return (
                                <MovieThumb
                                    key={i}
                                    clickable={true}
                                    image={
                                        element.poster_path
                                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                                            : 'images/no_image.jpg'
                                    }
                                    movieID={element.id}
                                    movieName={element.original_title}
                                />
                            )
                        })}
                    </FourColGrid>
                    {loading ? <Spinner /> : null}
                    {currentPage < totalPages && !loading ? (
                        <LoadMoreBtn
                            text="Load More"
                            onClick={this.updateItems}
                        />
                    ) : null}
                </div>
            </div>
        )
    }
}

export default Home
