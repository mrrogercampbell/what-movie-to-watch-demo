import { useState } from 'react'

const Header = ({ fetchMovieData }) => {
    const [searchedValue, setSearchedValue] = useState('')
    const [selectedTypeValue, setSelectedTypeValue] = useState('')

    const handleInput = (e) => {
        e.preventDefault()
        setSearchedValue(e.target.value)
    }

    const handleSelectChange = (e) => {
        e.preventDefault()
        setSelectedTypeValue(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        fetchMovieData(searchedValue, selectedTypeValue)
    }

    return (
        <div className='container-header'>
            <h1 className='what-title'>What to watch</h1>
            <div>
                <input
                    type='text'
                    placeholder='Title'
                    onChange={handleInput}
                />
                <select
                    id="selection"
                    name="selection"
                    placeholder='Type'
                    onChange={handleSelectChange}
                >
                    <option value="" hidden >Type</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </select>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>

    );
};

export default Header