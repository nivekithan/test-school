import React from "react";

export type TopicProps = {
  topic: string;
  children: React.ReactNode;
};

export const Topic = ({ topic, children }: TopicProps) => {
  return (
    <>
      <h2 className="font-semibold text-md">{topic}</h2>
      {children}
    </>
  );
};
