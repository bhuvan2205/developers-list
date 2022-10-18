import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PageNotFound = () => {

    const router = useRouter();

    useEffect(() => {

        setTimeout(() => {

            // To go back using history
            // router.go(-1);

            // To push to Home 
            router.replace('/');
            
        }, 3000);

        console.log('UseEffect Running');
    }, []);

    return (
        <div className='not-found'>
            <h1>Oooops....</h1>
            <h2>The page cannot be found.</h2>
            <p>Go back to <Link href='/'><a>Home</a></Link></p>
        </div>
    )
}

export default PageNotFound;