interface Props {
  className?: string;
}

const Signature: React.FC<Props> = ({ className }) => {
  return (
    <span
      className={`text-2xl font-handwriting text-accent tracking-widest ${className}`}
    >
      Charles Reid
    </span>
  );
};

export default Signature;
