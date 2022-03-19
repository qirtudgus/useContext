0. prop을 어떤 자식 컴포넌트든 단번에 접근가능하게 해준다. ﻿(prop driling 방지)



1. createContext로 context를 생성한다.



2. context.Provider로 컴포넌트를 감싸주고 value로 값을 전달해준다.



3. useContext를 통해 context값을 사용할 수 있다.