type DemoProps = {
  title: string;
};

export function DemoFunc(props: DemoProps) {
  return <div>{props.title}</div>;
}
