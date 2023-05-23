interface Params {
  id: string;
}

const Story = ({ params: { id } }: { params: Params }) => {
  return <div>{id}</div>;
};

export default Story;
