import Button from "@/components/button/button";
import InlineLink from "@/components/inline_link/inline_link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      a<Button>Hello</Button>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
      <InlineLink href="#" icon="file" iconSize={32} iconColor="yellow-500">
        Hello
      </InlineLink>
    </div>
  );
}
