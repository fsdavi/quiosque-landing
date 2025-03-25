"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Menu, BarChart, Clock, DollarSign, Users, X, Zap, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const fadeInOut = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  }

  const mockupAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  // Custom hook for section animations
  function useScrollAnimation() {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: false, amount: 0.3 })

    useEffect(() => {
      if (inView) {
        controls.start("visible")
      } else {
        controls.start("hidden")
      }
    }, [controls, inView])

    return { ref, controls, inView }
  }

  // Animation sections
  const heroSection = useScrollAnimation()
  const objectiveSection = useScrollAnimation()
  const diferencialSection = useScrollAnimation()
  const funcionalidadesSection = useScrollAnimation()
  const videoSection = useScrollAnimation()
  const equipeSection = useScrollAnimation()
  const contatoSection = useScrollAnimation()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <motion.header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/quiosque.svg" alt="Quiosque Logo" width={32} height={32} className="h-8 w-auto" />
          </div>

          {/* Mobile menu button */}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#funcionalidades" className="text-sm font-medium hover:text-[hsl(237,99%,69%)]">
              Funcionalidades
            </Link>
            <Link href="#video" className="text-sm font-medium hover:text-[hsl(237,99%,69%)]">
              Vídeo
            </Link>
            <Link href="#equipe" className="text-sm font-medium hover:text-[hsl(237,99%,69%)]">
              Equipe
            </Link>
            <Button asChild size="sm" className="bg-[hsl(237,99%,69%)] hover:bg-[hsl(237,99%,60%)]">
              <Link href="#contato">Contato</Link>
            </Button>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="container md:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col gap-4">
                <Link
                  href="#funcionalidades"
                  className="text-sm font-medium hover:text-[hsl(237,99%,69%)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Funcionalidades
                </Link>
                <Link
                  href="#video"
                  className="text-sm font-medium hover:text-[hsl(237,99%,69%)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vídeo
                </Link>
                <Link
                  href="#equipe"
                  className="text-sm font-medium hover:text-[hsl(237,99%,69%)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Equipe
                </Link>
                <Button asChild size="sm" className="w-full bg-[hsl(237,99%,69%)] hover:bg-[hsl(237,99%,60%)]">
                  <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                    Contato
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[hsl(237,99%,69%)] to-[hsl(237,99%,85%)]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                ref={heroSection.ref}
                initial="hidden"
                animate={heroSection.controls}
                variants={fadeInOut}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Quiosque
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl font-medium">
                    Seu quiosque, nossa solução: simples, rápida e econômica. Quiosque!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-white text-[hsl(237,99%,69%)] hover:bg-white/90">
                    <Link href="#objetivo">
                      Saiba Mais <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                ref={heroSection.ref}
                initial="hidden"
                animate={heroSection.controls}
                variants={mockupAnimation}
              >
                <div className="relative w-full max-w-[800px] mx-auto">
                  {/* MacBook mockup */}
                  <div className="relative">
                    {/* MacBook top part (screen) */}
                    <div className="bg-[#e8e8e8] rounded-t-xl pt-4 pb-2 px-4 border-2 border-[#d1d1d1]">
                      <div className="bg-[#121212] rounded-t-lg pt-3 pb-2 px-2 border-t border-l border-r border-[#444444]">
                        <div className="flex items-center justify-start gap-1.5 mb-1 px-1">
                          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                        </div>
                        {/* Screen content - replace with your actual screenshot later */}
                        <div className="bg-white aspect-[16/10] overflow-hidden rounded-b-none">
                          <img
                            src="/QuiosqueLogin.png?height=600&width=960"
                            alt="Quiosque software interface"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* MacBook bottom part (keyboard) */}
                    <div className="bg-[#e8e8e8] h-3 rounded-b-xl border-b-2 border-l-2 border-r-2 border-[#d1d1d1] relative">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-1 bg-[#d1d1d1] rounded-full"></div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#b1b1b1] rounded-full"></div>
                    </div>

                    {/* MacBook shadow */}
                    <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/10 blur-md rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Objetivo Section */}
        <section id="objetivo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              ref={objectiveSection.ref}
              initial="hidden"
              animate={objectiveSection.controls}
              variants={fadeInOut}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[hsl(237,99%,69%)] px-3 py-1 text-sm text-white">
                  Objetivo
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Missão</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O Quiosque é uma solução definitiva para o proprietário do quiosque que procura uma maneira eficiente
                  e intuitiva de gerenciar seu quiosque sem comprometer o orçamento. Projetamos o aplicativo pensando na
                  simplicidade e acessibilidade, oferecendo a você total controle do seu negócio com alguns cliques.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-16 flex justify-center"
              ref={objectiveSection.ref}
              initial="hidden"
              animate={objectiveSection.controls}
              variants={mockupAnimation}
            >
              <div className="relative max-w-[800px] w-full">
                {/* Laptop mockup */}
                <div className="relative">
                  {/* Laptop top part */}
                  <div className="bg-gray-800 rounded-t-lg pt-2 pb-1 px-2">
                    <div className="w-2 h-2 rounded-full bg-gray-600 mx-auto"></div>
                  </div>

                  {/* Laptop screen - replace with your actual screenshot later */}
                  <div className="bg-white aspect-[16/10] overflow-hidden border-8 border-gray-800">
                    <Image
                      src="/start-gif.gif"
                      width={500}
                      height={800}
                      alt="Quiosque dashboard"
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Laptop bottom part */}
                  <div className="bg-gray-700 h-4 rounded-b-lg transform perspective-[1000px] rotateX(5deg) scale-[1.01] origin-top"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diferencial Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              ref={diferencialSection.ref}
              initial="hidden"
              animate={diferencialSection.controls}
              variants={fadeInOut}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[hsl(237,99%,69%)] px-3 py-1 text-sm text-white">
                  Diferencial
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que escolher o Quiosque?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa solução foi desenvolvida especificamente para as necessidades dos proprietários de quiosques,
                  com foco em simplicidade, eficiência e economia.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
              ref={diferencialSection.ref}
              initial="hidden"
              animate={diferencialSection.controls}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInOut}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="rounded-full bg-[hsl(237,99%,90%)] p-3">
                        <Clock className="h-6 w-6 text-[hsl(237,99%,69%)]" />
                      </div>
                      <h3 className="text-xl font-bold">Rápido</h3>
                      <p className="text-muted-foreground">
                        Economize tempo com nossa interface intuitiva e processos otimizados.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInOut}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="rounded-full bg-[hsl(237,99%,90%)] p-3">
                        <DollarSign className="h-6 w-6 text-[hsl(237,99%,69%)]" />
                      </div>
                      <h3 className="text-xl font-bold">Econômico</h3>
                      <p className="text-muted-foreground">Solução acessível que não compromete seu orçamento.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInOut}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="rounded-full bg-[hsl(237,99%,90%)] p-3">
                        <Users className="h-6 w-6 text-[hsl(237,99%,69%)]" />
                      </div>
                      <h3 className="text-xl font-bold">Simples</h3>
                      <p className="text-muted-foreground">
                        Desenvolvido pensando na facilidade de uso para todos os usuários.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Funcionalidades Section */}
        <section id="funcionalidades" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              ref={funcionalidadesSection.ref}
              initial="hidden"
              animate={funcionalidadesSection.controls}
              variants={fadeInOut}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[hsl(237,99%,69%)] px-3 py-1 text-sm text-white">
                  Funcionalidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Principais recursos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça as ferramentas que vão transformar a gestão do seu quiosque.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto max-w-6xl py-12">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <motion.div
                  className="order-2 lg:order-1"
                  ref={funcionalidadesSection.ref}
                  initial="hidden"
                  animate={funcionalidadesSection.controls}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeInOut} className="mb-8">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-col space-y-4">
                          <div className="rounded-full bg-[hsl(237,99%,90%)] p-3 w-fit">
                            <Package className="h-6 w-6 text-[hsl(237,99%,69%)]" />
                          </div>
                          <h3 className="text-xl font-bold">Gestão de Estoque</h3>
                          <p className="text-muted-foreground">
                            Controle seu inventário em tempo real, com alertas de estoque baixo e relatórios detalhados.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeInOut} className="mb-8">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-col space-y-4">
                          <div className="rounded-full bg-[hsl(237,99%,90%)] p-3 w-fit">
                            <BarChart className="h-6 w-6 text-[hsl(237,99%,69%)]" />
                          </div>
                          <h3 className="text-xl font-bold">Relatórios de Vendas</h3>
                          <p className="text-muted-foreground">
                            Visualize o desempenho do seu negócio com gráficos intuitivos e análises detalhadas.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={fadeInOut}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-col space-y-4">
                          <div className="rounded-full bg-[hsl(237,99%,90%)] p-3 w-fit">
                            <Zap className="h-6 w-6 text-[hsl(237,99%,69%)]" />
                          </div>
                          <h3 className="text-xl font-bold">Pedidos Rápidos</h3>
                          <p className="text-muted-foreground">
                            Processe pedidos de forma eficiente, reduzindo filas e melhorando a experiência do cliente.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="order-1 lg:order-2 flex justify-center"
                  ref={funcionalidadesSection.ref}
                  initial="hidden"
                  animate={funcionalidadesSection.controls}
                  variants={mockupAnimation}
                >
                  {/* Tablet and phone mockup */}
                  <div className="relative">
                    {/* Tablet mockup */}
                    <div className="bg-gray-800 rounded-2xl p-2 shadow-xl">
                      <div className="bg-white aspect-[3/4] rounded-lg overflow-hidden">
                        <img
                          src="/dash.png?height=300&width=450"
                          alt="Quiosque app on tablet"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center mt-2">
                        <div className="w-10 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Phone mockup (positioned to overlap) */}
                    <div className="absolute -right-10 bottom-10 bg-gray-800 rounded-2xl p-1 w-1/2 shadow-xl transform rotate-6">
                      <div className="bg-white aspect-[9/16] rounded-lg overflow-hidden">
                        <img
                          src="/splash-screen.png?height=396&width=222"
                          alt="Quiosque app on mobile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center mt-1">
                        <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              ref={videoSection.ref}
              initial="hidden"
              animate={videoSection.controls}
              variants={fadeInOut}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[hsl(237,99%,69%)] px-3 py-1 text-sm text-white">
                  Vídeo de Pitch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Veja o Quiosque em ação</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Assista ao nosso vídeo para entender como o Quiosque pode transformar seu negócio.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto max-w-4xl py-12"
              ref={videoSection.ref}
              initial="hidden"
              animate={videoSection.controls}
              variants={mockupAnimation}
            >
              <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Quiosque Pitch Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="equipe" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[hsl(237,99%,69%)] px-3 py-1 text-sm text-white">Equipe</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conheça nosso time</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As pessoas por trás do Quiosque que tornaram tudo isso possível.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto max-w-5xl py-12">
              <motion.h3
                className="text-2xl font-bold mb-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Desenvolvedores
              </motion.h3>
              <motion.div
                className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Developer cards with individual animations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/cadmo.jpeg?height=150&width=150"
                      alt="Cadmo Neto"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Cadmo Neto</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvedor</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/davi.jpeg?height=150&width=150"
                      alt="Davi Freire"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Davi Freire</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvedor</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/doug.jpg?height=150&width=150"
                      alt="Douglas Déda"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Douglas Déda</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvedor</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/leite.jpg?height=150&width=150"
                      alt="Gabriel Leite"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Gabriel Leite</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvedor</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/mariel.jpg?height=200&width=200"
                      alt="Marianna Ariel"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Marianna Ariel</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvedora</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/pedro.jpg?height=150&width=150"
                      alt="Pedro Sávio"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Pedro Sávio</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvedor</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/yago.jpg?height=150&width=150"
                      alt="Yago Henner"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Yago Henner</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvedor</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-8 mt-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Consultoria Técnica
              </motion.h3>
              <motion.div
                className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/debora.jpeg?height=150&width=150"
                      alt="Debora Nascimento"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Debora Nascimento</h4>
                    <p className="text-sm text-muted-foreground">Consultoria Técnica</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/edward.jpg?height=150&width=150"
                      alt="Edward Moreno"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Edward Moreno</h4>
                    <p className="text-sm text-muted-foreground">Consultoria Técnica</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/giovanny.jpeg?height=150&width=150"
                      alt="Giovanny"
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Giovanny</h4>
                    <p className="text-sm text-muted-foreground">Consultoria Técnica</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-[hsl(237,99%,69%)]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              ref={contatoSection.ref}
              initial="hidden"
              animate={contatoSection.controls}
              variants={fadeInOut}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Entre em contato</h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Quer saber mais sobre o Quiosque? Entre em contato conosco.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <p className="text-white text-lg font-medium">
                  <a href="mailto:quiosque@dcomp.ufs.br" className="hover:underline">
                    quiosque@dcomp.ufs.br
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Image src="/quiosque.svg" alt="Quiosque Logo" width={24} height={24} className="h-6 w-auto" />
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/ufslogo.jpg?height=50&width=100"
                alt="Logo UFS"
                width={100}
                height={50}
                className="h-10 w-auto"
              />
              <img
                src="/dcomplogo.png?height=50&width=100"
                alt="Logo DCOMP"
                width={100}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Quiosque. Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

