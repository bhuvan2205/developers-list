import React from 'react'

const Details = ({ user }) => {
    return (
        <div className='content'>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            <p>City: {user.address.city}</p>
        </div>
    )
}

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(user => {

        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}


export const getStaticProps = async (context) => {

    const id = context.params.id;

    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {
            user: data
        }
    }
}

export default Details;