import { LasticaFont } from "lib";

export default function Marketplace() {
  return (
    <section className="border-b-2 bg-[url(https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-cover p-20">
      <h1 className={`text-center text-2xl tracking-widest text-white lg:text-4xl ${LasticaFont.className}`}>Marketplace</h1>
    </section>
  );
}
