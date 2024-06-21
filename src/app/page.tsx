import Link from "next/link";
const request = async (url: string) => {
  const req = await fetch(url);
  const data = await req.json();

  return data;
};
async function Home() {
  const data = await request("https://dummyjson.com/products");
  console.log(data);

  return (
    <div>
      <h1>
        {data.products.map((item) => {
          return (
            <Link href={`/product/${item.id}`}>
              <h1>{item.title}</h1>
            </Link>
          );
        })}
      </h1>
    </div>
  );
}

export default Home;
