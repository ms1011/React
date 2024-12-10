import { useState } from "react";

export default function Form() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!');
    
    if (isSent) {
        return <h1>메세지 발송 중...</h1>
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
        }}>
            <textarea
                placeholder="메세지를 입력하세요"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">보내기</button>
        </form>
    )
}

function sendMessage(message) {
    console.log(message);
}