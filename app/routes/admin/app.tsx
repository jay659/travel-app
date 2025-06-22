import React, { useEffect, useState } from 'react';

const App = () => {
  
  const [count , setCount ] = useState<number>(0);
  useEffect(()=>{
    console.log('useeffect',    count)
  },[count])

  return (
    <div style={{ padding: '20px' }}>
     <button onClick={()=> {
        setCount( count => count +1 )
        console.log(count)


     }}>count {count}</button>
    </div>
  );
};

export default App;