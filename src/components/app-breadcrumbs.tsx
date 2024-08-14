'use client';

// Constant
import { PATH } from '@/constant';

// Components
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import Link from 'next/link';

// Next
import { usePathname } from 'next/navigation';

// Icons
import { GoHome } from 'react-icons/go';

export default function AppBreadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => !!segment);
  const pagesPathname = pathSegments.map(
    (segment, index) =>
      '/' + [...pathSegments.slice(0, index), segment].join('/')
  );

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem startContent={<GoHome />} as={Link} href='/'>
          Home
        </BreadcrumbItem>
        {pagesPathname.map((pagePathname) => {
          const pathExist = PATH.find((path) => path.path.test(pagePathname));
          if (!pathExist) return null;
          return (
            <BreadcrumbItem
              as={Link}
              href={pathExist.href || pagePathname}
              key={pathExist.label}
            >
              {pathExist.label}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumbs>
    </>
  );
}
