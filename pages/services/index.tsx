import { useEffect, useState } from 'react';
import { Layout } from '../../components/layout'


export default function Services() {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(()=> {
        (async () => {
            const { results } = await( 
                await fetch('/api/movies')
            ).json();
            setMovies(results);
        })();
    }, []);

    return (
        <Layout title="Services | Next.js + tailwind + keycloak Example">
            <p>서비스페이지</p>
            {!movies && <h4>Loading...</h4>}
            {movies?.map(movie => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </Layout>
    )
}