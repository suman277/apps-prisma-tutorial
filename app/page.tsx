import { addPost, getPost } from "@/action/action";

export async function Home() {
  const data = await getPost();
  return (
    <main className="h-full flex w-full justify-center items-center">
      <form action={addPost}>
        <input
          className="p-2 text-black"
          placeholder="Enter your name"
          name="username"
          required
        />
        <button className="px-4 py-2 bg-fuchsia-600" type="submit">
          Add
        </button>
      </form>
      <div className="pl-10">
        {data.map((item, index) => (
          <div key={index}>
            <div className="p-5 bg-gray-300 text-black mb-2">
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.created_At.toString()}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
