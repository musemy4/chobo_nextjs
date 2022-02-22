// react, nextjs
import { useRouter } from 'next/router';


export const BackButton = () => {
    const router = useRouter();
    return (
        <button onClick={() => router.back()}>뒤로가기</button>
    )
}