import type { Route } from "./+types/dashboard";

function Dashboard({
  params,
}: Route.ComponentProps) {
  return (
    <>
    <div> { params.userId }</div>
    <br/>
    <div> { params.teamId }</div>
    </>

  )
}

export default Dashboard