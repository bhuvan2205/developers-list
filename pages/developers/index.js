import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Developers.module.css';

const index = ({users}) => {
  return (
    <div className='content'>
      <h1>All Developers</h1>
      {users.map((user)=> (
        <Link href={`/developers/${user.id}`} key={user.id}>
          <a className={styles.single}><h3>{user.name}</h3></a>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      users: data
    }
  }
}

export default index;