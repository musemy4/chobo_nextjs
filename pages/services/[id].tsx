// react, nextjs
import { useRouter } from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

// component
import { Layout } from '../../components/layout'

export default function Detail() {
    const router = useRouter();
    console.log(router);

    return (
        <Layout title="Services | Next.js + tailwind + keycloak Example">
            <div>{router.query.title || 'loading... '}</div>
        </Layout>
    );
}

// export async function getServerSideProps({}: GetServerSideProps) {
    // client가 아닌 server에서 작동하기때문에 absolute url을 사용해야함
    // client는 브라우저에 url이 있다.
    // const { results } = await(await fetch(`http://localhost:3000/api/movie/${router.query.id}`)).json();
    // console.log(results);
    // return {
        // 반드시 props안에 객체로 return 해줄것
    //     props: {
    //         results
    //     }
    // } 
// }