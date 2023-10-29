import { Billboard } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (): Promise<Billboard> => {

  const res = await fetch(URL);
  const data = await res.json();
  return data[0];
};

export default getBillboard;
