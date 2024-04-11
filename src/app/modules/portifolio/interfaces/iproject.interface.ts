export interface IProject {
  image: string;
  detail: string;
  title: string;
  description: string;
  width: string;
  height: string;
  links: [
    {
      name: string;
      href: string;
    }
  ]
}
