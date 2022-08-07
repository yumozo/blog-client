import NavMenu from './NavMenu/NavMenu'

export default function Layout(props: any) {
  return (
    <div
      className="flex flex-col
      items-center"
    >
      <NavMenu />

      <main>{props.first}</main>
    </div>
  )
}
