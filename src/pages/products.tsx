import { ProductCard } from '@/components/product-card';
import { WelfarePolicyCard } from '@/components/welfare-policy-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Products and Services</h1>
      
      <Tabs defaultValue="loans" className="space-y-8">
        <TabsList>
          <TabsTrigger value="loans">Loan Products</TabsTrigger>
          <TabsTrigger value="savings">Savings Products</TabsTrigger>
          <TabsTrigger value="welfare">Welfare</TabsTrigger>
        </TabsList>

        <TabsContent value="loans" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="Normal Loan"
              features={[
                'Maximum 48 months repayment',
                '1% interest per month on reducing balance',
                '1% insurance charge',
                'Issued times 3 of members deposit'
              ]}
            />
            <ProductCard
              title="Top Up Loan"
              features={[
                'Maximum 48 months repayment',
                '1% interest per month on reducing balance',
                '1% insurance charge',
                '1% top up fee in first month',
                'Amount less existing normal loan'
              ]}
            />
            <ProductCard
              title="Emergency Loan"
              features={[
                'Maximum 12 months repayment',
                '1% interest per month on reducing balance',
                'Up to 200,000 KES',
                'Same day or next day processing',
                'Supporting documents required'
              ]}
            />
            <ProductCard
              title="School Fees Loan"
              features={[
                'Maximum 12 months repayment',
                '1% interest per month on reducing balance',
                '1% insurance charge',
                'Fee structure must be attached',
                'Once per year'
              ]}
            />
            <ProductCard
              title="Short Term Loan"
              features={[
                'Maximum amount 10,000 KES',
                '4 months repayment period',
                '10% interest on reducing balance',
                'Priority deduction',
                'Instant processing'
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="savings" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="Shares"
              features={[
                'Minimum 20,000 KES per member',
                'Deducted at entrance',
                'Non-withdrawable but transferrable',
                '100 KES transfer fee'
              ]}
            />
            <ProductCard
              title="Deposits"
              features={[
                'Minimum 3,500 KES monthly',
                'Non-withdrawable except at exit',
                'Acts as loan collateral',
                'Compulsory deduction'
              ]}
            />
            <ProductCard
              title="End Year Savings"
              features={[
                'Minimum 500 KES monthly',
                'Withdrawable at year end',
                'Optional savings plan',
                'Flexible contribution'
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="welfare" className="space-y-6">
          <WelfarePolicyCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}