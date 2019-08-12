import React, { useState } from 'react';
import { Button } from 'antd';
import request from '../util/request';

interface pet {
  name: string,
  age: number,
}

function Home() {
  const [pets, setPets] = useState<pet[]>([]);
  const handleFetchGet = async () => {
    const result = await request('pets');
    setPets(result);
  }
  return (
    <div>
      <Button onClick={handleFetchGet}>fetch get</Button>
      {
        pets.map(pet => <p>{pet.name} {pet.age}</p>)
      }
    </div>
  )
}

export default Home;