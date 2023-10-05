import { useState, useEffect } from "react";
import Item from "./Item";
function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [changed, setChanged] = useState(0);
  const [checked, setChecked] = useState(0);

  useEffect(() => {
    setChanged("A");
  }, [countA]);
  useEffect(() => {
    setChanged("B");
  }, [countB]);
  useEffect(() => {
    setChanged("C");
  }, [countC]);
  useEffect(() => {
    setChecked("");
  }, [checked]);
  return (
    <>
      <article>
        <section className={"changed"}>
          <h1>방금 변경된 아이템</h1>
          <div>{changed}</div>
        </section>
        <section className={"checked"}>
          <h1>체크된 아이템 개수</h1>
          <div>{checked}</div>
        </section>
        {/* 아이템 리스트 */}
        <section className={"list"}>
          <h1>아이템 리스트</h1>
          <ol>
            {/* 아이템 A */}
            <li>
              <input
                type="checkbox"
                onChange={() => {
                  setChecked(checked + 1);
                }}
              ></input>
              <span>A</span>
              <div>
                <div>{countA}</div>
                <div className={"button-list"}>
                  <button
                    onClick={() => {
                      setCountA(countA - 1); //setState
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      setCountA(countA + 1); //setState
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
            {/* 아이템 B */}
            <li>
              <input
                type="checkbox"
                onChange={() => {
                  setChecked(checked + 1);
                }}
              ></input>
              <span>B</span>
              <div>
                <div>{countB}</div>
                <div className={"button-list"}>
                  <button
                    onClick={() => {
                      setCountB(countB - 1); //setState
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      setCountB(countB + 1); //setState
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
            {/* 아이템 C */}
            <li>
              <input
                type="checkbox"
                onChange={() => {
                  setChecked(checked + 1);
                }}
              ></input>
              <span>C</span>
              <div>
                <div>{countC}</div>
                <div className={"button-list"}>
                  <button
                    onClick={() => {
                      setCountC(countC - 1); //setState
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      setCountC(countC + 1); //setState
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          </ol>
        </section>
      </article>
      <style jsx>{`
        article {
          height: 100vh;
          width: 100vw;
          max-width: 30rem;
          margin: 0 auto;
          padding: 1.5rem;
          background: #ffc0cb21;
        }

        article h1 {
          padding: 0 0.5rem;
        }
        section.changed {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        section.changed > div {
          color: purple;
          font-weight: 800;
        }
        section.list {
          display: flex;
          flex-direction: column;
        }
        section.list ol {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: white;
          box-shadow: 0px 2px 10px 0px rgb(182 158 198 / 15%);
          height: 2rem;
        }
        li > span {
          font-size: 1.5rem;
          font-weight: 500;
        }
        li > div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        li > div > div:first-child {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 5px;
          background: #efeded;
          font-weight: 700;
        }
        li > div > div.button-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        li > div > div.button-list button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.7rem;
          height: 1.7rem;
          cursor: pointer;
          border-radius: 5px;
          border: none;
          background: #f6ecff;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default App;
