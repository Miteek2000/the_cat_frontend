interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-sm italic text-[#9A7A5A]">{message}</p>
    </div>
  );
}
