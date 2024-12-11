import { useImmer } from 'use-immer';

/**
 * Immer가 제공하는 draft는 Proxy 객체 타입으로, 하는 일을 '기록'합니다. 객체를 원하는만큼 자유롭게 변경할 수 있다.
 * Immer는 내부적으로 draft의 어느 부분이 변경되었는지 알아내어, 변경사항을 포함한 완전히 새로운 객체를 생성합니다.
 * 
 * state를 변경하는 것보다 Immer를 사용하는 이유
 * 1. 디버깅: state를 변경하지 않는다면, 과거 로그들은 최근 state 변경 사항들에 의해 지워지지 않는다. 따라서 state가 렌더링 사이에 어떻게 바뀌었는지 명확하게 알 수 있다.
 * 2. 최적화: 이전 props 또는 state가 변경된 사항과 동일할 때 일을 건너뛴다.
 * 3. 새로운 기능: state의 과거 버전을 변경한다면, 스냅샷처럼 다루어지는 새로운 기능을 사용하지 못할 수 있다.
 * 4. 편의성: 요구사항 변화에 변화하기 쉽고, 더 간단한 구현이 가능하다.
 */

export default function FormImmer() {
    const [person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleNameChange(e) {
        updatePerson(draft => {
            draft.name = e.target.value;
        });
    }

    function handleTitleChange(e) {
        updatePerson(draft => {
          draft.artwork.title = e.target.value;
        });
      }
    
    function handleCityChange(e) {
    updatePerson(draft => {
        draft.artwork.city = e.target.value;
    });
    }

    function handleImageChange(e) {
    updatePerson(draft => {
        draft.artwork.image = e.target.value;
    });
    }

    return (
    <>
        <label>
        Name:
        <input
            value={person.name}
            onChange={handleNameChange}
        />
        </label>
        <label>
        Title:
        <input
            value={person.artwork.title}
            onChange={handleTitleChange}
        />
        </label>
        <label>
        City:
        <input
            value={person.artwork.city}
            onChange={handleCityChange}
        />
        </label>
        <label>
        Image:
        <input
            value={person.artwork.image}
            onChange={handleImageChange}
        />
        </label>
        <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
        </p>
        <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
        />
    </>
    );
}