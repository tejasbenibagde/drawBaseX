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
        <section className="w-full h-auto py-12 md:py-24 lg:py-32 xl:py-64 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center space-y-4 text-center justify-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transform Diagrams into Database Schemas
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our open-source tool converts your visual diagrams into
                  precise database schemas, streamlining your development
                  process.
                </p>
              </div>
              <div className="space-x-4 w-full flex items-center justify-center">
                <Link href={"/editor"}>
                  <Button
                    size={"lg"}
                    className="flex items-center justify-center gap-2"
                    variant={"expandIcon"}
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
                automatically generate the corresponding schema. It&apos;s that easy!
              </p>
            </div>
          </div>
        </section>

        {/* OpenSource */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Open Source
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our project is open source and welcomes contributions from the
                  community. Help us improve and expand the capabilities of DB
                  Schema Generator.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={"https://github.com/tejasbenibagde/drawBaseX"}>
                  <Button
                    variant={"gooeyLeft"}
                    size={"lg"}
                    className="flex gap-2 items-center justify-center"
                  >
                    <Github size={"20"} />
                    <span>View on GitHub</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
