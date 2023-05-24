interface Props {
  children?: string;
}

const Badge = ({ children }: Props) => {
  return (
    <span className="flex justify-center bg-secondary rounded-full py-2 px-4 text-xs font-heading max-w-fit h-fit text-center">
      {children}
    </span>
  );
};

export default Badge;
