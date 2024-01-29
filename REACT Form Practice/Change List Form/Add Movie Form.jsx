import { useState } from 'react';

function AddMovieForm({onAddMovie}) {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({title, synopsis, year})
    }
    return (
    <div className="AddMovieForm componentBox">
    <form onSubmit={handleSubmit}><br></br><br></br>


    <label>Movie Title:
    <input name="title" value={title}
    onChange={(e) => setTitle(e.target.value)} />
    </label><br></br><br></br>


    <label>Synopsis:
    <input name="synopsis" value={synopsis}
    onChange={(e) => setSynopsis(e.target.value)} />
    </label><br></br><br></br>


    <label>Year Released:
    <input name="year" type="number" value={year}
    onChange={(e) => setYear(e.target.value)} />
    </label><br></br><br></br>


    <button tpye="submit">Add Movie</button>
    </form>
    </div>
    )
    }

    export default AddMovieForm