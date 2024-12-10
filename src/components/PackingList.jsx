function Item({ name, isPacked }) {
    // 기본적인 조건부 랜더링
    // if (isPacked) {
    //     return <li className="item">{name} ✅</li>;
    // }
    // return <li className="item">{name}</li>;
    // return (
    //     <li className="item">
    //         {/* {isPacked ? name + ' ✅' : name} 삼항 연산자 이용 */}
    //         {name} {isPacked && '✅'}
    //     </li>
    // );

    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✅"}
            </del>
        );
    }

    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>패킹 리스트</h1>
            <ul>
                <Item
                    isPacked={true}
                    name={"등산복"}
                />
                <Item
                    isPacked={true}
                    name={"등산화"}
                />
                <Item
                    isPacked={false}
                    name={"등산스틱"}
                />
            </ul>
        </section>
    );
}