import NextJSDefault from "@/app/NextJSDefault";
import Nuqs from "@/app/Nuqs";


export default function Home() {

    console.log("PAGE rendered")
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-8 pb-20 gap-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <NextJSDefault/>
        <Nuqs/>
    </div>
  );
}
