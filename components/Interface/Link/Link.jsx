import Link from 'next/link';

function NextLink({ path, children, className }) {
  return (
    <Link href={path} className={className}>
      <a>{children}</a>
    </Link>
  );
}

export default NextLink;
