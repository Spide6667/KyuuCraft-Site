import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function DefaultPageSkeleton() {
  return (
    <div className="page-content-holder">
      <h1 className="italic">Loading Content</h1>
      <Separator />
      <div className="grid grid-cols-1 gap-4">
        <Skeleton className="h-30 fake-text-indent" />
        <Skeleton className="h-30 fake-text-full" />
        <Skeleton className="h-30 fake-text-full" />
        <Skeleton className="h-30 fake-text-full" />
        <Skeleton className="h-30 fake-text-half" />
      </div>
    </div>
  );
}