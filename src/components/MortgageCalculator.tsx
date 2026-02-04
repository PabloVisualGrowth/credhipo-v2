import { useState, useMemo } from "react";
import { Calculator, Euro, Calendar, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [years, setYears] = useState(25);
  const [interestRate, setInterestRate] = useState(2.5);

  const calculation = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = years * 12;
    
    if (monthlyRate === 0) {
      return {
        monthlyPayment: loanAmount / numberOfPayments,
        totalPayment: loanAmount,
        totalInterest: 0,
      };
    }

    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
    };
  }, [loanAmount, years, interestRate]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section id="calculadora" className="py-20 lg:py-32 bg-credipo-cream-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <BlurFade inView delay={0}>
              <span className="inline-block text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Calculadora de Hipotecas
              </span>
            </BlurFade>
            <TextAnimate 
              animation="blurInUp" 
              by="word" 
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6"
              as="h2"
            >
              Calcula tu cuota mensual en segundos
            </TextAnimate>
            <BlurFade inView delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">
                Utiliza nuestra calculadora para estimar tu cuota mensual. Ajusta
                los parámetros según tus necesidades y descubre cuánto podrías
                pagar.
              </p>
            </BlurFade>

            {/* Results */}
            <BlurFade inView delay={0.3}>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-normal opacity-80">
                      Cuota Mensual
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-heading font-bold">
                      {formatCurrency(calculation.monthlyPayment)}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-normal text-muted-foreground">
                      Total a Pagar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-heading font-bold text-foreground">
                      {formatCurrency(calculation.totalPayment)}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-normal text-muted-foreground">
                      Total Intereses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-heading font-bold text-foreground">
                      {formatCurrency(calculation.totalInterest)}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.4}>
              <Button variant="cta" size="lg">
                Solicitar estudio gratuito
              </Button>
            </BlurFade>
          </div>

          {/* Calculator */}
          <BlurFade inView delay={0.2}>
            <Card className="shadow-elevated">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      Simulador de Hipoteca
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Ajusta los valores para calcular
                    </p>
                  </div>
                </div>

                {/* Loan Amount */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Euro className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">
                        Importe del préstamo
                      </span>
                    </div>
                    <span className="text-lg font-heading font-bold text-primary">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={50000}
                    max={1000000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>50.000€</span>
                    <span>1.000.000€</span>
                  </div>
                </div>

                {/* Years */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">
                        Plazo en años
                      </span>
                    </div>
                    <span className="text-lg font-heading font-bold text-primary">
                      {years} años
                    </span>
                  </div>
                  <Slider
                    value={[years]}
                    onValueChange={(value) => setYears(value[0])}
                    min={5}
                    max={40}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>5 años</span>
                    <span>40 años</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Percent className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">
                        Tipo de interés (TIN)
                      </span>
                    </div>
                    <span className="text-lg font-heading font-bold text-primary">
                      {interestRate.toFixed(2)}%
                    </span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    min={0.5}
                    max={8}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>0.5%</span>
                    <span>8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
