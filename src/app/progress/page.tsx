import { Progress } from '@/components/features/Progress';

export const metadata = {
  title: 'Project Progress | Car Wreckers Perth',
  description: 'Track the development progress of Car Wreckers Perth website',
};

export default function ProgressPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <Progress />
    </main>
  );
}