type TitleType = {
  title: string;
};

export default function Title({ title }: TitleType) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
