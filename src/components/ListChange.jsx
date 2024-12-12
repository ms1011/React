import { useState } from "react";

let nextId = 0;

export default function ListChange() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    /**
     * react 에서는 push()를 사용하여 배열을 변경하지 않는다.
     * 객체와 마찬가지로 React state에서 배열은 읽기 전용으로 처리해야 한다. push()나 pop() 같은 함수로 배열을 변경해서는 안된다.
     * 대신 배열을 업데이트할 때마다 새 배열을 state 설정 함수에 전달해야한다.
     * immer를 사용하는 것도 가능하다.
     */
    return (
        <>
            <h1>Inspiring sculptors</h1>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setName('');
                setArtists([
                    ...artists,
                    { id: nextId++, name: name }
                ]);
            }}>Add</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}