interface Props {
  children: React.ReactNode;
}

const MemoirsLayout = ({ children }: Props) => {
  return (
    <div className="flex justify-center h-64 bg-accent relative w-full">
      <div className="bg-background relative top-32 sm:w-11/12 md:w-9/12 lg:w-6/12 h-fit rounded-lg p-10 shadow-md">
        {children}
      </div>
    </div>
  );
};

export default MemoirsLayout;
