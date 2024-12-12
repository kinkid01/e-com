import Image from "next/image";
import banner from "../assets/banner.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
        <div className="flex items-center bg-secondary md:h-96">
          <div className="space-y-7 p-10 text-center md:w-1/2">
            <h1 className="text-3xl font-bold md:text-4xl">
              Your Home, Your Vision!
            </h1>
            <p className="">
              Luxury is calling, answer with elegance. Bring it home, redefine
              your style, and turn every moment into something extraordinary
            </p>
            <Button asChild>
              <Link href="/shop">
                Shop Now <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
          <div className="relative hidden h-full w-1/2 md:block">
            <Image
              src={banner}
              alt="shopswift banner"
              className="h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
