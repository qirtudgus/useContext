import User from './User';
import React, { createContext, useState } from 'react';
import Test from './Test';

export const UserContext = createContext(null);

function App() {
  const [num,setNum] = useState(0);
  
  return (
    <UserContext.Provider value={{name:"sungtt입니다",age:"200살입니다.", num:num, setNum:setNum}}>
     <User/>

  <Test num={num} setNum={setNum} />


  </UserContext.Provider>
  
  );

}

export default App;
