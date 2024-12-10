import { useState } from "react";

export default function Counter() {
    const [ number, setNumber ] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                // +3이 아닌 +1이 된다. 
                // state가 변하는 시점에 스냅샷이 찍혀 초기값이 들어온다
                // setNumber(number + 1);
                // setNumber(number + 1);
                // setNumber(number + 1);

                // 업데이터 함수는 state 설정자 함수에 전달할 때
                // 1. React는 이벤트 핸들러의 다른 코드가 모두 실행된 후에 이 함수가 처리되도록 큐에 넣습니다.
                // 2. 다음 렌더링 중에 React는 큐를 순회하여 최종 업데이트된 state를 제공합니다.
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3</button>
        </>
    )
}