import { LoaderIcon } from "@/components/icons";

export const LazyLoadIndicator = () => {
    return (
      <div className="p-2 rounded-lg flex gap-2 fixed bottom-2 right-2 border border-border">
        <p>Loading</p>
        <LoaderIcon className="w-6 h-6 z-50 text-red-500 animate-spin" />
      </div>
    );
  };
  