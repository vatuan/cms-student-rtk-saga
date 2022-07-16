interface WidgetProps {
  title: string;
  children?: any;
}
export function Widget({ title, children }: WidgetProps) {
  return (
    <div className="max-w-xs p-3 bg-white shadow-sm rounded-md border border-gray-300">
      <p className="uppercase mb-3 text-xs font-bold">{title}</p>
      <div className="">{children}</div>
    </div>
  );
}
