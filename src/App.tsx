import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const InputIcon = ({ type }: { type: any }) => {
  switch (type) {
    case 1:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-20 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      );
    case 2:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-20 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      );
    default:
      return null;
  }
};

function App() {
  const [row, setRow] = useState<any>({
    data: [null, null, null, null, null, null, null, null, null],
    player: 1,
    playerOne: [],
    playerTwo: [],
  });

  const handlePut = (index: number) => {
    setRow((prev: any) => {
      if (prev.data[index]) return prev;
      const newRow: any = structuredClone(prev);
      if (newRow.player === 1) {
        newRow.playerOne[prev.playerOne.length] = index;
        if (newRow.playerOne.length === 4) {
          const index = newRow.playerOne.splice(0, 1)[0];
          newRow.data[index] = null;
        }
      } else {
        newRow.playerTwo[prev.playerOne.length] = index;
        if (newRow.playerTwo.length === 4) {
          const index = newRow.playerTwo.splice(0, 1)[0];
          newRow.data[index] = null;
        }
      }
      newRow.data[index] = newRow.player;
      newRow.player = newRow.player === 1 ? 2 : 1;
      return newRow;
    });
  };

  useEffect(() => {
    const player = row.player === 1 ? 2 : 1;
    const conOne =
      row.data[0] === player &&
      row.data[1] === player &&
      row.data[2] === player;
    const conTwo =
      row.data[3] === player &&
      row.data[4] === player &&
      row.data[5] === player;
    const conThree =
      row.data[6] === player &&
      row.data[7] === player &&
      row.data[8] === player;
    const conFour =
      row.data[0] === player &&
      row.data[3] === player &&
      row.data[6] === player;
    const conFive =
      row.data[1] === player &&
      row.data[4] === player &&
      row.data[7] === player;
    const conSix =
      row.data[2] === player &&
      row.data[5] === player &&
      row.data[8] === player;
    const conSeven =
      row.data[0] === player &&
      row.data[4] === player &&
      row.data[8] === player;
    const conEight =
      row.data[2] === player &&
      row.data[4] === player &&
      row.data[6] === player;

    if (
      conOne ||
      conTwo ||
      conThree ||
      conFour ||
      conFive ||
      conSix ||
      conSeven ||
      conEight
    ) {
      toast.success(`Player ${player} win!`);
    }
  }, [row.data]);

  return (
    <>
      <Toaster />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="max-w-lg w-full p-5 border border-gray-400 rounded-md shadow-sm">
          <div className="grid grid-cols-3">
            <div
              onClick={() => {
                handlePut(0);
              }}
              className="border-r flex justify-center items-center  border-b h-[100px] border-gray-700"
            >
              <InputIcon type={row.data[0]} />
            </div>
            <div
              onClick={() => {
                handlePut(1);
              }}
              className=" border-r flex justify-center items-center  border-b h-[100px] border-gray-700"
            >
              <InputIcon type={row.data[1]} />
            </div>
            <div
              onClick={() => {
                handlePut(2);
              }}
              className=" flex justify-center items-center  border-b h-[100px] border-gray-700"
            >
              <InputIcon type={row.data[2]} />
            </div>
            <div
              onClick={() => {
                handlePut(3);
              }}
              className=" border-r flex  justify-center items-center  border-b h-[100px] border-gray-700"
            >
              <InputIcon type={row.data[3]} />
            </div>
            <div
              onClick={() => {
                handlePut(4);
              }}
              className=" border-r flex  justify-center items-center  border-b h-[100px] border-gray-700"
            >
              <InputIcon type={row.data[4]} />
            </div>
            <div
              onClick={() => {
                handlePut(5);
              }}
              className=" flex  justify-center items-center  border-b h-[100px] border-gray-700"
            >
              <InputIcon type={row.data[5]} />
            </div>
            <div
              onClick={() => {
                handlePut(6);
              }}
              className=" border-r flex  justify-center items-center  h-[100px] border-gray-700"
            >
              <InputIcon type={row.data[6]} />
            </div>
            <div
              onClick={() => {
                handlePut(7);
              }}
              className=" border-r flex  justify-center items-center  h-[100px] border-gray-700"
            >
              <InputIcon type={row.data[7]} />
            </div>
            <div
              onClick={() => {
                handlePut(8);
              }}
              className=" flex  justify-center items-center  h-[100px] border-gray-700"
            >
              <InputIcon type={row.data[8]} />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            onClick={() => {
              setRow({
                data: [null, null, null, null, null, null, null, null, null],
                player: 1,
                playerOne: [],
                playerTwo: [],
              });
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Restart the game
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
