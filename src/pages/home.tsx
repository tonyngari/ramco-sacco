import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building2, Users, Wallet } from 'lucide-react';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Together for Prosperity
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Ramco Group Sacco is a regulated non-WDT Sacco established in 1985, serving the Ramco Group of Companies community.
              </p>
            </div>
            <div className="space-x-4">
              <Button>
                Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Established Legacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Operating since 1985, we've built a strong foundation of trust and reliability in serving our members.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Exclusive Membership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Open to current and former employees of Ramco Group of Companies, fostering a close-knit community.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Financial Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Offering competitive loan products and savings solutions to help members achieve their financial goals.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}