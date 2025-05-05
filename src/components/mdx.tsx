import Link from 'next/link'
import Image from 'next/image'
import { highlight } from 'sugar-high'
import React, { JSX } from 'react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { ImageProps } from 'next/image'

interface TableProps {
  data: {
    headers: string[];
    rows: string[][];
  }
}

function Table({ data }: TableProps) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))
  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

function CustomLink(props: CustomLinkProps) {
  const { href, children, ...rest } = props

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a href={href} {...rest}>{children}</a>
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>
}

interface RoundedImageProps extends ImageProps {
  alt: string;
}

function RoundedImage(props: RoundedImageProps) {
  return <Image className="rounded-lg" {...props} />
}

interface CodeProps {
  children: string;
  [key: string]: any;
}

function Code({ children, ...props }: CodeProps) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }): JSX.Element => {
    let slug = slugify(children?.toString() || '')
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
        children
      ]
    )
  }
  Heading.displayName = `Heading${level}`
  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

interface CustomMDXProps extends MDXRemoteProps {
  components?: Record<string, React.ComponentType<any>>;
}

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
