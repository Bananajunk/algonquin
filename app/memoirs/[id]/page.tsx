interface Params {
  id: string;
}

const Memoir = ({ params: { id } }: { params: Params }) => {
  return <div>{id}</div>;
};

export default Memoir;
