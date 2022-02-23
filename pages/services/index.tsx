// react, nextjs
import { useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// component
import { Layout } from '../../components/layout'

// interface
interface IMovieProps {
    id: number;
    backdrop_path: string;
    original_title: string;
    overview: string;
    poster_path: string;
    title: string;
    vote_average: number;
    genre_ids: [number];
  }


export default function Services({results}: InferGetServerSidePropsType<GetServerSideProps>) {
    const [movies, setMovies] = useState<any[]>([]);

    // useEffect(()=> {
    //     (async () => {
    //         const { results } = await( 
    //             await fetch('/api/movies')
    //         ).json();
    //         setMovies(results);
    //     })();
    // }, []);

    return (
        <Layout title="Services | Next.js + tailwind + keycloak Example">
            <p>서비스페이지</p>
            {/* {!movies && <h4>Loading...</h4>} */}
            {results?.map((movie: IMovieProps) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </Layout>
    )
}

// 서버에서 돌아감
// API_KEY를 숨길수도 있음(client에게 보이지 않음!)
export async function getServerSideProps({}: GetServerSideProps) {
    // client가 아닌 server에서 작동하기때문에 absolute url을 사용해야함
    // client는 브라우저에 url이 있다.
    const { results } = await(await fetch('http://localhost:3000/api/movies')).json();
    return {
        props: {
            results
        }
    } 
}

// loading을 먼저보여주고 데이터를 가져와서 뿌릴것이냐 => static shell 데이터를 나웆에 불러옴
// 데이터를 서버에서 다 가져와서 한꺼번에 보여줌 SSR NextJs