import { UserButton } from '@clerk/nextjs';

export default function Example() {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      <div>Your pages content can go here.</div>
    </>
  );
}
