import React from "react";
import { Card, CardContent } from "../components/ui/card.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.tsx";
import { Button } from "../components/ui/button.tsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-950 text-white overflow-auto">
      <div className="max-w-4xl mx-auto p-6 space-y-10">
        <h1 className="text-4xl font-bold text-center text-white">
          Biyoinformatiğe Giriş 🧬
        </h1>
        <p className="text-center text-lg text-white">
          Yeni başlayanlar için kaynaklar ve genomik analiz örnekleri
        </p>

        <div className="bg-blue-900/60 border-l-4 border-teal-400 p-6 rounded-md">
          <p className="text-base text-white">
            <strong className="text-lg font-semibold text-white">
              GATK (Genome Analysis Toolkit)
            </strong>{" "}
            genomik analizler için bir standart oluşturmayı amaçlamış programlama
            çerçevesidir. Biyoinformatik analizler genelde burada oluşturulmuş iş
            akışını ve içerdiği araçları takip eder. İnternet sayfasında analizler
            için kullanılan araçlar ve açıklamaları bulabilirsiniz: {" "}
            <a
              href="https://gatk.broadinstitute.org/hc/en-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-teal-300"
            >
              GATK Resmi Sayfası
            </a>
          </p>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid grid-cols-2 w-full mb-6 bg-blue-800/80 backdrop-blur rounded-md text-white">
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
                  className="w-52 h-44 bg-blue-900/80 text-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-white/10 backdrop-blur"
                >
                  <CardContent className="p-4 text-center h-full flex flex-col justify-center">
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      {course.title}
                    </h3>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline hover:text-teal-300 text-xs"
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
              <Card className="bg-blue-900/80 text-white border border-white/10 backdrop-blur">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold text-white">Somatik Analiz</h2>
                  <pre className="bg-blue-950 p-2 rounded text-sm overflow-auto text-white">
parabricks somatic \
  --ref reference.fa \
  --in-tumor tumor.bam \
  --in-normal normal.bam \
  --out-vcf somatic.vcf</pre>
                  <p className="mt-2 text-sm text-white">
                    Daha fazla bilgi için: {" "}
                    <a
                      href="https://docs.nvidia.com/clara/parabricks/3.7.0/documentation/tooldocs/man_somatic.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline hover:text-teal-300"
                    >
                      NVIDIA Parabricks - Somatik Dokümantasyonu
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/80 text-white border border-white/10 backdrop-blur">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold text-white">Germline Analiz</h2>
                  <pre className="bg-blue-950 p-2 rounded text-sm overflow-auto text-white">
parabricks germline \
  --ref reference.fa \
  --in-bam sample.bam \
  --out-vcf germline.vcf</pre>
                  <p className="mt-2 text-sm text-white">
                    Daha fazla bilgi için: {" "}
                    <a
                      href="https://docs.nvidia.com/clara/parabricks/4.4.0/documentation/tooldocs/man_germline.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline hover:text-teal-300"
                    >
                      NVIDIA Parabricks - Germline Dokümantasyonu
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

