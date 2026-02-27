import { Card } from "@/components/ui/card";

interface StatsCardsProps {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

export const StatsCards = ({ total, pending, approved, rejected }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Total Applications</h3>
        <p className="text-3xl font-bold text-primary">{total}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Pending</h3>
        <p className="text-3xl font-bold text-yellow-600">{pending}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Approved</h3>
        <p className="text-3xl font-bold text-green-600">{approved}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Rejected</h3>
        <p className="text-3xl font-bold text-red-600">{rejected}</p>
      </Card>
    </div>
  );
};
