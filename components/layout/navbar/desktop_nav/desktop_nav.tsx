type DesktopNavProps = {
  children?: React.ReactNode;
};

export default function DesktopNav({ children }: DesktopNavProps) {
  return <nav>{children}</nav>;
}
