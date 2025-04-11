import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function BioinformaticsSite() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-white max-w-5xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-bold text-center text-blue-800">Biyoinformatiğe Giriş 🧬</h1>
      <p className="text-center text-lg text-gray-700">
        Yeni başlayanlar için kaynaklar ve genomik analiz örnekleri
      </p>

      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-md shadow">
        <p className="text-sm text-gray-800">
          <strong>GATK (Genome Analysis Toolkit)</strong> genomik analizler için bir standart oluşturmayı amaçlamış programlama çerçevesidir. Biyoinformatik analizler genelde burada oluşturulmuş iş akışını ve içerdiği araçları takip eder. İnternet sayfasında analizler için kullanılan araçlar ve açıklamaları bulabilirsiniz: {" "}
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
        <TabsList className="grid grid-cols-2 w-full bg-blue-100 p-1 rounded-xl">
          <TabsTrigger value="courses">Kurslar</TabsTrigger>
          <TabsTrigger value="analysis">Analiz Kodları</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-md">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">R</h2>
                <p className="text-sm text-gray-700">
                  <a
                    href="https://www.datacamp.com/courses/free-introduction-to-r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Introduction to R - DataCamp
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">Python</h2>
                <p className="text-sm text-gray-700">
                  <a
                    href="https://www.datacamp.com/courses/intro-to-python-for-data-science"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Intro to Python for Data Science - DataCamp
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">Linux</h2>
                <p className="text-sm text-gray-700">
                  <a
                    href="https://training.linuxfoundation.org/training/introduction-to-linux/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Introduction to Linux - The Linux Foundation
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">Bash</h2>
                <p className="text-sm text-gray-700">
                  <a
                    href="https://www.datacamp.com/courses/introduction-to-bash-scripting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Introduction to Bash Scripting - DataCamp
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="space-y-6">
            <Card className="shadow-md">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">Somatik Analiz</h2>
                <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
parabricks somatic \
  --ref reference.fa \
  --in-tumor tumor.bam \
  --in-normal normal.bam \
  --out-vcf somatic.vcf
                </pre>
                <p className="mt-2 text-sm text-gray-700">
                  Daha fazla bilgi için: {" "}
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

            <Card className="shadow-md">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">Germline Analiz</h2>
                <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
parabricks germline \
  --ref reference.fa \
  --in-bam sample.bam \
  --out-vcf germline.vcf
                </pre>
                <p className="mt-2 text-sm text-gray-700">
                  Daha fazla bilgi için: {" "}
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
