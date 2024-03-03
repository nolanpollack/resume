import { ReactNode } from "react";

function Box(props: { children?: ReactNode }) {
  return (
    <div className="m-2 items-center justify-center rounded-lg bg-gray-100 px-5 py-4 shadow-xl dark:bg-slate-800">
      {props.children}
    </div>
  );
}

export default Box;
