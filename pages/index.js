import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10 bg-[url('/images/dna-pattern-dark.svg')] bg-fixed bg-cover bg-center text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-teal-300">Biyoinformatiğe Giriş</h1>
      <p className="text-center text-lg text-gray-300">
        Yeni başlayanlar için kaynaklar ve genomik analiz örnekleri
      </p>

      <div className="bg-teal-950/80 border-l-4 border-teal-500 p-6 rounded-md">
        <p className="text-base text-gray-100">
          <strong className="text-lg font-semibold text-teal-300">GATK (Genome Analysis Toolkit)</strong> genomik analizler için bir standart oluşturmayı amaçlamış programlama çerçevesidir. Biyoinformatik analizler genelde burada oluşturulmuş iş akışını ve içerdiği araçları takip eder. İnternet sayfasında analizler için kullanılan araçlar ve açıklamaları bulabilirsiniz: {" "}
          <a
            href="https://gatk.broadinstitute.org/hc/en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GATK Resmi Sayfası
          </a>
        </p>
      </div>

      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-6 bg-teal-800 rounded-md text-white">
          <TabsTrigger value="courses">Kurslar</TabsTrigger>
          <TabsTrigger value="analysis">Analiz Kodları</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 justify-center px-4 md:px-0">
            {[
              {
                title: "R",
                link: "https://www.datacamp.com/courses/free-introduction-to-r",
                label: "Introduction to R – DataCamp",
              },
              {
                title: "Python",
                link: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
                label: "Intro to Python for Data Science – DataCamp",
              },
              {
                title: "Linux",
                link: "https://training.linuxfoundation.org/training/introduction-to-linux/",
                label: "Introduction to Linux – Linux Foundation",
              },
              {
                title: "Bash",
                link: "https://www.datacamp.com/courses/introduction-to-bash-scripting",
                label: "Introduction to Bash Scripting – DataCamp",
              },
            ].map((course, i) => (
              <Card
                key={i}
                className="w-52 h-44 bg-gray-800 text-white rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-shadow duration-300 border border-teal-700"
              >
                <CardContent className="p-4 text-center h-full flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-1 text-teal-300 drop-shadow-sm">
                    {course.title}
                  </h3>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-xs"
                  >
                    {course.label}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="space-y-6">
            <Card className="bg-gray-800 text-white border border-teal-700">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold text-teal-300">Somatik Analiz</h2>
                <pre className="bg-gray-900 p-2 rounded text-sm overflow-auto">
parabricks somatic \
  --ref reference.fa \
  --in-tumor tumor.bam \
  --in-normal normal.bam \
  --out-vcf somatic.vcf</pre>
                <p className="mt-2 text-sm text-gray-300">
                  Daha fazla bilgi için: {" "}
                  <a
                    href="https://docs.nvidia.com/clara/parabricks/3.7.0/documentation/tooldocs/man_somatic.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    NVIDIA Parabricks - Somatik Dokümantasyonu
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 text-white border border-teal-700">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold text-teal-300">Germline Analiz</h2>
                <pre className="bg-gray-900 p-2 rounded text-sm overflow-auto">
parabricks germline \
  --ref reference.fa \
  --in-bam sample.bam \
  --out-vcf germline.vcf</pre>
                <p className="mt-2 text-sm text-gray-300">
                  Daha fazla bilgi için: {" "}
                  <a
                    href="https://docs.nvidia.com/clara/parabricks/4.4.0/documentation/tooldocs/man_germline.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    NVIDIA Parabricks - Germline Dokümantasyonu
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

