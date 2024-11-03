import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Github, Layout, Share2 } from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-auto py-12 md:py-24 lg:py-32 xl:py-64 flex flex-col items-center justify-center overflow-hidden">
          {/* Background for the hero section */}
          <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#292524_1px,transparent_1px),linear-gradient(to_bottom,#292524_1px,transparent_1px)]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] dark:bg-[radial-gradient(circle_800px_at_100%_200px,#78716c,transparent)]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center justify-center text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Transform Diagrams into Database Schemas
              </h1>
              <p className="mx-auto max-w-[700px] text-stone-500 md:text-xl dark:text-stone-400">
                Our open-source tool converts your visual diagrams into precise
                database schemas, streamlining your development process.
              </p>
              <div className="space-x-4 flex items-center justify-center">
                <Link href={"/editor"}>
                  <Button
                    size="lg"
                    className="flex items-center gap-2"
                    variant="expandIcon"
                    Icon={ArrowRight}
                    iconPlacement="right"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary flex items-end justify-center">
          <div className="container px-4 md:px-6 flex w-full flex-col">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Layout className="h-6 w-6 mb-2" />
                  <CardTitle>Visual to Schema</CardTitle>
                </CardHeader>
                <CardContent>
                  Convert your visual diagrams directly into database schemas
                  with ease.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-6 w-6 mb-2" />
                  <CardTitle>Multiple DB Support</CardTitle>
                </CardHeader>
                <CardContent>
                  Generate schemas for various database systems including MySQL,
                  PostgreSQL, and more.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Share2 className="h-6 w-6 mb-2" />
                  <CardTitle>Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  Share and collaborate on database designs with your team in
                  real-time.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/example.png"
                alt="DB Schema Generator Preview"
                width={1000}
                height={750}
                placeholder="blur"
                blurDataURL="/example.png"
                className="rounded-lg object-cover w-full max-w-3xl aspect-video"
              />
              <p className="text-gray-500 dark:text-gray-400 max-w-[600px] text-center">
                Simply draw your database structure, and our tool will
                automatically generate the corresponding schema. It&apos;s that
                easy!
              </p>
            </div>
          </div>
        </section>

        {/* OpenSource */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Open Source
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Our project is open source and welcomes contributions from the
                community. Help us improve and expand the capabilities of DB
                Schema Generator.
              </p>
              <Link href="https://github.com/tejasbenibagde/drawBaseX">
                <Button
                  variant="gooeyLeft"
                  size="lg"
                  className="flex gap-2 items-center justify-center"
                >
                  <Github size="20" />
                  <span>View on GitHub</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
