"use client";

import { BaseResponse, Pagination } from "@/core/@types/base-response.type";
import { IMeeting } from "@/core/interfaces/meeting.interface";
import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";

export function Meetings({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [meetings, setMeetings] = useState<IMeeting[]>();
  const [loading, setLoading] = useState<boolean>(true);

  async function getMeetings() {
    const data = await axiosInstance.get<BaseResponse<Pagination<IMeeting>>>(
      `${process.env.NEXT_PUBLIC_API_URL}/v4/meetings`,
      {
        params: {
          page: 1,
          limit: 10,
        },
      }
    );

    return data.data;
  }

  useEffect(() => {
    getMeetings().then((data) => {
      setMeetings(data.data?.items);

      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        {!loading &&
          meetings?.map((meeting) => (
            <div key={meeting.id} className="flex gap-2 justify-between">
              <span>{meeting.title}</span>

              <span>
                {meeting.startDate &&
                  new Date(meeting.startDate).toLocaleDateString()}
              </span>
            </div>
          ))}

        {!loading && meetings?.length === 0 && (
          <span className="self-center py-5">No meetings found</span>
        )}

        {loading && (
          <div className="flex justify-center items-center h-32">
            <span>Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}
