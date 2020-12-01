import Page from '@/ui/page';

export default function Homepage() {
  return (
    <Page
      title={'Hello world and happy hacking!'}
      description={'This is the homepage for the nextjs starter kit.'}
    >
      <h1>Welcome to our awesome website powered by</h1>
      <ul>
        <li>React</li>
        <li>NextJS</li>
        <li>TailwindCSS</li>
      </ul>
    </Page>
  );
}
