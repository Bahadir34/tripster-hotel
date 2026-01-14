import { type FC } from "react";
import { Loader as LoaderIcon } from "lucide-react";

interface Props {
  children?: React.ReactNode;
}

const Loader: FC<Props> = ({ children }) => {
  return (
    <div className="">
      {children}
      <div className="grid place-items-center mt-10">
        <LoaderIcon className="animate-spin text-blue-500 size-10" />
      </div>
    </div>
  );
};

export default Loader;
