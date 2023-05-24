interface Props {
  children?: string;
}

const Badge = ({ children }: Props) => {
  return (
    <span className="bg-secondary rounded-full py-2 px-4 text-xs font-heading max-w-fit">
      {children}
    </span>
  );
};

export default Badge;
