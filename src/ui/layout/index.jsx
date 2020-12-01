export default function Layout({ children }) {
  return (
    <div>
      <header></header>
      <div className='container mx-auto'>{children}</div>
      <footer></footer>
    </div>
  );
}
