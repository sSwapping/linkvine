import Hero from "@/components/Hero";
import NavigationBar from "@/components/Navigation";
export default function Home() {
  return (
    <main className='relative'>
      <header>
        <NavigationBar />
      </header>
      <Hero />
    </main>
  );
}
