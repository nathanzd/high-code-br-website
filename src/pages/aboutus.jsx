import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function AboutUS() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Sobre nós
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Somos uma empresa de tecnologia focada em desenvolver soluções inteligentes e personalizadas com Power Platform, Power BI e desenvolvimento web. Ajudamos empresas a automatizar processos, analisar dados com eficiência e tomar decisões estratégicas baseadas em informações reais. Inovação, agilidade e resultado são os pilares que nos movem.


              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div style={{display:"none"}} className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon  className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
               A HighCodeBR
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              Fundada em 2025, a HighCodeBR surgiu com o propósito de transformar a forma como empresas de todos os portes lidam com dados, processos e tecnologia. Acreditamos que o verdadeiro diferencial competitivo está na capacidade de entender, automatizar e potencializar a gestão da informação.
                
                 <br />
                <br />
                Somos uma empresa especializada em soluções digitais sob medida, com foco em Power Platform, Power BI, desenvolvimento web, automação de processos e RPA. Nosso objetivo é empoderar equipes com ferramentas inteligentes que promovem autonomia operacional, tomada de decisão estratégica e ganhos reais de produtividade.
                
                <br />
                <br />
                Nossa atuação vai além do desenvolvimento técnico. Combinamos conhecimento de negócio, experiência prática e inovação para oferecer consultorias especializadas, treinamentos imersivos e projetos personalizados que atendem às necessidades reais de cada cliente.
                <br />
                <br />
                Trabalhamos lado a lado com empresas que buscam eficiência, escalabilidade e resultados mensuráveis — seja por meio de dashboards interativos, aplicativos de negócios, fluxos automatizados ou integrações personalizadas.

                <br />
                <br />
                Na HighCodeBR, não entregamos apenas soluções tecnológicas. Entregamos evolução, impacto e valor. Transformar dados em crescimento não é só o nosso trabalho — é a nossa missão.

                <br />
                <br />



               </Typography>
              <Button variant="filled">Contato</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/human_x_robot.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">A melhor maneira de prever o futuro é criá-lo</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Inove. Construa. Transforme.
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Na HighCodeBR, moldamos o futuro unindo tecnologia, inteligência e visão estratégica.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-5 pb-24">
        <div className="container mx-auto">
          <PageTitle section="Nosso Time" heading="Nossos especialistas">
          Nossos especialistas unem experiência e inovação para criar soluções em Power Platform, Power BI e desenvolvimento web, impulsionando o crescimento dos nossos clientes.  
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-4 px-4">
        <div className="container mx-auto">
         
          <PageTitle section="Contato" heading="Entre em contato">
            Preencha este formulario e nossa equipe entrará em contato em breve.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Nome" />
              <Input variant="outlined" size="lg" label="Endereço de Email" />
            </div>
            <Textarea variant="outlined" size="lg" label="Mensagem" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Eu concordo com os 
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Termos E Condições
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default AboutUS;
