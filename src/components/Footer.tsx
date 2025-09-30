import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 border-t pt-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full md:w-1/2">
          <Image
            src="/stackarea_chart.png"
            alt="Weekly Stacked Area Chart of Activities"
            width={1200}
            height={720}
            className="w-full h-auto rounded-md shadow"
            priority
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/stackbar_chart.png"
            alt="Weekly Stacked Bar Chart of Activities"
            width={1200}
            height={720}
            className="w-full h-auto rounded-md shadow"
          />
        </div>
      </div>
    </footer>
  );
}


