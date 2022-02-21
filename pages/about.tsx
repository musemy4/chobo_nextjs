import { useEffect, useState } from 'react';
import { Layout } from '../components/layout'

const API_KEY= '3c3af03532b272f9371cfae3fdb6fdb8';

export default function About() {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        (async () => {
            const data = await( 
                await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            ).json();
            console.log(data);
        })();
    }, []);

    return (
        <Layout title="About | Next.js + tailwind + keycloak Example">
            <p>어바웃페이지</p>
        </Layout>


    )
}