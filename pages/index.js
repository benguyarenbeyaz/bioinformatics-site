import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function BioinformaticsSite() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-white max-w-5xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800">Biyoinformatiğe Giriş 🧬</h1>
      <p className="text-center text-lg text-gray-700">
        Yeni başlayanlar için kaynaklar ve genomik analiz örnekleri
      </p>

      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm">
        <p className="text-sm text-gray-800">
          <strong>GATK (Genome Analysis Toolkit)</strong> genomik analizler için bir standart oluşturmayı amaçlamış programlama çerçevesidir. Biyoinformatik analizler genelde burada oluşturulmuş iş akışını ve içerdiği araçları takip eder. İnternet sayfasında analizler için kullanılan araçlar ve açıklamaları bulabilirsiniz:{" "}
          <a
            href="https://gatk.broadinstitute.org/hc/en-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GATK Resmi Sayfası
          </a>
        </p>
      </div>

      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid grid-cols-2 gap-2 bg-blue-100 p-1 rounded-xl">
          <TabsTrigger value="courses" className="text-sm">Kurslar</TabsTrigger>
          <TabsTrigger value="analysis" className="text-sm">Analiz Kodları</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "R",
                url: "https://www.datacamp.com/courses/free-introduction-to-r",
                label: "Introduction to R - DataCamp"
              },
              {
                title: "Python",
                url: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
                label: "Intro to Python for Data Science - DataCamp"
              },
              {
                title: "Linux",
                url: "https://training.linuxfoundation.org/training/introduction-to-linux/",
                label: "Introduction to Linux - The Linux Foundation"
              },
              {
                title: "Bash",
                url: "https://www.datacamp.com/courses/introduction-to-bash-scripting",
                label: "Introduction to Bash Scripting - DataCamp"
              }
            ].map(({ title, url, label }) => (
              <Card key={title} className="shadow">
                <CardContent className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="text-sm text-gray-700">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {label}
                    </a>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="space-y-6">
            {[
              {
                title: "Somatik Analiz",
                command: `parabricks somatic \n  --ref reference.fa \\\n  --in-tumor tumor.bam \\\n  --in-normal normal.bam \\\n  --out-vcf somatic.vcf`,
                url: "https://docs.nvidia.com/clara/parabricks/3.7.0/documentation/tooldocs/man_somatic.html",
                docLabel: "NVIDIA Parabricks - Somatik Dokümantasyonu"
              },
              {
                title: "Germline Analiz",
                command: `parabricks germline \\\n  --ref reference.fa \\\n  --in-bam sample.bam \\\n  --out-vcf germline.vcf`,
                url: "https://docs.nvidia.com/clara/parabricks/4.4.0/documentation/tooldocs/man_germline.html",
                docLabel: "NVIDIA Parabricks - Germline Dokümantasyonu"
              }
            ].map(({ title, command, url, docLabel }) => (
              <Card key={title} className="shadow">
                <CardContent className="p-4 space-y-3">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <pre className="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap overflow-auto">
                    {command}
                  </pre>
                  <p className="text-sm text-gray-700">
                    Daha fazla bilgi için:{" "}
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {docLabel}
                    </a>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

