interface Props {
  title: string;
  timestamp: string;
  content?: string;
}

const Entry = ({ title, timestamp, content }: Props) => {
  return (
    <article className="flex py-2 px-8 bg-secondary rounded-md w-full">
      <div>
        <h4 className="text-2xl">{title}</h4>
        <h5 className="font-mono text-xs">{timestamp}</h5>
      </div>
    </article>
  );
};

export default Entry;
