import React, { type FC } from "react";
import { BadgeCheck } from "lucide-react";
import { BadgeAlert } from "lucide-react";

interface Props {
  availability: boolean;
  expanded?: boolean;
}
const Status: FC<Props> = ({ availability, expanded }) => {
  return (
    <div className="flex gap-2 item-center justify-center">
      {availability ? (
        <>
          {expanded && <span className="text-green-500">Available</span>}
          <BadgeCheck className="text-green-500" />
        </>
      ) : (
        <>
          {expanded && <span className="text-red-500">Not available</span>}
          <BadgeAlert className="text-red-500" />
        </>
      )}
    </div>
  );
};

export default Status;
