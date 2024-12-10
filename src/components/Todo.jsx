import React from "react";

function Todo() {
  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat(
      'ko-KR',
      { weekday: 'long' }
    ).format(date);
  }

    return (
      <>
        <h1>To Do List for {formatDate(today)}</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
      </>
    );
  }

export default Todo;