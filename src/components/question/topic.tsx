import React from "react";

export type TopicProps = {
  topic: string;
  children: React.ReactNode;
};

export const Topic = ({ topic, children }: TopicProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <h2 className="font-semibold text-lg">{topic}</h2>
        {children}
      </div>
    </>
  );
};
