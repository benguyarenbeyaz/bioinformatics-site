import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold text-center">Biyoinformatiğe Giriş</h1>
      <p className="text-center text-lg text-gray-600">
        Yeni başlayanlar için kaynaklar ve genomik analiz örnekleri
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
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
        <TabsList className="grid grid-cols-2 w-full mb-6">
          <TabsTrigger value="courses">Kurslar</TabsTrigger>
          <TabsTrigger value="analysis">Analiz Kodları</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-4 md:px-0">
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
                className="w-full max-w-sm bg-white rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-shadow duration-300 border border-gray-100"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-3 text-bio drop-shadow-sm">
                    {course.title}
                  </h3>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
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
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">Somatik Analiz</h2>
                <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
parabricks somatic \
  --ref reference.fa \
  --in-tumor tumor.bam \
  --in-normal normal.bam \
  --out-vcf somatic.vcf</pre>
                <p className="mt-2 text-sm text-gray-700">
                  Daha fazla bilgi için:{" "}
                  <a
                    href="https://docs.nvidia.com/clara/parabricks/3.7.0/documentation/tooldocs/man_somatic.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    NVIDIA Parabricks - Somatik Dokümantasyonu
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">Germline Analiz</h2>
                <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
parabricks germline \
  --ref reference.fa \
  --in-bam sample.bam \
  --out-vcf germline.vcf</pre>
                <p className="mt-2 text-sm text-gray-700">
                  Daha fazla bilgi için:{" "}
                  <a
                    href="https://docs.nvidia.com/clara/parabricks/4.4.0/documentation/tooldocs/man_germline.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
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
