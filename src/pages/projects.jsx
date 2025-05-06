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

export function Projects() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Projetos
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Cada projeto representa nossa dedicação em entregar soluções tecnológicas sob medida, que combinam inovação, automação e inteligência de dados. Transformamos desafios em resultados concretos para empresas de todos os tamanhos.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          
          <div className="mt-32 pt-20 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div style={{display:"none"}} className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon  className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
               Soluções personalizadas
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Cada empresa é única — por isso, não acreditamos em soluções prontas. Desenvolvemos sistemas personalizados, alinhados ao seu modelo de negócio, garantindo flexibilidade e eficiência sob medida.
                <br />
                <br />
                Soluções personalizadas oferecem mais que eficiência: elas se tornam uma vantagem competitiva real. Ao alinhar a tecnologia às particularidades do seu negócio, é possível ganhar agilidade, reduzir custos e se destacar no mercado com processos únicos e otimizados.
              
                 </Typography>
              <Button variant="filled">Contato</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
            <img
                    alt="Card Image"
                    src="/img/ilust_projects.jpg"
                    className="h-full w-full"
                  />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-5 pb-24">
        <div className="container mx-auto">
          <PageTitle section="Projetos" heading="Conheça alguns de nossos projetos">
          </PageTitle>
         
          <div className="mt-32 pt-2 flex flex-wrap items-center">
              <div className="relatorio">
              <div className="demonstrationResume" style={{gap:'20px'}}>
                <h1 style={{fontSize:'30px',fontWeight:'bold',color:"#303030;"}}>Concessionária</h1>
                <p style={{color:"#303030;"}}>
                  Desenvolvemos este painel de controle com
                  a finalidade específica de proporcionar uma experiência aprimorada na
                    visualização dos relatórios de vendas e uma ampla gama de informações
                    operacionais vitais para uma concessionária de veículos. Nosso compromisso
                      em oferecer uma solução eficaz resultou em um painel que atende às demandas
                      e desafios únicos enfrentados pelo setor automotivo.
                </p>
              </div>
              <iframe  title="Report Section"  height="573.5" src="https://app.powerbi.com/view?r=eyJrIjoiZWUyMjQ2MzYtNDg4MC00OThiLTkwMDItYjlhMGZjYjk4N2Q5IiwidCI6ImI5ZGY4YjEzLTE2NjgtNDlkYS04NDA4LTc1NzVlMjQ2MDIwNCJ9" frameBorder={0} allowFullScreen={true}></iframe>
            </div>
          </div>


          <div className="mt-32 pt-2 flex flex-wrap items-center">
              <div className="relatorioInvertido">
              <div className="demonstrationResume" style={{gap:'20px'}}>
                <h1 style={{fontSize:'30px',fontWeight:'bold',color:"#303030;"}}>Imóbiliárias</h1>
                <p style={{color:"#303030;"}}>
              
                Este painel foi desenvolvido para oferecer uma visão completa e estratégica da carteira de imóveis e proprietários. Com análises detalhadas de disponibilidade, valores de aluguel, perfil dos donos e inadimplência de clientes por quantidade de imóveis, a solução permite acompanhar indicadores essenciais, identificar padrões de comportamento e tomar decisões mais rápidas e assertivas. Tudo em um único ambiente visual, dinâmico e fácil de interpretar.
                </p>
              </div>
              <iframe  title="Report Section"  height="450.5" src="https://app.powerbi.com/view?r=eyJrIjoiMDU3YTk0ZjctZWYwMS00OTc2LWI2NjItMDRkMDM0MzVmZjk1IiwidCI6Ijc4N2ZiZTU4LTNiYjItNGUyNi1iMTZjLWRhNjRmYmZhM2NlYSJ9" frameBorder={0} allowFullScreen={true}></iframe>
            </div>
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

export default Projects;
